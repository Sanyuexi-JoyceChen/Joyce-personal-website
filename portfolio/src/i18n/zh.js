export default {
  loading: "加载中...",
  langToggle: "EN",
  nav: {
    joyce: "Joyce",
    career: "Career",
    "vibe-coding": "Vibe Coding",
    "ai-tools": "AI 工具",
    contact: "联系"
  },
  hero: {
    line1: "In order",
    line2prefix: "to\u00A0",
    line3: "the AI Native",
    line4: "future.",
    rotatingWords: ['Build', 'Invest', 'Explore', 'All in']
  },
  viewMore: "查看更多",
  letsWork: "Let's work",
  together: "together",
  readCode: "查看源代码",

  aboutMe: [
    {
      when: "AI 产品实习生 | GENSMO",
      description: "GENSMO 是北美 AI 时尚应用赛道的头部产品，下载量超百万。我在这里主导了两个核心方向。一是从零到一搭建 Couple Try-on 双人 AI 试衣功能，次日留存达到全 App 内最高。二是负责独立 Web 端产品 Savyo 的功能迭代，我通过用户行为分析挖掘出「精准表达难」与「首页信息过载」两大痛点，设计了图文混合 Refine 与引导式首页方案，帮助产品在种子期快速验证 PMF。",
      from: "2025.10",
      to: "2026.02"
    },
    {
      when: "AI 投资实习生 | 原子创投",
      description: "在原子创投，我聚焦 AI 赛道的天使轮投资。为了解决 BP 初筛「量大效率低」的问题，我基于 Coze 设计了 BP 打分 Agent，将初筛效率提升数倍；同时用 Cursor、Octoparse、n8n 等工具搭建了 GitHub 项目筛选与 mapping 系统、硅谷某孵化器项目洞察分析，和行业资讯自动抓取工作流，让团队把更多精力放在深度判断上。研究端，我完成了开源项目投资策略与 AI Infra 细分赛道两份研究报告。实习期间跟进 50+ 项目评估，有项目成功投出。",
      from: "2025.06",
      to: "2025.10"
    },
    {
      when: "PTA 实习生 | 波士顿咨询（BCG）",
      description: "在 BCG，我参与了某消费品行业客户的战略增长项目。工作以案头研究为主——查阅并分析大量行业资料，梳理品牌的品类划分逻辑、产品架构与竞争对手定位，为客户在定价与营销等策略制定上提供数据与分析支撑。",
      from: "2024.01",
      to: "2024.03"
    },
    {
      when: "内容产品实习生 | 巧豆文化",
      description: "在巧豆文化，我参与了「动物城一爪通」项目——为上海迪士尼打造基于疯狂动物城 IP 的互动娱乐小程序。我从竞品分析入手，研究了大量 IP 数字产品案例，结合目标受众产出策略报告；随后深度参与产品策划，负责核心互动玩法与用户增长功能的设计。小程序上线后累计用户突破 250 万，宣传内容在小红书获赞 21 万+。",
      from: "2023.06",
      to: "2023.09"
    }
  ],

  projects: [
    {
      title: "Portfolio",
      description: "Portfolio 就是你现在浏览的这个网站。我相信AI时代介绍自己的最好方式是\"show，don't tell\"，于是诞生了这个个人网站。它展现了我的态度、审美、实践，这是最好的证明自己是个AI builder的方式。这个网站的搭建是基于开源项目 <a href='https://github.com/Cyprien-png/portfolio' target='_blank' class='underline hover:text-white/80'>jaquier.dev</a>，感谢它的贡献。",
      stage: "项目阶段：已部署上线",
      link: "https://github.com/Sanyuexi-JoyceChen/Joyce-personal-website",
      background: "/projects/portfolio-images/background.jpg",
      images: ["/projects/portfolio-images/homepage-screenshot.png", "/projects/portfolio-images/page2-screenshot.png", "/projects/portfolio-images/page3-screenshot.png", "/projects/portfolio-images/page4-screenshot.png"],
      desktop_pic: "",
      mobile_pic: ""
    },
    {
      title: "Poker Analysis",
      description: "这是一个帮助德扑新手用数据复盘提升水平的工具。我刚开始接触德州扑克时，发现对于新手而言，没有免费的可以帮助自己复盘回忆每局手牌的行动并改善决策质量的工具，所以自己做了一个。网站支持导入 PokerNow 导出的手牌历史，自动解析并进行翻前决策审计、翻后损失分析和 GTO 对比，辅助发现和纠正决策问题。基于 React Native + Expo，支持 iOS / Android / Web 三端。",
      stage: "项目阶段：部署上线",
      link: "https://pokeranalysis.vercel.app/",
      background: "/projects/pokeranalysis/background.jpg",
      images: ["/projects/pokeranalysis/home.png", "/projects/pokeranalysis/loading.png", "/projects/pokeranalysis/pokeranalysis-3.png", "/projects/pokeranalysis/pokeranalysis-4.png"],
      mobile_pic: "",
      desktop_pic: ""
    },
    {
      title: "FIRE模拟器",
      description: "这个财务管理工具解决了我自己的两个问题：我的钱花在哪儿了？多久可以FIRE？【Financial Independence, Retire Early（财务自由、提前退休）】个人财务小工具：你只要上传从微信或支付宝导出的账单 CSV，不用逐笔记账。它会自动帮你汇总钱花在了哪些类型、每月大概花多少，并挑出最烧钱的单笔支出。你再填上存款、年收入和预期投资回报率，它就会估算还要多少年能达到 FIRE（财务自由）和当前进度。",
      stage: "项目阶段：自用、本地部署",
      link: "",
      background: "/projects/fire-simulator/background.jpg",
      desktop_pic: "/projects/fire-simulator/screenshot-1.png",
      mobile_pic: "/projects/fire-simulator/screenshot-2.png"
    }
  ],

  aiTools: {
    title: "AI 工具集",
    subtitle: "我日常使用和喜爱的 AI 产品与工具，每一个都在某个领域改变了我的工作方式。",
    tools: [
      { name: "Claude Code", logoDomain: "claude.ai", url: "https://docs.anthropic.com/en/docs/claude-code", desc: "AI 编程终端，代码理解与生成的天花板", large: true },
      { name: "Notion AI", logoDomain: "notion.so", url: "https://notion.so", desc: "笔记与知识管理的 AI 升级", large: true },
      { name: "NotebookLM", logoDomain: "notebooklm.google", url: "https://notebooklm.google.com", desc: "Google 出品，文档对话与音频摘要神器", large: false },
      { name: "Typeless", logoDomain: "typeless.com", url: "https://typeless.com", desc: "AI 语音听写，说话比打字快 4 倍", large: true },
      { name: "Pencil", logoDomain: "pencil.dev", url: "https://www.pencil.dev", desc: "在画布上设计，直接落地为代码", large: false },
      { name: "Den", logoDomain: "getden.io", url: "https://getden.io", desc: "自然语言构建 AI Agent，零代码自动化", large: true },
      { name: "Google AI Studio", logoDomain: "aistudio.google.com", url: "https://aistudio.google.com", desc: "Google 模型实验场，Gemini 系列一站体验", large: false },
      { name: "Cursor", logoDomain: "cursor.com", url: "https://cursor.com", desc: "AI 驱动的下一代代码编辑器", large: false },
      { name: "LongCut", logoDomain: "longcut.ai", url: "https://www.longcut.ai", desc: "从长视频中高效学习的最佳方式", large: true },
      { name: "Excalicord", logoDomain: "excalicord.com", url: "https://www.excalicord.com", desc: "白板 + 录屏，画着讲更清楚", large: false }
    ]
  },

  contact: {
    "联系我": [
      {
        text: "shaojinchen0593@gmail.com",
        href: "mailto:shaojinchen0593@gmail.com"
      },
      {
        text: "+86 15201977685",
        href: "tel:+8615201977685"
      }
    ],
    "社交媒体": [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/shaojin-chen-5a6192321",
        target: "_blank"
      },
      {
        text: "小红书",
        href: "https://xhslink.com/m/5aRYvNntylm",
        target: "_blank"
      }
    ],
    "开源项目": [
      {
        text: "GitHub",
        href: "https://github.com/Sanyuexi-JoyceChen",
        target: "_blank"
      }
    ]
  }
}
