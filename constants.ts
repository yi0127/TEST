import { GroupResult, Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "週五晚上，你的本命團突然開直播，但朋友約你出去玩，你怎麼辦？",
    options: [
      { text: "當然是出門玩！直播可以看回放，現在氣氛正好！", dimension: 'EI', value: 'E' },
      { text: "在家看直播，邊看邊發推特尖叫，這才是我的快樂。", dimension: 'EI', value: 'I' },
    ],
  },
  {
    id: 2,
    question: "聽到一首新的主打歌，你第一個注意到的是？",
    options: [
      { text: "這首歌的概念和MV裡的隱喻，好神！", dimension: 'SN', value: 'N' },
      { text: "副歌的旋律超洗腦，舞蹈動作也太帥了！", dimension: 'SN', value: 'S' },
    ],
  },
  {
    id: 3,
    question: "如果真的能出道，你希望你的團體定位是？",
    options: [
      { text: "引領潮流，概念前衛，我們要創造新的世界觀。", dimension: 'SN', value: 'N' },
      { text: "實力超強，開麥無敵，每場表演都像吞了CD。", dimension: 'SN', value: 'S' },
    ],
  },
  {
    id: 4,
    question: "看到偶像在綜藝節目上哭了，你的第一反應是？",
    options: [
      { text: "跟著一起哭，心好痛，寶寶不哭嗚嗚嗚。", dimension: 'TF', value: 'F' },
      { text: "想知道發生什麼事了？是不是壓力太大？公司在幹嘛？", dimension: 'TF', value: 'T' },
    ],
  },
  {
    id: 5,
    question: "公司要給你安排一個人設（Character），你比較能接受？",
    options: [
      { text: "高冷霸氣，所有事情都在掌控之中的ACE。", dimension: 'TF', value: 'T' },
      { text: "溫暖治癒，能照顧成員情緒的小太陽。", dimension: 'TF', value: 'F' },
    ],
  },
  {
    id: 6,
    question: "準備去韓國看演唱會，你的行李打包風格是？",
    options: [
      { text: "一個月前就列好清單，每天劃掉一項，絕不遺漏。", dimension: 'JP', value: 'J' },
      { text: "出發前一晚才開始塞，反正護照錢包帶著就好。", dimension: 'JP', value: 'P' },
    ],
  },
  {
    id: 7,
    question: "練習生時期，明天就是月考評鑑了，你會？",
    options: [
      { text: "按部就班練習完規定的次數，早點休息保持狀態。", dimension: 'JP', value: 'J' },
      { text: "突然想改一下舞蹈細節，練到通宵看感覺如何。", dimension: 'JP', value: 'P' },
    ],
  },
  {
    id: 8,
    question: "參加簽售會面對本命時，你會？",
    options: [
      { text: "瘋狂輸出彩虹屁，表達我的愛意，讓她感受到熱情！", dimension: 'EI', value: 'E' },
      { text: "有點害羞，默默遞上信件，希望能跟她深情對視。", dimension: 'EI', value: 'I' },
    ],
  },
  {
    id: 9,
    question: "如果偶像傳出戀愛緋聞，你怎麼看？",
    options: [
      { text: "只要不影響舞台表現，私生活是她們的自由，理智看待。", dimension: 'TF', value: 'T' },
      { text: "雖然會祝福，但心裡還是會有一點點酸酸的感覺...", dimension: 'TF', value: 'F' },
    ],
  },
  {
    id: 10,
    question: "你的播放清單通常是怎麼整理的？",
    options: [
      { text: "按曲風、心情、季節分類，井井有條。", dimension: 'JP', value: 'J' },
      { text: "最近喜歡的歌全都丟進去，隨機播放才是驚喜。", dimension: 'JP', value: 'P' },
    ],
  },
];

export const GROUPS: GroupResult[] = [
  {
    id: 'aespa',
    name: 'aespa',
    fandomName: 'MY',
    color: 'from-purple-600 to-blue-500',
    description: "你是來自曠野的未來戰士。你不隨波逐流，擁有獨特的世界觀和強大的邏輯思維。在團體中，你是那個冷靜分析局勢、帶領大家突破次元壁的關鍵人物。",
    vibe: "Cyberpunk / Futuristic / Savage",
    imgKeyword: "cyberpunk",
    mbtiGroup: ['INTJ', 'INTP', 'ENTJ', 'ENTP'], // Analysts
    memberArchetypes: ['Karina (隊長魅力)', 'Winter (冷豔實力)', 'NingNing (自信vocal)', 'Giselle (獨特氣質)']
  },
  {
    id: 'lesserafim',
    name: 'LE SSERAFIM',
    fandomName: 'FEARNOT',
    color: 'from-slate-800 to-red-600',
    description: "你是無所畏懼的野心家，但也擁有最細膩的內心。你重視團隊羈絆，為了夢想願意付出一切努力。你的堅韌和共情能力是你最大的武器。",
    vibe: "Fearless / Chic / Athletic",
    imgKeyword: "fitness",
    mbtiGroup: ['INFJ', 'INFP', 'ENFJ', 'ENFP'], // Diplomats
    memberArchetypes: ['Chaewon (強大領袖)', 'Sakura (堅韌毅力)', 'Yunjin (自由靈魂)', 'Kazuha (優雅氣質)', 'Eunchae (團寵忙內)']
  },
  {
    id: 'ive',
    name: 'IVE',
    fandomName: 'DIVE',
    color: 'from-rose-500 to-pink-600',
    description: "你是天生的偶像，優雅、完美、自戀得恰到好處。你對自我管理有著嚴格的要求，追求極致的視覺與實力平衡。在人群中，你就是那個閃閃發光的焦點。",
    vibe: "Narcissism / High-Teen / Elegant",
    imgKeyword: "luxury",
    mbtiGroup: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ESTJ'], // Sentinels (Mapped generally)
    memberArchetypes: ['Wonyoung (天生偶像)', 'Yujin (全能ACE)', 'Liz (音色妖精)', 'Rei (獨特魅力)', 'Leeseo (可愛忙內)', 'Gaeul (沈穩大姐)']
  },
  {
    id: 'nmixx',
    name: 'NMIXX',
    fandomName: 'NSWER',
    color: 'from-cyan-400 to-blue-400',
    description: "你是無法被定義的實驗家。你喜歡挑戰常規，充滿活力與變數。你的性格就像MIXX POP一樣，將各種反轉魅力完美融合，永遠讓人猜不透你的下一步。",
    vibe: "Mixx Pop / Energetic / Funky",
    imgKeyword: "party",
    mbtiGroup: ['ISTP', 'ISFP', 'ESTP', 'ESFP'], // Explorers
    memberArchetypes: ['Haewon (幽默隊長)', 'Lily (天籟主唱)', 'Sullyoon (視覺中心)', 'Kyujin (活力忙內)', 'Jiwoo (反轉魅力)', 'Bae (氣氛製造)']
  }
];