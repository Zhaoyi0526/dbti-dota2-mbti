import type { Question } from "@/types/dbti";

export const questions: Question[] = [
  {
    id: 1,
    text: "对线期你玩 1 号位核心，5 号位酱油连续拉野失误导致你漏了两波塔兵，此时他试图顺手补掉一个空血远程兵，你通常会？",
    options: [
      { text: "A. 怒火中烧，凭攻击力优势强行补掉，高频点他信号埋怨，决不让出一滴经济。", scores: { Instinctive: 2, Vocal: 1 } },
      { text: "B. 默默走开去刷旁边刚刷新的小野，把这波塔线暂时让给他补点等级和草鞋钱。", scores: { Altruistic: 2, Calculated: 1 } },
      { text: "C. 瞬间脑子嗡的一声，直接站在原地不动开始疯狂发「高高手」轮盘，对线期提前宣告破防。", scores: { Resigned: 2, Silent: 1 } },
    ],
  },
  {
    id: 2,
    text: "20 分钟你玩劣势路无压力发育的 3 号位，己方 1 号位线上大崩无处打钱，弱弱地走到你正刷的「安全远古野区」发呆。你过往习惯的操作是？",
    options: [
      { text: "A. 用伤害技能迅速把远古收掉，甚至打字让他滚去危险线带线，核心大崩不是我的锅。", scores: { Egoistic: 2, Tenacious: 1 } },
      { text: "B. 主动把这片远古让给他，自己带上 4 号位直接开雾去对面野区找饭吃，强行置之死地而后生。", scores: { Altruistic: 2, Instinctive: 1 } },
      { text: "C. 假装没看见，他刷他的，你刷你的，各凭手速和补刀技能把野怪吃光。", scores: { Calculated: 2, Egoistic: 1 } },
    ],
  },
  {
    id: 3,
    text: "15 分钟危险期，你作为核心在收一波深线。5 号位为了保你发育，主动站在你身后的高台盲区用肉身帮你站岗防 Gank。结果对方突然开雾，辅助吃满伤害帮你拖延了逃生时间，你通常的心理是？",
    options: [
      { text: "A. 极度理智的战术交换。工具人保核心是天经地义的，我的发育节奏绝不能断，他死得其所。", scores: { Calculated: 2, Egoistic: 1 } },
      { text: "B. 兄弟谢了！你的牺牲是值得的，老子这把刷出来必定 Carry 你，带你把对面骨灰都扬了。", scores: { Tenacious: 2, Instinctive: 1 } },
    ],
  },
  {
    id: 4,
    text: "击杀肉山后掉落了肉山盾、不朽奶酪。你玩的是 2 号位中单，此时 1 号位核心正急匆匆赶来。在以往的直觉下，你会？",
    options: [
      { text: "A. 凭肌肉记忆直接一脚踩上去把盾和奶酪抢到自己身上，坚信这局只有自己的命比谁都值钱。", scores: { Egoistic: 2, Instinctive: 1 } },
      { text: "B. 站在旁边高频打信号，甚至退后两步把位置让出来，让给更需要容错率的大核心去吃。", scores: { Altruistic: 2, Tenacious: 1 } },
    ],
  },
  {
    id: 5,
    text: "对方五人齐推己方中路二塔。你在下路带线，正面 4 打 5 战况惨烈，队友疯狂点你的 TP 技能让你回防。在以往类似的战局里，你更常发生的行为是？",
    options: [
      { text: "A. 坚决不回，坚信「围魏救赵」。疯狂点对方一塔，老子一定要跟对方换建筑换经济。", scores: { Calculated: 2, Egoistic: 1 } },
      { text: "B. 立刻找安全位置 TP 落地，哪怕正面冲进去接盘局势，也绝对不能看着队友死在面前。", scores: { Altruistic: 2, Instinctive: 1 } },
    ],
  },
  {
    id: 6,
    text: "50 分钟大后期僵局。全地图真眼所剩无几，5 号位酱油为了在关键河道插眼，必须孤身一人冒险走进全黑的敌方野区。作为身上已经六神装且正准备刷远古的核心，你过往的本能反应通常是？",
    options: [
      { text: "A. 放弃眼前的远古，默默开雾或者肉身走在他前面帮他反蹲，大后期酱油一死这把直接走远。", scores: { Tenacious: 2, Altruistic: 2 } },
      { text: "B. 按照原计划刷我的远古，让他自己走位小心点，只要六神装核心不死就永远还能打。", scores: { Egoistic: 2, Calculated: 1 } },
    ],
  },
  {
    id: 7,
    text: "小地图上敌方 5 人整整 1 分钟没有露头。此时野区视野全黑，你作为 1 号位正走向一片平时极度危险的野区，在以往的对局习惯中，你会？",
    options: [
      { text: "A. 局势判断对方大概率在蹲人或者控肉山，果断转头缩回高地或者躲在二塔树林里安全反跑。", scores: { Calculated: 2, Silent: 1 } },
      { text: "B. 赌一把对方不在！坚信富贵险中求，硬着头皮把这波伤害极高的远古野迅速刷完。", scores: { Instinctive: 2, Resigned: 1 } },
    ],
  },
  {
    id: 8,
    text: "你玩带先手的 3 号位（如斧王），看到敌方一个落单的核心在己方前哨附近晃悠，但你们没有前哨高台视野。在过往的对局中，你往往会？",
    options: [
      { text: "A. 毫不犹豫直接跳吼先手！坚信队友一定能跟上，不管三七二十一打了再说。", scores: { Instinctive: 2, Vocal: 1 } },
      { text: "B. 疯狂发信号等酱油先插个高台眼，确认后面没有敌方大核心蹲守才决定上不上。", scores: { Calculated: 2, Silent: 1 } },
    ],
  },
  {
    id: 9,
    text: "在任何你拿手的位置和英雄上（如公式核心或团战前排），你过往的实际出装风格更偏向于？",
    options: [
      { text: "A. 绝对的公式和数据流。严格参考高分天梯榜，玩敌法师必定狂战分身，稳健至上绝不以身试法。", scores: { Calculated: 2, Tenacious: 1 } },
      { text: "B. 极致的对局艺术流。我更喜欢凭借直觉开发非常规出装，比如小鱼人出紫苑，主打出其不意。", scores: { Instinctive: 2, Resigned: 1 } },
    ],
  },
  {
    id: 10,
    text: "大优势带盾推到对方高地下面，对方核心买活死，只要点掉中路高地就能赢。但此时你看到对方残血核心在塔后跳舞挑衅，如果是你，你过往的肌肉记忆会促使你？",
    options: [
      { text: "A. 瞬间梦回 TI8。刺客本能觉醒，大喊一声「我觉得能杀！」直接位移冲进对方高地深处强行猎杀。", scores: { Instinctive: 2, Vocal: 1 } },
      { text: "B. 极度抗拒当战犯。克制住内心的冲动，默默站在最安全的射程边缘去点高地建筑，绝对不给任何机会。", scores: { Calculated: 2, Tenacious: 1 } },
    ],
  },
  {
    id: 11,
    text: "己方大劣势人头比 10-30，此时唯一的翻盘点在于偷掉刚刷新的肉山。你在肉山坑里，听到外面有对方诡计之雾破掉的音效，你更常做出的决断是？",
    options: [
      { text: "A. 所有人立刻停手肉山，卡住肉山坑口，借助坑内视野打出一波完美的反手埋伏。", scores: { Calculated: 2, Tenacious: 1 } },
      { text: "B. 管不了那么多了！拼运气把最后几千血输出拉满，死也要把这个盾和奶酪从对面嘴里抢到手。", scores: { Instinctive: 2, Resigned: 1 } },
    ],
  },
  {
    id: 12,
    text: "游戏打到 60 分钟神装大战，你身上突然有了富余经济。面对圣剑（Divine Rapier）的巨大诱惑，你过往的记录是？",
    options: [
      { text: "A. 算了吧，圣剑掉落的风险太高。还是出刷新球或者羊刀（邪恶镰刀）控场更稳妥、安全。", scores: { Calculated: 2, Altruistic: 1 } },
      { text: "B. 犹豫一秒都是对圣剑的不尊重！直接拉满，要么一波把对面点穿，要么直接白给。", scores: { Instinctive: 2, Resigned: 2 } },
    ],
  },
  {
    id: 13,
    text: "团战混战爆发，你玩反手酱油。对方跳刀斧王正蠢蠢欲动。此时你看到己方核心走位失误被软控制黏住，但斧王还没跳。在过往反应中，你会？",
    options: [
      { text: "A. 焦虑感拉满，不等斧王露头，立刻把全部保人技能甩在核心身上，先强行保下来再说。", scores: { Instinctive: 1, Altruistic: 1 } },
      { text: "B. 强行按捺住按技能的手，视角死死盯着阴影。等斧王跳刀落地的零点几秒，在全场最极限的时机精准打断。", scores: { Calculated: 2, Tenacious: 1 } },
    ],
  },
  {
    id: 14,
    text: "刚开局进入英雄加载界面，遇到一个名字或者公屏发言极其带有攻击性或嘲讽意味的队友，你的真实习惯是？",
    options: [
      { text: "A. 默默点开计分板，把他的文字和麦克风全部拉黑屏蔽，世界清静，低头打我的游戏。", scores: { Silent: 2, Calculated: 1 } },
      { text: "B. 默默记住他的名字。等会儿局内要是敢出现任何失误，老子高强度用轮盘和打字羞辱他。", scores: { Vocal: 2, Instinctive: 1 } },
    ],
  },
  {
    id: 15,
    text: "你在中路成功单杀了对方，或者在野区精妙地用分身斧躲技能反杀了对方，你会？",
    options: [
      { text: "A. 毫无波澜，继续低头补刀，觉得这只是基础操作，内心平静毫无心理波动。", scores: { Silent: 2, Calculated: 1 } },
      { text: "B. 立刻在公屏扣一个刺眼的 `?`，或者高频发送各种具有攻击性的天梯嘲讽轮盘。", scores: { Vocal: 2, Instinctive: 1 } },
    ],
  },
  {
    id: 16,
    text: "己方肉山遭遇灭队，因为你的一个重大失误（如末日大野怪，虚空大队友），导致对方顺势上高。队友疯狂在公屏点你的技能图标，你过往真实心理往往是？",
    options: [
      { text: "A. 心脏猛地一沉，默默咽下这口气一句话都不敢说，假装没看见，手开始微微发抖。", scores: { Silent: 2, Resigned: 1 } },
      { text: "B. 瞬间被激怒！立刻开麦或者打字反击，把锅推给酱油的视野或者其他队友的抽象走位。", scores: { Vocal: 2, Egoistic: 1 } },
    ],
  },
  {
    id: 17,
    text: "当对局遇到那种全程在麦里高强度复盘、教每个人怎么出装的「教条懂哥」队友，你会？",
    options: [
      { text: "A. 一秒钟都不想听，直接点开计分板将其无情屏蔽，他点烂信号我也当成后台白噪音。", scores: { Silent: 2, Egoistic: 1 } },
      { text: "B. 根本忍不了一点，直接开麦当场和他深度对线复盘：「你行你上，看看你自己什么战犯数据。」", scores: { Vocal: 2, Instinctive: 1 } },
    ],
  },
  {
    id: 18,
    text: "当你赢下了一场 70 分钟极为艰难、高强度对线的绝境翻盘局，在对方遗迹碎掉的一瞬间，你通常会？",
    options: [
      { text: "A. 默默长舒一口气，摘下耳机，直接退出房间退出游戏，内心平静地准备排下一把。", scores: { Silent: 2, Calculated: 1 } },
      { text: "B. 疯狂敲击键盘，公屏打出「GGWP，菜就多练」，把压抑了 70 分钟的负面情绪在这一刻疯狂倾泻。", scores: { Vocal: 2, Instinctive: 2 } },
    ],
  },
  {
    id: 19,
    text: "天梯单排遭遇 5 连败，今天最后一局游戏进行到开局 5 分钟，你们的三路已经全部被爆，人头比 0-8，此时你往往会？",
    options: [
      { text: "A. 彻底佛了，不管自己选的是什么英雄，直接一头扎进野区刷钱挂机，毁灭吧赶紧的。", scores: { Resigned: 2, Silent: 1 } },
      { text: "B. 维持绝对的斗志，在麦里喊：「兄弟们守高地，对方这阵容后期上不来，拖到 40 分钟稳翻！」", scores: { Tenacious: 2, Vocal: 1 } },
    ],
  },
  {
    id: 20,
    text: "为了赢下一场关键的天梯晋级赛，你在选人阶段可以妥协和委屈到什么程度？",
    options: [
      { text: "A. 毫无底线的分奴。只要能赢，我可以连续玩 50 把最无聊、没有任何高光的版本超模工具人英雄。", scores: { Tenacious: 2, Calculated: 1 } },
      { text: "B. 绝不妥协。我玩游戏是为了快乐，如果不能玩我想玩的绝活或快乐整活，赢了也毫无情怀。", scores: { Resigned: 2, Instinctive: 1 } },
    ],
  },
  {
    id: 21,
    text: "游戏打到大后期，你没有任何买活，而对方已经带着圣剑在无情拆你们的遗迹基座了。你复活还要 40 秒，你会？",
    options: [
      { text: "A. 提前双手离开键盘，切出游戏开始刷手机或者看网页视频，静静等待屏幕变成灰白。", scores: { Resigned: 2, Silent: 1 } },
      { text: "B. 视角死死切在主基地上，高频指挥高喊：「去断兵线！去断超级兵！别让他们点基地！还有希望！」", scores: { Tenacious: 2, Vocal: 2 } },
    ],
  },
  {
    id: 22,
    text: "对方核心正在无解肥完美发育，你玩的是可以去绝地骚扰、但注定会破坏自己对线期发育的劣势路英雄，你的选择通常是？",
    options: [
      { text: "A. 宁愿自己线上坐牢、等级崩盘，也要开雾叫上兄弟们去死蹲他，把他的无解肥节奏彻底搞臭。", scores: { Tenacious: 2, Instinctive: 2 } },
      { text: "B. 先管好我自己的基本发育，坚信自己刷出第一件关键装之后在中后期能处理他，不去冒对线期暴毙的风险。", scores: { Resigned: 2, Calculated: 1 } },
    ],
  },
  {
    id: 23,
    text: "游戏 30 分钟，你玩核心带线遭遇对方 3 人强开雾包夹。你正准备放弃时，突然发现你身后的防御塔上，亮起了己方其余 4 名队友同时断了买活钱落下的四本 TP。那一刻你的第一反应通常是？",
    options: [
      { text: "A. 「兄弟们都在！老子不跑了！」瞬间血性拉满，立刻开着 BKB 回头反打跟对面拼了。", scores: { Instinctive: 2, Vocal: 1 } },
      { text: "B. 脑子极其冷静。利用走位和队友的肉身屏障在边缘疯狂拉扯，把输出拉满确保必须赢下这场团战。", scores: { Calculated: 2, Tenacious: 1 } },
      { text: "C. 产生莫名的愧疚感，觉得是因为自己的失误把全队拉入了全灭险境，手忙脚乱中反而更容易手抖发生低级失误。", scores: { Silent: 1, Resigned: 1 } },
    ],
  },
  {
    id: 24,
    text: "遭遇巨大收益（比如落单的大肥核心或残血超神核心）在全黑视野边缘短暂暴露踪迹的致命诱惑时，你以往往往会？",
    options: [
      { text: "A. 原始本能彻底战胜规则理性。管他后面有没有蹲，直接带头冲进漆黑野区，不拿到这个人头誓不罢休。", scores: { Instinctive: 2, Egoistic: 1 } },
      { text: "B. 克制住内心的猎杀冲动。在地图上狂点信号让全队撤退，自己掉头去安全清理兵线，冷酷守住运营区间。", scores: { Calculated: 2, Altruistic: 1 } },
    ],
  },
  {
    id: 25,
    text: "选人阶段，你排的是中路。结果队里一个低行为分的队友，反手抢了个影魔直接点在中路并打字「不给中就送」。面对抢路，你过往最真实的反应通常是？",
    options: [
      { text: "A. 宁为玉碎，不为瓦全。老子不惯着你！反手再点个中单走中，这把分可以不要，必须要在线上把你恶心死。", scores: { Resigned: 2, Instinctive: 1 } },
      { text: "B. 极致的功利妥协。为了宝贵的天梯分，强忍着恶心去选个 5 号位辅助他，心想输赢出去再拉黑一条龙。", scores: { Tenacious: 2, Calculated: 1 } },
    ],
  },
];

export const TOTAL_QUESTIONS = questions.length;

/** Q1–Q18 ≈ 70% in-game tactical weight; Q19–Q25 ≈ 30% reality-mapping overtones */
export const IN_GAME_QUESTION_IDS = new Set(questions.filter((q) => q.id <= 18).map((q) => q.id));
