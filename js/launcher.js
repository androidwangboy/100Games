/**
 * 100 Games Collection — Launcher Logic
 * Handles: menu rendering, category filter, search, keyboard navigation, iframe routing
 */
(function () {
  'use strict';

  // --- State ---
  let currentCategory = 'all';
  let searchQuery = '';
  let focusIndex = 0;
  let visibleGames = [];
  let detailGame = null; // game shown in detail overlay
  let gameActive = false; // whether iframe is showing

  // --- DOM refs (assigned after DOMContentLoaded) ---
  let gridEl, searchInput, categoryBar, detailOverlay, gameFrameContainer, gameFrame;
  let detailEmoji, detailTitle, detailEnTitle, detailDesc, detailMeta, btnPlay, btnBack;
  let frameGameName, headerStats;

  // --- Init ---
  document.addEventListener('DOMContentLoaded', () => {
    gridEl = document.getElementById('game-grid');
    searchInput = document.getElementById('search-input');
    categoryBar = document.getElementById('category-bar');
    detailOverlay = document.getElementById('detail-overlay');
    gameFrameContainer = document.getElementById('game-frame-container');
    gameFrame = document.getElementById('game-frame');
    detailEmoji = document.getElementById('detail-emoji');
    detailTitle = document.getElementById('detail-title');
    detailEnTitle = document.getElementById('detail-en-title');
    detailDesc = document.getElementById('detail-desc');
    detailMeta = document.getElementById('detail-meta');
    btnPlay = document.getElementById('btn-play');
    btnBack = document.getElementById('btn-back');
    frameGameName = document.getElementById('frame-game-name');
    headerStats = document.getElementById('header-stats');

    renderCategories();
    applyFilter();
    updateStats();

    // Events
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      applyFilter();
    });

    btnPlay.addEventListener('click', () => {
      if (detailGame) launchGame(detailGame);
    });

    btnBack.addEventListener('click', closeDetail);

    document.getElementById('btn-exit').addEventListener('click', exitGame);

    // Close detail on overlay background click
    detailOverlay.addEventListener('click', (e) => {
      if (e.target === detailOverlay) closeDetail();
    });

    // Listen for game exit messages
    window.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'EXIT_GAME') {
        exitGame();
      }
    });

    // Global keyboard handler
    document.addEventListener('keydown', handleKeydown);
  });

  // --- Category tabs ---
  function renderCategories() {
    categoryBar.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const count = cat.id === 'all'
        ? GAME_REGISTRY.length
        : GAME_REGISTRY.filter(g => g.category === cat.id).length;
      const tab = document.createElement('button');
      tab.className = 'cat-tab' + (cat.id === currentCategory ? ' active' : '');
      tab.innerHTML = `${cat.name}<span class="count">${count}</span>`;
      tab.dataset.cat = cat.id;
      tab.addEventListener('click', () => {
        currentCategory = cat.id;
        renderCategories();
        applyFilter();
      });
      categoryBar.appendChild(tab);
    });
  }

  // --- Filter & render grid ---
  function applyFilter() {
    visibleGames = GAME_REGISTRY.filter(g => {
      const catMatch = currentCategory === 'all' || g.category === currentCategory;
      const searchMatch = !searchQuery ||
        g.title.toLowerCase().includes(searchQuery) ||
        g.titleZh.includes(searchQuery) ||
        g.id.includes(searchQuery);
      return catMatch && searchMatch;
    });

    focusIndex = Math.min(focusIndex, Math.max(0, visibleGames.length - 1));
    renderGrid();
  }

  function renderGrid() {
    if (visibleGames.length === 0) {
      gridEl.innerHTML = `<div class="empty-state"><div class="icon">🔍</div><p>没有找到匹配的游戏</p></div>`;
      return;
    }

    gridEl.innerHTML = visibleGames.map((g, i) => {
      const catColor = CATEGORIES.find(c => c.id === g.category)?.color || 'var(--accent)';
      const locked = !g.available;
      const stars = Array.from({ length: 3 }, (_, s) =>
        `<span class="star${s < g.difficulty ? ' filled' : ''}"></span>`
      ).join('');
      const badge = g.available
        ? '<span class="badge badge-new">可玩</span>'
        : '<span class="badge badge-lock">🔒</span>';

      return `<div class="game-card${locked ? ' locked' : ''}${i === focusIndex ? ' focused' : ''}"
                   data-index="${i}"
                   style="--card-cat-color: ${catColor}">
        ${badge}
        <div class="emoji">${g.emoji}</div>
        <div class="title">${g.titleZh}</div>
        <div class="subtitle">${g.title}</div>
        <div class="difficulty">${stars}</div>
      </div>`;
    }).join('');

    // Click handlers
    gridEl.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.dataset.index);
        focusIndex = idx;
        const game = visibleGames[idx];
        if (game.available) {
          showDetail(game);
        }
      });
      card.addEventListener('mouseenter', () => {
        const idx = parseInt(card.dataset.index);
        focusIndex = idx;
        updateFocusVisual();
      });
    });
  }

  function updateFocusVisual() {
    const cards = gridEl.querySelectorAll('.game-card');
    cards.forEach((card, i) => {
      card.classList.toggle('focused', i === focusIndex);
    });
    if (cards[focusIndex]) {
      cards[focusIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function updateStats() {
    const available = GAME_REGISTRY.filter(g => g.available).length;
    headerStats.textContent = `${available} / ${GAME_REGISTRY.length} 款游戏可玩`;
  }

  // --- Detail overlay ---
  function showDetail(game) {
    detailGame = game;
    detailEmoji.textContent = game.emoji;
    detailTitle.textContent = game.titleZh;
    detailEnTitle.textContent = game.title;
    detailDesc.textContent = game.description;
    const diffLabel = ['', '简单', '中等', '困难'][game.difficulty];
    const catName = CATEGORIES.find(c => c.id === game.category)?.name || game.category;
    detailMeta.innerHTML = `<span>分类：${catName}</span><span>难度：${diffLabel}</span>`;
    detailOverlay.classList.add('visible');
  }

  function closeDetail() {
    detailOverlay.classList.remove('visible');
    detailGame = null;
  }

  // --- Game launch / exit ---
  function launchGame(game) {
    closeDetail();
    gameActive = true;
    frameGameName.textContent = `${game.emoji} ${game.titleZh}`;
    gameFrame.src = `games/${game.path}`;
    gameFrameContainer.classList.add('visible');
  }

  function exitGame() {
    gameActive = false;
    gameFrame.src = 'about:blank';
    gameFrameContainer.classList.remove('visible');
  }

  // --- Keyboard navigation ---
  function handleKeydown(e) {
    // In-game: Escape exits
    if (gameActive) {
      if (e.code === 'Escape') {
        e.preventDefault();
        exitGame();
      }
      return;
    }

    // Detail overlay open
    if (detailOverlay.classList.contains('visible')) {
      if (e.code === 'Escape') {
        e.preventDefault();
        closeDetail();
      } else if (e.code === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        if (detailGame) launchGame(detailGame);
      }
      return;
    }

    // Search focused — let typing work, but handle Escape and Enter
    if (document.activeElement === searchInput) {
      if (e.code === 'Escape') {
        searchInput.blur();
        searchInput.value = '';
        searchQuery = '';
        applyFilter();
        e.preventDefault();
      } else if (e.code === 'Enter') {
        searchInput.blur();
        e.preventDefault();
      } else if (e.code === 'ArrowDown') {
        searchInput.blur();
        e.preventDefault();
      }
      return;
    }

    // Grid navigation
    const cols = getColumnCount();
    switch (e.code) {
      case 'ArrowRight':
        e.preventDefault();
        focusIndex = Math.min(focusIndex + 1, visibleGames.length - 1);
        updateFocusVisual();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        focusIndex = Math.max(focusIndex - 1, 0);
        updateFocusVisual();
        break;
      case 'ArrowDown':
        e.preventDefault();
        focusIndex = Math.min(focusIndex + cols, visibleGames.length - 1);
        updateFocusVisual();
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusIndex = Math.max(focusIndex - cols, 0);
        updateFocusVisual();
        break;
      case 'Enter':
      case 'Space':
        e.preventDefault();
        if (visibleGames[focusIndex]) {
          const game = visibleGames[focusIndex];
          if (game.available) showDetail(game);
        }
        break;
      case 'Slash':
        e.preventDefault();
        searchInput.focus();
        break;
      case 'Tab':
        e.preventDefault();
        cycleCategory(e.shiftKey ? -1 : 1);
        break;
    }
  }

  function getColumnCount() {
    if (!gridEl) return 5;
    const style = getComputedStyle(gridEl);
    const cols = style.gridTemplateColumns.split(' ').length;
    return cols || 5;
  }

  function cycleCategory(dir) {
    const idx = CATEGORIES.findIndex(c => c.id === currentCategory);
    const next = (idx + dir + CATEGORIES.length) % CATEGORIES.length;
    currentCategory = CATEGORIES[next].id;
    renderCategories();
    applyFilter();
  }
})();
