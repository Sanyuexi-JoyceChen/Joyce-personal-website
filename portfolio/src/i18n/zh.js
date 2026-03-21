export default {
  loading: "加载中...",
  langToggle: "EN",
  nav: {
    joyce: "Joyce",
    "about-me": "关于我",
    projects: "项目",
    awards: "荣誉",
    testimonials: "评价",
    contact: "联系"
  },
  hero: {
    line1: "In order",
    line2prefix: "to ",
    line3: "the AI Native",
    line4: "future.",
    rotatingWords: ['Build', 'Invest', 'Explore', 'All in']
  },
  viewMore: "查看更多",
  letsWork: "一起",
  together: "合作吧",
  readCode: "查看源代码",

  aboutMe: [
    {
      image: "/about/gensmo.png",
      when: "AI 产品实习生 | GENSMO",
      description: "GENSMO 是北美 AI 时尚应用赛道的头部产品，下载量超百万。我主导了两个核心方向：一是从零到一搭建 Couple Try-on 双人 AI 试衣功能，次日留存达全 App 最高（35\u201340%），人均生成 10+ 次；二是负责独立 Web 端产品 Savyo 的功能迭代，通过用户反馈分析挖掘核心痛点，设计图文混合 Refine 与引导式首页方案，核心图搜使用率达 60%，详情页点击转化由 15% 提升至 20%。",
      from: "2025.10",
      to: "2026.02"
    },
    {
      image: "/about/atom.png",
      when: "AI 投资实习生 | 原子创投",
      description: "在原子创投，我聚焦 AI 赛道的天使轮投资。为了解决 BP 初筛「量大效率低」的问题，我基于 Coze 设计了 BP 打分 Agent，将单个项目初筛时间从 4 小时压缩至 1 小时；同时用 Cursor、Octoparse、n8n 等工具搭建了 GitHub 标的筛选系统、YC S25 项目洞察网页和行业资讯自动抓取工作流，让团队把更多精力放在深度判断上。研究端，我完成了开源项目投资策略与 AI Infra 细分赛道两份研究报告。实习期间全程参与 50+ 项目评估，跟进 3 个进入尽调，其中 1 个成功投出。",
      from: "2025.06",
      to: "2025.10"
    },
    {
      image: "/about/bcg.png",
      when: "PTA 实习生 | 波士顿咨询（BCG）",
      description: "在 BCG，我参与了一个服装行业客户的战略增长项目。工作以案头研究为主——查阅并分析大量行业资料，梳理品牌的品类划分逻辑、产品架构与竞争对手定位，为客户在定价与营销等策略制定上提供数据与分析支撑。",
      from: "2024.01",
      to: "2024.03"
    },
    {
      image: "/about/qiaodou.png",
      when: "内容产品实习生 | 巧豆文化",
      description: "在巧豆文化，我参与了「动物城一爪通」项目——为上海迪士尼打造基于疯狂动物城 IP 的互动娱乐小程序。我从竞品分析入手，研究了大量迪士尼与环球影城 IP 数字产品案例，结合目标受众产出策略报告；随后深度参与产品策划，设计了用户养成系统与 AR 园区探索玩法。小程序上线后累计用户突破 250 万，Zootv 创意预告在小红书获赞 21 万+。",
      from: "2023.06",
      to: "2023.09"
    }
  ],

  projects: [
    {
      title: "游戏引擎",
      description: "Sprunk-engine 是一个开源的网页游戏引擎（可在 npm 上获取），由我和几位朋友共同开发。我们想要一个具有挑战性的、以架构为核心的项目，因此我们几乎不使用外部库就构建了一个游戏引擎。它允许开发者创建 2D 浏览器游戏，我们在官方网站上发布了两个演示游戏。我负责了自定义数学库、2D 物理引擎，目前正在开发新的 3D 物理引擎。这个项目帮助我深入理解了算法、优化、数学和开源协作。",
      link: "https://sprunk-engine.com/",
      background: "/projects/sprunk/background.jpg",
      mobile_pic: "/projects/sprunk/web.png",
      desktop_pic: "/projects/sprunk/template.jpg"
    },
    {
      title: "找到你的伙伴",
      description: "\"找到你的伙伴\"是一个灵感来源于我和朋友出国参加音乐节的小项目。每天超过 6 万人的场地，一旦人群分散，由于噪音和缺少地标，几乎不可能找到彼此。这个应用让用户可以创建群组聊天、查看彼此的实时位置、设置和分享地图标记，并使用手机陀螺仪驱动的 3D 箭头实时指向朋友的方向。3D 箭头功能使用了我的模块化「游戏引擎」项目。",
      link: "https://github.com/orgs/retrouve-ta-tribu/repositories",
      background: "/projects/find-your-tribe/background.jpg",
      mobile_pic: "/projects/find-your-tribe/map.png",
      desktop_pic: "/projects/find-your-tribe/irl.jpg"
    },
    {
      title: "个人作品集",
      description: "作品集项目就是你现在浏览的这个网站。虽然我的许多项目专注于架构、算法和数据科学，但我一直对前端开发有着浓厚的热情。我一直梦想成为一名「创意开发者」，经常浏览 awwwards.com 寻找灵感并研究高级视觉效果背后的技术。这个作品集既是展示我工作的方式，也是践行这一抱负的方式。如果你有任何建议或反馈，欢迎联系我！",
      link: "https://github.com/Cyprien-png/portfolio",
      background: "/backgrounds/mountains.jpg",
      mobile_pic: "/projects/portfolio/contact.png",
      desktop_pic: "/projects/portfolio/home.jpg"
    },
    {
      title: "SeaCracker",
      description: "SeaCracker 是我和游戏引擎团队在几个月前一起开发的另一个开源项目。我们想探索设计模式和 Web 应用架构，于是创建了一个类似 Kahoot 的平台，用户可以构建问答游戏并在实时会话中进行。主持人展示每道题目，玩家用手机加入并像遥控器一样提交答案。题目之间会显示排行榜以保持参与度。这个项目让我接触了状态机、事件驱动架构，也是我第一次真正使用 WebSocket 的经历。",
      link: "https://github.com/orgs/SeaCrackers/repositories",
      background: "/projects/sea-cracker/background.jpg",
      mobile_pic: "/projects/sea-cracker/answer.png",
      desktop_pic: "/projects/sea-cracker/question.jpg"
    }
  ],

  awards: [
    {
      title: "最佳毕业项目",
      description: "在应用开发高等教育结束时，我获得了州级最佳毕业项目奖。这个项目结合了开发和网络安全，涉及在生产软件中保护机密数据。",
      date: "2025"
    },
    {
      title: "团结互助奖",
      description: "在我完成义务教育的那一年，老师和学校管理层一致同意为我设立一个特别奖项，以表彰我的社交能力以及帮助同学克服学业困难的贡献。",
      date: "2019"
    }
  ],

  testimonials: [
    {
      writer_image: "/testimonials/man-1.jpg",
      writer_position: "电子学习解决方案公司 CEO",
      stars: 5,
      description: "Joyce 以其专业精神、分析思维和出色的学习能力脱颖而出。他始终展现出自主性、好奇心和工作中的精确度。他的可靠性、热情和追求卓越的动力使他成为任何合作中的真正资产。我可以自信地向任何寻求技能出色、积极进取、具有前瞻性思维的专业人士推荐他。"
    },
    {
      writer_image: "/testimonials/man-2.jpg",
      writer_position: "医疗软件公司 CEO",
      stars: 5,
      description: "与 Joyce 合作是一次出色的体验。他很快理解了我们的目标，与团队完美配合，并为我们的工作流程带来了有价值的技术见解和结构。他的主动性、沟通的清晰度以及将想法转化为切实成果的能力产生了持久的影响。Joyce 是一个你可以信任的人，无论是在技术上还是在创意上。"
    },
    {
      writer_image: "/testimonials/man-3.jpg",
      writer_position: "医疗集团 CTO",
      stars: 5,
      description: "Joyce 以专业精神、积极性和真诚的团队精神对待每一次合作。他的适应性和可靠性使与他共事成为一种愉快的体验，他对质量的承诺在他交付的每一项工作中都显而易见。他高度敬业，总是渴望做出贡献，始终超越期望，为每个项目带来积极的能量。"
    }
  ],

  contact: {
    "联系我": [
      {
        text: "joyce@example.com",
        href: "mailto:joyce@example.com"
      }
    ],
    "社交媒体": [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/joyce",
        target: "_blank"
      }
    ],
    "开源项目": [
      {
        text: "GitHub",
        href: "https://github.com/joyce",
        target: "_blank"
      },
      {
        text: "CodePen",
        href: "https://codepen.io/joyce",
        target: "_blank"
      }
    ]
  }
}
