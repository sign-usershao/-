/**
 * 开阳十大美食地图 — 店铺数据
 * 后续替换图片：修改 image 字段即可（支持 jpg / png / webp / svg）
 * 后续替换地图：修改 MAP_IMAGE，并按真实位置微调各店 mapX / mapY（百分比 0-100）
 */
window.KAIYANG_FOOD_MAP = {
  projectTitle: "开阳十大美食地图",
  slogan: "爽爽贵阳 硒味开阳",
  mapTitle: "开阳美食地图",
  mapImage: "assets/images/map-placeholder.svg",
  mapHint: "点击地图地标可直达店铺，也可继续上滑逐家打卡",
  bgm: "assets/audio/bgm.mp3",
  article: {
    title: "开阳特色美食地图来啦！快和你的“饭搭子”去打卡吧",
    account: "诗画开阳",
    dateText: "贵州",
    heroImage: "assets/images/article-cover.jpg",
    shareImage: "assets/images/share-thumb.jpg",
    shareDesc: "爽爽贵阳 硒养开阳，点击封面进入开阳特色美食图鉴。",
    canonicalUrl: "https://kai-yang-mei-shi.onrender.com/"
  },
  shops: [
    {
      id: 1,
      name: "何家会砂锅粉",
      specialty: "砂锅粉",
      address: "南山社区服务中心西门桥中山路",
      amapUrl: "https://surl.amap.com/ci6Yuv47g7m",
      image: "assets/images/shops/01.svg",
      mapX: 42,
      mapY: 38,
      intro: "一锅热气把清晨叫醒，粉丝吸饱高汤，是开阳人最熟悉的开工仪式。"
    },
    {
      id: 2,
      name: "唐记油炸粑",
      specialty: "油炸粑、麦耳朵",
      address: "硒城街道办事处中山居委会开州大道193号1层",
      amapUrl: "https://surl.amap.com/ckoZacm1x5dl",
      image: "assets/images/shops/02.svg",
      mapX: 48,
      mapY: 32,
      intro: "外酥里嫩的油炸粑，配上麦耳朵的麦香，是街头最解馋的一口酥脆。"
    },
    {
      id: 3,
      name: "曾记水煎包",
      specialty: "水煎包",
      address: "东街与龙井巷交叉口西北20米",
      amapUrl: "https://surl.amap.com/cjkrkWWa9tt",
      image: "assets/images/shops/03.svg",
      mapX: 54,
      mapY: 36,
      intro: "锅底金黄焦香，汤汁藏在皮里，咬开的瞬间就是老街的烟火气。"
    },
    {
      id: 4,
      name: "紫江花园夜市",
      specialty: "烙锅、烤肉",
      address: "开阳县云开街道紫江花园",
      amapUrl: "https://surl.amap.com/ckArWSq1ugzV",
      image: "assets/images/shops/04.svg",
      mapX: 36,
      mapY: 48,
      intro: "夜色一落，烙锅滋滋作响，烤肉香把整条街区都点亮。"
    },
    {
      id: 5,
      name: "谦翔夜市",
      specialty: "花花烤肉、活油土罗锅、曹小鱼烤鱼",
      address: "开阳县硒城街道谦翔小区",
      amapUrl: "https://surl.amap.com/cndUIKWMfqc",
      image: "assets/images/shops/05.svg",
      mapX: 58,
      mapY: 44,
      intro: "夜市三连击：烤肉、土罗锅、烤鱼，饭搭子一来就不肯散场。"
    },
    {
      id: 6,
      name: "炉火坛子烤鱼",
      specialty: "豆花烤鱼",
      address: "贵阳市开阳县学良大道58号",
      amapUrl: "https://surl.amap.com/coJg7H82etU",
      image: "assets/images/shops/06.svg",
      mapX: 44,
      mapY: 52,
      intro: "豆花温柔，烤鱼热烈，一坛炉火把鲜香慢慢煨透。"
    },
    {
      id: 7,
      name: "馋解香",
      specialty: "麻辣丝",
      address: "开阳县城关镇东兴苑乾宸大厦",
      amapUrl: "https://surl.amap.com/croCNFs73sA",
      image: "assets/images/shops/07.svg",
      mapX: 62,
      mapY: 40,
      intro: "麻辣丝又香又脆，越嚼越想再来一袋，开阳零食里的“解馋担当”。"
    },
    {
      id: 8,
      name: "大塘鱼庄（开阳分店）",
      specialty: "冷锅鱼",
      address: "开阳县云开二级公路与172乡道交叉口北150米",
      amapUrl: "https://surl.amap.com/crTfRBs1kbvg",
      image: "assets/images/shops/08.svg",
      mapX: 28,
      mapY: 58,
      intro: "冷锅鱼热辣鲜香，鱼肉紧实，适合约一桌人慢慢涮、慢慢聊。"
    },
    {
      id: 9,
      name: "荟泷鱼庄",
      specialty: "鱼火锅",
      address: "开阳县城关镇东山村老东风加油站",
      amapUrl: "https://surl.amap.com/ctsdKkS1s8nZ",
      image: "assets/images/shops/09.svg",
      mapX: 70,
      mapY: 50,
      intro: "一锅鱼火锅升起热气，鲜汤垫底，辣香随后，夜雨天尤其治愈。"
    },
    {
      id: 10,
      name: "硒域食府",
      specialty: "富硒枇杷酸汤牛肉",
      address: "开阳县云开街道心学大道开磷盛世新城",
      amapUrl: "https://surl.amap.com/cvDkraS144nF",
      image: "assets/images/shops/10.svg",
      mapX: 40,
      mapY: 62,
      intro: "酸汤亮出开阳底色，牛肉遇上富硒枇杷的清香，是本地宴席里的记忆点。"
    },
    {
      id: 11,
      name: "绿茵阁",
      specialty: "蒙古包柴火鸡",
      address: "开阳县城关镇干田坝磷矿小区",
      amapUrl: "https://surl.amap.com/cvHKQHAi1wy",
      image: "assets/images/shops/11.svg",
      mapX: 52,
      mapY: 68,
      intro: "柴火鸡香得发烫，蒙古包围炉而坐，适合周末把朋友都喊来。"
    },
    {
      id: 12,
      name: "蔡清鲜黄牛肉火锅土菜馆",
      specialty: "牛肉火锅",
      address: "开阳县东湖大道与心学大道交叉口南320米",
      amapUrl: "https://surl.amap.com/cxUDTn81igIG",
      image: "assets/images/shops/12.svg",
      mapX: 34,
      mapY: 70,
      intro: "黄牛肉下锅即嫩，土菜本味足，是本地人认可的“大口吃肉”去处。"
    },
    {
      id: 13,
      name: "李建平腊味馆",
      specialty: "腊猪脚、腊排骨火锅",
      address: "开阳县羽翔苑东北门旁",
      amapUrl: "https://surl.amap.com/cB86SKOXdRZ",
      image: "assets/images/shops/13.svg",
      mapX: 66,
      mapY: 62,
      intro: "腊猪脚软糯、腊排骨醇香。导航以客户指定链接为准，页面展示店名以“李建平腊味馆”为准。",
      note: "高德地点当前可能显示为“开之洲酒楼(羽翔苑店)”，页面必须展示“李建平腊味馆”。"
    },
    {
      id: 14,
      name: "鸿月楼",
      specialty: "商务接待餐",
      address: "开阳县贵开路78号3层",
      amapUrl: "https://surl.amap.com/czdVakS1zazN",
      image: "assets/images/shops/14.svg",
      mapX: 46,
      mapY: 24,
      intro: "厅堂端正、菜品体面，适合把远道而来的客人安放在从容的一餐里。"
    },
    {
      id: 15,
      name: "唐老五酒楼",
      specialty: "商务接待餐",
      address: "开阳县云开国际2期8栋2楼",
      amapUrl: "https://surl.amap.com/czkA2FE1xgDb",
      image: "assets/images/shops/15.svg",
      mapX: 22,
      mapY: 42,
      intro: "商务宴请的稳妥之选，把开阳味道收进规整而热情的席面。"
    },
    {
      id: 16,
      name: "春哥盛宴",
      specialty: "商务接待餐",
      address: "开阳县云开街道办事处开州首府红军路17幢-2-2-1号",
      amapUrl: "https://surl.amap.com/czPMlPwK8Sf",
      image: "assets/images/shops/16.svg",
      mapX: 74,
      mapY: 34,
      intro: "盛宴之名，图的是席间从容。接待、聚餐、把酒言欢都合适。"
    },
    {
      id: 17,
      name: "于苗子食府",
      specialty: "小花鱼",
      address: "开阳县禾丰乡青龙码头酒店旁",
      amapUrl: "https://surl.amap.com/cAowwCGBcff",
      image: "assets/images/shops/17.svg",
      mapX: 18,
      mapY: 78,
      intro: "码头风来，小花鱼鲜香入味，把乡野与河鲜一起端上桌。"
    },
    {
      id: 18,
      name: "如意农家乐",
      specialty: "盗汗鸡",
      address: "开阳县水东乡舍平案北(151县道西)",
      amapUrl: "https://surl.amap.com/cDhgJoG1rehm",
      image: "assets/images/shops/18.svg",
      mapX: 80,
      mapY: 76,
      intro: "山乡里的盗汗鸡香气扑鼻，是出城觅食、把日子过慢一点的理由。"
    }
  ],
  /**
   * 7张完整宣传页：图片负责视觉，hotspots 只做透明点击。
   * left/top/width/height 为相对图片的百分比。
   */
  posterPages: [
    {
      image: "assets/images/pages/01.jpg?v=0930b",
      bgImage: "assets/images/pages/01-bg.jpg?v=0930b",
      staticPieces: [],
      titlePieces: [
        { left: 6, top: 2.6, width: 88, height: 17.6, delay: 0 },
        { left: 8, top: 17.0, width: 84, height: 13.4, delay: 0.18 },
        { left: 6, top: 28.2, width: 88, height: 13.4, delay: 0.36 }
      ],
      dishPieces: [
        { left: 17, top: 41.4, width: 22, height: 13.2, delay: 0.62, round: 1 },
        { left: 45, top: 38.4, width: 38, height: 18.2, delay: 0.7, round: 1 },
        { left: 32, top: 44.2, width: 18, height: 13.4, delay: 0.78, round: 1 },
        { left: 23, top: 51.2, width: 18, height: 11.0, delay: 0.86, round: 1 },
        { left: 51, top: 50.0, width: 16, height: 10.2, delay: 0.94, round: 1 },
        { left: 62, top: 48.6, width: 17, height: 10.6, delay: 1.02, round: 1 },
        { left: 73, top: 51.6, width: 21, height: 12.4, delay: 1.1, round: 1 },
        { left: 54, top: 56.8, width: 17, height: 10.4, delay: 1.18, round: 1 },
        { left: 65, top: 59.8, width: 21, height: 12.2, delay: 1.26, round: 1 },
        { left: 1.8, top: 57.8, width: 24, height: 15.2, delay: 1.34, round: 1 },
        { left: 11, top: 66.4, width: 20, height: 12.8, delay: 1.42, round: 1 },
        { left: 13, top: 77.6, width: 26, height: 13.4, delay: 1.5, round: 1 },
        { left: 31, top: 72.8, width: 34, height: 17.2, delay: 1.58, round: 1 },
        { left: 57, top: 72.6, width: 30, height: 16.0, delay: 1.66, round: 1 },
        { left: 5, top: 40.6, width: 16, height: 12.0, delay: 0.58, round: 1 },
        { left: 78, top: 46.8, width: 20, height: 14.2, delay: 1.06, round: 1 },
        { left: 70, top: 60.4, width: 22, height: 13.0, delay: 1.3, round: 1 }
      ],
      cardPieces: []
    },
    {
      image: "assets/images/pages/02.jpg?v=0930b",
      bgImage: "assets/images/pages/02-bg.jpg?v=0930b",
      hotspots: [
        { shopId: 1, left: 48, top: 33.2, width: 42, height: 7 },
        { shopId: 2, left: 7, top: 58.8, width: 40, height: 7 },
        { shopId: 3, left: 48, top: 86.2, width: 42, height: 7 }
      ],
      staticPieces: [],
      titlePieces: [],
      dishPieces: [],
      cardPieces: [
        { left: 4.2, top: 15.8, width: 91.6, height: 26.8, delay: 0.06 },
        { left: 4.0, top: 41.6, width: 92.0, height: 27.8, delay: 0.38 },
        { left: 4.0, top: 69.2, width: 92.0, height: 29.0, delay: 0.7 }
      ]
    },
    {
      image: "assets/images/pages/03.jpg?v=0930b",
      bgImage: "assets/images/pages/03-bg.jpg?v=0930b",
      hotspots: [
        { shopId: 4, left: 48, top: 31.2, width: 42, height: 7 },
        { shopId: 5, left: 7, top: 56.8, width: 40, height: 7 },
        { shopId: 6, left: 48, top: 84.2, width: 42, height: 7 }
      ],
      staticPieces: [],
      titlePieces: [],
      dishPieces: [],
      cardPieces: [
        { left: 4.0, top: 14.6, width: 92.0, height: 27.6, delay: 0.06 },
        { left: 4.0, top: 41.4, width: 92.0, height: 27.8, delay: 0.38 },
        { left: 4.0, top: 68.6, width: 92.0, height: 29.8, delay: 0.7 }
      ]
    },
    {
      image: "assets/images/pages/04.jpg?v=0930b",
      bgImage: "assets/images/pages/04-bg.jpg?v=0930b",
      hotspots: [
        { shopId: 7, left: 47, top: 26.2, width: 43, height: 7 },
        { shopId: 8, left: 7, top: 56.2, width: 40, height: 7.2 },
        { shopId: 9, left: 48, top: 86.8, width: 42, height: 7.5 }
      ],
      staticPieces: [],
      titlePieces: [],
      dishPieces: [],
      cardPieces: [
        { left: 4.0, top: 12.8, width: 92.0, height: 27.8, delay: 0.06 },
        { left: 4.0, top: 39.6, width: 92.0, height: 28.6, delay: 0.38 },
        { left: 4.0, top: 67.4, width: 92.0, height: 31.2, delay: 0.7 }
      ]
    },
    {
      image: "assets/images/pages/05.jpg?v=0930b",
      bgImage: "assets/images/pages/05-bg.jpg?v=0930b",
      hotspots: [
        { shopId: 10, left: 50, top: 26.5, width: 42, height: 7.5 },
        { shopId: 11, left: 50, top: 54.2, width: 42, height: 7.5 },
        { shopId: 12, left: 50, top: 83.5, width: 42, height: 7.5 }
      ],
      staticPieces: [],
      titlePieces: [],
      dishPieces: [],
      cardPieces: [
        { left: 3.2, top: 7.4, width: 93.6, height: 30.0, delay: 0.06 },
        { left: 3.2, top: 36.2, width: 93.6, height: 30.6, delay: 0.38 },
        { left: 3.2, top: 65.6, width: 93.6, height: 33.2, delay: 0.7 }
      ]
    },
    {
      image: "assets/images/pages/06.jpg?v=0930b",
      bgImage: "assets/images/pages/06-bg.jpg?v=0930b",
      hotspots: [
        { shopId: 13, left: 48, top: 28.5, width: 42, height: 7.2 },
        { shopId: 14, left: 7, top: 55.8, width: 40, height: 7.2 },
        { shopId: 15, left: 48, top: 83.5, width: 42, height: 7.2 }
      ],
      staticPieces: [],
      titlePieces: [],
      dishPieces: [],
      cardPieces: [
        { left: 4.0, top: 14.8, width: 92.0, height: 27.4, delay: 0.06 },
        { left: 4.0, top: 41.0, width: 92.0, height: 28.0, delay: 0.38 },
        { left: 4.0, top: 67.8, width: 92.0, height: 31.0, delay: 0.7 }
      ]
    },
    {
      image: "assets/images/pages/07.jpg?v=0930b",
      bgImage: "assets/images/pages/07-bg.jpg?v=0930b",
      hotspots: [
        { shopId: 16, left: 48, top: 28.2, width: 42, height: 7.2 },
        { shopId: 17, left: 7, top: 55.5, width: 40, height: 7.2 },
        { shopId: 18, left: 48, top: 83.2, width: 42, height: 7.2 }
      ],
      staticPieces: [],
      titlePieces: [],
      dishPieces: [],
      cardPieces: [
        { left: 4.0, top: 14.4, width: 92.0, height: 27.6, delay: 0.06 },
        { left: 4.0, top: 40.8, width: 92.0, height: 28.2, delay: 0.38 },
        { left: 4.0, top: 67.8, width: 92.0, height: 31.0, delay: 0.7 }
      ]
    }
  ]
};
