// 🎵 你的歌单（你可以自己加！）
  const songs = [
    {
      id: 1,
      title: "白马非马",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/1.mp3",
      genre: ["流行"],
      mood: ["孤独", "惆怅", "清醒"],
      energy: "舒缓",
      weather: [],
      theme: ["自我", "人生"]
    },
    {
      id: 2,
      title: "半城烟沙",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/2.mp3",
      genre: ["中国风"],
      mood: ["苍凉", "禅意", "悲悯"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "战争"]
    },
    {
      id: 3,
      title: "伴虎",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/3.mp3",
      genre: ["中国风", "摇滚"],
      mood: ["大气", "悲怆", "讽刺"],
      energy: "激昂",
      weather: [],
      theme: ["历史", "现实"]
    },
    {
      id: 4,
      title: "拆东墙",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/4.mp3",
      genre: ["嘻哈", "中国风"],
      mood: ["悲悯", "讽刺", "淡然"],
      energy: "中速",
      weather: [],
      theme: ["现实", "社会"]
    },
    {
      id: 5,
      title: "尘世美",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/5.mp3",
      genre: ["流行", "嘻哈"],
      mood: ["甜蜜", "轻快", "唯美"],
      energy: "轻快",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 6,
      title: "弹指一挥间",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/6.mp3",
      genre: ["中国风"],
      mood: ["凄美", "深情", "思念"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "离别", "历史"]
    },
    {
      id: 7,
      title: "断桥残雪",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/7.mp3",
      genre: ["中国风"],
      mood: ["凄美", "哀婉", "思念"],
      energy: "舒缓",
      weather: ["雪"],
      theme: ["爱情", "回忆"]
    },
    {
      id: 8,
      title: "放肆",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/8.mp3",
      genre: ["中国风", "摇滚"],
      mood: ["豪迈", "霸气", "潇洒"],
      energy: "激昂",
      weather: [],
      theme: ["江湖", "武侠"]
    },
    {
      id: 9,
      title: "蝴蝶的时间",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/9.mp3",
      genre: ["流行", "中国风"],
      mood: ["凄美", "哀伤", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 10,
      title: "画平生",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/10.mp3",
      genre: ["中国风"],
      mood: ["深情", "思念", "凄美"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 11,
      title: "幻听",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/11.mp3",
      genre: ["流行", "R&B"],
      mood: ["深情", "伤感", "纯粹"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 12,
      title: "将芯比心",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/12.mp3",
      genre: ["流行"],
      mood: ["浪漫", "温暖", "轻盈"],
      energy: "轻快",
      weather: [],
      theme: ["科技", "人文"]
    },
    {
      id: 13,
      title: "今年勇",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/13.mp3",
      genre: ["中国风"],
      mood: ["豪迈", "洒脱", "进取"],
      energy: "激昂",
      weather: [],
      theme: ["武侠", "进取"]
    },
    {
      id: 14,
      title: "绝代风华",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/14.mp3",
      genre: ["中国风"],
      mood: ["隐逸", "深情", "回忆"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "爱情"]
    },
    {
      id: 15,
      title: "科幻",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/15.mp3",
      genre: ["流行", "R&B", "电子"],
      mood: ["梦幻", "感伤", "温柔"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "宇宙", "回忆"]
    },
    {
      id: 16,
      title: "温泉",
      artist: "许嵩 刘美麟",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/16.mp3",
      genre: ["流行", "蓝调"],
      mood: ["甜蜜", "治愈", "温柔"],
      energy: "轻快",
      weather: ["夏"],
      theme: ["爱情"]
    },
    {
      id: 17,
      title: "庐州月",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/17.mp3",
      genre: ["中国风"],
      mood: ["思念", "苍凉", "怅惘"],
      energy: "舒缓",
      weather: ["夜"],
      theme: ["乡愁", "思念"]
    },
    {
      id: 18,
      title: "惊鸿一面",
      artist: "许嵩 黄龄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/18.mp3",
      genre: ["中国风"],
      mood: ["婉约", "温暖", "豁达"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "古风"]
    },
    {
      id: 19,
      title: "书香年华",
      artist: "许嵩 孙涛",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/19.mp3",
      genre: ["流行"],
      mood: ["轻快", "文雅", "正能量"],
      energy: "轻快",
      weather: [],
      theme: ["传统", "劝学"]
    },
    {
      id: 20,
      title: "江湖",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/20.mp3",
      genre: ["中国风", "电子"],
      mood: ["侠义", "苍凉", "豪情"],
      energy: "激昂",
      weather: [],
      theme: ["江湖", "武侠"]
    },
    {
      id: 21,
      title: "曼陀山庄",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/21.mp3",
      genre: ["中国风"],
      mood: ["凄美", "爱恨", "苍凉"],
      energy: "中速",
      weather: ["夜"],
      theme: ["江湖", "爱情"]
    },
    {
      id: 22,
      title: "玫瑰花的葬礼",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/22.mp3",
      genre: ["流行", "R&B"],
      mood: ["伤感", "悲痛", "克制"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "悼念"]
    },
    {
      id: 23,
      title: "明智之举",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/23.mp3",
      genre: ["流行", "R&B"],
      mood: ["释然", "怀旧", "自省"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "自我"]
    },
    {
      id: 24,
      title: "庞贝",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/24.mp3",
      genre: ["流行"],
      mood: ["深沉", "安静", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "灾难"]
    },
    {
      id: 25,
      title: "平行宇宙",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/25.mp3",
      genre: ["流行", "抒情"],
      mood: ["平静", "孤独", "回忆"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "回忆", "科幻"]
    },
    {
      id: 26,
      title: "七夕",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/26.mp3",
      genre: ["中国风"],
      mood: ["相思", "浪漫", "坚定"],
      energy: "中速",
      weather: ["夜"],
      theme: ["爱情", "传统"]
    },
    {
      id: 27,
      title: "千百度",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/27.mp3",
      genre: ["中国风", "R&B"],
      mood: ["温婉", "寻觅", "怅惘"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "思念"]
    },
    {
      id: 28,
      title: "千古",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/28.mp3",
      genre: ["中国风"],
      mood: ["感伤", "眷恋", "洒脱"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 29,
      title: "清明雨上",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/29.mp3",
      genre: ["中国风"],
      mood: ["哀思", "凄婉", "怀念"],
      energy: "舒缓",
      weather: ["雨"],
      theme: ["悼亡", "思念"]
    },
    {
      id: 30,
      title: "如果当时",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/30.mp3",
      genre: ["中国风", "爵士"],
      mood: ["无奈", "自嘲", "怀念"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 31,
      title: "如谜",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/31.mp3",
      genre: ["中国风", "电子"],
      mood: ["神秘", "婉转", "寻觅"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "武侠"]
    },
    {
      id: 32,
      title: "如约而至",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/32.mp3",
      genre: ["民谣摇滚", "蓝调摇滚"],
      mood: ["明快", "温暖", "怀念"],
      energy: "中速",
      weather: [],
      theme: ["友情", "约定"]
    },
    {
      id: 33,
      title: "山水之间",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/33.mp3",
      genre: ["中国风"],
      mood: ["清雅", "悠远", "禅意"],
      energy: "舒缓",
      weather: [],
      theme: ["山水", "隐逸"]
    },
    {
      id: 34,
      title: "摄影艺术",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/34.mp3",
      genre: ["流行", "摇滚"],
      mood: ["萧索", "回忆", "落寞"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 35,
      title: "诗画中国",
      artist: "许嵩 谭维维",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/35.mp3",
      genre: ["中国风"],
      mood: ["悠远", "大气", "诗意"],
      energy: "中速",
      weather: [],
      theme: ["传统", "家国"]
    },
    {
      id: 36,
      title: "天龙八部之宿敌",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/36.mp3",
      genre: ["中国风"],
      mood: ["内敛", "柔情", "缠绵"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "爱情"]
    },
    {
      id: 37,
      title: "惟爱你",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/37.mp3",
      genre: ["流行"],
      mood: ["坚定", "深情", "浪漫"],
      energy: "轻快",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 38,
      title: "我乐意",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/38.mp3",
      genre: ["流行"],
      mood: ["甜蜜", "清新", "随性"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "校园"]
    },
    {
      id: 39,
      title: "乌鸦",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/39.mp3",
      genre: ["流行"],
      mood: ["孤独", "倔强", "感伤"],
      energy: "中速",
      weather: [],
      theme: ["自我", "孤独"]
    },
    {
      id: 40,
      title: "梧桐灯",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/40.mp3",
      genre: ["流行", "电子"],
      mood: ["阴郁", "回忆", "悲伤"],
      energy: "中速",
      weather: ["夜"],
      theme: ["爱情", "回忆"]
    },
    {
      id: 41,
      title: "想象之中",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/41.mp3",
      genre: ["流行", "R&B", "电子"],
      mood: ["阴郁", "慵懒", "内敛"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "想象"]
    },
    {
      id: 42,
      title: "心有所向",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/42.mp3",
      genre: ["流行摇滚", "民乐"],
      mood: ["励志", "畅快", "大气"],
      energy: "激昂",
      weather: [],
      theme: ["青春", "励志"]
    },
    {
      id: 43,
      title: "星座书上",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/43.mp3",
      genre: ["流行"],
      mood: ["浪漫", "伤感", "倾诉"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "青春"]
    },
    {
      id: 44,
      title: "雅俗共赏",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/44.mp3",
      genre: ["流行"],
      mood: ["思辨", "诙谐", "深沉"],
      energy: "中速",
      weather: [],
      theme: ["人生", "哲思"]
    },
    {
      id: 45,
      title: "燕归巢",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/45.mp3",
      genre: ["中国风", "电子"],
      mood: ["乡愁", "清雅", "思念"],
      energy: "舒缓",
      weather: [],
      theme: ["乡愁", "归思"]
    },
    {
      id: 46,
      title: "有何不可",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/46.mp3",
      genre: ["流行"],
      mood: ["温暖", "俏皮", "浪漫"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "青春"]
    },
    {
      id: 47,
      title: "宇宙之大",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/47.mp3",
      genre: ["流行", "世界音乐"],
      mood: ["梦幻", "孤寂", "浪漫"],
      energy: "舒缓",
      weather: ["夜"],
      theme: ["宇宙", "孤独", "爱情"]
    },
    {
      id: 48,
      title: "雨幕",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/48.mp3",
      genre: ["中国风"],
      mood: ["悬疑", "内敛", "感伤"],
      energy: "中速",
      weather: ["雨"],
      theme: ["江湖", "爱情"]
    },
    {
      id: 49,
      title: "在那不遥远的地方",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/49.mp3",
      genre: ["电子", "民乐", "跨界"],
      mood: ["励志", "开阔", "希望"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "青春"]
    },
    {
      id: 50,
      title: "早发白帝城",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/50.mp3",
      genre: ["中国风"],
      mood: ["磅礴", "豪迈", "缠绵"],
      energy: "激昂",
      weather: [],
      theme: ["历史", "诗意"]
    },
    {
      id: 51,
      title: "只有你",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/51.mp3",
      genre: ["流行"],
      mood: ["温柔", "浪漫", "热烈"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 52,
      title: "纸上雪",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/52.mp3",
      genre: ["中国风"],
      mood: ["静心", "洒脱", "诗意"],
      energy: "舒缓",
      weather: ["雪"],
      theme: ["诗意", "传统"]
    },
    {
      id: 53,
      title: "最佳歌手",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/53.mp3",
      genre: ["流行", "蓝调"],
      mood: ["怀旧", "成熟", "感伤"],
      energy: "中速",
      weather: [],
      theme: ["成长", "自我", "告别"]
    },
    {
      id: 54,
      title: "摆脱",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/54.mp3",
      genre: ["流行"],
      mood: ["轻快", "悲观", "俏皮"],
      energy: "轻快",
      weather: [],
      theme: ["自我", "都市"]
    },
    {
      id: 55,
      title: "超市",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/55.mp3",
      genre: ["流行", "弗拉明戈"],
      mood: ["怀旧", "温暖", "回忆"],
      energy: "轻快",
      weather: [],
      theme: ["亲情", "回忆"]
    },
    {
      id: 56,
      title: "大千世界",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/56.mp3",
      genre: ["乡村布鲁斯", "摇滚"],
      mood: ["明快", "悲悯", "哲思"],
      energy: "中速",
      weather: [],
      theme: ["人生", "禅意"]
    },
    {
      id: 57,
      title: "多余的解释",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/57.mp3",
      genre: ["流行", "R&B"],
      mood: ["无奈", "心酸", "故事感"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 58,
      title: "隔代",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/58.mp3",
      genre: ["流行"],
      mood: ["温馨", "思念", "感动"],
      energy: "舒缓",
      weather: [],
      theme: ["亲情", "回忆"]
    },
    {
      id: 59,
      title: "素颜",
      artist: "许嵩 何曼婷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/59.mp3",
      genre: ["流行"],
      mood: ["清新", "怀念", "青春"],
      energy: "轻快",
      weather: [],
      theme: ["青春", "校园", "爱情"]
    },
    {
      id: 60,
      title: "河山大好",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/60.mp3",
      genre: ["中国风", "R&B"],
      mood: ["轻快", "洒脱", "活力"],
      energy: "轻快",
      weather: [],
      theme: ["旅行", "生活"]
    },
    {
      id: 61,
      title: "胡萝卜须",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/61.mp3",
      genre: ["流行"],
      mood: ["黑色幽默", "诡谲", "慵懒"],
      energy: "中速",
      weather: [],
      theme: ["成长", "寓言", "自我"]
    },
    {
      id: 62,
      title: "灰色头像",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/62.mp3",
      genre: ["流行", "R&B"],
      mood: ["伤感", "回忆", "怀旧"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 63,
      title: "降温",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/63.mp3",
      genre: ["流行", "实验"],
      mood: ["冷清", "疏离", "思辨"],
      energy: "中速",
      weather: [],
      theme: ["都市", "现实"]
    },
    {
      id: 64,
      title: "揽仙歌",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/64.mp3",
      genre: ["中国风"],
      mood: ["洒脱", "通透", "念旧"],
      energy: "中速",
      weather: [],
      theme: ["仙侠", "问道"]
    },
    {
      id: 65,
      title: "浪",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/65.mp3",
      genre: ["蓝调", "爵士", "电子"],
      mood: ["欢快", "慵懒", "浪漫"],
      energy: "轻快",
      weather: [],
      theme: ["自我", "自由"]
    },
    {
      id: 66,
      title: "老古董",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/66.mp3",
      genre: ["布鲁斯摇滚", "中国风"],
      mood: ["复古", "坚定", "洒脱"],
      energy: "中速",
      weather: [],
      theme: ["自我", "传统"]
    },
    {
      id: 67,
      title: "留香",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/67.mp3",
      genre: ["流行", "R&B"],
      mood: ["细腻", "轻松", "浪漫"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 68,
      title: "柳成荫",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/68.mp3",
      genre: ["迷幻摇滚", "流行"],
      mood: ["轻快", "释然", "松弛"],
      energy: "舒缓",
      weather: [],
      theme: ["人生", "释怀"]
    },
    {
      id: 69,
      title: "内线",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/69.mp3",
      genre: ["流行", "抒情"],
      mood: ["凄美", "无奈", "伤感"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "信任"]
    },
    {
      id: 70,
      title: "七号公园",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/70.mp3",
      genre: ["流行"],
      mood: ["忧伤", "迷惘", "冷清"],
      energy: "舒缓",
      weather: ["夜"],
      theme: ["爱情", "青春"]
    },
    {
      id: 71,
      title: "亲情式的爱情",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/71.mp3",
      genre: ["流行"],
      mood: ["感动", "感伤", "深刻"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "亲情"]
    },
    {
      id: 72,
      title: "全球变冷",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/72.mp3",
      genre: ["流行", "电子"],
      mood: ["反思", "温暖", "呼唤"],
      energy: "中速",
      weather: [],
      theme: ["现实", "社会关怀"]
    },
    {
      id: 73,
      title: "认错",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/73.mp3",
      genre: ["流行"],
      mood: ["心碎", "无奈", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "分手"]
    },
    {
      id: 74,
      title: "三尺",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/74.mp3",
      genre: ["摇滚"],
      mood: ["躁动", "痛快", "讽刺"],
      energy: "激昂",
      weather: [],
      theme: ["现实", "批判"]
    },
    {
      id: 75,
      title: "双人旁",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/75.mp3",
      genre: ["流行", "R&B"],
      mood: ["温暖", "怀旧", "心动"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 76,
      title: "天知道",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/76.mp3",
      genre: ["流行", "摇滚"],
      mood: ["励志", "燃", "坚定"],
      energy: "激昂",
      weather: [],
      theme: ["励志", "游戏"]
    },
    {
      id: 77,
      title: "通关",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/77.mp3",
      genre: ["流行", "摇滚"],
      mood: ["畅快", "随性", "豪情"],
      energy: "激昂",
      weather: [],
      theme: ["人生", "游戏", "友情"]
    },
    {
      id: 78,
      title: "我想牵着你的手",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/78.mp3",
      genre: ["流行"],
      mood: ["甜蜜", "清新", "浪漫"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "青春"]
    },
    {
      id: 79,
      title: "小烦恼没什么大不了",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/79.mp3",
      genre: ["爵士", "流行"],
      mood: ["轻快", "明媚", "治愈"],
      energy: "轻快",
      weather: [],
      theme: ["生活", "乐观"]
    },
    {
      id: 80,
      title: "野路",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/80.mp3",
      genre: ["流行", "电子"],
      mood: ["迷离", "洒脱", "悬疑"],
      energy: "中速",
      weather: [],
      theme: ["自我", "自由"]
    },
    {
      id: 81,
      title: "野人",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/81.mp3",
      genre: ["流行"],
      mood: ["哲思", "孤独", "力量"],
      energy: "中速",
      weather: [],
      theme: ["思想", "自我"]
    },
    {
      id: 82,
      title: "医生",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/82.mp3",
      genre: ["流行"],
      mood: ["无奈", "伤感", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "疗愈"]
    },
    {
      id: 83,
      title: "艺术家们",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/83.mp3",
      genre: ["流行"],
      mood: ["讽刺", "不屑", "直白"],
      energy: "中速",
      weather: [],
      theme: ["现实", "批判"]
    },
    {
      id: 84,
      title: "有桃花",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/84.mp3",
      genre: ["流行", "复古"],
      mood: ["欢乐", "悲情", "荒诞"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "表白"]
    },
    {
      id: 85,
      title: "光辉岁月",
      artist: "Beyond",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/85.mp3",
      genre: ["流行摇滚"],
      mood: ["励志", "自由", "感慨"],
      energy: "激昂",
      weather: [],
      theme: ["自由", "梦想"]
    },
    {
      id: 86,
      title: "真的爱你",
      artist: "Beyond",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/86.mp3",
      genre: ["摇滚"],
      mood: ["温暖", "感恩", "深情"],
      energy: "激昂",
      weather: [],
      theme: ["亲情", "母爱"]
    },
    {
      id: 87,
      title: "有点甜",
      artist: "汪苏泷 BY2",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/87.mp3",
      genre: ["流行"],
      mood: ["甜蜜", "青春", "清新"],
      energy: "轻快",
      weather: ["夏"],
      theme: ["爱情", "青春"]
    },
    {
      id: 88,
      title: "永不失联的爱",
      artist: "Eric周兴哲",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/88.mp3",
      genre: ["流行"],
      mood: ["深情", "孤独", "守望"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "承诺"]
    },
    {
      id: 89,
      title: "多远都要在一起",
      artist: "G.E.M邓紫棋",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/89.mp3",
      genre: ["流行"],
      mood: ["深情", "坚定", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "异地"]
    },
    {
      id: 90,
      title: "光年之外",
      artist: "G.E.M邓紫棋",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/90.mp3",
      genre: ["流行", "电子"],
      mood: ["深情", "激昂", "感动"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "科幻", "宇宙"]
    },
    {
      id: 91,
      title: "后会无期",
      artist: "G.E.M邓紫棋",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/91.mp3",
      genre: ["流行", "抒情"],
      mood: ["凄美", "告别", "释然"],
      energy: "舒缓",
      weather: [],
      theme: ["离别", "电影"]
    },
    {
      id: 92,
      title: "来自天堂的魔鬼",
      artist: "G.E.M邓紫棋",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/92.mp3",
      genre: ["电子", "摇滚", "流行"],
      mood: ["暗黑", "撕扯", "魅惑"],
      energy: "激昂",
      weather: ["夜"],
      theme: ["爱情", "诱惑"]
    },
    {
      id: 93,
      title: "泡沫",
      artist: "G.E.M邓紫棋",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/93.mp3",
      genre: ["流行"],
      mood: ["悲伤", "深情", "破碎"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "失恋"]
    },
    {
      id: 94,
      title: "白鸽",
      artist: "GAI周延",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/94.mp3",
      genre: ["说唱", "流行"],
      mood: ["忧郁", "希望", "热血"],
      energy: "激昂",
      weather: [],
      theme: ["成长", "自由"]
    },
    {
      id: 95,
      title: "故湘，风",
      artist: "GAI周延",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/95.mp3",
      genre: ["说唱", "民乐"],
      mood: ["乡愁", "深情", "大气"],
      energy: "中速",
      weather: [],
      theme: ["乡愁", "亲情"]
    },
    {
      id: 96,
      title: "兰花草",
      artist: "GAI周延",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/96.mp3",
      genre: ["中国风", "说唱"],
      mood: ["励志", "豪迈", "少年气"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "进取"]
    },
    {
      id: 97,
      title: "长路漫漫任我闯",
      artist: "GAI周延",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/97.mp3",
      genre: ["说唱", "民族风"],
      mood: ["苍凉", "豪迈", "孤勇"],
      energy: "激昂",
      weather: [],
      theme: ["江湖", "侠客"]
    },
    {
      id: 98,
      title: "Show Yourself",
      artist: "Idina Menzel",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/98.mp3",
      genre: ["音乐剧", "流行"],
      mood: ["振奋", "自我觉醒", "恢弘"],
      energy: "激昂",
      weather: ["雪"],
      theme: ["自我", "成长", "电影"]
    },
    {
      id: 99,
      title: "Some Things Never Change",
      artist: "Frozen 2",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/99.mp3",
      genre: ["音乐剧", "流行"],
      mood: ["温馨", "轻快", "乐观"],
      energy: "轻快",
      weather: [],
      theme: ["亲情", "友情", "电影"]
    },
    {
      id: 100,
      title: "Counting Stars",
      artist: "OneRepublic",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/100.mp3",
      genre: ["流行摇滚", "民谣流行"],
      mood: ["明快", "昂扬", "希望"],
      energy: "轻快",
      weather: ["夜"],
      theme: ["梦想", "人生"]
    },
    {
      id: 101,
      title: "三国恋",
      artist: "Tank",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/101.mp3",
      genre: ["中国风", "摇滚"],
      mood: ["苍凉", "迷惘", "凄美"],
      energy: "激昂",
      weather: [],
      theme: ["历史", "战争", "爱情"]
    },
    {
      id: 102,
      title: "想见你想见你想见你",
      artist: "八三夭",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/102.mp3",
      genre: ["流行", "R&B"],
      mood: ["深情", "思念", "守候"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "穿越", "电视剧"]
    },
    {
      id: 103,
      title: "红色高跟鞋",
      artist: "蔡健雅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/103.mp3",
      genre: ["流行", "爵士"],
      mood: ["慵懒", "热烈", "自信"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "都市"]
    },
    {
      id: 104,
      title: "落叶归根",
      artist: "单依纯 王力宏",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/104.mp3",
      genre: ["流行", "R&B"],
      mood: ["乡愁", "离愁", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["乡愁", "回归"]
    },
    {
      id: 105,
      title: "珠玉",
      artist: "单依纯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/105.mp3",
      genre: ["流行"],
      mood: ["空灵", "复杂", "自我"],
      energy: "中速",
      weather: [],
      theme: ["自我", "时光"]
    },
    {
      id: 106,
      title: "特别的人",
      artist: "方大同",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/106.mp3",
      genre: ["流行", "抒情"],
      mood: ["深情", "温柔", "等待"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 107,
      title: "童话",
      artist: "光良",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/107.mp3",
      genre: ["流行"],
      mood: ["温柔", "治愈", "伤感"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "信念"]
    },
    {
      id: 108,
      title: "盗将行",
      artist: "花粥 马雨阳",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/108.mp3",
      genre: ["民谣", "古风"],
      mood: ["江湖气", "幽默", "苍凉"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "爱情"]
    },
    {
      id: 109,
      title: "带我去很远地方",
      artist: "黄霄雲",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/109.mp3",
      genre: ["流行摇滚"],
      mood: ["明快", "自由", "奔跑"],
      energy: "激昂",
      weather: ["夜"],
      theme: ["远方", "梦想", "旅行"]
    },
    {
      id: 110,
      title: "晚夜微雨问海棠",
      artist: "镜予歌 陈亦洺 喧笑",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/110.mp3",
      genre: ["古风"],
      mood: ["唯美", "百转千回", "深情"],
      energy: "舒缓",
      weather: ["雨", "夜"],
      theme: ["古风", "爱情"]
    },
    {
      id: 111,
      title: "愿得一人心",
      artist: "李行亮",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/111.mp3",
      genre: ["流行"],
      mood: ["温暖", "深情", "安静"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "承诺"]
    },
    {
      id: 112,
      title: "爱的代价",
      artist: "李宗盛",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/112.mp3",
      genre: ["流行", "民谣"],
      mood: ["释然", "怀念", "温柔"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "成长"]
    },
    {
      id: 113,
      title: "宁夏",
      artist: "梁静茹",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/113.mp3",
      genre: ["流行"],
      mood: ["宁静", "思念", "单纯"],
      energy: "舒缓",
      weather: ["夏", "夜"],
      theme: ["思念", "夏天"]
    },
    {
      id: 114,
      title: "勇气",
      artist: "梁静茹",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/114.mp3",
      genre: ["流行"],
      mood: ["疗伤", "坚定", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "勇气"]
    },
    {
      id: 115,
      title: "背对背拥抱",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/115.mp3",
      genre: ["流行", "摇滚"],
      mood: ["呐喊", "遗憾", "珍惜"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "误会"]
    },
    {
      id: 116,
      title: "不为谁而作的歌",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/116.mp3",
      genre: ["流行"],
      mood: ["迷茫", "感恩", "释然"],
      energy: "激昂",
      weather: [],
      theme: ["人生", "感恩"]
    },
    {
      id: 117,
      title: "小酒窝",
      artist: "林俊杰 蔡卓妍",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/117.mp3",
      genre: ["流行"],
      mood: ["甜蜜", "清新", "浪漫"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "初恋"]
    },
    {
      id: 118,
      title: "曹操",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/118.mp3",
      genre: ["摇滚", "电子"],
      mood: ["霸气", "磅礴", "豪迈"],
      energy: "激昂",
      weather: [],
      theme: ["历史", "枭雄"]
    },
    {
      id: 119,
      title: "翅膀",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/119.mp3",
      genre: ["流行"],
      mood: ["温暖", "坚定", "励志"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "陪伴"]
    },
    {
      id: 120,
      title: "当你",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/120.mp3",
      genre: ["流行"],
      mood: ["甜蜜", "温柔", "心动"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "暗恋"]
    },
    {
      id: 121,
      title: "关键词",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/121.mp3",
      genre: ["中国风", "流行"],
      mood: ["深情", "含蓄", "温暖"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 122,
      title: "记得",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/122.mp3",
      genre: ["流行"],
      mood: ["感伤", "温馨", "无奈"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 123,
      title: "江南",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/123.mp3",
      genre: ["中国风", "R&B"],
      mood: ["凄美", "哀伤", "深情"],
      energy: "中速",
      weather: ["雨"],
      theme: ["爱情"]
    },
    {
      id: 124,
      title: "被风吹过的夏天",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/124.mp3",
      genre: ["流行"],
      mood: ["甜蜜", "清新", "幸福"],
      energy: "轻快",
      weather: ["夏", "风"],
      theme: ["爱情", "夏天"]
    },
    {
      id: 125,
      title: "可惜没如果",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/125.mp3",
      genre: ["流行"],
      mood: ["遗憾", "懊悔", "心碎"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "错过"]
    },
    {
      id: 126,
      title: "她说",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/126.mp3",
      genre: ["流行"],
      mood: ["温柔", "哀伤", "落寞"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 127,
      title: "心墙",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/127.mp3",
      genre: ["流行"],
      mood: ["温柔", "暗恋", "期待"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "暗恋"]
    },
    {
      id: 128,
      title: "一千年以后",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/128.mp3",
      genre: ["流行", "电子"],
      mood: ["深情", "宿命", "浪漫"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "时间"]
    },
    {
      id: 129,
      title: "愿与愁",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/129.mp3",
      genre: ["流行"],
      mood: ["磅礴", "细腻", "忧伤"],
      energy: "中速",
      weather: [],
      theme: ["爱", "时间", "宇宙"]
    },
    {
      id: 130,
      title: "醉赤壁",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/130.mp3",
      genre: ["中国风"],
      mood: ["浪漫", "柔情", "古典"],
      energy: "舒缓",
      weather: [],
      theme: ["历史", "爱情"]
    },
    {
      id: 131,
      title: "凤凰花开的路口",
      artist: "林志炫",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/131.mp3",
      genre: ["抒情流行"],
      mood: ["伤感", "怀念", "温暖"],
      energy: "舒缓",
      weather: ["夏"],
      theme: ["毕业", "离别", "友情"]
    },
    {
      id: 132,
      title: "逝去的歌",
      artist: "旅行团乐队",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/132.mp3",
      genre: ["流行", "摇滚"],
      mood: ["缅怀", "失落", "感恩"],
      energy: "中速",
      weather: [],
      theme: ["离别", "回忆"]
    },
    {
      id: 133,
      title: "起风了",
      artist: "买辣椒也用券",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/133.mp3",
      genre: ["流行", "民谣"],
      mood: ["感慨", "怀念", "温柔"],
      energy: "中速",
      weather: ["风"],
      theme: ["青春", "回忆", "成长"]
    },
    {
      id: 134,
      title: "给你给我",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/134.mp3",
      genre: ["流行", "民谣"],
      mood: ["温暖", "感动", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "亲情", "付出"]
    },
    {
      id: 135,
      title: "无名的人",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/135.mp3",
      genre: ["流行", "民谣"],
      mood: ["深沉", "坚韧", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["平凡", "奋斗", "电影"]
    },
    {
      id: 136,
      title: "像我这样的人",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/136.mp3",
      genre: ["流行", "民谣"],
      mood: ["自省", "迷茫", "温柔"],
      energy: "舒缓",
      weather: [],
      theme: ["自我", "平凡"]
    },
    {
      id: 137,
      title: "消愁",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/137.mp3",
      genre: ["民谣"],
      mood: ["沧桑", "迷茫", "释然"],
      energy: "中速",
      weather: [],
      theme: ["人生", "成长"]
    },
    {
      id: 138,
      title: "一程山路",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/138.mp3",
      genre: ["抒情流行"],
      mood: ["温柔", "禅意", "治愈"],
      energy: "舒缓",
      weather: [],
      theme: ["旅途", "人生"]
    },
    {
      id: 139,
      title: "忽然之间",
      artist: "莫文蔚",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/139.mp3",
      genre: ["抒情流行"],
      mood: ["遗憾", "怀念", "脆弱"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "生命"]
    },
    {
      id: 140,
      title: "盛夏的果实",
      artist: "莫文蔚",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/140.mp3",
      genre: ["流行"],
      mood: ["慵懒", "忧伤", "释然"],
      energy: "舒缓",
      weather: ["夏"],
      theme: ["爱情", "失恋", "成长"]
    },
    {
      id: 141,
      title: "明天，你好",
      artist: "牛奶咖啡",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/141.mp3",
      genre: ["流行"],
      mood: ["励志", "感伤", "治愈"],
      energy: "舒缓",
      weather: [],
      theme: ["成长", "告别", "勇气"]
    },
    {
      id: 142,
      title: "那些花儿",
      artist: "朴树",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/142.mp3",
      genre: ["民谣"],
      mood: ["忧伤", "怀念", "温暖"],
      energy: "舒缓",
      weather: [],
      theme: ["青春", "回忆", "友情"]
    },
    {
      id: 143,
      title: "平凡之路",
      artist: "朴树",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/143.mp3",
      genre: ["新民谣", "流行"],
      mood: ["温暖", "忧伤", "释然"],
      energy: "中速",
      weather: [],
      theme: ["人生", "平凡", "电影"]
    },
    {
      id: 144,
      title: "山外小楼夜听雨",
      artist: "任然",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/144.mp3",
      genre: ["中国风"],
      mood: ["思念", "疗愈", "孤寂"],
      energy: "舒缓",
      weather: ["雨", "夜"],
      theme: ["思念", "古风"]
    },
    {
      id: 145,
      title: "亲爱的你啊",
      artist: "任素汐",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/145.mp3",
      genre: ["流行"],
      mood: ["温柔", "心疼", "治愈"],
      energy: "舒缓",
      weather: [],
      theme: ["成长", "救赎"]
    },
    {
      id: 146,
      title: "千秋迭梦",
      artist: "尚辰 镜予歌 陈亦洺",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/146.mp3",
      genre: ["古风"],
      mood: ["豪情", "少年气", "羁绊"],
      energy: "中速",
      weather: [],
      theme: ["古风", "江湖", "同人"]
    },
    {
      id: 147,
      title: "写给黄淮",
      artist: "邵帅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/147.mp3",
      genre: ["民谣"],
      mood: ["深情", "遗憾", "怀念"],
      energy: "舒缓",
      weather: [],
      theme: ["校园", "青春", "寄托"]
    },
    {
      id: 148,
      title: "无与伦比的美丽",
      artist: "苏打绿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/148.mp3",
      genre: ["民谣摇滚", "抒情摇滚"],
      mood: ["温柔", "感动", "陪伴"],
      energy: "中速",
      weather: [],
      theme: ["友情", "陪伴"]
    },
    {
      id: 149,
      title: "时间的风",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/149.MP3",
      genre: ["流行"],
      mood: ["思念", "温柔", "坚定"],
      energy: "中速",
      weather: ["风"],
      theme: ["爱情", "异地", "电影"]
    },
    {
      id: 150,
      title: "凌香里",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/150.mp3",
      genre: ["流行", "童谣"],
      mood: ["怀旧", "怅然", "治愈"],
      energy: "舒缓",
      weather: [],
      theme: ["乡愁", "童年", "回忆"]
    },
    {
      id: 151,
      title: "无名之辈",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/151.mp3",
      genre: ["流行摇滚", "说唱"],
      mood: ["热血", "励志", "坚持"],
      energy: "激昂",
      weather: [],
      theme: ["梦想", "平凡", "电影"]
    },
    {
      id: 152,
      title: "夜空中最亮的星",
      artist: "逃跑计划",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/152.mp3",
      genre: ["流行摇滚"],
      mood: ["治愈", "希望", "坚定"],
      energy: "中速",
      weather: ["夜"],
      theme: ["梦想", "星空", "坚持"]
    },
    {
      id: 153,
      title: "巴赫旧约",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/153.mp3",
      genre: ["古典", "R&B"],
      mood: ["无奈", "青春", "神秘"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "校园"]
    },
    {
      id: 154,
      title: "耿",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/154.mp3",
      genre: ["流行", "抒情"],
      mood: ["温暖", "悲伤", "怀念"],
      energy: "舒缓",
      weather: ["夏"],
      theme: ["青春", "毕业", "电影"]
    },
    {
      id: 155,
      title: "忽而今夏",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/155.mp3",
      genre: ["流行"],
      mood: ["细腻", "无奈", "牵挂"],
      energy: "中速",
      weather: ["夏"],
      theme: ["爱情", "青春", "电视剧"]
    },
    {
      id: 156,
      title: "年轮",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/156.mp3",
      genre: ["流行", "抒情"],
      mood: ["凄美", "哀伤", "遗憾"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "时光", "电视剧"]
    },
    {
      id: 157,
      title: "晴",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/157.mp3",
      genre: ["流行"],
      mood: ["云淡风轻", "思念", "纠结"],
      energy: "舒缓",
      weather: ["晴"],
      theme: ["爱情", "释然"]
    },
    {
      id: 158,
      title: "三国杀",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/158.mp3",
      genre: ["中国风", "流行摇滚"],
      mood: ["豪迈", "悲壮", "武侠"],
      energy: "中速",
      weather: [],
      theme: ["历史", "游戏", "爱情"]
    },
    {
      id: 159,
      title: "我想念",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/159.mp3",
      genre: ["流行"],
      mood: ["思念", "伤情", "浓烈"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "思念", "电视剧"]
    },
    {
      id: 160,
      title: "像晴天像雨天",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/160.mp3",
      genre: ["流行"],
      mood: ["甜蜜", "心动", "浪漫"],
      energy: "轻快",
      weather: ["晴", "雨"],
      theme: ["爱情", "告白"]
    },
    {
      id: 161,
      title: "小星星",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/161.mp3",
      genre: ["流行"],
      mood: ["暗恋", "甜蜜", "执着"],
      energy: "轻快",
      weather: ["夜"],
      theme: ["爱情", "初恋"]
    },
    {
      id: 162,
      title: "最美的相约",
      artist: "王蓓 王上",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/162.mp3",
      genre: ["流行"],
      mood: ["温暖", "激昂", "青春"],
      energy: "轻快",
      weather: [],
      theme: ["青春", "家国"]
    },
    {
      id: 163,
      title: "匆匆那年",
      artist: "王菲",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/163.mp3",
      genre: ["流行"],
      mood: ["遗憾", "怀念", "空灵"],
      energy: "中速",
      weather: [],
      theme: ["青春", "爱情", "电影"]
    },
    {
      id: 164,
      title: "如愿",
      artist: "王菲",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/164.mp3",
      genre: ["流行"],
      mood: ["温暖", "感动", "深情"],
      energy: "中速",
      weather: [],
      theme: ["亲情", "家国", "传承"]
    },
    {
      id: 165,
      title: "世界赠予我的",
      artist: "王菲",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/165.mp3",
      genre: ["流行"],
      mood: ["温暖", "宁静", "治愈"],
      energy: "舒缓",
      weather: [],
      theme: ["人生", "感恩"]
    },
    {
      id: 166,
      title: "爱错",
      artist: "王力宏 单依纯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/166.mp3",
      genre: ["流行摇滚", "R&B"],
      mood: ["悲伤", "深情", "遗憾"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "错过"]
    },
    {
      id: 167,
      title: "第一天",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/167.mp3",
      genre: ["摇滚", "快歌"],
      mood: ["活力", "欢快", "甜蜜"],
      energy: "激昂",
      weather: [],
      theme: ["青春", "友情", "爱情"]
    },
    {
      id: 168,
      title: "倔强",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/168.mp3",
      genre: ["流行摇滚", "英式摇滚"],
      mood: ["倔强", "励志", "不妥协"],
      energy: "激昂",
      weather: [],
      theme: ["梦想", "坚持"]
    },
    {
      id: 169,
      title: "如烟",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/169.mp3",
      genre: ["流行摇滚"],
      mood: ["怀念", "思考", "浪漫"],
      energy: "中速",
      weather: [],
      theme: ["青春", "时间", "人生"]
    },
    {
      id: 170,
      title: "突然好想你",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/170.mp3",
      genre: ["抒情摇滚"],
      mood: ["思念", "酸涩", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 171,
      title: "温柔",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/171.mp3",
      genre: ["流行摇滚", "抒情摇滚"],
      mood: ["深情", "感伤", "祝福"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "放手"]
    },
    {
      id: 172,
      title: "笑忘歌",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/172.mp3",
      genre: ["流行摇滚"],
      mood: ["治愈", "怀念", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["青春", "友情", "纯真"]
    },
    {
      id: 173,
      title: "知足",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/173.mp3",
      genre: ["流行", "钢琴情歌"],
      mood: ["眷恋", "释然", "伤感"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "放手", "珍惜"]
    },
    {
      id: 174,
      title: "无羁",
      artist: "肖战 王一博",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/174.mp3",
      genre: ["古风", "国风"],
      mood: ["侠义", "羁绊", "深情"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "知己", "电视剧"]
    },
    {
      id: 175,
      title: "青柠",
      artist: "徐秉龙 桃十五",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/175.mp3",
      genre: ["流行", "民谣"],
      mood: ["清新", "甜蜜", "羞涩"],
      energy: "轻快",
      weather: ["夏"],
      theme: ["爱情", "初恋"]
    },
    {
      id: 176,
      title: "身骑白马",
      artist: "徐佳莹",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/176.mp3",
      genre: ["戏腔流行", "流行"],
      mood: ["倔强", "深情", "悲壮"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "坚守"]
    },
    {
      id: 177,
      title: "后会无期",
      artist: "徐良 汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/177.mp3",
      genre: ["流行", "抒情"],
      mood: ["温柔", "遗憾", "青春"],
      energy: "舒缓",
      weather: [],
      theme: ["青春", "离别", "爱情"]
    },
    {
      id: 178,
      title: "推开世界的门",
      artist: "杨乃文",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/178.mp3",
      genre: ["流行", "民谣摇滚"],
      mood: ["孤独", "洒脱", "辽阔"],
      energy: "中速",
      weather: [],
      theme: ["成长", "自我", "和解"]
    },
    {
      id: 179,
      title: "不老梦",
      artist: "银临",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/179.mp3",
      genre: ["古风"],
      mood: ["凄美", "哀恸", "执念"],
      energy: "舒缓",
      weather: [],
      theme: ["古风", "爱情"]
    },
    {
      id: 180,
      title: "棠梨煎雪",
      artist: "银临",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/180.mp3",
      genre: ["古风"],
      mood: ["悠然", "清新", "甜而不腻"],
      energy: "轻快",
      weather: ["雪"],
      theme: ["田园", "友情", "诗意"]
    },
    {
      id: 181,
      title: "当年情",
      artist: "张国荣",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/181.mp3",
      genre: ["中国风"],
      mood: ["豪情", "柔情", "霸气"],
      energy: "激昂",
      weather: [],
      theme: ["武侠", "爱情"]
    },
    {
      id: 182,
      title: "天下",
      artist: "张杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/182.mp3",
      genre: ["流行"],
      mood: ["励志", "温暖", "力量"],
      energy: "中速",
      weather: [],
      theme: ["亲情", "友情", "支持"]
    },
    {
      id: 183,
      title: "有形的翅膀",
      artist: "张韶涵",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/183.mp3",
      genre: ["主旋律", "流行"],
      mood: ["大气", "温暖", "喜悦"],
      energy: "中速",
      weather: ["夜"],
      theme: ["家国", "城市"]
    },
    {
      id: 184,
      title: "灯火里的中国",
      artist: "张也 周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/184.mp3",
      genre: ["民谣"],
      mood: ["舒缓", "怀念", "温情"],
      energy: "舒缓",
      weather: [],
      theme: ["城市", "乡愁", "爱情"]
    },
    {
      id: 185,
      title: "成都",
      artist: "赵雷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/185.mp3",
      genre: ["民谣"],
      mood: ["哀伤", "怀旧", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "旧时光"]
    },
    {
      id: 186,
      title: "程艾影",
      artist: "赵雷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/186.mp3",
      genre: ["民谣"],
      mood: ["温柔", "忧郁", "质朴"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "异乡"]
    },
    {
      id: 187,
      title: "南方姑娘",
      artist: "赵雷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/187.mp3",
      genre: ["民谣"],
      mood: ["温暖", "思念", "感人"],
      energy: "舒缓",
      weather: [],
      theme: ["亲情", "母亲"]
    },
    {
      id: 188,
      title: "我记得",
      artist: "赵雷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/188.mp3",
      genre: ["民谣"],
      mood: ["热血", "青春", "洒脱"],
      energy: "中速",
      weather: [],
      theme: ["青春", "旅途", "友情"]
    },
    {
      id: 189,
      title: "我们的时光",
      artist: "赵雷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/189.mp3",
      genre: ["流行", "苦情"],
      mood: ["忧郁", "苍凉", "撕心裂肺"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "失恋"]
    },
    {
      id: 190,
      title: "黄昏",
      artist: "周传雄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/190.mp3",
      genre: ["中国风", "流行"],
      mood: ["寂寞", "孤独", "落寞"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "离别"]
    },
    {
      id: 191,
      title: "寂寞沙洲冷",
      artist: "周传雄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/191.mp3",
      genre: ["中国风", "摇滚"],
      mood: ["落寞", "执着", "悠远"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "承诺"]
    },
    {
      id: 192,
      title: "青花",
      artist: "周传雄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/192.mp3",
      genre: ["武侠", "流行"],
      mood: ["大气", "悲怆", "哲理"],
      energy: "激昂",
      weather: [],
      theme: ["武侠", "佛理", "电视剧"]
    },
    {
      id: 193,
      title: "难念的经",
      artist: "周华健",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/193.mp3",
      genre: ["流行", "空灵"],
      mood: ["空灵", "温柔", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "守护", "动画电影"]
    },
    {
      id: 194,
      title: "大鱼",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/194.mp3",
      genre: ["流行民谣"],
      mood: ["孤独", "温柔", "治愈"],
      energy: "舒缓",
      weather: [],
      theme: ["孤独", "陪伴", "自我"]
    },
    {
      id: 195,
      title: "化身孤岛的鲸",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/195.mp3",
      genre: ["流行", "大气"],
      mood: ["震撼", "悲壮", "信念"],
      energy: "激昂",
      weather: [],
      theme: ["科幻", "人类", "命运", "电影"]
    },
    {
      id: 196,
      title: "人是_",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/196.mp3",
      genre: ["流行", "英文经典"],
      mood: ["励志", "温暖", "感恩"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "感恩"]
    },
    {
      id: 197,
      title: "翅膀+I believe I can fly",
      artist: "林俊杰 张艺兴",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/197.mp3",
      genre: ["古典", "摇滚", "迷幻"],
      mood: ["沉重", "哲理", "华丽"],
      energy: "中速",
      weather: [],
      theme: ["命运", "坚持", "神话"]
    },
    {
      id: 198,
      title: "未了",
      artist: "苏打绿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/198.mp3",
      genre: ["流行"],
      mood: ["阳光", "大气", "轻快"],
      energy: "轻快",
      weather: ["晴"],
      theme: ["梦想", "希望"]
    },
    {
      id: 199,
      title: "梦想天空分外蓝",
      artist: "陈奕迅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/199.mp3",
      genre: ["另类摇滚", "电音"],
      mood: ["恢宏", "悲怆", "内省"],
      energy: "激昂",
      weather: [],
      theme: ["电竞", "重生", "斗志"]
    },
    {
      id: 200,
      title: "Phoenix",
      artist: "英雄联盟",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/200.mp3",
      genre: ["纯音乐", "国风"],
      mood: ["空灵", "宁静", "温柔"],
      energy: "舒缓",
      weather: [],
      theme: ["传统", "神话", "山水"]
    },
    {
      id: 201,
      title: "青城山下白素贞",
      artist: "纯音乐",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/201.mp3",
      genre: ["纯音乐", "和风"],
      mood: ["明媚", "生机", "悠扬"],
      energy: "轻快",
      weather: ["春"],
      theme: ["春天", "希望"]
    },
    {
      id: 202,
      title: "雪花",
      artist: "北京爱乐合唱团",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/202.mp3",
      genre: ["流行", "粤语"],
      mood: ["深情", "无奈", "凄美"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "放手"]
    },
    {
      id: 203,
      title: "春よ、来い",
      artist: "纯音乐",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/203.mp3",
      genre: ["流行"],
      mood: ["孤独", "压抑", "寂寥"],
      energy: "舒缓",
      weather: ["夜"],
      theme: ["孤独", "都市"]
    },
    {
      id: 204,
      title: "富士山下",
      artist: "陈奕迅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/204.mp3",
      genre: ["流行"],
      mood: ["温柔", "治愈", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "时光", "电影"]
    },
    {
      id: 205,
      title: "孤独患者",
      artist: "陈奕迅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/205.mp3",
      genre: ["流行摇滚"],
      mood: ["恬淡", "忧伤", "治愈"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "等待"]
    },
    {
      id: 206,
      title: "因为爱情",
      artist: "陈奕迅 王菲",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/206.mp3",
      genre: ["抒情流行"],
      mood: ["凄美", "悲伤", "遗憾"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "成长", "错过"]
    },
    {
      id: 207,
      title: "下一个天亮",
      artist: "郭静",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/207.mp3",
      genre: ["古风", "国风"],
      mood: ["古典", "悲怆", "诗意"],
      energy: "中速",
      weather: [],
      theme: ["诗词", "传统"]
    },
    {
      id: 208,
      title: "后来",
      artist: "刘若英",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/208.mp3",
      genre: ["流行"],
      mood: ["缠绵", "思念", "伤感"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "思念"]
    },
    {
      id: 209,
      title: "琵琶行",
      artist: "奇然 沈谧仁",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/209.mp3",
      genre: ["流行"],
      mood: ["温暖", "惬意", "乐观"],
      energy: "轻快",
      weather: [],
      theme: ["生活", "治愈", "电影"]
    },
    {
      id: 210,
      title: "红豆",
      artist: "王菲",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/210.mp3",
      genre: ["流行", "粤语"],
      mood: ["成熟", "释然", "哲思"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "人生", "等待"]
    },
    {
      id: 211,
      title: "小美满",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/211.mp3",
      genre: ["抒情流行"],
      mood: ["遗憾", "释然", "怅惘"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "时间", "错过"]
    },
    {
      id: 212,
      title: "葡萄成熟时",
      artist: "陈奕迅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/212.mp3",
      genre: ["流行", "抒情"],
      mood: ["温暖", "安静", "甜蜜"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "思念"]
    },
    {
      id: 213,
      title: "十年",
      artist: "陈奕迅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/213.mp3",
      genre: ["流行", "英伦", "放克"],
      mood: ["轻快", "俏皮", "甜蜜"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "青春"]
    },
    {
      id: 214,
      title: "好安静",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/214.mp3",
      genre: ["流行"],
      mood: ["淡然", "遗憾", "洒脱"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "分手"]
    },
    {
      id: 215,
      title: "万有引力",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/215.mp3",
      genre: ["流行", "R&B"],
      mood: ["隐忍", "矛盾", "包容"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "包容"]
    },
    {
      id: 216,
      title: "不煽情",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/216.mp3",
      genre: ["蓝调", "流行"],
      mood: ["浪漫", "幽默", "闲情"],
      energy: "中速",
      weather: [],
      theme: ["生活", "电影", "爱情"]
    },
    {
      id: 217,
      title: "装糊涂",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/217.mp3",
      genre: ["流行"],
      mood: ["怀念", "伤感", "惆怅"],
      energy: "舒缓",
      weather: ["雪"],
      theme: ["爱情", "冬天"]
    },
    {
      id: 218,
      title: "羡慕",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/218.mp3",
      genre: ["流行"],
      mood: ["励志", "温暖", "感恩"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "成长"]
    },
    {
      id: 219,
      title: "又小雪",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/219.mp3",
      genre: ["电子舞曲"],
      mood: ["律动", "轻快", "释然"],
      energy: "激昂",
      weather: [],
      theme: ["感情", "放手"]
    },
    {
      id: 220,
      title: "2021听风捕梦",
      artist: "群星",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/220.MP3",
      genre: ["流行", "R&B"],
      mood: ["温柔", "抚慰", "浪漫"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "希望"]
    },
    {
      id: 221,
      title: "All Falls Down",
      artist: "Alan Walker",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/221.MP3",
      genre: ["流行", "电子", "另类摇滚"],
      mood: ["燃", "决心", "力量"],
      energy: "激昂",
      weather: [],
      theme: ["电竞", "奋斗"]
    },
    {
      id: 222,
      title: "Angel",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/222.MP3",
      genre: ["合成器流行"],
      mood: ["欢快", "伤感", "纠结"],
      energy: "轻快",
      weather: ["夏"],
      theme: ["爱情", "夏日"]
    },
    {
      id: 223,
      title: "Burn It All Down",
      artist: "英雄联盟",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/223.MP3",
      genre: ["复古迪斯科", "电子"],
      mood: ["热血", "青春", "不妥协"],
      energy: "激昂",
      weather: [],
      theme: ["青春", "希望", "时光"]
    },
    {
      id: 224,
      title: "Cruel Summer",
      artist: "Taylor Swift",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/224.MP3",
      genre: ["摇滚", "流行"],
      mood: ["壮阔", "希望", "昂扬"],
      energy: "激昂",
      weather: ["晴"],
      theme: ["爱情", "天空", "动画电影"]
    },
    {
      id: 225,
      title: "Forever Young",
      artist: "朴树",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/225.MP3",
      genre: ["摇滚", "流行"],
      mood: ["燃", "热血", "史诗"],
      energy: "激昂",
      weather: [],
      theme: ["电竞", "传奇", "坚持"]
    },
    {
      id: 226,
      title: "グランドエスケープ",
      artist: "Radwimps 三浦透子",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/226.MP3",
      genre: ["流行", "摇滚"],
      mood: ["哀伤", "缅怀", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["思念", "治愈"]
    },
    {
      id: 227,
      title: "Legends Never Die",
      artist: "英雄联盟",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/227.MP3",
      genre: ["乡村流行"],
      mood: ["浪漫", "甜蜜", "青春"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "童话"]
    },
    {
      id: 228,
      title: "Lemon",
      artist: "米津玄师",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/228.MP3",
      genre: ["流行"],
      mood: ["温柔", "浪漫", "永恒"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 229,
      title: "Love Story",
      artist: "Taylor Swift",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/229.MP3",
      genre: ["流行", "R&B"],
      mood: ["伤感", "怀念", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 230,
      title: "Lover",
      artist: "Taylor Swift",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/230.MP3",
      genre: ["流行", "轻音乐"],
      mood: ["清澈", "励志", "温暖"],
      energy: "轻快",
      weather: [],
      theme: ["梦想", "成长"]
    },
    {
      id: 231,
      title: "Melody",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/231.MP3",
      genre: ["R&B", "流行"],
      mood: ["伤感", "深情", "怀念"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 232,
      title: "Proud Of You",
      artist: "冯曦妤",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/232.MP3",
      genre: ["流行", "轻音乐"],
      mood: ["励志", "温暖", "治愈"],
      energy: "轻快",
      weather: [],
      theme: ["梦想", "亲情"]
    },
    {
      id: 233,
      title: "リセット",
      artist: "向井太一",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/233.MP3",
      genre: ["J-Pop", "R&B"],
      mood: ["清爽", "治愈", "激励"],
      energy: "中速",
      weather: ["风"],
      theme: ["青春", "运动"]
    },
    {
      id: 234,
      title: "Runaway",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/234.MP3",
      genre: ["摇滚", "民谣"],
      mood: ["冲破束缚", "自由", "冲动"],
      energy: "激昂",
      weather: [],
      theme: ["自由", "逃离", "自我"]
    },
    {
      id: 235,
      title: "See You Again",
      artist: "Wiz Khalifa&Charlie Puth",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/235.MP3",
      genre: ["抒情", "说唱"],
      mood: ["哀伤", "怀念", "祝福"],
      energy: "中速",
      weather: [],
      theme: ["友情", "告别", "电影"]
    },
    {
      id: 236,
      title: "Something Just Like This",
      artist: "The Chainsmokers&Coldplay",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/236.MP3",
      genre: ["电子", "未来贝斯", "流行摇滚"],
      mood: ["温暖", "治愈", "希望"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "平凡"]
    },
    {
      id: 237,
      title: "Sparks Fly",
      artist: "Taylor Swift",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/237.MP3",
      genre: ["乡村流行", "摇滚"],
      mood: ["欢快", "热情", "心动"],
      energy: "轻快",
      weather: ["夜"],
      theme: ["爱情", "青春"]
    },
    {
      id: 238,
      title: "Susan说",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/238.MP3",
      genre: ["R&B", "中国风"],
      mood: ["抒情", "婉转", "浪漫"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "京剧", "古典"]
    },
    {
      id: 239,
      title: "Take Me To Your Heart",
      artist: "Michael Learns to Rock",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/239.MP3",
      genre: ["抒情摇滚", "流行"],
      mood: ["温暖", "深情", "浪漫"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "经典"]
    },
    {
      id: 240,
      title: "Try Everything",
      artist: "Shakira",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/240.MP3",
      genre: ["拉丁流行", "舞曲"],
      mood: ["动感", "励志", "活力"],
      energy: "激昂",
      weather: [],
      theme: ["梦想", "尝试", "动画电影"]
    },
    {
      id: 241,
      title: "Viva La Vida",
      artist: "Coldplay",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/241.MP3",
      genre: ["另类摇滚", "流行"],
      mood: ["恢弘", "悲怆", "激昂"],
      energy: "激昂",
      weather: [],
      theme: ["历史", "权力", "生命"]
    },
    {
      id: 242,
      title: "Waka Waka",
      artist: "Shakira",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/242.MP3",
      genre: ["世界音乐", "拉丁"],
      mood: ["欢快", "激情", "非洲风情"],
      energy: "激昂",
      weather: [],
      theme: ["体育", "团结"]
    },
    {
      id: 243,
      title: "Wavin' Flag",
      artist: "K'naan",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/243.MP3",
      genre: ["说唱", "世界音乐"],
      mood: ["希望", "自由", "燃"],
      energy: "中速",
      weather: [],
      theme: ["和平", "自由", "体育"]
    },
    {
      id: 244,
      title: "We Are One (Ole Ola)",
      artist: "Pitbull Jennifer Lopez Claudia Leitte",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/244.MP3",
      genre: ["拉丁流行"],
      mood: ["欢快", "热血", "团结"],
      energy: "激昂",
      weather: [],
      theme: ["体育", "团结"]
    },
    {
      id: 245,
      title: "We'll Meet Again",
      artist: "The Fat Rat",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/245.MP3",
      genre: ["电子", "流行"],
      mood: ["压抑", "昂扬", "希望"],
      energy: "激昂",
      weather: [],
      theme: ["重逢", "告别"]
    },
    {
      id: 246,
      title: "Young And Beautiful",
      artist: "Lana Del Rey",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/246.MP3",
      genre: ["复古流行", "爵士", "巴洛克"],
      mood: ["忧郁", "华丽", "宿命"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "时光", "电影"]
    },
    {
      id: 247,
      title: "Young",
      artist: "TFBoys",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/247.MP3",
      genre: ["流行"],
      mood: ["迷茫", "坚定", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["青春", "成长", "梦想"]
    },
    {
      id: 248,
      title: "阿拉斯加海湾",
      artist: "蓝心羽",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/248.MP3",
      genre: ["流行"],
      mood: ["遗憾", "温柔", "伤感"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "遗憾"]
    },
    {
      id: 249,
      title: "爱，很简单",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/249.MP3",
      genre: ["流行", "R&B"],
      mood: ["深情", "纯粹", "浪漫"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "告白"]
    },
    {
      id: 250,
      title: "爱我还是他",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/250.MP3",
      genre: ["流行", "R&B"],
      mood: ["挣扎", "煎熬", "伤感"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "抉择"]
    },
    {
      id: 251,
      title: "安河桥",
      artist: "宋东野",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/251.MP3",
      genre: ["民谣"],
      mood: ["怀旧", "感伤", "温暖"],
      energy: "舒缓",
      weather: [],
      theme: ["童年", "回忆", "城市"]
    },
    {
      id: 252,
      title: "暗恋",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/252.MP3",
      genre: ["英伦摇滚", "现代摇滚"],
      mood: ["渴望", "游移", "伤感"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "暗恋"]
    },
    {
      id: 253,
      title: "半晴天",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/253.MP3",
      genre: ["流行", "R&B"],
      mood: ["温馨", "励志", "患得患失"],
      energy: "中速",
      weather: ["晴"],
      theme: ["爱情", "毕业", "希望"]
    },
    {
      id: 254,
      title: "不该",
      artist: "周杰伦 张惠妹",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/254.MP3",
      genre: ["流行"],
      mood: ["唯美", "哀伤", "遗憾"],
      energy: "舒缓",
      weather: ["雪"],
      theme: ["爱情", "回忆", "对唱"]
    },
    {
      id: 255,
      title: "不将就",
      artist: "李荣浩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/255.MP3",
      genre: ["流行"],
      mood: ["深情", "无奈", "坚定"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "执着", "电影"]
    },
    {
      id: 256,
      title: "不能说的秘密",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/256.MP3",
      genre: ["英式摇滚"],
      mood: ["悬疑", "浪漫", "孤独"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "校园", "电影"]
    },
    {
      id: 257,
      title: "不染",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/257.MP3",
      genre: ["古风", "流行"],
      mood: ["宿命", "清冷", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["仙侠", "爱情"]
    },
    {
      id: 258,
      title: "不完美小孩",
      artist: "TFBoys",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/258.MP3",
      genre: ["流行"],
      mood: ["温情", "感恩", "柔软"],
      energy: "舒缓",
      weather: [],
      theme: ["亲情", "成长", "感恩"]
    },
    {
      id: 259,
      title: "猜不透",
      artist: "丁当",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/259.MP3",
      genre: ["流行", "R&B", "抒情摇滚"],
      mood: ["心痛", "困惑", "坚强"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "猜疑"]
    },
    {
      id: 260,
      title: "才二十三",
      artist: "方大同",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/260.MP3",
      genre: ["新灵魂乐", "流行"],
      mood: ["哲思", "怀念", "淡然"],
      energy: "舒缓",
      weather: [],
      theme: ["时间", "成长", "人生"]
    },
    {
      id: 261,
      title: "沧海一声笑(Live)",
      artist: "GAI周延",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/261.MP3",
      genre: ["说唱", "国风"],
      mood: ["豪迈", "狂傲", "热血"],
      energy: "激昂",
      weather: [],
      theme: ["江湖", "武侠", "经典"]
    },
    {
      id: 262,
      title: "侧脸",
      artist: "雨果",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/262.MP3",
      genre: ["流行"],
      mood: ["心酸", "伤感", "洒脱"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "分手", "成长"]
    },
    {
      id: 263,
      title: "曾经的你",
      artist: "许巍",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/263.MP3",
      genre: ["摇滚"],
      mood: ["怀念", "释然", "励志"],
      energy: "中速",
      weather: [],
      theme: ["青春", "梦想"]
    },
    {
      id: 264,
      title: "茶啊少年",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/264.MP3",
      genre: ["流行"],
      mood: ["热血", "青春", "活泼"],
      energy: "激昂",
      weather: [],
      theme: ["青春", "影视OST"]
    },
    {
      id: 265,
      title: "赤伶",
      artist: "HITA",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/265.MP3",
      genre: ["古风"],
      mood: ["悲壮", "凄美", "坚定"],
      energy: "中速",
      weather: [],
      theme: ["家国", "历史"]
    },
    {
      id: 266,
      title: "春风十里",
      artist: "鹿先森乐队",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/266.MP3",
      genre: ["民谣"],
      mood: ["深情", "温暖", "思念"],
      energy: "中速",
      weather: ["春", "风"],
      theme: ["爱情"]
    },
    {
      id: 267,
      title: "春庭雪",
      artist: "橙翼",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/267.MP3",
      genre: ["古风"],
      mood: ["哀愁", "遗憾", "深情"],
      energy: "舒缓",
      weather: ["雪"],
      theme: ["爱情", "离别"]
    },
    {
      id: 268,
      title: "打上花火",
      artist: "米津玄师&DAOKO",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/268.MP3",
      genre: ["流行", "电子"],
      mood: ["青春", "浪漫", "甜蜜"],
      energy: "中速",
      weather: ["夏", "夜"],
      theme: ["青春", "爱情", "影视OST"]
    },
    {
      id: 269,
      title: "大约在冬季",
      artist: "齐秦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/269.MP3",
      genre: ["流行"],
      mood: ["深情", "思念", "伤感"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "离别"]
    },
    {
      id: 270,
      title: "大丈夫",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/270.MP3",
      genre: ["流行"],
      mood: ["温柔", "治愈", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 271,
      title: "单车",
      artist: "陈奕迅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/271.MP3",
      genre: ["流行"],
      mood: ["深情", "怀念", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["亲情"]
    },
    {
      id: 272,
      title: "当",
      artist: "动力火车",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/272.MP3",
      genre: ["流行", "摇滚"],
      mood: ["豪迈", "深情", "热血"],
      energy: "激昂",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 273,
      title: "稻香",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/273.MP3",
      genre: ["流行", "嘻哈", "民谣"],
      mood: ["治愈", "励志", "温暖"],
      energy: "轻快",
      weather: ["夏"],
      theme: ["童年", "故乡", "梦想"]
    },
    {
      id: 274,
      title: "等你下课",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/274.MP3",
      genre: ["流行"],
      mood: ["甜蜜", "青涩", "深情"],
      energy: "中速",
      weather: [],
      theme: ["青春", "爱情"]
    },
    {
      id: 275,
      title: "东风破",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/275.MP3",
      genre: ["中国风", "R&B"],
      mood: ["哀愁", "深情", "凄美"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "离别"]
    },
    {
      id: 276,
      title: "动物世界",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/276.MP3",
      genre: ["流行"],
      mood: ["压抑", "冷峻", "讽刺"],
      energy: "中速",
      weather: [],
      theme: ["社会", "爱情"]
    },
    {
      id: 277,
      title: "二十二",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/277.MP3",
      genre: ["R&B", "流行"],
      mood: ["青春", "迷惘", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["青春", "成长"]
    },
    {
      id: 278,
      title: "发如雪",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/278.MP3",
      genre: ["中国风"],
      mood: ["凄美", "深情", "苍凉"],
      energy: "中速",
      weather: ["雪"],
      theme: ["爱情", "离别"]
    },
    {
      id: 279,
      title: "方的言(Live)",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/279.MP3",
      genre: ["流行"],
      mood: ["温情", "思念", "励志"],
      energy: "中速",
      weather: [],
      theme: ["故乡", "梦想"]
    },
    {
      id: 280,
      title: "飞机场的10:30",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/280.MP3",
      genre: ["R&B"],
      mood: ["深情", "思念", "伤感"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 281,
      title: "飞云之下",
      artist: "韩红 林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/281.MP3",
      genre: ["流行"],
      mood: ["温暖", "治愈", "励志"],
      energy: "中速",
      weather: [],
      theme: ["梦想"]
    },
    {
      id: 282,
      title: "粉色信笺",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/282.MP3",
      genre: ["流行"],
      mood: ["青涩", "思念", "朦胧"],
      energy: "中速",
      weather: ["雪"],
      theme: ["爱情", "青春"]
    },
    {
      id: 283,
      title: "枫",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/283.MP3",
      genre: ["流行", "摇滚"],
      mood: ["伤感", "思念", "萧瑟"],
      energy: "中速",
      weather: ["风"],
      theme: ["爱情", "离别"]
    },
    {
      id: 284,
      title: "蜂鸟",
      artist: "吴青峰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/284.MP3",
      genre: ["流行"],
      mood: ["励志", "坚定", "希望"],
      energy: "轻快",
      weather: [],
      theme: ["梦想", "自我"]
    },
    {
      id: 285,
      title: "干杯",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/285.MP3",
      genre: ["摇滚", "流行"],
      mood: ["怀念", "洒脱", "感动"],
      energy: "中速",
      weather: [],
      theme: ["友情", "青春"]
    },
    {
      id: 286,
      title: "刚刚好",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/286.MP3",
      genre: ["流行"],
      mood: ["伤感", "深情", "释然"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "分手"]
    },
    {
      id: 287,
      title: "刚好遇见你",
      artist: "李玉刚",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/287.MP3",
      genre: ["流行"],
      mood: ["温暖", "感动", "深情"],
      energy: "中速",
      weather: [],
      theme: ["回忆", "相遇"]
    },
    {
      id: 288,
      title: "告白气球",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/288.MP3",
      genre: ["流行", "R&B"],
      mood: ["甜蜜", "浪漫", "轻快"],
      energy: "轻快",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 289,
      title: "搁浅",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/289.MP3",
      genre: ["流行"],
      mood: ["伤感", "压抑", "愧疚"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "分手"]
    },
    {
      id: 290,
      title: "歌颂者",
      artist: "吴青峰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/290.MP3",
      genre: ["流行"],
      mood: ["温柔", "坚定", "感恩"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "自我"]
    },
    {
      id: 291,
      title: "给我一首歌的时间",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/291.MP3",
      genre: ["R&B", "流行"],
      mood: ["深情", "浪漫", "遗憾"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 292,
      title: "光亮",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/292.MP3",
      genre: ["中国风", "流行"],
      mood: ["苍凉", "坚定", "希望"],
      energy: "中速",
      weather: [],
      theme: ["历史", "希望", "影视OST"]
    },
    {
      id: 293,
      title: "裹着心的光",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/293.MP3",
      genre: ["流行"],
      mood: ["温暖", "治愈", "深情"],
      energy: "中速",
      weather: [],
      theme: ["希望", "陪伴"]
    },
    {
      id: 294,
      title: "爱にできることはまだあるかい",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/294.MP3",
      genre: ["摇滚", "流行"],
      mood: ["深情", "伤感", "希望"],
      energy: "中速",
      weather: ["雨"],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 295,
      title: "海阔天空",
      artist: "Beyond",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/295.MP3",
      genre: ["摇滚"],
      mood: ["励志", "豪迈", "坚定"],
      energy: "激昂",
      weather: [],
      theme: ["梦想", "自由"]
    },
    {
      id: 296,
      title: "海鸥",
      artist: "逃跑计划",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/296.MP3",
      genre: ["摇滚", "流行"],
      mood: ["治愈", "释然", "孤独"],
      energy: "中速",
      weather: ["风"],
      theme: ["自由", "治愈"]
    },
    {
      id: 297,
      title: "好好",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/297.MP3",
      genre: ["流行"],
      mood: ["温柔", "温暖", "释然"],
      energy: "中速",
      weather: [],
      theme: ["友情", "青春", "影视OST"]
    },
    {
      id: 298,
      title: "浩瀚",
      artist: "张杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/298.MP3",
      genre: ["中国风", "流行"],
      mood: ["豪迈", "深情", "大气"],
      energy: "激昂",
      weather: [],
      theme: ["江湖", "影视OST"]
    },
    {
      id: 299,
      title: "河流(Live)",
      artist: "川川",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/299.MP3",
      genre: ["民谣", "摇滚"],
      mood: ["深情", "沧桑", "思念"],
      energy: "中速",
      weather: [],
      theme: ["故乡", "人生"]
    },
    {
      id: 300,
      title: "黑色柳丁",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/300.MP3",
      genre: ["摇滚", "R&B"],
      mood: ["压抑", "孤独", "悲愤"],
      energy: "中速",
      weather: [],
      theme: ["社会", "孤独"]
    },
    {
      id: 301,
      title: "红尘客栈",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/301.MP3",
      genre: ["中国风"],
      mood: ["潇洒", "深情", "苍凉"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "爱情"]
    },
    {
      id: 302,
      title: "红玫瑰",
      artist: "陈奕迅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/302.MP3",
      genre: ["流行"],
      mood: ["无奈", "深情", "压抑"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 303,
      title: "红绣花",
      artist: "门尼",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/303.MP3",
      genre: ["摇滚", "民谣"],
      mood: ["深情", "思念", "悲壮"],
      energy: "中速",
      weather: ["夏"],
      theme: ["爱情", "故乡"]
    },
    {
      id: 304,
      title: "蝴蝶",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/304.MP3",
      genre: ["摇滚", "R&B"],
      mood: ["治愈", "坚定", "感恩"],
      energy: "中速",
      weather: [],
      theme: ["亲情", "希望"]
    },
    {
      id: 305,
      title: "花海",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/305.MP3",
      genre: ["流行"],
      mood: ["深情", "遗憾", "浪漫"],
      energy: "中速",
      weather: ["春"],
      theme: ["爱情"]
    },
    {
      id: 306,
      title: "花火大会",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/306.MP3",
      genre: ["流行", "原声"],
      mood: ["浪漫", "温暖", "绚丽"],
      energy: "中速",
      weather: ["夏", "夜"],
      theme: ["影视OST"]
    },
    {
      id: 307,
      title: "花开忘忧",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/307.MP3",
      genre: ["流行", "民谣"],
      mood: ["温暖", "治愈", "感动"],
      energy: "舒缓",
      weather: [],
      theme: ["亲情", "回忆"]
    },
    {
      id: 308,
      title: "黄昏之时",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/308.MP3",
      genre: ["原声"],
      mood: ["温柔", "梦幻", "怀念"],
      energy: "舒缓",
      weather: [],
      theme: ["影视OST"]
    },
    {
      id: 309,
      title: "灰色と青",
      artist: "米津玄师 菅田将晖",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/309.MP3",
      genre: ["流行"],
      mood: ["怀念", "青春", "温柔"],
      energy: "中速",
      weather: ["夏"],
      theme: ["青春", "友情"]
    },
    {
      id: 310,
      title: "スパークル",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/310.MP3",
      genre: ["摇滚", "流行"],
      mood: ["深情", "浪漫", "希望"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 311,
      title: "羁绊",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/311.MP3",
      genre: ["中国风", "流行"],
      mood: ["深情", "忧伤", "温柔"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "江湖", "影视OST"]
    },
    {
      id: 312,
      title: "记念",
      artist: "雷雨心",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/312.MP3",
      genre: ["流行"],
      mood: ["怀念", "青春", "感动"],
      energy: "中速",
      weather: [],
      theme: ["青春", "校园"]
    },
    {
      id: 313,
      title: "寂寞的季节",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/313.MP3",
      genre: ["流行"],
      mood: ["孤独", "伤感", "怀念"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "孤独"]
    },
    {
      id: 314,
      title: "嘉宾",
      artist: "张远",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/314.MP3",
      genre: ["流行"],
      mood: ["伤感", "苦涩", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "分手"]
    },
    {
      id: 315,
      title: "剑魂",
      artist: "李炜",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/315.MP3",
      genre: ["中国风", "流行"],
      mood: ["潇洒", "青涩", "豪迈"],
      energy: "中速",
      weather: ["雨", "夜"],
      theme: ["江湖", "影视OST"]
    },
    {
      id: 316,
      title: "剑心",
      artist: "张杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/316.MP3",
      genre: ["中国风", "流行"],
      mood: ["热血", "豪迈", "坚定"],
      energy: "激昂",
      weather: [],
      theme: ["江湖", "影视OST"]
    },
    {
      id: 317,
      title: "江湖天下",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/317.MP3",
      genre: ["中国风", "流行"],
      mood: ["深情", "思念", "遗憾"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "爱情", "影视OST"]
    },
    {
      id: 318,
      title: "江湖之间",
      artist: "曹雨航 朝歌夜弦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/318.MP3",
      genre: ["古风"],
      mood: ["深情", "苍凉", "洒脱"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "爱情"]
    },
    {
      id: 319,
      title: "将故事写成我们",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/319.MP3",
      genre: ["流行"],
      mood: ["深情", "浪漫", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 320,
      title: "戒烟",
      artist: "李荣浩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/320.MP3",
      genre: ["流行"],
      mood: ["洒脱", "深情", "诙谐"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 321,
      title: "锦鲤抄",
      artist: "银临 云の泣",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/321.MP3",
      genre: ["古风"],
      mood: ["凄美", "深情", "怀念"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "传奇"]
    },
    {
      id: 322,
      title: "九儿",
      artist: "韩红",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/322.MP3",
      genre: ["流行", "民歌"],
      mood: ["悲壮", "深情", "坚强"],
      energy: "激昂",
      weather: [],
      theme: ["家国", "影视OST"]
    },
    {
      id: 323,
      title: "就是爱你",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/323.MP3",
      genre: ["流行", "摇滚"],
      mood: ["温暖", "浪漫", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 324,
      title: "就是哪吒",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/324.MP3",
      genre: ["摇滚", "电子"],
      mood: ["热血", "叛逆", "坚定"],
      energy: "激昂",
      weather: [],
      theme: ["自我", "抗争", "影视OST"]
    },
    {
      id: 325,
      title: "菊花台",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/325.MP3",
      genre: ["中国风"],
      mood: ["哀伤", "思念", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "离别", "影视OST"]
    },
    {
      id: 326,
      title: "开始懂了",
      artist: "孙燕姿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/326.MP3",
      genre: ["流行"],
      mood: ["释然", "伤感", "清醒"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "成长"]
    },
    {
      id: 327,
      title: "看得最远的地方",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/327.MP3",
      genre: ["流行"],
      mood: ["治愈", "温暖", "励志"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "希望"]
    },
    {
      id: 328,
      title: "刻在我心底的名字(Live)",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/328.MP3",
      genre: ["流行"],
      mood: ["深情", "怀念", "伤感"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 329,
      title: "兰亭序",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/329.MP3",
      genre: ["中国风"],
      mood: ["深情", "惆怅", "浪漫"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 330,
      title: "蓝莲花",
      artist: "许巍",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/330.MP3",
      genre: ["摇滚"],
      mood: ["坚定", "释然", "励志"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "信念"]
    },
    {
      id: 331,
      title: "老街",
      artist: "李荣浩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/331.MP3",
      genre: ["流行"],
      mood: ["怀念", "伤感", "孤独"],
      energy: "中速",
      weather: [],
      theme: ["故乡", "回忆"]
    },
    {
      id: 332,
      title: "老男孩",
      artist: "筷子兄弟",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/332.MP3",
      genre: ["流行", "摇滚"],
      mood: ["怀念", "励志", "伤感"],
      energy: "中速",
      weather: [],
      theme: ["青春", "梦想"]
    },
    {
      id: 333,
      title: "恋曲1980",
      artist: "罗大佑",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/333.MP3",
      genre: ["民谣", "流行"],
      mood: ["释然", "深情", "青春"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "青春"]
    },
    {
      id: 334,
      title: "天天",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/334.MP3",
      genre: ["R&B", "流行"],
      mood: ["甜蜜", "思念", "浪漫"],
      energy: "中速",
      weather: ["晴", "雨"],
      theme: ["爱情"]
    },
    {
      id: 335,
      title: "夜曲",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/335.MP3",
      genre: ["R&B", "流行"],
      mood: ["凄美", "悲伤", "绝望"],
      energy: "中速",
      weather: ["夜"],
      theme: ["爱情", "失去"]
    },
    {
      id: 336,
      title: "凉凉",
      artist: "杨宗纬 张碧晨",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/336.MP3",
      genre: ["流行"],
      mood: ["忧伤", "深情", "凄美"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 337,
      title: "すずめ",
      artist: "十明",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/337.MP3",
      genre: ["流行"],
      mood: ["希望", "治愈", "感动"],
      energy: "中速",
      weather: [],
      theme: ["成长", "希望", "影视OST"]
    },
    {
      id: 338,
      title: "流沙",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/338.MP3",
      genre: ["R&B", "流行"],
      mood: ["伤感", "深情", "挣扎"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 339,
      title: "绿光",
      artist: "孙燕姿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/339.MP3",
      genre: ["流行", "电子"],
      mood: ["活泼", "振奋", "希望"],
      energy: "轻快",
      weather: [],
      theme: ["希望", "梦想"]
    },
    {
      id: 340,
      title: "麻雀",
      artist: "李荣浩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/340.MP3",
      genre: ["流行"],
      mood: ["倔强", "温柔", "希望"],
      energy: "中速",
      weather: [],
      theme: ["平凡", "梦想"]
    },
    {
      id: 341,
      title: "漫长的告白",
      artist: "双笙",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/341.MP3",
      genre: ["流行"],
      mood: ["甜蜜", "温柔", "青春"],
      energy: "中速",
      weather: [],
      theme: ["青春", "爱情", "影视OST"]
    },
    {
      id: 342,
      title: "慢慢喜欢你",
      artist: "莫文蔚",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/342.MP3",
      genre: ["流行"],
      mood: ["甜蜜", "温柔", "浪漫"],
      energy: "舒缓",
      weather: ["春"],
      theme: ["爱情"]
    },
    {
      id: 343,
      title: "なんでもないや",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/343.MP3",
      genre: ["摇滚", "流行"],
      mood: ["青春", "释然", "深情"],
      energy: "中速",
      weather: [],
      theme: ["青春", "爱情", "影视OST"]
    },
    {
      id: 344,
      title: "没想到",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/344.MP3",
      genre: ["流行"],
      mood: ["深情", "浪漫", "温柔"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 345,
      title: "玫瑰少年(Live)",
      artist: "蔡依林 五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/345.MP3",
      genre: ["流行", "摇滚"],
      mood: ["励志", "坚定", "勇敢"],
      energy: "激昂",
      weather: [],
      theme: ["自我", "抗争"]
    },
    {
      id: 346,
      title: "美丽的神话",
      artist: "韩红 孙楠",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/346.MP3",
      genre: ["流行"],
      mood: ["深情", "凄美", "坚定"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 347,
      title: "梦灯笼",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/347.MP3",
      genre: ["摇滚", "电子"],
      mood: ["青春", "热血", "希望"],
      energy: "轻快",
      weather: [],
      theme: ["青春", "梦想", "影视OST"]
    },
    {
      id: 348,
      title: "米店",
      artist: "张玮玮",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/348.MP3",
      genre: ["民谣"],
      mood: ["温柔", "深情", "恬淡"],
      energy: "舒缓",
      weather: ["雨", "春"],
      theme: ["爱情", "远方"]
    },
    {
      id: 349,
      title: "明明就",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/349.MP3",
      genre: ["流行"],
      mood: ["深情", "倔强", "伤感"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 350,
      title: "明日坐标",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/350.MP3",
      genre: ["流行"],
      mood: ["温暖", "坚定", "感动"],
      energy: "中速",
      weather: [],
      theme: ["友情", "梦想", "影视OST"]
    },
    {
      id: 351,
      title: "明天会更好",
      artist: "卓依婷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/351.MP3",
      genre: ["流行"],
      mood: ["希望", "温暖", "励志"],
      energy: "中速",
      weather: [],
      theme: ["希望", "公益"]
    },
    {
      id: 352,
      title: "莫莉(Live)",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/352.MP3",
      genre: ["流行"],
      mood: ["温柔", "感动", "治愈"],
      energy: "舒缓",
      weather: [],
      theme: ["亲情", "成长"]
    },
    {
      id: 353,
      title: "牧马城市",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/353.MP3",
      genre: ["流行"],
      mood: ["坚韧", "迷惘", "沧桑"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "城市"]
    },
    {
      id: 354,
      title: "那些你很冒险的梦",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/354.MP3",
      genre: ["流行"],
      mood: ["伤感", "深情", "无奈"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "梦想"]
    },
    {
      id: 355,
      title: "那些年",
      artist: "胡夏",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/355.MP3",
      genre: ["流行"],
      mood: ["怀念", "青春", "遗憾"],
      energy: "中速",
      weather: [],
      theme: ["青春", "爱情", "影视OST"]
    },
    {
      id: 356,
      title: "那一天",
      artist: "鞠婧祎",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/356.MP3",
      genre: ["流行"],
      mood: ["青春", "怀念", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["青春", "校园", "影视OST"]
    },
    {
      id: 357,
      title: "你曾是少年",
      artist: "S.H.E",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/357.MP3",
      genre: ["流行"],
      mood: ["青春", "励志", "感动"],
      energy: "轻快",
      weather: [],
      theme: ["青春", "梦想", "影视OST"]
    },
    {
      id: 358,
      title: "你从未离去",
      artist: "白挺",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/358.MP3",
      genre: ["流行"],
      mood: ["温暖", "伤感", "治愈"],
      energy: "舒缓",
      weather: ["雪"],
      theme: ["陪伴", "友情", "影视OST"]
    },
    {
      id: 359,
      title: "你听得到",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/359.MP3",
      genre: ["R&B", "流行"],
      mood: ["温馨", "甜蜜", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 360,
      title: "逆光",
      artist: "孙燕姿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/360.MP3",
      genre: ["流行"],
      mood: ["坚定", "希望", "倔强"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "希望"]
    },
    {
      id: 361,
      title: "匿名的安慰",
      artist: "王心凌",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/361.MP3",
      genre: ["流行"],
      mood: ["温暖", "治愈", "感动"],
      energy: "中速",
      weather: [],
      theme: ["感恩", "成长"]
    },
    {
      id: 362,
      title: "年少有为",
      artist: "李荣浩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/362.MP3",
      genre: ["流行"],
      mood: ["遗憾", "伤感", "沧桑"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "遗憾"]
    },
    {
      id: 363,
      title: "泡沫",
      artist: "G.E.M.邓紫棋",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/363.MP3",
      genre: ["流行"],
      mood: ["伤感", "压抑", "释然"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "欺骗"]
    },
    {
      id: 364,
      title: "陪你",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/364.MP3",
      genre: ["中国风", "R&B"],
      mood: ["深情", "温暖", "坚定"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "陪伴"]
    },
    {
      id: 365,
      title: "陪你度过漫长岁月",
      artist: "陈奕迅",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/365.MP3",
      genre: ["流行"],
      mood: ["温暖", "治愈", "深情"],
      energy: "中速",
      weather: [],
      theme: ["陪伴", "爱情", "影视OST"]
    },
    {
      id: 366,
      title: "偏偏喜欢你",
      artist: "陈百强",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/366.MP3",
      genre: ["流行", "中国风"],
      mood: ["深情", "苦涩", "忧郁"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 367,
      title: "蒲公英的约定",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/367.MP3",
      genre: ["流行", "民谣"],
      mood: ["怀念", "青涩", "惆怅"],
      energy: "中速",
      weather: ["夏"],
      theme: ["青春", "爱情"]
    },
    {
      id: 368,
      title: "普通",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/368.MP3",
      genre: ["流行"],
      mood: ["励志", "倔强", "热血"],
      energy: "激昂",
      weather: [],
      theme: ["青春", "梦想", "影视OST"]
    },
    {
      id: 369,
      title: "普通朋友",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/369.MP3",
      genre: ["R&B"],
      mood: ["矛盾", "深情", "无奈"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 370,
      title: "七里香",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/370.MP3",
      genre: ["流行", "民谣"],
      mood: ["甜蜜", "浪漫", "青春"],
      energy: "中速",
      weather: ["夏", "夜", "雨"],
      theme: ["青春", "爱情"]
    },
    {
      id: 371,
      title: "其实都没有",
      artist: "杨宗纬",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/371.MP3",
      genre: ["流行"],
      mood: ["释然", "沧桑", "淡然"],
      energy: "舒缓",
      weather: [],
      theme: ["人生", "回忆"]
    },
    {
      id: 372,
      title: "奇妙能力歌",
      artist: "陈粒",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/372.MP3",
      genre: ["民谣"],
      mood: ["孤独", "思念", "清冷"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "自由"]
    },
    {
      id: 373,
      title: "千里之外",
      artist: "费玉清 周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/373.MP3",
      genre: ["中国风", "R&B"],
      mood: ["凄美", "感伤", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "离别"]
    },
    {
      id: 374,
      title: "千千阙歌",
      artist: "陈慧娴",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/374.MP3",
      genre: ["流行"],
      mood: ["伤感", "深情", "不舍"],
      energy: "中速",
      weather: [],
      theme: ["离别", "友情"]
    },
    {
      id: 375,
      title: "牵丝戏",
      artist: "银临 Aki阿杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/375.MP3",
      genre: ["古风"],
      mood: ["凄美", "深情", "怀念"],
      energy: "中速",
      weather: [],
      theme: ["陪伴", "传奇"]
    },
    {
      id: 376,
      title: "前前前世",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/376.MP3",
      genre: ["摇滚", "流行"],
      mood: ["热血", "深情", "青春"],
      energy: "激昂",
      weather: [],
      theme: ["青春", "爱情", "影视OST"]
    },
    {
      id: 377,
      title: "青春大概",
      artist: "王上",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/377.MP3",
      genre: ["民谣", "流行"],
      mood: ["释然", "怀念", "青春"],
      energy: "中速",
      weather: [],
      theme: ["青春", "校园"]
    },
    {
      id: 378,
      title: "青花瓷",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/378.MP3",
      genre: ["中国风"],
      mood: ["深情", "含蓄", "浪漫"],
      energy: "中速",
      weather: ["雨"],
      theme: ["爱情", "古典"]
    },
    {
      id: 379,
      title: "青火",
      artist: "黄子弘凡",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/379.MP3",
      genre: ["流行"],
      mood: ["励志", "热血", "坚定"],
      energy: "激昂",
      weather: [],
      theme: ["青春", "梦想"]
    },
    {
      id: 380,
      title: "倾尽天下",
      artist: "河图",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/380.MP3",
      genre: ["古风"],
      mood: ["悲凉", "深情", "豪迈"],
      energy: "中速",
      weather: [],
      theme: ["江湖", "爱情", "历史"]
    },
    {
      id: 381,
      title: "情非得已",
      artist: "庾澄庆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/381.MP3",
      genre: ["流行", "摇滚"],
      mood: ["甜蜜", "悸动", "青涩"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "青春"]
    },
    {
      id: 382,
      title: "情歌",
      artist: "梁静茹",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/382.MP3",
      genre: ["流行"],
      mood: ["温柔", "伤感", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 383,
      title: "情是何物",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/383.MP3",
      genre: ["中国风", "流行"],
      mood: ["深情", "凄美", "苍凉"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "古典"]
    },
    {
      id: 384,
      title: "晴天",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/384.MP3",
      genre: ["流行"],
      mood: ["遗憾", "怀念", "青涩"],
      energy: "中速",
      weather: ["雨"],
      theme: ["青春", "爱情"]
    },
    {
      id: 385,
      title: "去明天",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/385.MP3",
      genre: ["流行"],
      mood: ["希望", "温暖", "治愈"],
      energy: "中速",
      weather: [],
      theme: ["青春", "毕业", "梦想"]
    },
    {
      id: 386,
      title: "去有风的地方",
      artist: "郁可唯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/386.MP3",
      genre: ["流行"],
      mood: ["治愈", "温暖", "宁静"],
      energy: "舒缓",
      weather: ["风", "晴"],
      theme: ["远方", "治愈"]
    },
    {
      id: 387,
      title: "全世界最好的你",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/387.MP3",
      genre: ["流行"],
      mood: ["甜蜜", "心动", "温柔"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "青春"]
    },
    {
      id: 388,
      title: "如果声音不记得",
      artist: "吴青峰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/388.MP3",
      genre: ["流行"],
      mood: ["忧郁", "悲伤", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "治愈", "影视OST"]
    },
    {
      id: 389,
      title: "如果我们不曾相遇",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/389.MP3",
      genre: ["摇滚", "流行"],
      mood: ["感动", "温暖", "不舍"],
      energy: "中速",
      weather: [],
      theme: ["友情", "青春"]
    },
    {
      id: 390,
      title: "入海",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/390.MP3",
      genre: ["流行"],
      mood: ["温暖", "迷茫", "希望"],
      energy: "中速",
      weather: [],
      theme: ["毕业", "成长", "梦想"]
    },
    {
      id: 391,
      title: "三人游",
      artist: "方大同",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/391.MP3",
      genre: ["R&B"],
      mood: ["深情", "忧郁", "温柔"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 392,
      title: "三生三世",
      artist: "张杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/392.MP3",
      genre: ["中国风", "流行"],
      mood: ["深情", "执着", "大气"],
      energy: "激昂",
      weather: [],
      theme: ["爱情", "仙侠", "影视OST"]
    },
    {
      id: 393,
      title: "三葉のテーマ",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/393.MP3",
      genre: ["原声"],
      mood: ["温柔", "思念", "青春"],
      energy: "舒缓",
      weather: [],
      theme: ["影视OST"]
    },
    {
      id: 394,
      title: "珊瑚海",
      artist: "周杰伦 梁心颐",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/394.MP3",
      genre: ["流行"],
      mood: ["伤感", "遗憾", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "离别"]
    },
    {
      id: 395,
      title: "闪耀",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/395.MP3",
      genre: ["流行", "电子"],
      mood: ["青春", "励志", "轻快"],
      energy: "轻快",
      weather: [],
      theme: ["青春", "梦想", "影视OST"]
    },
    {
      id: 396,
      title: "少年派",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/396.MP3",
      genre: ["电子", "流行"],
      mood: ["孤独", "空灵", "坚定"],
      energy: "中速",
      weather: ["夜"],
      theme: ["成长", "探索"]
    },
    {
      id: 397,
      title: "盛夏",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/397.MP3",
      genre: ["流行"],
      mood: ["温暖", "感动", "沧桑"],
      energy: "舒缓",
      weather: ["夏"],
      theme: ["成长", "回忆"]
    },
    {
      id: 398,
      title: "时间煮雨",
      artist: "郁可唯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/398.MP3",
      genre: ["流行"],
      mood: ["悲伤", "怀念", "忧伤"],
      energy: "舒缓",
      weather: ["雨"],
      theme: ["青春", "友情", "影视OST"]
    },
    {
      id: 399,
      title: "是我，也是我们",
      artist: "黄子弘凡",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/399.MP3",
      genre: ["流行"],
      mood: ["温暖", "励志", "感动"],
      energy: "中速",
      weather: [],
      theme: ["平凡", "奉献"]
    },
    {
      id: 400,
      title: "手写的从前",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/400.MP3",
      genre: ["流行", "R&B"],
      mood: ["甜蜜", "怀念", "青涩"],
      energy: "中速",
      weather: [],
      theme: ["青春", "爱情"]
    },
    {
      id: 401,
      title: "霜雪千年",
      artist: "封茗囧菌&双笙",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/401.MP3",
      genre: ["古风"],
      mood: ["忧伤", "怀念", "温柔"],
      energy: "中速",
      weather: ["雪"],
      theme: ["爱情", "古典"]
    },
    {
      id: 402,
      title: "水星记",
      artist: "郭顶",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/402.MP3",
      genre: ["流行"],
      mood: ["清冷", "深情", "压抑"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "宇宙"]
    },
    {
      id: 403,
      title: "说好不哭",
      artist: "周杰伦 阿信",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/403.MP3",
      genre: ["流行"],
      mood: ["深情", "隐忍", "伤感"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "离别"]
    },
    {
      id: 404,
      title: "说好的幸福呢",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/404.MP3",
      genre: ["流行"],
      mood: ["伤感", "惆怅", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "分手"]
    },
    {
      id: 405,
      title: "私奔到月球",
      artist: "五月天 陈绮贞",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/405.MP3",
      genre: ["摇滚", "流行"],
      mood: ["甜蜜", "浪漫", "温馨"],
      energy: "轻快",
      weather: ["夜"],
      theme: ["爱情"]
    },
    {
      id: 406,
      title: "送别",
      artist: "朴树",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/406.MP3",
      genre: ["民谣"],
      mood: ["忧伤", "不舍", "怀念"],
      energy: "舒缓",
      weather: [],
      theme: ["离别", "友情"]
    },
    {
      id: 407,
      title: "岁月",
      artist: "王菲 那英",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/407.MP3",
      genre: ["流行"],
      mood: ["感动", "温暖", "沧桑"],
      energy: "中速",
      weather: [],
      theme: ["时光", "人生"]
    },
    {
      id: 408,
      title: "他不懂",
      artist: "张杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/408.MP3",
      genre: ["流行"],
      mood: ["伤感", "愧疚", "无奈"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "遗憾"]
    },
    {
      id: 409,
      title: "他夏了夏天",
      artist: "苏打绿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/409.MP3",
      genre: ["摇滚", "流行"],
      mood: ["励志", "轻快", "温暖"],
      energy: "轻快",
      weather: ["夏"],
      theme: ["平凡", "梦想"]
    },
    {
      id: 410,
      title: "桃花笑",
      artist: "汪睿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/410.MP3",
      genre: ["古风", "流行"],
      mood: ["欢乐", "温馨", "活泼"],
      energy: "轻快",
      weather: ["春"],
      theme: ["田园", "影视OST"]
    },
    {
      id: 411,
      title: "特别的人",
      artist: "方大同",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/411.MP3",
      genre: ["R&B", "流行"],
      mood: ["深情", "温柔", "浪漫"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 412,
      title: "天后",
      artist: "陈势安",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/412.MP3",
      genre: ["流行"],
      mood: ["深情", "无奈", "坚定"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "自我"]
    },
    {
      id: 413,
      title: "天外来物",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/413.MP3",
      genre: ["摇滚", "流行"],
      mood: ["深情", "坚定", "彷徨"],
      energy: "中速",
      weather: ["夜"],
      theme: ["爱情"]
    },
    {
      id: 414,
      title: "听见下雨的声音",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/414.MP3",
      genre: ["流行", "摇滚"],
      mood: ["凄美", "怀念", "深情"],
      energy: "中速",
      weather: ["雨"],
      theme: ["爱情", "回忆"]
    },
    {
      id: 415,
      title: "同桌的你",
      artist: "老狼",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/415.MP3",
      genre: ["民谣"],
      mood: ["怀念", "青涩", "伤感"],
      energy: "舒缓",
      weather: [],
      theme: ["青春", "校园"]
    },
    {
      id: 416,
      title: "外面的世界",
      artist: "齐秦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/416.MP3",
      genre: ["流行", "民谣"],
      mood: ["深情", "思念", "豁达"],
      energy: "中速",
      weather: [],
      theme: ["远方", "爱情"]
    },
    {
      id: 417,
      title: "顽疾(Live)",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/417.MP3",
      genre: ["流行"],
      mood: ["压抑", "深情", "孤独"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "思念"]
    },
    {
      id: 418,
      title: "晚星",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/418.MP3",
      genre: ["流行"],
      mood: ["温柔", "深情", "治愈"],
      energy: "舒缓",
      weather: ["夜"],
      theme: ["爱情", "陪伴", "影视OST"]
    },
    {
      id: 419,
      title: "忘记时间",
      artist: "胡歌",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/419.MP3",
      genre: ["流行"],
      mood: ["深情", "怀念", "忧伤"],
      energy: "中速",
      weather: [],
      theme: ["仙侠", "爱情", "影视OST"]
    },
    {
      id: 420,
      title: "微尘",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/420.MP3",
      genre: ["流行"],
      mood: ["深沉", "释然", "哲思"],
      energy: "中速",
      weather: [],
      theme: ["人生", "时光"]
    },
    {
      id: 421,
      title: "微微一笑很倾城",
      artist: "杨洋",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/421.MP3",
      genre: ["流行"],
      mood: ["甜蜜", "青春", "浪漫"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "青春", "影视OST"]
    },
    {
      id: 422,
      title: "违背的青春",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/422.MP3",
      genre: ["流行"],
      mood: ["励志", "温暖", "坚定"],
      energy: "中速",
      weather: [],
      theme: ["青春", "梦想"]
    },
    {
      id: 423,
      title: "唯一",
      artist: "G.E.M.邓紫棋",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/423.MP3",
      genre: ["流行"],
      mood: ["深情", "执着", "释然"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 424,
      title: "问侠",
      artist: "冉然 韩孟伯 姚岚 唐艺豪",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/424.MP3",
      genre: ["中国风"],
      mood: ["豪迈", "热血", "侠义"],
      energy: "激昂",
      weather: [],
      theme: ["江湖", "侠义"]
    },
    {
      id: 425,
      title: "我的一八九八",
      artist: "安然",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/425.MP3",
      genre: ["流行"],
      mood: ["大气", "感动", "自豪"],
      energy: "中速",
      weather: [],
      theme: ["家国", "历史", "校园"]
    },
    {
      id: 426,
      title: "我好想你",
      artist: "苏打绿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/426.MP3",
      genre: ["流行", "摇滚"],
      mood: ["思念", "深情", "孤独"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "思念"]
    },
    {
      id: 427,
      title: "我怀念的",
      artist: "孙燕姿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/427.MP3",
      genre: ["流行"],
      mood: ["怀念", "伤感", "不舍"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 428,
      title: "我落泪情绪零碎",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/428.MP3",
      genre: ["流行", "摇滚"],
      mood: ["忧伤", "悲凉", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "失去"]
    },
    {
      id: 429,
      title: "我们的明天",
      artist: "鹿晗",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/429.MP3",
      genre: ["流行"],
      mood: ["温暖", "坚定", "希望"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "希望", "影视OST"]
    },
    {
      id: 430,
      title: "我是如此相信",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/430.MP3",
      genre: ["摇滚", "流行"],
      mood: ["坚定", "热血", "希望"],
      energy: "激昂",
      weather: [],
      theme: ["信念", "希望", "影视OST"]
    },
    {
      id: 431,
      title: "我为自己代言",
      artist: "魏晨",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/431.MP3",
      genre: ["流行"],
      mood: ["励志", "坚定", "自信"],
      energy: "中速",
      weather: [],
      theme: ["梦想", "自我"]
    },
    {
      id: 432,
      title: "我要你(Live)",
      artist: "毛不易 单依纯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/432.MP3",
      genre: ["流行"],
      mood: ["深情", "浪漫", "思念"],
      energy: "舒缓",
      weather: ["夜"],
      theme: ["爱情", "影视OST"]
    },
    {
      id: 433,
      title: "我以渺小爱你",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/433.MP3",
      genre: ["流行"],
      mood: ["治愈", "温暖", "感动"],
      energy: "中速",
      weather: [],
      theme: ["自然", "公益"]
    },
    {
      id: 434,
      title: "下一个天亮",
      artist: "郭静",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/434.MP3",
      genre: ["流行"],
      mood: ["温暖", "期待", "忧伤"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "希望"]
    },
    {
      id: 435,
      title: "夏至未至",
      artist: "胡夏",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/435.MP3",
      genre: ["流行"],
      mood: ["青春", "怀念", "温暖"],
      energy: "中速",
      weather: ["夏"],
      theme: ["青春", "校园", "影视OST"]
    },
    {
      id: 436,
      title: "想你时风起",
      artist: "单依纯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/436.MP3",
      genre: ["流行"],
      mood: ["思念", "伤感", "温柔"],
      energy: "中速",
      weather: ["风"],
      theme: ["爱情", "思念"]
    },
    {
      id: 437,
      title: "像风一样",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/437.MP3",
      genre: ["流行"],
      mood: ["释然", "伤感", "清冷"],
      energy: "中速",
      weather: ["风"],
      theme: ["爱情", "离别"]
    },
    {
      id: 438,
      title: "像小时候一样",
      artist: "郁可唯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/438.MP3",
      genre: ["流行"],
      mood: ["温暖", "治愈", "感动"],
      energy: "舒缓",
      weather: [],
      theme: ["亲情", "童年", "影视OST"]
    },
    {
      id: 439,
      title: "逍遥叹",
      artist: "胡歌",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/439.MP3",
      genre: ["中国风", "流行"],
      mood: ["深情", "豪迈", "温柔"],
      energy: "中速",
      weather: [],
      theme: ["仙侠", "江湖", "影视OST"]
    },
    {
      id: 440,
      title: "小城夏天",
      artist: "LBI利比",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/440.MP3",
      genre: ["流行"],
      mood: ["甜蜜", "浪漫", "轻快"],
      energy: "轻快",
      weather: ["夏", "夜"],
      theme: ["青春", "爱情"]
    },
    {
      id: 441,
      title: "小城谣",
      artist: "胡碧乔",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/441.MP3",
      genre: ["古风"],
      mood: ["甜蜜", "欢快", "清新"],
      energy: "轻快",
      weather: ["春"],
      theme: ["江南", "爱情"]
    },
    {
      id: 442,
      title: "小丑",
      artist: "毛不易",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/442.MP3",
      genre: ["流行"],
      mood: ["治愈", "温暖", "脆弱"],
      energy: "舒缓",
      weather: [],
      theme: ["平凡", "自我", "影视OST"]
    },
    {
      id: 443,
      title: "小欢喜",
      artist: "刘瑞琦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/443.MP3",
      genre: ["流行"],
      mood: ["温暖", "感动", "深情"],
      energy: "中速",
      weather: [],
      theme: ["亲情", "成长", "影视OST"]
    },
    {
      id: 444,
      title: "小情歌",
      artist: "苏打绿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/444.MP3",
      genre: ["流行"],
      mood: ["甜蜜", "温暖", "清新"],
      energy: "中速",
      weather: ["雨"],
      theme: ["爱情"]
    },
    {
      id: 445,
      title: "小幸运",
      artist: "田馥甄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/445.MP3",
      genre: ["流行"],
      mood: ["悸动", "遗憾", "温暖"],
      energy: "中速",
      weather: ["雨"],
      theme: ["青春", "爱情", "影视OST"]
    },
    {
      id: 446,
      title: "小镇姑娘",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/446.MP3",
      genre: ["R&B", "摇滚"],
      mood: ["伤感", "无奈", "怀念"],
      energy: "轻快",
      weather: [],
      theme: ["成长", "离别"]
    },
    {
      id: 447,
      title: "新鸳鸯蝴蝶梦(Live)",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/447.MP3",
      genre: ["中国风", "流行"],
      mood: ["洒脱", "释然", "无奈"],
      energy: "中速",
      weather: [],
      theme: ["人生", "爱情"]
    },
    {
      id: 448,
      title: "星辰大海",
      artist: "黄霄雲",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/448.MP3",
      genre: ["流行"],
      mood: ["希望", "感动", "坚定"],
      energy: "激昂",
      weather: ["夜"],
      theme: ["梦想", "爱情"]
    },
    {
      id: 449,
      title: "行走的鱼(Live)",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/449.MP3",
      genre: ["流行"],
      mood: ["治愈", "深情", "温暖"],
      energy: "中速",
      weather: [],
      theme: ["自我", "治愈"]
    },
    {
      id: 450,
      title: "萱草花",
      artist: "张小斐",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/450.MP3",
      genre: ["流行"],
      mood: ["温暖", "感动", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["亲情", "影视OST"]
    },
    {
      id: 451,
      title: "雪落下的声音(Live)",
      artist: "林俊杰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/451.MP3",
      genre: ["流行"],
      mood: ["伤感", "深情", "无奈"],
      energy: "舒缓",
      weather: ["雪"],
      theme: ["爱情", "遗憾", "影视OST"]
    },
    {
      id: 452,
      title: "雪落下的声音",
      artist: "陆虎",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/452.MP3",
      genre: ["流行"],
      mood: ["悲凉", "深情", "遗憾"],
      energy: "舒缓",
      weather: ["雪"],
      theme: ["爱情", "遗憾", "影视OST"]
    },
    {
      id: 453,
      title: "勋章",
      artist: "鹿晗",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/453.MP3",
      genre: ["流行"],
      mood: ["励志", "坚定", "热血"],
      energy: "激昂",
      weather: [],
      theme: ["梦想", "英雄", "影视OST"]
    },
    {
      id: 454,
      title: "烟花易冷",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/454.MP3",
      genre: ["中国风"],
      mood: ["凄美", "苍凉", "深情"],
      energy: "舒缓",
      weather: ["雨"],
      theme: ["爱情", "历史"]
    },
    {
      id: 455,
      title: "演员",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/455.MP3",
      genre: ["流行"],
      mood: ["伤感", "压抑", "深情"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "欺骗"]
    },
    {
      id: 456,
      title: "燕窝",
      artist: "吴青峰",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/456.MP3",
      genre: ["流行", "摇滚"],
      mood: ["坚定", "哲思", "深情"],
      energy: "中速",
      weather: [],
      theme: ["创作", "梦想"]
    },
    {
      id: 457,
      title: "陽菜と、走る帆高",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/457.MP3",
      genre: ["原声", "流行"],
      mood: ["热血", "浪漫", "青春"],
      energy: "激昂",
      weather: ["雨"],
      theme: ["影视OST", "青春"]
    },
    {
      id: 458,
      title: "阳光宅男",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/458.MP3",
      genre: ["流行"],
      mood: ["轻快", "活泼", "自信"],
      energy: "轻快",
      weather: ["晴"],
      theme: ["青春", "自我"]
    },
    {
      id: 459,
      title: "洋葱",
      artist: "杨宗纬",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/459.MP3",
      genre: ["流行"],
      mood: ["深情", "伤感", "隐忍"],
      energy: "中速",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 460,
      title: "遥远的你",
      artist: "221小伙伴",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/460.MP3",
      genre: ["民谣", "流行"],
      mood: ["青涩", "暗恋", "怀念"],
      energy: "中速",
      weather: ["夏", "雨", "风"],
      theme: ["青春", "爱情"]
    },
    {
      id: 461,
      title: "爷爷泡的茶",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/461.MP3",
      genre: ["嘻哈", "R&B", "中国风"],
      mood: ["轻快", "温情", "怀旧"],
      energy: "轻快",
      weather: [],
      theme: ["亲情", "传统"]
    },
    {
      id: 462,
      title: "夜航星",
      artist: "不才",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/462.MP3",
      genre: ["流行", "弦乐"],
      mood: ["燃", "苍凉", "坚定"],
      energy: "激昂",
      weather: ["夜"],
      theme: ["科幻", "宇宙", "信念"]
    },
    {
      id: 463,
      title: "一次就好",
      artist: "杨宗纬",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/463.MP3",
      genre: ["流行", "复古情歌"],
      mood: ["温暖", "深情", "治愈"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 464,
      title: "一路生花",
      artist: "温奕心",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/464.MP3",
      genre: ["流行"],
      mood: ["励志", "希望", "温暖"],
      energy: "轻快",
      weather: [],
      theme: ["梦想", "青春"]
    },
    {
      id: 465,
      title: "一路向北",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/465.MP3",
      genre: ["流行摇滚", "英式摇滚"],
      mood: ["伤感", "压抑", "失恋"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "离别"]
    },
    {
      id: 466,
      title: "一念之间",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/466.MP3",
      genre: ["流行", "R&B"],
      mood: ["深情", "释然", "感慨"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "选择"]
    },
    {
      id: 467,
      title: "一笑倾城",
      artist: "汪苏泷",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/467.MP3",
      genre: ["流行", "清新"],
      mood: ["甜蜜", "浪漫", "青春"],
      energy: "轻快",
      weather: [],
      theme: ["爱情", "青春"]
    },
    {
      id: 468,
      title: "忆黄山",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/468.MP3",
      genre: ["中国风"],
      mood: ["悠远", "乡情", "旷达"],
      energy: "舒缓",
      weather: [],
      theme: ["山水", "乡愁"]
    },
    {
      id: 469,
      title: "隐形的翅膀",
      artist: "张韶涵",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/469.MP3",
      genre: ["民谣流行"],
      mood: ["温暖", "希望", "励志"],
      energy: "舒缓",
      weather: [],
      theme: ["梦想", "成长"]
    },
    {
      id: 470,
      title: "有我",
      artist: "周深",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/470.MP3",
      genre: ["流行", "主旋律"],
      mood: ["热血", "信念", "大气"],
      energy: "激昂",
      weather: [],
      theme: ["青春", "家国"]
    },
    {
      id: 471,
      title: "雨天",
      artist: "孙燕姿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/471.MP3",
      genre: ["流行"],
      mood: ["感伤", "释然", "深情"],
      energy: "舒缓",
      weather: ["雨"],
      theme: ["爱情"]
    },
    {
      id: 472,
      title: "遇见",
      artist: "孙燕姿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/472.MP3",
      genre: ["流行", "清新"],
      mood: ["温暖", "期待", "淡淡哀愁"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "缘分"]
    },
    {
      id: 473,
      title: "月亮代表谁的心",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/473.MP3",
      genre: ["R&B"],
      mood: ["浪漫", "温馨", "感慨"],
      energy: "舒缓",
      weather: ["夜"],
      theme: ["爱情"]
    },
    {
      id: 474,
      title: "再见深海",
      artist: "唐汉霄",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/474.MP3",
      genre: ["流行"],
      mood: ["治愈", "温暖", "感动"],
      energy: "舒缓",
      weather: [],
      theme: ["告别", "成长", "和解"]
    },
    {
      id: 475,
      title: "在故事的最终",
      artist: "张碧晨",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/475.MP3",
      genre: ["流行"],
      mood: ["伤感", "释然", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["亲情", "告别", "成长"]
    },
    {
      id: 476,
      title: "找自己",
      artist: "陶喆",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/476.MP3",
      genre: ["摇滚", "另类摇滚"],
      mood: ["释放", "畅快", "坚定"],
      energy: "激昂",
      weather: ["雨"],
      theme: ["自我", "成长"]
    },
    {
      id: 477,
      title: "照片",
      artist: "单依纯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/477.MP3",
      genre: ["流行", "抒情"],
      mood: ["伤感", "怀念", "克制"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 478,
      title: "这世界那么多人",
      artist: "莫文蔚",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/478.MP3",
      genre: ["流行"],
      mood: ["温柔", "怀念", "遗憾"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "人生"]
    },
    {
      id: 479,
      title: "正解",
      artist: "Radwimps",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/479.MP3",
      genre: ["摇滚", "流行"],
      mood: ["温柔", "坚定", "感动", "青春"],
      energy: "中速",
      weather: [],
      theme: ["青春", "毕业", "成长"]
    },
    {
      id: 480,
      title: "知否知否",
      artist: "胡夏 郁可唯",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/480.MP3",
      genre: ["中国风", "流行"],
      mood: ["婉约", "伤情", "深情"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情", "古风"]
    },
    {
      id: 481,
      title: "转眼",
      artist: "五月天",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/481.MP3",
      genre: ["流行摇滚"],
      mood: ["感慨", "怀念", "温情"],
      energy: "中速",
      weather: [],
      theme: ["时间", "生命", "回忆"]
    },
    {
      id: 482,
      title: "追光者",
      artist: "岑宁儿",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/482.MP3",
      genre: ["流行"],
      mood: ["暗恋", "凄美", "温暖"],
      energy: "舒缓",
      weather: [],
      theme: ["爱情"]
    },
    {
      id: 483,
      title: "租购",
      artist: "薛之谦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/483.MP3",
      genre: ["流行"],
      mood: ["悲伤", "深情", "怀念"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "现实"]
    },
    {
      id: 484,
      title: "最后一页",
      artist: "江语晨",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/484.MP3",
      genre: ["流行"],
      mood: ["伤感", "怀念", "不舍"],
      energy: "舒缓",
      weather: ["雨"],
      theme: ["爱情", "离别"]
    },
    {
      id: 485,
      title: "最长的电影",
      artist: "周杰伦",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/485.MP3",
      genre: ["流行", "抒情"],
      mood: ["悲伤", "深情", "压抑"],
      energy: "中速",
      weather: [],
      theme: ["爱情", "回忆"]
    },
    {
      id: 486,
      title: "昨夜书",
      artist: "许嵩",
      url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/486.MP3",
      genre: ["中国风"],
      mood: ["慷慨", "悲怆", "深情"],
      energy: "中速",
      weather: ["夜"],
      theme: ["历史", "英雄"]
    },
    { id: 487, title: "me me she", artist: "RADWIMPS", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/me me she RADWIMPS.mp3", genre: ["摇滚", "日系流行"], mood: ["温柔", "感伤", "释然"], energy: "中速", weather: [], theme: ["爱情", "离别"] },
    { id: 488, title: "一念之间－在水中", artist: "齐豫＆吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/一念之间－在水中 齐豫＆吴青峰.mp3", genre: ["流行"], mood: ["空灵", "温柔", "诗意"], energy: "舒缓", weather: [], theme: ["生命", "诗意"] },
    { id: 489, title: "一念之间－在空中", artist: "齐豫＆吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/一念之间－在空中 齐豫＆吴青峰.mp3", genre: ["流行"], mood: ["空灵", "悠远", "诗意"], energy: "舒缓", weather: [], theme: ["生命", "诗意"] },
    { id: 490, title: "一见如故", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/一见如故 许嵩.mp3", genre: ["中国风"], mood: ["深情", "怅惘", "古典"], energy: "中速", weather: [], theme: ["缘分", "爱情", "怀古"] },
    { id: 491, title: "一颗苹果", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/一颗苹果 五月天.mp3", genre: ["流行摇滚"], mood: ["豁达", "释然", "温暖"], energy: "中速", weather: [], theme: ["人生", "豁达"] },
    { id: 492, title: "七之歌", artist: "RADWIMPS", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/七之歌 RADWIMPS.mp3", genre: ["摇滚", "日系流行"], mood: ["清爽", "开阔", "温柔"], energy: "中速", weather: ["风"], theme: ["希望", "幸运"] },
    { id: 493, title: "下雨的夜晚", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/下雨的夜晚 苏打绿.mp3", genre: ["流行", "古典"], mood: ["温柔", "治愈", "悲伤"], energy: "舒缓", weather: ["雨", "夜"], theme: ["疗愈", "爱情"] },
    { id: 494, title: "九月先生", artist: "RADWIMPS", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/九月先生 RADWIMPS.mp3", genre: ["摇滚", "日系流行"], mood: ["轻快", "温暖"], energy: "中速", weather: ["秋"], theme: ["秋天", "生活"] },
    { id: 495, title: "交响梦", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/交响梦 苏打绿.mp3", genre: ["民谣", "古典"], mood: ["宁静", "希望", "清新"], energy: "舒缓", weather: ["春", "雨"], theme: ["自然", "新生"] },
    { id: 496, title: "从一片落叶开始", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/从一片落叶开始 苏打绿.mp3", genre: ["民谣", "流行"], mood: ["悠远", "清新", "治愈"], energy: "舒缓", weather: ["秋", "风"], theme: ["自然", "回忆"] },
    { id: 497, title: "仓颉", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/仓颉 五月天.mp3", genre: ["流行摇滚"], mood: ["深情", "思念", "执着"], energy: "中速", weather: [], theme: ["爱情", "思念"] },
    { id: 498, title: "他举起右手点名", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/他举起右手点名 苏打绿.mp3", genre: ["古典", "摇滚"], mood: ["沉重", "悲怆", "史诗"], energy: "激昂", weather: ["夜"], theme: ["历史", "战争", "人性"] },
    { id: 499, title: "你在烦恼什么", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/你在烦恼什么 苏打绿.mp3", genre: ["流行"], mood: ["治愈", "温暖", "安抚"], energy: "舒缓", weather: [], theme: ["疗愈", "人生"] },
    { id: 500, title: "你心里最后一个", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/你心里最后一个 苏打绿.mp3", genre: ["流行"], mood: ["温柔", "深情", "细腻"], energy: "舒缓", weather: ["秋"], theme: ["爱情", "内心"] },
    { id: 501, title: "你被写在我的歌里", artist: "苏打绿&陈嘉桦", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/你被写在我的歌里 苏打绿&陈嘉桦.mp3", genre: ["流行"], mood: ["温暖", "甜蜜", "治愈"], energy: "轻快", weather: ["晴"], theme: ["爱情", "友情"] },
    { id: 502, title: "偷闲的翅膀", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/偷闲的翅膀 苏打绿.mp3", genre: ["流行"], mood: ["轻快", "闲适", "灵动"], energy: "轻快", weather: ["晴"], theme: ["生活", "闲适"] },
    { id: 503, title: "光", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/光 陈粒.mp3", genre: ["民谣", "独立"], mood: ["深情", "热烈", "洒脱"], energy: "中速", weather: ["晴"], theme: ["爱情", "自我"] },
    { id: 504, title: "再遇见", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/再遇见 苏打绿.mp3", genre: ["流行"], mood: ["释然", "怀念", "感伤"], energy: "中速", weather: [], theme: ["爱情", "重逢"] },
    { id: 505, title: "出雨林记", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/出雨林记 许嵩.mp3", genre: ["中国风"], mood: ["神秘", "坚毅", "深沉"], energy: "中速", weather: ["夜", "雨"], theme: ["冒险", "守护"] },
    { id: 506, title: "前程似锦", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/前程似锦 许嵩.mp3", genre: ["流行"], mood: ["温暖", "感伤", "祝愿"], energy: "舒缓", weather: ["清晨"], theme: ["告别", "祝福", "梦想"] },
    { id: 507, title: "十年一刻", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/十年一刻 苏打绿.mp3", genre: ["流行"], mood: ["励志", "感动", "真诚"], energy: "中速", weather: [], theme: ["梦想", "坚持", "成长"] },
    { id: 508, title: "历历万乡", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/历历万乡 陈粒.mp3", genre: ["民谣", "独立"], mood: ["疏离", "坚韧", "漂泊"], energy: "中速", weather: [], theme: ["理想", "乡愁", "远方"] },
    { id: 509, title: "原汁原味", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/原汁原味 苏打绿.mp3", genre: ["流行"], mood: ["轻快", "俏皮", "温暖"], energy: "轻快", weather: ["晴"], theme: ["友情", "生活"] },
    { id: 510, title: "只有可以", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/只有可以 苏打绿.mp3", genre: ["流行"], mood: ["温柔", "治愈"], energy: "舒缓", weather: [], theme: ["爱情", "陪伴"] },
    { id: 511, title: "各站停靠", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/各站停靠 苏打绿.mp3", genre: ["流行", "古典"], mood: ["诗意", "宁静", "哲思"], energy: "舒缓", weather: ["春"], theme: ["哲学", "梦境", "生命"] },
    { id: 512, title: "后悔莫及", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/后悔莫及 苏打绿.mp3", genre: ["流行"], mood: ["感伤", "懊悔", "脆弱"], energy: "中速", weather: [], theme: ["爱情", "遗憾"] },
    { id: 513, title: "吟游", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/吟游 苏打绿.mp3", genre: ["民谣", "流行"], mood: ["自由", "浪漫", "治愈"], energy: "中速", weather: ["风"], theme: ["流浪", "音乐", "自由"] },
    { id: 514, title: "听不到", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/听不到 五月天.mp3", genre: ["流行摇滚"], mood: ["感伤", "倔强", "暗恋"], energy: "中速", weather: ["夜"], theme: ["爱情", "暗恋"] },
    { id: 515, title: "逃亡", artist: "吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/吴青峰-逃亡_音频.mp3", genre: ["流行"], mood: ["治愈", "释然", "坚韧"], energy: "中速", weather: ["夜"], theme: ["自我", "逃离", "希望"] },
    { id: 516, title: "喜欢寂寞", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/喜欢寂寞 苏打绿.mp3", genre: ["流行"], mood: ["温柔", "内省", "孤独"], energy: "舒缓", weather: ["夜"], theme: ["孤独", "自我"] },
    { id: 517, title: "地平线", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/地平线 苏打绿.mp3", genre: ["流行", "摇滚"], mood: ["温暖", "希望", "坚定"], energy: "中速", weather: ["傍晚"], theme: ["希望", "信念"] },
    { id: 518, title: "墙外的风景", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/墙外的风景 苏打绿.mp3", genre: ["古典", "摇滚"], mood: ["沉重", "压抑", "挣扎"], energy: "中速", weather: ["夜"], theme: ["困境", "救赎"] },
    { id: 519, title: "大梦", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/大梦 陈粒.mp3", genre: ["流行", "独立"], mood: ["梦幻", "大气", "深沉"], energy: "中速", weather: ["夜"], theme: ["梦境", "轮回", "人生"] },
    { id: 520, title: "天天晴朗", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/天天晴朗 苏打绿.mp3", genre: ["流行"], mood: ["明朗", "温暖", "轻快"], energy: "轻快", weather: ["晴"], theme: ["希望", "生活"] },
    { id: 521, title: "太空", artist: "吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/太空 吴青峰.mp3", genre: ["流行"], mood: ["孤独", "温柔", "梦幻"], energy: "舒缓", weather: ["夜"], theme: ["宇宙", "孤独", "内心"] },
    { id: 522, title: "太空人", artist: "吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/太空人 吴青峰.mp3", genre: ["流行"], mood: ["梦幻", "深情", "孤独"], energy: "舒缓", weather: ["夜"], theme: ["宇宙", "爱情"] },
    { id: 523, title: "太空船", artist: "吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/太空船 吴青峰.mp3", genre: ["流行"], mood: ["轻快", "治愈", "开阔"], energy: "轻快", weather: ["晴"], theme: ["宇宙", "逃离", "希望"] },
    { id: 524, title: "如果凝结就是爱", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/如果凝结就是爱 苏打绿.mp3", genre: ["流行", "古典"], mood: ["温柔", "诗意", "细腻"], energy: "舒缓", weather: ["傍晚"], theme: ["爱情", "诗意"] },
    { id: 525, title: "嬉戏之后", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/嬉戏之后 苏打绿.mp3", genre: ["流行"], mood: ["轻快", "浪漫", "欢快"], energy: "轻快", weather: ["夜"], theme: ["爱情", "青春"] },
    { id: 526, title: "小半", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/小半 陈粒.mp3", genre: ["独立民谣"], mood: ["伤感", "暗恋", "细腻"], energy: "中速", weather: [], theme: ["爱情", "暗恋"] },
    { id: 527, title: "小时候", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/小时候 苏打绿.mp3", genre: ["流行"], mood: ["温暖", "感人", "深情"], energy: "舒缓", weather: [], theme: ["亲情", "成长"] },
    { id: 528, title: "小星星", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/小星星 苏打绿.mp3", genre: ["流行"], mood: ["轻快", "梦幻", "灵动"], energy: "轻快", weather: ["夜"], theme: ["童真", "生活"] },
    { id: 529, title: "左边", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/左边 苏打绿.mp3", genre: ["流行"], mood: ["感伤", "温柔", "怀念"], energy: "中速", weather: [], theme: ["爱情", "回忆"] },
    { id: 530, title: "年轮说", artist: "吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/年轮说 吴青峰.mp3", genre: ["流行", "爵士"], mood: ["温柔", "感伤", "内省"], energy: "舒缓", weather: [], theme: ["成长", "回忆", "时间"] },
    { id: 531, title: "幸福额度", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/幸福额度 苏打绿.mp3", genre: ["流行"], mood: ["温柔", "理性", "深情"], energy: "中速", weather: ["晴"], theme: ["爱情", "选择"] },
    { id: 532, title: "异次元的玫瑰", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/异次元的玫瑰 苏打绿.mp3", genre: ["流行", "摇滚"], mood: ["热烈", "倔强", "浪漫"], energy: "中速", weather: ["春"], theme: ["爱情", "自我"] },
    { id: 533, title: "当我们一起走过", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/当我们一起走过 苏打绿.mp3", genre: ["流行"], mood: ["温暖", "治愈", "感动"], energy: "中速", weather: [], theme: ["友情", "陪伴", "治愈"] },
    { id: 534, title: "心安之地", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/心安之地 许嵩.mp3", genre: ["流行"], mood: ["温柔", "治愈", "安宁"], energy: "舒缓", weather: [], theme: ["安宁", "自我"] },
    { id: 535, title: "忽略不计", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/忽略不计 许嵩.mp3", genre: ["流行"], mood: ["淡然", "通透", "自省"], energy: "中速", weather: [], theme: ["自我", "人生"] },
    { id: 536, title: "憨人", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/憨人 五月天.mp3", genre: ["摇滚", "闽南语"], mood: ["励志", "坚定", "热血"], energy: "激昂", weather: [], theme: ["梦想", "坚持"] },
    { id: 537, title: "成名在望", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/成名在望 五月天.mp3", genre: ["摇滚", "流行"], mood: ["热血", "励志", "深沉"], energy: "激昂", weather: [], theme: ["梦想", "成长"] },
    { id: 538, title: "我们不懂", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/我们不懂 苏打绿.mp3", genre: ["古典", "摇滚"], mood: ["深沉", "哲思", "压抑"], energy: "中速", weather: ["夜"], theme: ["人性", "生命"] },
    { id: 539, title: "我们走了一光年", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/我们走了一光年 苏打绿.mp3", genre: ["摇滚"], mood: ["温柔", "深情", "悠远"], energy: "中速", weather: ["夜"], theme: ["宇宙", "爱情"] },
    { id: 540, title: "我们都拥有海洋", artist: "吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/我们都拥有海洋 吴青峰.mp3", genre: ["流行"], mood: ["希望", "励志", "开阔"], energy: "中速", weather: ["晴"], theme: ["青春", "毕业", "自由"] },
    { id: 541, title: "拥抱", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/拥抱 五月天.mp3", genre: ["流行摇滚"], mood: ["温暖", "梦幻", "深情"], energy: "中速", weather: ["夜"], theme: ["爱情", "包容"] },
    { id: 542, title: "拾穗", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/拾穗 苏打绿.mp3", genre: ["民谣", "古典"], mood: ["质朴", "温暖", "治愈"], energy: "舒缓", weather: ["秋"], theme: ["农耕", "丰收", "生命"] },
    { id: 543, title: "掌声落下", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/掌声落下 苏打绿.mp3", genre: ["摇滚"], mood: ["讽刺", "沉重", "躁动"], energy: "激昂", weather: ["夜"], theme: ["网络", "人性", "批判"] },
    { id: 544, title: "故事", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/故事 苏打绿.mp3", genre: ["流行", "古典"], mood: ["诗意", "怅惘", "温暖"], energy: "中速", weather: ["秋"], theme: ["故事", "人生", "怀古"] },
    { id: 545, title: "无眠", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/无眠 苏打绿.mp3", genre: ["民谣"], mood: ["思念", "孤独", "温柔"], energy: "舒缓", weather: ["夜"], theme: ["思念", "失眠", "爱情"] },
    { id: 546, title: "日光", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/日光 苏打绿.mp3", genre: ["流行", "古典"], mood: ["欢快", "清新", "明媚"], energy: "轻快", weather: ["春", "晴"], theme: ["春天", "希望"] },
    { id: 547, title: "早点回家", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/早点回家 苏打绿.mp3", genre: ["民谣", "流行"], mood: ["温暖", "治愈", "深情"], energy: "舒缓", weather: [], theme: ["亲情", "家庭", "归家"] },
    { id: 548, title: "易燃易爆炸", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/易燃易爆炸 陈粒.mp3", genre: ["民谣", "独立"], mood: ["热烈", "豪迈", "燃烧"], energy: "激昂", weather: [], theme: ["自我", "个性"] },
    { id: 549, title: "星夜", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/星夜 陈粒.mp3", genre: ["流行"], mood: ["寂寥", "温柔", "梦幻"], energy: "舒缓", weather: ["夜"], theme: ["孤独", "星空"] },
    { id: 550, title: "春雨里", artist: "李宇春＆吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/春雨里 李宇春＆吴青峰.mp3", genre: ["流行"], mood: ["温柔", "治愈", "细腻"], energy: "舒缓", weather: ["春", "雨"], theme: ["陪伴", "理解"] },
    { id: 551, title: "是我的海", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/是我的海 苏打绿.mp3", genre: ["流行", "古典"], mood: ["空灵", "悲伤", "无奈"], energy: "舒缓", weather: ["夜"], theme: ["梦想", "成长", "海"] },
    { id: 552, title: "果实", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/果实 陈粒.mp3", genre: ["民谣", "流行"], mood: ["温柔", "感动", "成长"], energy: "舒缓", weather: ["晴"], theme: ["成长", "生命", "陪伴"] },
    { id: 553, title: "步步", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/步步 五月天.mp3", genre: ["流行摇滚"], mood: ["深情", "温暖", "执着"], energy: "中速", weather: [], theme: ["爱情", "坚守"] },
    { id: 554, title: "洛阳纸", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/洛阳纸 许嵩.mp3", genre: ["中国风"], mood: ["古典", "讽喻", "通透"], energy: "中速", weather: [], theme: ["文艺", "现实", "创作"] },
    { id: 555, title: "清透", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/清透 陈粒.mp3", genre: ["民谣", "流行"], mood: ["清澈", "温柔", "治愈"], energy: "舒缓", weather: ["晴"], theme: ["清新", "生活"] },
    { id: 556, title: "漂浮", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/漂浮 苏打绿.mp3", genre: ["摇滚"], mood: ["轻柔", "自由", "梦幻"], energy: "舒缓", weather: ["夜"], theme: ["自由", "漂浮", "人生"] },
    { id: 557, title: "煽动", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/煽动 苏打绿.mp3", genre: ["摇滚"], mood: ["躁动", "热烈", "坚韧"], energy: "激昂", weather: ["夏"], theme: ["青春", "抗争"] },
    { id: 558, title: "狂热", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/狂热 苏打绿.mp3", genre: ["摇滚"], mood: ["狂热", "愤怒", "纯真"], energy: "激昂", weather: ["夏"], theme: ["青春", "热血"] },
    { id: 559, title: "独处的时候", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/独处的时候 苏打绿.mp3", genre: ["流行"], mood: ["孤独", "脆弱", "温柔"], energy: "舒缓", weather: ["夜"], theme: ["孤独", "自我"] },
    { id: 560, title: "痛快的哀艳", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/痛快的哀艳 苏打绿.mp3", genre: ["古典", "摇滚"], mood: ["磅礴", "压抑", "悲悯"], energy: "激昂", weather: ["夜"], theme: ["反乌托邦", "人性"] },
    { id: 561, title: "皮下", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/皮下 许嵩.mp3", genre: ["流行", "电子"], mood: ["俏皮", "讽刺", "抖腿"], energy: "轻快", weather: [], theme: ["网络", "现实", "自我"] },
    { id: 562, title: "相信", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/相信 苏打绿.mp3", genre: ["流行", "古典"], mood: ["温柔", "坚定", "信念"], energy: "中速", weather: ["晴"], theme: ["信念", "希望", "成长"] },
    { id: 563, title: "知洲", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/知洲 陈粒.mp3", genre: ["流行", "独立"], mood: ["迷离", "温柔", "梦幻"], energy: "中速", weather: ["夜"], theme: ["自我", "梦境"] },
    { id: 564, title: "空空", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/空空 陈粒.mp3", genre: ["民谣"], mood: ["释然", "内省", "怅然"], energy: "中速", weather: [], theme: ["自我", "人生"] },
    { id: 565, title: "简单生活", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/简单生活 苏打绿.mp3", genre: ["民谣", "流行"], mood: ["轻快", "温暖", "闲适"], energy: "轻快", weather: ["晴"], theme: ["生活", "简单", "自由"] },
    { id: 566, title: "粗糙", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/粗糙 许嵩.mp3", genre: ["流行", "摇滚"], mood: ["洒脱", "释放", "反抗"], energy: "激昂", weather: [], theme: ["自我", "内耗", "解放"] },
    { id: 567, title: "老歌", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/老歌 许嵩.mp3", genre: ["流行"], mood: ["怀念", "温暖", "感伤"], energy: "舒缓", weather: ["夜"], theme: ["回忆", "旧时光"] },
    { id: 568, title: "自渡", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/自渡 陈粒.mp3", genre: ["民谣"], mood: ["孤勇", "坚韧", "孤独"], energy: "舒缓", weather: ["风"], theme: ["自我", "渡己", "人生"] },
    { id: 569, title: "花茶", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/花茶 苏打绿.mp3", genre: ["流行"], mood: ["俏皮", "轻快", "浪漫"], energy: "轻快", weather: ["晴"], theme: ["爱情", "生活"] },
    { id: 570, title: "草木人间", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/草木人间 陈粒.mp3", genre: ["流行", "民谣"], mood: ["空灵", "治愈", "纯净"], energy: "舒缓", weather: ["雨"], theme: ["自然", "生命", "人间"] },
    { id: 571, title: "虚拟", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/虚拟 陈粒.mp3", genre: ["流行", "民谣"], mood: ["空灵", "深情", "慵懒"], energy: "舒缓", weather: ["夜"], theme: ["爱情", "虚拟", "粉丝"] },
    { id: 572, title: "蝉想", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/蝉想 苏打绿.mp3", genre: ["摇滚"], mood: ["灼热", "躁动", "怀旧"], energy: "激昂", weather: ["夏"], theme: ["青春", "回忆"] },
    { id: 573, title: "融雪之前", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/融雪之前 苏打绿.mp3", genre: ["民谣", "古典"], mood: ["宁静", "温柔", "苏醒"], energy: "舒缓", weather: ["春"], theme: ["春天", "新生", "等待"] },
    { id: 574, title: "被雨困住的城市", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/被雨困住的城市 苏打绿.mp3", genre: ["民谣", "流行"], mood: ["清新", "温柔", "静谧"], energy: "舒缓", weather: ["雨"], theme: ["陪伴", "爱情"] },
    { id: 575, title: "让我照顾你", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/让我照顾你 五月天.mp3", genre: ["流行摇滚"], mood: ["温暖", "深情", "承诺"], energy: "中速", weather: [], theme: ["爱情", "承诺", "守护"] },
    { id: 576, title: "说了再见以后", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/说了再见以后 苏打绿.mp3", genre: ["流行", "古典"], mood: ["感伤", "诗意", "不舍"], energy: "舒缓", weather: ["雨"], theme: ["离别", "思念"] },
    { id: 577, title: "走马", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/走马 陈粒.mp3", genre: ["民谣"], mood: ["释然", "洒脱", "感伤"], energy: "中速", weather: ["风"], theme: ["爱情", "放手"] },
    { id: 578, title: "近未来", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/近未来 苏打绿.mp3", genre: ["古典", "摇滚"], mood: ["大气", "希望", "救赎"], energy: "激昂", weather: [], theme: ["未来", "救赎", "生命"] },
    { id: 579, title: "这天", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/这天 苏打绿.mp3", genre: ["流行", "古典"], mood: ["温暖", "勇敢", "深情"], energy: "中速", weather: [], theme: ["友情", "守护", "成长"] },
    { id: 580, title: "迟到千年", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/迟到千年 苏打绿.mp3", genre: ["民谣", "流行"], mood: ["诗意", "忧伤", "温柔"], energy: "舒缓", weather: ["春"], theme: ["慢半拍", "遗憾"] },
    { id: 581, title: "遥远的彼方", artist: "RADWIMPS", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/遥远的彼方 RADWIMPS.mp3", genre: ["流行", "摇滚", "日系"], mood: ["温柔", "希望", "开阔"], energy: "中速", weather: ["晴"], theme: ["旅途", "希望", "新海诚"] },
    { id: 582, title: "那些花儿+望春风", artist: "吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/那些花儿+望春风 吴青峰.mp3", genre: ["民谣", "流行"], mood: ["温暖", "怀念", "纯净"], energy: "舒缓", weather: ["春", "风"], theme: ["青春", "回忆", "乡愁"] },
    { id: 583, title: "陪我歌唱", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/陪我歌唱 苏打绿.mp3", genre: ["流行"], mood: ["温柔", "深情", "治愈"], energy: "舒缓", weather: ["夜"], theme: ["陪伴", "友情", "音乐"] },
    { id: 584, title: "面面相觑", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/面面相觑 苏打绿.mp3", genre: ["流行"], mood: ["俏皮", "别扭", "深情"], energy: "轻快", weather: [], theme: ["爱情", "自我"] },
    { id: 585, title: "顽固", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/顽固 五月天.mp3", genre: ["流行摇滚"], mood: ["励志", "坚定", "感动"], energy: "激昂", weather: [], theme: ["梦想", "坚持", "平凡"] },
    { id: 586, title: "频率", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/频率 苏打绿.mp3", genre: ["流行", "摇滚"], mood: ["灵动", "自由", "奔放"], energy: "中速", weather: ["晴"], theme: ["共鸣", "青春"] },
    { id: 587, title: "飞松", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/飞松 陈粒.mp3", genre: ["民谣", "独立"], mood: ["迷离", "温柔", "梦幻"], energy: "舒缓", weather: ["雪"], theme: ["旅途", "梦境", "离别"] },
    { id: 588, title: "飞鱼", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/飞鱼 苏打绿.mp3", genre: ["民谣摇滚"], mood: ["疗愈", "自由", "希望"], energy: "中速", weather: ["晴", "夏"], theme: ["疗愈", "自由", "新生"] },
    { id: 589, title: "黎明前最暗时候", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/黎明前最暗时候 苏打绿.mp3", genre: ["流行"], mood: ["治愈", "坚持", "希望"], energy: "中速", weather: ["夜"], theme: ["希望", "信念", "黑暗"] },
    { id: 590, title: "Beautiful In White", artist: "Westlife", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/Beautiful In White Westlife.mp3", genre: ["流行"], mood: ["温柔", "深情", "浪漫"], energy: "舒缓", weather: ["晴"], theme: ["爱情", "婚礼", "承诺"] },
    { id: 591, title: "Let It Be", artist: "The Beatles", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/Let It Be The Beatles.mp3", genre: ["摇滚", "流行"], mood: ["治愈", "温暖", "释然"], energy: "中速", weather: [], theme: ["释怀", "人生", "希望"] },
    { id: 592, title: "My Love", artist: "Westlife", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/My Love Westlife.mp3", genre: ["流行", "摇滚"], mood: ["深情", "温柔", "思念"], energy: "中速", weather: [], theme: ["爱情", "思念"] },
    { id: 593, title: "Tomorrow will be fine", artist: "苏打绿", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/Tomorrow will be fine 苏打绿.mp3", genre: ["流行", "摇滚"], mood: ["治愈", "温暖", "坚定"], energy: "中速", weather: ["晴"], theme: ["希望", "重新出发"] },
    { id: 594, title: "一荤一素", artist: "毛不易", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/一荤一素 毛不易.mp3", genre: ["民谣", "流行"], mood: ["温柔", "感动", "思念"], energy: "舒缓", weather: [], theme: ["亲情", "母亲", "回忆"] },
    { id: 595, title: "为你写下这首情歌", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/为你写下这首情歌 五月天.mp3", genre: ["流行摇滚", "英伦"], mood: ["温柔", "深情", "释然"], energy: "中速", weather: [], theme: ["爱情", "遗憾", "治愈"] },
    { id: 596, title: "云裳羽衣曲", artist: "周深", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/云裳羽衣曲 周深.mp3", genre: ["中国风", "流行"], mood: ["空灵", "温柔", "唯美"], energy: "舒缓", weather: ["夜"], theme: ["古风", "爱情", "梦境"] },
    { id: 597, title: "五月天", artist: "S.H.E", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/五月天 S.H.E.mp3", genre: ["流行", "抒情摇滚"], mood: ["甜蜜", "浪漫", "幸福"], energy: "中速", weather: ["春", "晴"], theme: ["爱情", "幸福"] },
    { id: 598, title: "借过一下", artist: "周深", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/借过一下 周深.mp3", genre: ["流行", "摇滚"], mood: ["洒脱", "热血", "张扬"], energy: "中速", weather: [], theme: ["自由", "少年", "破局"] },
    { id: 599, title: "南山南", artist: "马頔", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/南山南 马頔.mp3", genre: ["民谣"], mood: ["忧伤", "怀旧", "孤寂"], energy: "舒缓", weather: ["夜"], theme: ["乡愁", "远方", "回忆"] },
    { id: 600, title: "可它爱着这个世界", artist: "周深", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/可它爱着这个世界 周深.mp3", genre: ["流行"], mood: ["温暖", "治愈", "梦幻"], energy: "舒缓", weather: [], theme: ["温暖", "治愈", "世界"] },
    { id: 601, title: "垃圾车", artist: "五月天", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/垃圾车 五月天.mp3", genre: ["流行", "闽南语"], mood: ["轻快", "温暖", "欢快"], energy: "轻快", weather: [], theme: ["友情", "陪伴"] },
    { id: 602, title: "对话老师", artist: "许嵩", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/对话老师 许嵩.mp3", genre: ["R&B", "流行"], mood: ["俏皮", "轻快", "怀旧"], energy: "轻快", weather: [], theme: ["校园", "青春", "回忆"] },
    { id: 603, title: "小手拉大手", artist: "梁静茹", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/小手拉大手 梁静茹.mp3", genre: ["流行"], mood: ["甜蜜", "轻快", "温暖"], energy: "轻快", weather: ["晴"], theme: ["爱情", "幸福"] },
    { id: 604, title: "日日", artist: "陈粒", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/日日 陈粒.mp3", genre: ["流行"], mood: ["空灵", "治愈", "安宁"], energy: "舒缓", weather: ["风"], theme: ["生命", "希望", "时间"] },
    { id: 605, title: "星晴", artist: "周杰伦", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/星晴 周杰伦.mp3", genre: ["节奏蓝调", "民谣"], mood: ["清新", "浪漫", "松弛"], energy: "中速", weather: ["晴", "夜"], theme: ["爱情", "星空", "自由"] },
    { id: 606, title: "暖暖", artist: "梁静茹", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/暖暖 梁静茹.mp3", genre: ["流行"], mood: ["甜蜜", "温暖", "幸福"], energy: "轻快", weather: ["晴"], theme: ["爱情", "幸福", "温暖"] },
    { id: 607, title: "月下煮茶", artist: "陈佳", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/月下煮茶 陈佳.mp3", genre: ["流行", "潮汕语"], mood: ["恬淡", "安静", "温柔"], energy: "舒缓", weather: ["夜"], theme: ["亲情", "怀旧", "乡愁"] },
    { id: 608, title: "李清照", artist: "汪苏泷", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/李清照 汪苏泷.mp3", genre: ["中国风", "R&B"], mood: ["古典", "诗意", "清雅"], energy: "中速", weather: [], theme: ["怀古", "诗意"] },
    { id: 609, title: "柔软", artist: "吴青峰", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/柔软 吴青峰.mp3", genre: ["流行"], mood: ["温柔", "脆弱", "治愈"], energy: "舒缓", weather: ["夜"], theme: ["生命", "温柔", "自我"] },
    { id: 610, title: "浮光", artist: "周深", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/浮光 周深.mp3", genre: ["中国风", "流行"], mood: ["空灵", "大气", "诗意"], energy: "中速", weather: [], theme: ["时间", "浮光", "历史"] },
    { id: 611, title: "海盗船长2.0", artist: "风子", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/海盗船长2.0 风子.mp3", genre: ["民谣"], mood: ["自由", "洒脱", "清新"], energy: "轻快", weather: ["风"], theme: ["流浪", "自由", "远行"] },
    { id: 612, title: "海芋恋", artist: "萧敬腾", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/海芋恋 萧敬腾.mp3", genre: ["流行摇滚"], mood: ["甜蜜", "热情", "青春"], energy: "中速", weather: ["晴", "夏"], theme: ["爱情", "告白"] },
    { id: 613, title: "璀璨冒险人", artist: "周深", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/璀璨冒险人  周深.mp3", genre: ["流行", "说唱", "摇滚"], mood: ["热血", "励志", "坚定"], energy: "激昂", weather: [], theme: ["冒险", "梦想"] },
    { id: 614, title: "盗墓笔记·十年人间", artist: "李常超", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/盗墓笔记·十年人间 李常超.mp3", genre: ["中国风", "摇滚"], mood: ["苍凉", "孤寂", "深情"], energy: "激昂", weather: ["夜"], theme: ["江湖", "冒险", "等待"] },
    { id: 615, title: "若梦", artist: "周深", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/若梦 周深.mp3", genre: ["中国风", "流行"], mood: ["空灵", "凄美", "深情"], energy: "舒缓", weather: [], theme: ["爱情", "梦境", "纠葛"] },
    { id: 616, title: "萤火", artist: "TFBoys", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/萤火 TFBoys.mp3", genre: ["流行"], mood: ["温暖", "浪漫", "希望"], energy: "中速", weather: ["夜"], theme: ["爱", "希望", "光芒"] },
    { id: 617, title: "鱼米", artist: "石林", url: "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/music/鱼米 石林.mp3", genre: ["流行", "民谣"], mood: ["温柔", "感伤", "怀念"], energy: "舒缓", weather: [], theme: ["乡愁", "离别", "回忆"] }
  ];
// ==================== 每日推歌 · 智能推荐 ====================
// 综合「位置 + 天气 + 时间」为每天选一首最合适的歌，并附上推荐理由。
// 位置：浏览器定位 → IP 定位兜底；天气：Open-Meteo（免费、无需 Key）。

const PERIODS = [
  { key: "清晨", start: 5, end: 8, energy: "轻快", moods: ["希望", "励志", "清新", "活力"] },
  { key: "上午", start: 8, end: 12, energy: "中速", moods: ["励志", "坚定", "希望", "轻快"] },
  { key: "午后", start: 12, end: 14, energy: "舒缓", moods: ["治愈", "温暖", "宁静", "释然"] },
  { key: "下午", start: 14, end: 18, energy: "中速", moods: ["轻快", "温暖", "青春", "浪漫"] },
  { key: "傍晚", start: 18, end: 22, energy: "舒缓", moods: ["治愈", "浪漫", "温暖", "深情"] },
  { key: "深夜", start: 22, end: 26, energy: "舒缓", moods: ["孤独", "安静", "释然", "温柔", "思念"] }
];

let songTime = parseFloat(localStorage.getItem("songTime")) || 0;
let songId = localStorage.getItem("songId") || "";
let playMode = localStorage.getItem("playMode") || "order"; // order 顺序 / shuffle 随机 / single 单曲循环
let songVolume = parseInt(localStorage.getItem("songVolume"), 10);
if (!(songVolume >= 0)) songVolume = 100;
let audioFallbackTried = false;
const SONG_CDN_VER = "20260819"; // 歌曲 CDN 缓存版本号，改歌后递增可强制浏览器重新拉取
if (localStorage.getItem("isPlaying") === null) {
  localStorage.setItem("isPlaying", "false");
}
const player = document.getElementById("song-player");

function songUrl(song) {
  return song.url + "?v=" + SONG_CDN_VER;
}

function fallbackSongUrl(song) {
  return song.url.replace(
    "https://cdn.jsdelivr.net/gh/yjyxfcy/yjyxfcy.github.io@music-assets/",
    "https://raw.githubusercontent.com/yjyxfcy/yjyxfcy.github.io/music-assets/"
  ) + "?v=" + SONG_CDN_VER;
}

function getPeriod(hour) {
  const h = hour < 5 ? hour + 24 : hour;
  for (const p of PERIODS) {
    if (h >= p.start && h < p.end) return p;
  }
  return PERIODS[5];
}

function getSeason(month) {
  if (month >= 3 && month <= 5) return "春";
  if (month >= 6 && month <= 8) return "夏";
  if (month >= 9 && month <= 11) return "秋";
  return "冬";
}

// Injected into the generated daily widget by site-layouts.js.
// The location is the site's editorial choice, not the visitor's position.
const DAILY_CONTEXT_VERSION = "beijing-weather-v1";
const BEIJING_WEATHER_URL = "https://api.open-meteo.com/v1/forecast?latitude=39.9042&longitude=116.4074&current=temperature_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=1&timezone=Asia%2FShanghai";

function beijingNow() {
  const values = {};
  new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai", year: "numeric", month: "numeric", day: "numeric",
    hour: "numeric", hourCycle: "h23", weekday: "short"
  }).formatToParts(new Date()).forEach(function (part) { values[part.type] = part.value; });
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return {
    year: Number(values.year), month: Number(values.month), day: Number(values.day),
    hour: Number(values.hour), weekday: weekdays.indexOf(values.weekday)
  };
}

function todayStr() {
  const d = beijingNow();
  return d.year + "-" + d.month + "-" + d.day;
}

function weatherFromCode(code) {
  if (code === 0 || code === 1 || code === 2) return "晴";
  if (code === 3 || code === 45 || code === 48) return null;
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].indexOf(code) >= 0) return "雨";
  if ([71, 73, 75, 77, 85, 86].indexOf(code) >= 0) return "雪";
  return null;
}

async function fetchBeijingWeather() {
  const controller = new AbortController();
  const timeout = setTimeout(function () { controller.abort(); }, 5500);
  try {
    const res = await fetch(BEIJING_WEATHER_URL, { signal: controller.signal });
    if (!res.ok) return null;
    const data = await res.json();
    const current = data.current || {};
    const daily = data.daily || {};
    if (!Number.isFinite(current.temperature_2m) ||
        !Array.isArray(daily.temperature_2m_min) || !Array.isArray(daily.temperature_2m_max) ||
        !Number.isFinite(daily.temperature_2m_min[0]) || !Number.isFinite(daily.temperature_2m_max[0])) return null;
    return {
      weather: weatherFromCode(Array.isArray(daily.weather_code) ? daily.weather_code[0] : current.weather_code),
      temp: Math.round(current.temperature_2m),
      tempLow: Math.round(daily.temperature_2m_min[0]),
      tempHigh: Math.round(daily.temperature_2m_max[0]),
      wind: Number.isFinite(current.wind_speed_10m) ? current.wind_speed_10m : null
    };
  } catch (e) {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

let contextPromise = null;
function getContextOnce() {
  if (!contextPromise) contextPromise = buildContext();
  return contextPromise;
}

async function buildContext() {
  const now = beijingNow();
  const ctx = {
    period: getPeriod(now.hour), season: getSeason(now.month), hour: now.hour,
    weekday: now.weekday, weekend: now.weekday === 0 || now.weekday === 6,
    night: now.hour >= 19 || now.hour < 5,
    weather: null, temp: null, tempLow: null, tempHigh: null, wind: null, city: "北京"
  };
  const weather = await fetchBeijingWeather();
  if (weather) Object.assign(ctx, weather);
  return ctx;
}

function temperatureMatch(ctx, tags, kind) {
  if (!Number.isFinite(ctx.temp)) return null;
  let targets, description;
  if (ctx.temp <= 5) {
    targets = kind === "song" ? ["温暖", "治愈", "深情"] : ["冬", "雪"];
    description = "天冷，挑一份暖意";
  } else if (ctx.temp <= 15) {
    targets = kind === "song" ? ["温柔", "安静", "治愈"] : ["秋", "风", "冬"];
    description = "天气偏凉，适合慢下来";
  } else if (ctx.temp < 27) {
    targets = kind === "song" ? ["轻快", "清新", "自由"] : ["春", "晴", "轻快"];
    description = "气温舒适，来点轻盈的心情";
  } else {
    targets = kind === "song" ? ["清新", "轻快", "自由"] : ["夏", "晴"];
    description = "天气偏热，想要一点清爽";
  }
  return targets.some(function (tag) { return tags.indexOf(tag) >= 0; }) ?
    { score: 14, reason: "北京当前约 " + ctx.temp + "°C，" + description } : null;
}

const WEATHER_REASON = {
  "雨": "今天有雨，歌里也藏着雨天的故事",
  "雪": "今天下雪了，让这首歌陪你看看雪",
  "晴": "天气晴朗，来一首明快的歌应景",
  "夜": "夜色已深，让这首歌陪你安静下来",
  "风": "今天风不小，这首歌正好带着风的气息",
  "夏": "夏天来了，歌里的夏日气息正应景",
  "春": "春意正浓，这首歌和春天很配"
};

function scoreSong(song, ctx, jitter) {
  let score = 0;
  const reasons = [];
  const push = function (r) { if (reasons.length < 3) reasons.push(r); };

  if (ctx.weather && song.weather.indexOf(ctx.weather) >= 0) {
    score += 30;
    push(WEATHER_REASON[ctx.weather] || ("今天" + ctx.weather + "天，和这首歌很配"));
  }
  const songTemperature = temperatureMatch(ctx, song.mood, "song");
  if (songTemperature) { score += songTemperature.score; push(songTemperature.reason); }
  if (ctx.night && song.weather.indexOf("夜") >= 0) {
    score += 15;
    push("夜色正好，这首歌很适合此刻");
  }
  if (ctx.season === "夏" && song.weather.indexOf("夏") >= 0) {
    score += 10;
    push("夏天来了，歌里的夏日气息正应景");
  }
  if (ctx.season === "春" && song.weather.indexOf("春") >= 0) {
    score += 10;
    push("春意正浓，这首歌和春天很配");
  }
  if (ctx.wind !== null && ctx.wind > 20 && song.weather.indexOf("风") >= 0) {
    score += 10;
    push("今天风不小，这首歌正好带着风的气息");
  }
  if (song.energy === ctx.period.energy) {
    score += 12;
  }
  const moodHits = song.mood.filter(function (m) { return ctx.period.moods.indexOf(m) >= 0; }).length;
  score += moodHits * 8;
  if (moodHits >= 2) {
    push(ctx.period.key + "时分，" + song.mood[0] + "的旋律和现在很搭");
  }
  if (ctx.weekend) {
    if (song.theme.indexOf("自由") >= 0 || song.theme.indexOf("远方") >= 0 || song.theme.indexOf("友情") >= 0) {
      score += 8;
      push("周末到了，听点关于自由与远方的歌吧");
    }
  } else {
    if (song.theme.indexOf("励志") >= 0 || song.theme.indexOf("梦想") >= 0) {
      score += 6;
      push("工作日加油，这首歌给你一点力量");
    }
  }
  score += jitter;
  return { score: score, reasons: reasons };
}

function rankSongs(songs, ctx) {
  const ranked = songs.map(function (s) {
    const r = scoreSong(s, ctx, Math.random() * 10);
    return { id: s.id, score: r.score, reasons: r.reasons };
  });
  ranked.sort(function (a, b) { return b.score - a.score; });
  return ranked;
}

let smartQueue = [];
let smartIdx = 0;
let smartCtx = null;
// 随机模式的"洗牌播放"状态：shuffleDeck 是一副打乱的下标序列，
// 按顺序消费，播完一整轮才重新洗牌，保证同一轮内不重复。
let shuffleDeck = [];
let shuffleIdx = 0;

function buildReason(song, reasons) {
  const parts = reasons.slice(0, 3);
  if (parts.length === 0) {
    const g = (song.genre || []).slice(0, 2).join("、");
    const m = (song.mood || []).slice(0, 2).join("与");
    const t = (song.theme || []).slice(0, 2).join("、");
    const bits = [];
    if (g) bits.push("一首" + g + "风格的歌");
    if (m) bits.push("带着" + m + "的味道");
    if (t) bits.push("主题绕不开" + t);
    if (song.energy) bits.push(song.energy + "的节奏");
    if (bits.length > 0) {
      return "《" + song.title + "》" + bits.join("，") + "，正适合此刻静下来听听。";
    }
    return "随机为你挑了一首《" + song.title + "》";
  }
  return parts.join("；") + "。";
}

function contextPrefix(ctx) {
  const parts = ["📍 北京"];
  if (ctx && Number.isFinite(ctx.temp)) parts.push("当前 " + ctx.temp + "°C");
  if (ctx && Number.isFinite(ctx.tempLow) && Number.isFinite(ctx.tempHigh))
    parts.push("今日 " + ctx.tempLow + "～" + ctx.tempHigh + "°C");
  if (ctx && ctx.weather) parts.push("今日" + ctx.weather);
  return parts.join(" · ") + "\n";
}

function loadSmart(resume) {
  const item = smartQueue[smartIdx];
  const s = songs.find(function (x) { return x.id === item.id; }) || songs[0];
  document.getElementById("song-title").innerText = s.title;
  document.getElementById("song-artist").innerText = s.artist;
  document.getElementById("song-reason").innerText =
    contextPrefix(smartCtx) + "💡 " + buildReason(s, item.reasons);
  const sameSong = songId === String(s.id);
  songId = String(s.id);
  localStorage.setItem("songId", songId);
  const savedTime = Number(localStorage.getItem("songTime"));
  const targetTime = resume && sameSong && Number.isFinite(savedTime) ? savedTime : 0;
  if (!resume || !sameSong) {
    songTime = 0;
    localStorage.setItem("songTime", "0");
  }
  restoringSong = true;
  const shouldResume = localStorage.getItem("isPlaying") === "true";
  player.pause();
  localStorage.setItem("isPlaying", String(shouldResume));
  player.src = songUrl(s);
  audioFallbackTried = false;
  function restoreSongPosition() {
    if (targetTime > 0) {
      try {
        const lastMoment = Number.isFinite(player.duration) ? Math.max(0, player.duration - 0.25) : targetTime;
        player.currentTime = Math.min(targetTime, lastMoment);
      } catch (e) { /* Some mobile browsers only allow seeking after canplay. */ }
    }
    if (targetTime === 0 || player.currentTime >= targetTime - 1 || player.ended) {
      player.removeEventListener("loadedmetadata", restoreSongPosition);
      player.removeEventListener("canplay", restoreSongPosition);
      songTime = player.currentTime || targetTime;
      localStorage.setItem("songTime", String(songTime));
      restoringSong = false;
      if (shouldResume) player.play().catch(function () {});
      updateProgress();
    }
  }
  player.addEventListener("loadedmetadata", restoreSongPosition);
  player.addEventListener("canplay", restoreSongPosition);
  if (player.readyState >= 1) restoreSongPosition();
  updateProgress();
}

async function initSmart() {
  const today = todayStr();
  const cached = localStorage.getItem("smartState");
  if (cached) {
    try {
      const c = JSON.parse(cached);
      if (c && c.date === today && c.ver === DAILY_CONTEXT_VERSION && Array.isArray(c.order) && c.order.length > 0) {
        smartQueue = c.order;
        smartCtx = c.ctx || null;
        smartIdx = parseInt(localStorage.getItem("smartIdx"), 10) || 0;
        if (smartIdx >= smartQueue.length) smartIdx = 0;
        if (playMode === "shuffle") loadShuffleDeck();
        loadSmart(true);
        return;
      }
    } catch (e) { /* 忽略损坏的缓存 */ }
  }
  const ctx = await getContextOnce();
  smartCtx = ctx;
  smartQueue = rankSongs(songs, ctx);
  smartIdx = 0;
  localStorage.setItem("smartState", JSON.stringify({ date: today, ver: DAILY_CONTEXT_VERSION, ctx: ctx, order: smartQueue }));
  localStorage.setItem("smartIdx", "0");
  if (playMode === "shuffle") loadShuffleDeck();
  loadSmart(true);
}

function advanceSong() {
  smartIdx++;
  if (smartIdx >= smartQueue.length) {
    const now = new Date();
    const ctx = smartCtx || {
      period: getPeriod(now.getHours()),
      season: getSeason(now.getMonth() + 1),
      hour: now.getHours(),
      weekday: now.getDay(),
      weekend: (now.getDay() === 0 || now.getDay() === 6),
      night: (now.getHours() >= 19 || now.getHours() < 5),
      weather: null,
      temp: null,
      wind: null,
      city: "北京"
    };
    smartQueue = rankSongs(songs, ctx);
    smartIdx = 0;
  }
}

function buildShuffleDeck() {
  const n = smartQueue.length;
  const deck = [];
  for (let i = 0; i < n; i++) deck.push(i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = deck[i];
    deck[i] = deck[j];
    deck[j] = t;
  }
  // 避免新一轮第一首恰好又是刚播完的那首，把它挪到后面
  if (n > 1) {
    const cur = smartIdx % n;
    if (deck[0] === cur) {
      const swapPos = 1 + Math.floor(Math.random() * (n - 1));
      deck[0] = deck[swapPos];
      deck[swapPos] = cur;
    }
  }
  return deck;
}

function persistShuffle() {
  localStorage.setItem("shuffleDeck", JSON.stringify({
    date: todayStr(),
    ver: SONG_CDN_VER,
    deck: shuffleDeck
  }));
  localStorage.setItem("shuffleIdx", String(shuffleIdx));
}

function loadShuffleDeck() {
  const today = todayStr();
  try {
    const raw = localStorage.getItem("shuffleDeck");
    const meta = raw ? JSON.parse(raw) : null;
    if (meta && meta.date === today && meta.ver === SONG_CDN_VER &&
        Array.isArray(meta.deck) && meta.deck.length === smartQueue.length) {
      shuffleDeck = meta.deck;
      shuffleIdx = parseInt(localStorage.getItem("shuffleIdx"), 10) || 0;
      if (shuffleIdx >= shuffleDeck.length) shuffleIdx = 0;
      return;
    }
  } catch (e) { /* 缓存损坏则重建 */ }
  // 重建：当前正在听/正推的歌作为新一轮起点，其余随机排在后面
  const n = smartQueue.length;
  const rest = [];
  for (let i = 0; i < n; i++) if (i !== smartIdx) rest.push(i);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = rest[i];
    rest[i] = rest[j];
    rest[j] = t;
  }
  shuffleDeck = [smartIdx % n].concat(rest);
  shuffleIdx = 0;
  persistShuffle();
}

function nextSong() {
  if (playMode === "shuffle") {
    shuffleIdx++;
    if (shuffleIdx >= shuffleDeck.length) {
      shuffleDeck = buildShuffleDeck();
      shuffleIdx = 0;
    }
    smartIdx = shuffleDeck[shuffleIdx];
  } else {
    advanceSong();
  }
  localStorage.setItem("smartIdx", String(smartIdx));
  if (playMode === "shuffle") persistShuffle();
  loadSmart(false);
}

function prevSong() {
  if (smartQueue.length === 0) return;
  if (playMode === "shuffle") {
    shuffleIdx--;
    if (shuffleIdx < 0) shuffleIdx = shuffleDeck.length - 1;
    smartIdx = shuffleDeck[shuffleIdx];
  } else {
    smartIdx--;
    if (smartIdx < 0) smartIdx = smartQueue.length - 1;
  }
  localStorage.setItem("smartIdx", String(smartIdx));
  if (playMode === "shuffle") persistShuffle();
  loadSmart(false);
}

function togglePlay() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function setVolume(v) {
  const vol = Math.min(100, Math.max(0, parseFloat(v) || 0));
  songVolume = vol;
  localStorage.setItem("songVolume", String(Math.round(vol)));
  player.volume = vol / 100;
  player.muted = vol === 0;
  const icon = document.getElementById("song-vol-icon");
  if (icon) icon.innerText = vol === 0 ? "🔇" : vol < 50 ? "🔉" : "🔊";
  const slider = document.getElementById("song-volume");
  if (slider && slider.style && slider.style.setProperty) {
    slider.style.setProperty("--vol", vol + "%");
  }
}

function initVolume() {
  const vol = Math.min(100, Math.max(0, songVolume));
  player.volume = vol / 100;
  player.muted = vol === 0;
  const slider = document.getElementById("song-volume");
  if (slider) {
    slider.value = String(vol);
    if (slider.style && slider.style.setProperty) {
      slider.style.setProperty("--vol", vol + "%");
    }
  }
  const icon = document.getElementById("song-vol-icon");
  if (icon) icon.innerText = vol === 0 ? "🔇" : vol < 50 ? "🔉" : "🔊";
}

function cycleMode() {
  playMode = playMode === "order" ? "shuffle" : playMode === "shuffle" ? "single" : "order";
  localStorage.setItem("playMode", playMode);
  if (playMode === "shuffle" && smartQueue.length > 0 && shuffleDeck.length === 0) {
    loadShuffleDeck();
  }
  renderMode();
}

function renderMode() {
  const btn = document.getElementById("song-mode-btn");
  const map = { order: "🔁 顺序", shuffle: "🔀 随机", single: "🔂 单曲" };
  const tip = { order: "顺序播放", shuffle: "随机播放", single: "单曲循环" };
  if (btn) {
    btn.innerText = map[playMode];
    btn.title = tip[playMode] + "（点击切换）";
  }
}

function fmtTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + (s < 10 ? "0" : "") + s;
}

function updateProgress() {
  const dur = player.duration || 0;
  const cur = player.currentTime || 0;
  const pct = dur > 0 ? Math.min(100, Math.max(0, cur / dur * 100)) : 0;
  const fill = document.getElementById("song-progress-fill");
  const thumb = document.getElementById("song-progress-thumb");
  const timeEl = document.getElementById("song-time");
  if (fill) fill.style.width = pct + "%";
  if (thumb) thumb.style.left = pct + "%";
  if (timeEl) timeEl.innerText = fmtTime(cur) + " / " + fmtTime(dur);
}

let songSeeking = false;
function seekFromEvent(ev) {
  const bar = document.getElementById("song-progress");
  const rect = bar.getBoundingClientRect();
  const ratio = rect.width > 0 ? Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width)) : 0;
  if (player.duration > 0 && isFinite(player.duration)) {
    player.currentTime = ratio * player.duration;
  }
  updateProgress();
}

// 播放器进度条交互（点击 / 拖动）
document.getElementById("song-progress").addEventListener("pointerdown", function (ev) {
  songSeeking = true;
  seekFromEvent(ev);
  if (this.setPointerCapture) this.setPointerCapture(ev.pointerId);
});
document.getElementById("song-progress").addEventListener("pointermove", function (ev) {
  if (songSeeking) seekFromEvent(ev);
});
document.getElementById("song-progress").addEventListener("pointerup", function () {
  songSeeking = false;
});
document.getElementById("song-progress").addEventListener("pointercancel", function () {
  songSeeking = false;
});

// jsDelivr 拉取失败时，自动降级到 GitHub 原始直链
player.addEventListener("error", function () {
  const item = smartQueue[smartIdx];
  const s = item && songs.find(function (x) { return x.id === item.id; });
  if (s && !audioFallbackTried) {
    audioFallbackTried = true;
    player.src = fallbackSongUrl(s);
    if (localStorage.getItem("isPlaying") === "true") {
      player.play();
    }
    return;
  }
  audioFallbackTried = false;
});

window.addEventListener("pagehide", function () {
  if (!restoringSong && Number.isFinite(player.currentTime) && player.currentTime > 0) {
    songTime = player.currentTime;
    localStorage.setItem("songTime", String(songTime));
  }
});

// 记住播放进度
player.addEventListener("timeupdate", function () {
  if (!restoringSong && Number.isFinite(player.currentTime)) {
    songTime = player.currentTime;
    localStorage.setItem("songTime", String(songTime));
  }
  updateProgress();
});

player.addEventListener("loadedmetadata", updateProgress);
player.addEventListener("durationchange", updateProgress);

player.addEventListener("ended", function () {
  if (playMode === "single") {
    player.currentTime = 0;
    localStorage.setItem("isPlaying", "true");
    player.play();
    return;
  }
  localStorage.setItem("isPlaying", "true");
  nextSong();
});

player.addEventListener("play", function () {
  localStorage.setItem("isPlaying", "true");
  const b = document.getElementById("song-play-btn");
  if (b) {
    b.innerText = "⏸";
    b.classList.add("playing");
  }
});

player.addEventListener("pause", function () {
  localStorage.setItem("isPlaying", "false");
  const b = document.getElementById("song-play-btn");
  if (b) {
    b.innerText = "▶";
    b.classList.remove("playing");
  }
});

initVolume();
renderMode();
updateProgress();
initSmart();

// ==================== 今日诗词 ====================
// ---- 诗词库（按需加载）----
let POEMS = [];
let poemLibraryPromise = null;
const POEM_LIBRARY_VERSION = '8f063acc206a';
const POEM_GENRES = ['全部', '唐诗', '宋词', '诗经', '楚辞', '元曲', '五代词', '清词'];
let poemGenre = localStorage.getItem('poemGenre') || '全部';

async function loadPoemLibrary() {
  if (POEMS.length) return POEMS;
  if (!poemLibraryPromise) {
    poemLibraryPromise = fetch('/data/daily-poems.json', { cache: 'force-cache' })
      .then(function(response) { if (!response.ok) throw new Error('poetry library unavailable'); return response.json(); })
      .then(function(data) { POEMS = Array.isArray(data.poems) ? data.poems : []; return POEMS; });
  }
  return poemLibraryPromise;
}

function updatePoemGenreButton() {
  const button = document.getElementById('poem-genre-btn');
  if (button) button.innerText = '体裁：' + poemGenre;
}

function cyclePoemGenre() {
  const current = POEM_GENRES.indexOf(poemGenre);
  poemGenre = POEM_GENRES[(current + 1) % POEM_GENRES.length];
  localStorage.setItem('poemGenre', poemGenre);
  poemQueue = rankPoems(poemCtx || fallbackPoemCtx());
  poemIdx = 0;
  updatePoemGenreButton();
  renderPoem();
}
// ---- 诗词库结束 ----

let poemQueue = [];
let poemIdx = 0;
let poemCtx = null;
let poemTyping = null;
let poemSpeaking = false;

function poemScore(poem, ctx, jitter) {
  let score = 0;
  const reasons = [];
  const push = function (r) { if (reasons.length < 3) reasons.push(r); };
  const tags = poem.t;

  if (ctx.weather === "雨" && tags.indexOf("雨") >= 0) {
    score += 30;
    push("今天有雨，雨声里读诗正相宜");
  }
  if (ctx.weather === "雪" && tags.indexOf("雪") >= 0) {
    score += 30;
    push("今日落雪，来一首写雪的诗");
  }
  if (ctx.weather === "晴" && tags.indexOf("晴") >= 0) {
    score += 8;
    push("天气晴朗，适合一首明快的诗");
  }
  const poemTemperature = temperatureMatch(ctx, tags, "poem");
  if (poemTemperature) { score += poemTemperature.score; push(poemTemperature.reason); }
  if (ctx.night && tags.indexOf("夜") >= 0) {
    score += 15;
    push("夜深了，月色与诗更配");
  }
  if (ctx.night && tags.indexOf("月") >= 0) {
    score += 8;
  }
  if (tags.indexOf(ctx.season) >= 0) {
    score += 12;
    push("现在正是" + ctx.season + "天，这首诗应景");
  }
  if (ctx.period.key === "清晨" && tags.indexOf("清晨") >= 0) {
    score += 10;
    push("清晨宜读诗，给今天一个温柔的开头");
  }
  if (ctx.period.key === "傍晚" && tags.indexOf("傍晚") >= 0) {
    score += 10;
    push("傍晚适合慢下来，读一首诗");
  }
  if (ctx.weekend && (tags.indexOf("轻快") >= 0 || tags.indexOf("青春") >= 0)) {
    score += 6;
    push("周末了，来点轻快的诗意");
  }
  score += jitter;
  return { score: score, reasons: reasons };
}

function rankPoems(ctx) {
  const visiblePoems = poemGenre === "全部" ? POEMS : POEMS.filter(function(p) { return p.g === poemGenre; });
  let ranked = visiblePoems.map(function (p) { return { p: p, i: POEMS.indexOf(p) }; }).map(function (entry) { var p = entry.p, i = entry.i;
    const r = poemScore(p, ctx, Math.random() * 10);
    return { i: i, score: r.score, reasons: r.reasons };
  });
  ranked.sort(function (a, b) { return b.score - a.score; });
  // 每天轮换一下，避免连续多天都是同一首
  const bj = beijingNow();
  const rot = dayOfYear(new Date(bj.year, bj.month - 1, bj.day)) % Math.min(25, ranked.length);
  if (rot > 0) ranked = ranked.slice(rot).concat(ranked.slice(0, rot));
  return ranked;
}

function dayOfYear(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d - start) / 86400000);
}

function fallbackPoemCtx() {
  const now = new Date();
  return {
    period: getPeriod(now.getHours()),
    season: getSeason(now.getMonth() + 1),
    hour: now.getHours(),
    weekday: now.getDay(),
    weekend: (now.getDay() === 0 || now.getDay() === 6),
    night: (now.getHours() >= 19 || now.getHours() < 5),
    weather: null,
    temp: null,
    wind: null,
    city: "北京"
  };
}

function typePoem(poem, reasons) {
  if (poemTyping) { clearInterval(poemTyping); poemTyping = null; }
  const el = document.getElementById("poem-content");
  const infoEl = document.getElementById("poem-info");
  const reasonEl = document.getElementById("poem-reason");
  reasonEl.innerText = contextPrefix(poemCtx) + "💡 " + poemReason(poem, reasons);
  infoEl.innerText = "";
  el.classList.add("typing");
  el.innerText = "";
  const full = poem.c;
  let idx = 0;
  const speed = Math.max(12, Math.min(45, Math.round(4200 / full.length)));
  poemTyping = setInterval(function () {
    idx++;
    el.innerText = full.slice(0, idx);
    if (idx >= full.length) {
      clearInterval(poemTyping);
      poemTyping = null;
      el.classList.remove("typing");
      infoEl.innerText = "—— " + poem.a + "《" + poem.o + "》 · " + (poem.g || "古典诗词");
    }
  }, speed);
}

function poemReason(poem, reasons) {
  if (reasons.length > 0) {
    return reasons.slice(0, 2).join("；") + "。";
  }
  const tagWords = {
    "雨": "雨意", "雪": "雪韵", "月": "月色", "夜": "夜色", "春": "春意",
    "夏": "夏韵", "秋": "秋意", "冬": "冬韵", "清晨": "晨光", "傍晚": "暮色",
    "晴": "晴光", "轻快": "轻快", "青春": "青春"
  };
  const bits = [];
  for (let i = 0; i < poem.t.length && bits.length < 2; i++) {
    const w = tagWords[poem.t[i]] || poem.t[i];
    if (bits.indexOf(w) < 0) bits.push(w);
  }
  const tail = bits.length > 0 ? "，字里行间带着" + bits.join("与") + "的气息" : "";
  return poem.a + "的一首《" + poem.o + "》" + tail + "，好诗配好时光，读来便是缘分。";
}

function renderPoem() {
  if (!poemQueue.length) return;
  const item = poemQueue[poemIdx];
  typePoem(POEMS[item.i], item.reasons);
}

function nextPoem() {
  if (!poemQueue.length) {
    poemQueue = rankPoems(poemCtx || fallbackPoemCtx());
    poemIdx = 0;
  } else {
    poemIdx++;
    if (poemIdx >= poemQueue.length) {
      poemQueue = rankPoems(poemCtx || fallbackPoemCtx());
      poemIdx = 0;
    }
  }
  localStorage.setItem("poemIdx", String(poemIdx));
  renderPoem();
}

async function initPoem() {
  const contentEl = document.getElementById("poem-content");
  try { await loadPoemLibrary(); } catch (e) { if (contentEl) contentEl.innerText = "诗词卷暂时没有展开，请稍后再试。"; return; }
  if (!POEMS.length) { if (contentEl) contentEl.innerText = "诗词卷暂时为空。"; return; }
  updatePoemGenreButton();
  const today = todayStr();
  const cached = localStorage.getItem("poemState");
  if (cached) {
    try {
      const c = JSON.parse(cached);
      if (c && c.date === today && c.ver === DAILY_CONTEXT_VERSION && c.poemVer === POEM_LIBRARY_VERSION && Array.isArray(c.order) && c.order.length > 0) {
        poemQueue = c.order;
        poemCtx = c.ctx || null;
        poemIdx = parseInt(localStorage.getItem("poemIdx"), 10) || 0;
        if (poemIdx >= poemQueue.length) poemIdx = 0;
        renderPoem();
        return;
      }
    } catch (e) { /* 忽略损坏的缓存 */ }
  }
  const ctx = await getContextOnce();
  poemCtx = ctx;
  poemQueue = rankPoems(ctx);
  poemIdx = 0;
  localStorage.setItem("poemState", JSON.stringify({ date: today, ver: DAILY_CONTEXT_VERSION, poemVer: POEM_LIBRARY_VERSION, ctx: ctx, order: poemQueue }));
  localStorage.setItem("poemIdx", "0");
  renderPoem();
}

function currentPoem() {
  if (!poemQueue.length || !poemQueue[poemIdx]) return null;
  return POEMS[poemQueue[poemIdx].i];
}

function toggleRead() {
  const btn = document.getElementById("poem-read-btn");
  if (typeof speechSynthesis === "undefined") {
    btn.innerText = "浏览器不支持";
    return;
  }
  if (poemSpeaking) {
    speechSynthesis.cancel();
    poemSpeaking = false;
    btn.innerText = "🔊 朗读";
    return;
  }
  const poem = currentPoem();
  if (!poem) return;
  const u = new SpeechSynthesisUtterance(
    poem.c.replace(/\n/g, "，") + "。" + poem.o + "，" + poem.a
  );
  u.lang = "zh-CN";
  u.rate = 0.9;
  u.onend = function () { poemSpeaking = false; btn.innerText = "🔊 朗读"; };
  u.onerror = function () { poemSpeaking = false; btn.innerText = "🔊 朗读"; };
  speechSynthesis.cancel();
  poemSpeaking = true;
  btn.innerText = "⏹ 停止";
  speechSynthesis.speak(u);
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
}

function copyPoem() {
  const poem = currentPoem();
  if (!poem) return;
  const text = poem.c + "\n—— " + poem.a + "《" + poem.o + "》";
  const btn = document.getElementById("poem-copy-btn");
  const ok = function () {
    btn.innerText = "✓ 已复制";
    setTimeout(function () { btn.innerText = "📋 复制"; }, 1600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(ok, function () {
      fallbackCopy(text);
      ok();
    });
  } else {
    fallbackCopy(text);
    ok();
  }
}

(function() {
    var card = document.querySelector('.daily-wrapper');
    var started = false;
    function startDaily() {
      if (started) return; started = true;
      var audio = document.getElementById('song-player');
      if (audio) audio.preload = 'metadata';
      initPoem();
    }
    if (!card || !('IntersectionObserver' in window)) { startDaily(); return; }
    var observer = new IntersectionObserver(function(entries) {
      if (entries.some(function(entry) { return entry.isIntersecting; })) {
        observer.disconnect(); startDaily();
      }
    }, { rootMargin: '300px' });
    observer.observe(card);
  })();