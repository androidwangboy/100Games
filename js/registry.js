/**
 * 100 Games Collection — Game Registry
 * Each entry: { id, title, titleZh, category, difficulty(1-3), path, emoji, description, available }
 */
const GAME_REGISTRY = [
  // ===== Platformer (5) =====
  { id: 'super-mario', title: 'Super Mario Bros', titleZh: '超级马里奥', category: 'platformer', difficulty: 3, path: 'platformer/super-mario.html', emoji: '🍄', description: '经典平台跳跃，顶砖块、踩敌人、吃蘑菇变大，闯过重重关卡拯救公主。', available: true },
  { id: 'pixel-runner', title: 'Pixel Runner', titleZh: '像素跑酷', category: 'platformer', difficulty: 2, path: 'platformer/pixel-runner.html', emoji: '🏃', description: '自动奔跑，看准时机跳跃躲避障碍，跑得越远分数越高。', available: true },
  { id: 'doodle-jump', title: 'Doodle Jump', titleZh: '弹跳球', category: 'platformer', difficulty: 2, path: 'platformer/doodle-jump.html', emoji: '🦘', description: '不断向上弹跳，踩踏平台攀升，小心别掉下去！', available: true },
  { id: 'spelunky-lite', title: 'Spelunky Lite', titleZh: '洞穴探险', category: 'platformer', difficulty: 3, path: 'platformer/spelunky-lite.html', emoji: '🕳️', description: '随机生成的地下洞穴，跳跃攀爬躲避陷阱，收集宝藏。', available: true },
  { id: 'ninja-jump', title: 'Ninja Jump', titleZh: '忍者跳跃', category: 'platformer', difficulty: 1, path: 'platformer/ninja-jump.html', emoji: '🥷', description: '左右交替攀爬高塔，躲避尖刺，看你能爬多高。', available: true },

  // ===== Arcade (15) =====
  { id: 'snake', title: 'Snake', titleZh: '贪吃蛇', category: 'arcade', difficulty: 1, path: 'arcade/snake.html', emoji: '🐍', description: '控制小蛇吃食物变长，别撞墙也别咬到自己。', available: true },
  { id: 'breakout', title: 'Breakout', titleZh: '打砖块', category: 'arcade', difficulty: 2, path: 'arcade/breakout.html', emoji: '🧱', description: '操控挡板弹球击碎所有砖块，经典街机体验。', available: true },
  { id: 'space-invaders', title: 'Space Invaders', titleZh: '太空侵略者', category: 'arcade', difficulty: 2, path: 'arcade/space-invaders.html', emoji: '👾', description: '外星军团入侵！左右移动射击，保卫地球。', available: true },
  { id: 'pong', title: 'Pong', titleZh: '乒乓球', category: 'arcade', difficulty: 1, path: 'arcade/pong.html', emoji: '🏓', description: '最经典的对战游戏，和AI来一场乒乓对决。', available: true },
  { id: 'frogger', title: 'Frogger', titleZh: '青蛙过河', category: 'arcade', difficulty: 2, path: 'arcade/frogger.html', emoji: '🐸', description: '帮助小青蛙穿过车流和河流，安全到达对岸。', available: true },
  { id: 'pacman', title: 'Pac-Man', titleZh: '吃豆人', category: 'arcade', difficulty: 3, path: 'arcade/pacman.html', emoji: '🟡', description: '在迷宫中吃掉所有豆子，躲避四只幽灵的追捕。', available: true },
  { id: 'asteroids', title: 'Asteroids', titleZh: '小行星', category: 'arcade', difficulty: 2, path: 'arcade/asteroids.html', emoji: '☄️', description: '驾驶飞船在太空中射击碎裂小行星，小心碎片。', available: true },
  { id: 'centipede', title: 'Centipede', titleZh: '蜈蚣', category: 'arcade', difficulty: 2, path: 'arcade/centipede.html', emoji: '🐛', description: '射击不断蜿蜒而下的蜈蚣，别让它们到达底部。', available: true },
  { id: 'donkey-kong', title: 'Donkey Kong', titleZh: '大金刚', category: 'arcade', difficulty: 3, path: 'arcade/donkey-kong.html', emoji: '🦍', description: '攀爬平台躲避滚桶，到达顶部救出被困的人。', available: true },
  { id: 'missile-command', title: 'Missile Command', titleZh: '导弹指挥官', category: 'arcade', difficulty: 2, path: 'arcade/missile-command.html', emoji: '🚀', description: '点击拦截来袭导弹，保护你的城市不被摧毁。', available: true },
  { id: 'dig-dug', title: 'Dig Dug', titleZh: '挖地虫', category: 'arcade', difficulty: 2, path: 'arcade/dig-dug.html', emoji: '⛏️', description: '在地下挖隧道，用气泵消灭怪物或砸石头压扁它们。', available: true },
  { id: 'qbert', title: 'Q*bert', titleZh: 'Q*bert', category: 'arcade', difficulty: 2, path: 'arcade/qbert.html', emoji: '🔶', description: '在金字塔方块上跳跃，把所有方块变成目标颜色。', available: true },
  { id: 'duck-hunt', title: 'Duck Hunt', titleZh: '打鸭子', category: 'arcade', difficulty: 1, path: 'arcade/duck-hunt.html', emoji: '🦆', description: '瞄准飞过的鸭子射击，考验你的反应和准度。', available: true },
  { id: 'tank-battle', title: 'Tank Battle', titleZh: '坦克大战', category: 'arcade', difficulty: 3, path: 'arcade/tank-battle.html', emoji: '🪖', description: '驾驶坦克消灭敌军，保护基地，支持多关卡。', available: true },
  { id: 'road-fighter', title: 'Road Fighter', titleZh: '公路赛车', category: 'arcade', difficulty: 2, path: 'arcade/road-fighter.html', emoji: '🏎️', description: '在高速公路上左右闪避车辆，坚持到终点。', available: true },

  // ===== Puzzle (15) =====
  { id: 'tetris', title: 'Tetris', titleZh: '俄罗斯方块', category: 'puzzle', difficulty: 2, path: 'puzzle/tetris.html', emoji: '🟦', description: '旋转下落的方块拼满整行消除，速度越来越快。', available: true },
  { id: '2048', title: '2048', titleZh: '2048', category: 'puzzle', difficulty: 2, path: 'puzzle/2048.html', emoji: '🔢', description: '滑动合并相同数字，目标是合成2048！', available: true },
  { id: 'minesweeper', title: 'Minesweeper', titleZh: '扫雷', category: 'puzzle', difficulty: 2, path: 'puzzle/minesweeper.html', emoji: '💣', description: '根据数字提示标记所有地雷，别踩到雷。', available: true },
  { id: 'sokoban', title: 'Sokoban', titleZh: '推箱子', category: 'puzzle', difficulty: 2, path: 'puzzle/sokoban.html', emoji: '📦', description: '把箱子推到指定位置，简单规则无限烧脑。', available: true },
  { id: '15-puzzle', title: '15 Puzzle', titleZh: '数字华容道', category: 'puzzle', difficulty: 1, path: 'puzzle/15-puzzle.html', emoji: '🔲', description: '滑动数字方块，把它们按顺序排列好。', available: true },
  { id: 'match3', title: 'Match-3', titleZh: '三消', category: 'puzzle', difficulty: 2, path: 'puzzle/match3.html', emoji: '💎', description: '交换相邻宝石，三个以上同色即可消除得分。', available: true },
  { id: 'lights-out', title: 'Lights Out', titleZh: '关灯游戏', category: 'puzzle', difficulty: 1, path: 'puzzle/lights-out.html', emoji: '💡', description: '点击格子会切换周围灯的开关，目标是全部关闭。', available: true },
  { id: 'nonogram', title: 'Nonogram', titleZh: '数织', category: 'puzzle', difficulty: 2, path: 'puzzle/nonogram.html', emoji: '🖼️', description: '根据行列数字提示填涂格子，揭示隐藏图案。', available: true },
  { id: 'sudoku', title: 'Sudoku', titleZh: '数独', category: 'puzzle', difficulty: 2, path: 'puzzle/sudoku.html', emoji: '9️⃣', description: '在9x9网格中填入1-9，每行每列每宫不重复。', available: true },
  { id: 'maze', title: 'Maze', titleZh: '迷宫', category: 'puzzle', difficulty: 2, path: 'puzzle/maze.html', emoji: '🌀', description: '在随机生成的迷宫中找到从入口到出口的路。', available: true },
  { id: 'hanoi', title: 'Tower of Hanoi', titleZh: '汉诺塔', category: 'puzzle', difficulty: 1, path: 'puzzle/hanoi.html', emoji: '🗼', description: '把圆盘从A柱移到C柱，大盘不能压在小盘上。', available: true },
  { id: 'connect4', title: 'Connect Four', titleZh: '四子棋', category: 'puzzle', difficulty: 2, path: 'puzzle/connect4.html', emoji: '🔴', description: '和AI轮流落子，先连成四子者获胜。', available: true },
  { id: 'pipe-dream', title: 'Pipe Dream', titleZh: '管道工', category: 'puzzle', difficulty: 2, path: 'puzzle/pipe-dream.html', emoji: '🔧', description: '在水流到达前铺设管道，连接起点和终点。', available: true },
  { id: 'jigsaw', title: 'Jigsaw', titleZh: '拼图', category: 'puzzle', difficulty: 2, path: 'puzzle/jigsaw.html', emoji: '🧩', description: '把打乱的图片碎片拖拽拼回完整图案。', available: true },
  { id: 'flood-fill', title: 'Flood Fill', titleZh: '颜色填充', category: 'puzzle', difficulty: 1, path: 'puzzle/flood-fill.html', emoji: '🎨', description: '从左上角开始变换颜色，有限步数内填满整个棋盘。', available: true },

  // ===== Card (10) =====
  { id: 'klondike', title: 'Klondike Solitaire', titleZh: '纸牌接龙', category: 'card', difficulty: 3, path: 'card/klondike.html', emoji: '🃏', description: '最经典的纸牌游戏，按花色顺序把所有牌移到基础堆。', available: true },
  { id: 'freecell', title: 'FreeCell', titleZh: '空当接龙', category: 'card', difficulty: 3, path: 'card/freecell.html', emoji: '🎴', description: '利用四个空位中转，把所有牌按顺序归位。', available: true },
  { id: 'spider', title: 'Spider Solitaire', titleZh: '蜘蛛纸牌', category: 'card', difficulty: 3, path: 'card/spider.html', emoji: '🕷️', description: '同花色从K到A排齐即可消除，清空所有牌获胜。', available: true },
  { id: 'blackjack', title: 'Blackjack', titleZh: '21点', category: 'card', difficulty: 2, path: 'card/blackjack.html', emoji: '🂡', description: '和庄家比点数，接近21但不爆牌就赢了。', available: true },
  { id: 'video-poker', title: 'Video Poker', titleZh: '视频扑克', category: 'card', difficulty: 2, path: 'card/video-poker.html', emoji: '🎰', description: '发五张牌，选择保留哪些，凑出最大牌型。', available: true },
  { id: 'war', title: 'War', titleZh: '战争', category: 'card', difficulty: 1, path: 'card/war.html', emoji: '⚔️', description: '比大小！翻开牌比点数，赢得所有牌获胜。', available: true },
  { id: 'crazy-eights', title: 'Crazy Eights', titleZh: '疯狂八', category: 'card', difficulty: 2, path: 'card/crazy-eights.html', emoji: '8️⃣', description: '出与上一张同花色或同点数的牌，8是万能牌。', available: true },
  { id: 'memory', title: 'Memory Match', titleZh: '翻牌配对', category: 'card', difficulty: 1, path: 'card/memory.html', emoji: '🧠', description: '翻开两张相同的牌即可消除，考验你的记忆力。', available: true },
  { id: 'pyramid', title: 'Pyramid', titleZh: '金字塔', category: 'card', difficulty: 2, path: 'card/pyramid.html', emoji: '🔺', description: '找出相加为13的两张牌消除，清空金字塔。', available: true },
  { id: 'golf-card', title: 'Golf (Card)', titleZh: '高尔夫纸牌', category: 'card', difficulty: 2, path: 'card/golf-card.html', emoji: '⛳', description: '翻开暗牌，用最小点数的牌替换，九洞后比总分。', available: true },

  // ===== Action (12) =====
  { id: 'flappy-bird', title: 'Flappy Bird', titleZh: '像素鸟', category: 'action', difficulty: 1, path: 'action/flappy-bird.html', emoji: '🐦', description: '点击让小鸟飞，穿过管道间隙，一碰就死。', available: true },
  { id: 'fruit-ninja', title: 'Fruit Ninja', titleZh: '水果忍者', category: 'action', difficulty: 2, path: 'action/fruit-ninja.html', emoji: '🍉', description: '滑动切割飞起的水果，别切到炸弹！', available: true },
  { id: 'whack-a-mole', title: 'Whack-a-Mole', titleZh: '打地鼠', category: 'action', difficulty: 1, path: 'action/whack-a-mole.html', emoji: '🔨', description: '地鼠冒头就敲它下去，速度越来越快。', available: true },
  { id: 'reaction-timer', title: 'Reaction Timer', titleZh: '反应测试', category: 'action', difficulty: 1, path: 'action/reaction-timer.html', emoji: '⚡', description: '屏幕变绿瞬间点击，测试你的反应速度。', available: true },
  { id: 'typing-speed', title: 'Typing Speed', titleZh: '打字速度', category: 'action', difficulty: 2, path: 'action/typing-speed.html', emoji: '⌨️', description: '快速打出显示的单词，测试你的打字速度。', available: true },
  { id: 'color-match', title: 'Color Match', titleZh: '颜色匹配', category: 'action', difficulty: 1, path: 'action/color-match.html', emoji: '🌈', description: '文字颜色和显示颜色是否一致？快速判断！', available: true },
  { id: 'simon-says', title: 'Simon Says', titleZh: '西蒙记忆', category: 'action', difficulty: 1, path: 'action/simon-says.html', emoji: '🎵', description: '记住颜色闪烁顺序并复现，越来越长。', available: true },
  { id: 'rhythm-tap', title: 'Rhythm Tap', titleZh: '节奏点击', category: 'action', difficulty: 2, path: 'action/rhythm-tap.html', emoji: '🥁', description: '跟着节拍在正确时机点击，保持连击。', available: true },
  { id: 'dodge', title: 'Dodge', titleZh: '躲避弹幕', category: 'action', difficulty: 1, path: 'action/dodge.html', emoji: '💫', description: '移动光点躲避从四面八方飞来的弹幕。', available: true },
  { id: 'helicopter', title: 'Helicopter', titleZh: '直升机', category: 'action', difficulty: 1, path: 'action/helicopter.html', emoji: '🚁', description: '按住上升松开下降，穿过洞穴通道。', available: true },
  { id: 'geometry-dash', title: 'Geometry Dash Lite', titleZh: '几何冲刺', category: 'action', difficulty: 2, path: 'action/geometry-dash.html', emoji: '🔷', description: '跟随节奏跳跃躲避尖刺和障碍。', available: true },
  { id: 'stack-tower', title: 'Stack Tower', titleZh: '堆塔', category: 'action', difficulty: 1, path: 'action/stack-tower.html', emoji: '🏗️', description: '在正确时机点击放置方块，堆得越高越好。', available: true },

  // ===== Board (10) =====
  { id: 'chess', title: 'Chess', titleZh: '国际象棋', category: 'board', difficulty: 3, path: 'board/chess.html', emoji: '♟️', description: '和AI对弈国际象棋，将死对方的王。', available: true },
  { id: 'checkers', title: 'Checkers', titleZh: '跳棋', category: 'board', difficulty: 2, path: 'board/checkers.html', emoji: '⚫', description: '跳过对方棋子将其吃掉，到达底线升变为王。', available: true },
  { id: 'reversi', title: 'Reversi', titleZh: '黑白棋', category: 'board', difficulty: 2, path: 'board/reversi.html', emoji: '⚪', description: '夹住对方棋子翻转颜色，最终棋子多者胜。', available: true },
  { id: 'gomoku', title: 'Gomoku', titleZh: '五子棋', category: 'board', difficulty: 2, path: 'board/gomoku.html', emoji: '⚫', description: '轮流落子，先连成五子者获胜。', available: true },
  { id: 'battleship', title: 'Battleship', titleZh: '战舰', category: 'board', difficulty: 2, path: 'board/battleship.html', emoji: '🚢', description: '猜测对方舰队位置并击沉所有战舰。', available: true },
  { id: 'mastermind', title: 'Mastermind', titleZh: '珠玑妙算', category: 'board', difficulty: 1, path: 'board/mastermind.html', emoji: '🔮', description: '根据反馈猜测隐藏的颜色密码组合。', available: true },
  { id: 'mancala', title: 'Mancala', titleZh: '播棋', category: 'board', difficulty: 2, path: 'board/mancala.html', emoji: '🪨', description: '轮流播撒石子，收集最多石子者获胜。', available: true },
  { id: 'go-9x9', title: 'Go 9x9', titleZh: '围棋 9×9', category: 'board', difficulty: 3, path: 'board/go-9x9.html', emoji: '⬛', description: '在9路棋盘上围地，占地多者胜。', available: true },
  { id: 'backgammon', title: 'Backgammon', titleZh: '双陆棋', category: 'board', difficulty: 2, path: 'board/backgammon.html', emoji: '🎲', description: '掷骰子移动棋子，先把所有棋子移出棋盘。', available: true },
  { id: 'ludo', title: 'Ludo', titleZh: '飞行棋', category: 'board', difficulty: 2, path: 'board/ludo.html', emoji: '✈️', description: '掷骰子让四架飞机全部到达终点。', available: true },

  // ===== Word (8) =====
  { id: 'hangman', title: 'Hangman', titleZh: '猜词', category: 'word', difficulty: 1, path: 'word/hangman.html', emoji: '🪢', description: '逐字母猜测隐藏单词，别把小人吊完。', available: true },
  { id: 'wordle', title: 'Wordle', titleZh: '猜单词', category: 'word', difficulty: 2, path: 'word/wordle.html', emoji: '📝', description: '六次机会猜出五字母单词，颜色提示对错。', available: true },
  { id: 'anagram', title: 'Anagram', titleZh: '字母重排', category: 'word', difficulty: 1, path: 'word/anagram.html', emoji: '🔤', description: '把打乱的字母重新排列成正确的单词。', available: true },
  { id: 'word-search', title: 'Word Search', titleZh: '单词搜索', category: 'word', difficulty: 2, path: 'word/word-search.html', emoji: '🔍', description: '在字母网格中找出所有隐藏的单词。', available: true },
  { id: 'crossword', title: 'Crossword', titleZh: '填字游戏', category: 'word', difficulty: 2, path: 'word/crossword.html', emoji: '✏️', description: '根据提示在交叉网格中填入正确单词。', available: true },
  { id: 'trivia', title: 'Trivia Quiz', titleZh: '知识问答', category: 'word', difficulty: 2, path: 'word/trivia.html', emoji: '❓', description: '回答各类知识问题，挑战你的知识储备。', available: true },
  { id: 'speed-words', title: 'Speed Words', titleZh: '拼字竞速', category: 'word', difficulty: 1, path: 'word/speed-words.html', emoji: '💨', description: '限时内用给定字母拼出尽可能多的单词。', available: true },
  { id: 'boggle', title: 'Boggle', titleZh: '字母网格', category: 'word', difficulty: 2, path: 'word/boggle.html', emoji: '🔡', description: '在4x4字母网格中找出相邻字母组成的单词。', available: true },

  // ===== Casino (8) =====
  { id: 'craps', title: 'Craps', titleZh: '骰宝', category: 'casino', difficulty: 2, path: 'casino/craps.html', emoji: '🎲', description: '掷骰子赌大小，7和11赢，2、3、12输。', available: true },
  { id: 'roulette', title: 'Roulette', titleZh: '轮盘', category: 'casino', difficulty: 2, path: 'casino/roulette.html', emoji: '🎡', description: '下注数字或颜色，转动轮盘看运气。', available: true },
  { id: 'slot-machine', title: 'Slot Machine', titleZh: '老虎机', category: 'casino', difficulty: 1, path: 'casino/slot-machine.html', emoji: '🍒', description: '拉下拉杆，三个相同图案就中大奖。', available: true },
  { id: 'yahtzee', title: 'Yahtzee', titleZh: '快艇骰子', category: 'casino', difficulty: 2, path: 'casino/yahtzee.html', emoji: '🛥️', description: '掷五个骰子凑出最佳组合，13轮后比总分。', available: true },
  { id: 'dice-poker', title: 'Dice Poker', titleZh: '骰子扑克', category: 'casino', difficulty: 1, path: 'casino/dice-poker.html', emoji: '🎯', description: '掷骰子凑出扑克牌型，可重掷一次。', available: true },
  { id: 'coin-streak', title: 'Coin Streak', titleZh: '抛硬币连击', category: 'casino', difficulty: 1, path: 'casino/coin-streak.html', emoji: '🪙', description: '猜正反面，连对越多奖金越高，随时可以收手。', available: true },
  { id: 'higher-lower', title: 'Higher or Lower', titleZh: '高低猜', category: 'casino', difficulty: 1, path: 'casino/higher-lower.html', emoji: '📈', description: '猜下一张牌比当前高还是低，连续猜对赢大奖。', available: true },
  { id: 'keno', title: 'Keno', titleZh: '基诺', category: 'casino', difficulty: 1, path: 'casino/keno.html', emoji: '🎱', description: '从80个数字中选号，开奖后看命中几个。', available: true },

  // ===== Physics (10) =====
  { id: 'angry-birds', title: 'Angry Birds Lite', titleZh: '弹弓小鸟', category: 'physics', difficulty: 3, path: 'physics/angry-birds.html', emoji: '🐤', description: '拉弹弓发射小鸟，利用物理轨迹砸毁猪的堡垒。', available: true },
  { id: 'cannon', title: 'Cannon', titleZh: '炮弹轨迹', category: 'physics', difficulty: 2, path: 'physics/cannon.html', emoji: '💥', description: '调整角度和力度发射炮弹，击中目标。', available: true },
  { id: 'stacking', title: 'Stacking', titleZh: '叠叠乐', category: 'physics', difficulty: 1, path: 'physics/stacking.html', emoji: '📚', description: '在移动方块对齐时点击放置，堆得越高越好。', available: true },
  { id: 'balance-ball', title: 'Balance Ball', titleZh: '平衡球', category: 'physics', difficulty: 2, path: 'physics/balance-ball.html', emoji: '⚖️', description: '倾斜平台让球滚到终点，别掉进洞里。', available: true },
  { id: 'pinball', title: 'Pinball', titleZh: '弹球台', category: 'physics', difficulty: 3, path: 'physics/pinball.html', emoji: '🕹️', description: '控制挡板弹球撞击得分器，别让球掉下去。', available: true },
  { id: 'billiards', title: 'Billiards', titleZh: '台球', category: 'physics', difficulty: 3, path: 'physics/billiards.html', emoji: '🎱', description: '瞄准击球，利用碰撞把球打进袋口。', available: true },
  { id: 'mini-golf', title: 'Mini Golf', titleZh: '迷你高尔夫', category: 'physics', difficulty: 2, path: 'physics/mini-golf.html', emoji: '🏌️', description: '在障碍球场上推杆入洞，用最少杆数完成。', available: true },
  { id: 'basketball', title: 'Basketball', titleZh: '投篮', category: 'physics', difficulty: 1, path: 'physics/basketball.html', emoji: '🏀', description: '调整角度和力度把球投进篮筐。', available: true },
  { id: 'darts', title: 'Darts', titleZh: '飞镖', category: 'physics', difficulty: 1, path: 'physics/darts.html', emoji: '🎯', description: '瞄准靶心投掷飞镖，争取最高分。', available: true },
  { id: 'bowling', title: 'Bowling', titleZh: '保龄球', category: 'physics', difficulty: 2, path: 'physics/bowling.html', emoji: '🎳', description: '控制方向和旋转，打出全中！', available: true },

  // ===== Retro (7) =====
  { id: 'conway-life', title: "Conway's Game of Life", titleZh: '生命游戏', category: 'retro', difficulty: 1, path: 'retro/conway-life.html', emoji: '🦠', description: '设定初始细胞，观察生命自动演化繁衍或消亡。', available: true },
  { id: 'lunar-lander', title: 'Lunar Lander', titleZh: '月球着陆', category: 'retro', difficulty: 2, path: 'retro/lunar-lander.html', emoji: '🌙', description: '控制推力让飞船平稳着陆，别撞毁了。', available: true },
  { id: 'bomberman', title: 'Bomberman 1P', titleZh: '炸弹人', category: 'retro', difficulty: 3, path: 'retro/bomberman.html', emoji: '💣', description: '放炸弹炸开墙壁和敌人，找到出口通关。', available: true },
  { id: 'elevator-action', title: 'Elevator Action', titleZh: '电梯行动', category: 'retro', difficulty: 2, path: 'retro/elevator-action.html', emoji: '🛗', description: '乘坐电梯在大楼中穿梭，收集情报到达底层。', available: true },
  { id: 'spy-hunter', title: 'Spy Hunter', titleZh: '间谍猎人', category: 'retro', difficulty: 2, path: 'retro/spy-hunter.html', emoji: '🕵️', description: '驾驶间谍车在公路上射击敌人、躲避障碍。', available: true },
  { id: 'snake-ai', title: 'Snake AI Watch', titleZh: '贪吃虫 AI', category: 'retro', difficulty: 2, path: 'retro/snake-ai.html', emoji: '🤖', description: '观看AI用寻路算法自动玩贪吃蛇。', available: true },
  { id: 'tetris-vs-ai', title: 'Tetris vs AI', titleZh: '俄罗斯方块对战', category: 'retro', difficulty: 3, path: 'retro/tetris-vs-ai.html', emoji: '🆚', description: '和AI同时玩俄罗斯方块，消行给对方加垃圾行。', available: true },
];

// Category metadata
const CATEGORIES = [
  { id: 'all', name: '全部', color: 'var(--accent)' },
  { id: 'platformer', name: '平台', color: 'var(--cat-platformer)' },
  { id: 'arcade', name: '街机', color: 'var(--cat-arcade)' },
  { id: 'puzzle', name: '益智', color: 'var(--cat-puzzle)' },
  { id: 'card', name: '纸牌', color: 'var(--cat-card)' },
  { id: 'action', name: '动作', color: 'var(--cat-action)' },
  { id: 'board', name: '棋类', color: 'var(--cat-board)' },
  { id: 'word', name: '文字', color: 'var(--cat-word)' },
  { id: 'casino', name: '休闲', color: 'var(--cat-casino)' },
  { id: 'physics', name: '物理', color: 'var(--cat-physics)' },
  { id: 'retro', name: '复古', color: 'var(--cat-retro)' },
];
