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
      when: "AI 产品 | 消费科技团队",
      description: "参与 AI 消费产品从概念到上线的完整过程，负责需求研究、交互方案和迭代验证。通过用户反馈与行为数据识别关键问题，并将洞察转化为更清晰、更易使用的产品体验。",
      from: "2025.xx",
      to: "2026.xx"
    },
    {
      when: "技术研究 | 早期项目团队",
      description: "围绕新兴技术和早期产品开展行业研究、项目分析与信息整理，并用自动化工具改进重复性工作。产出结构化研究材料，帮助团队更高效地完成筛选、比较和决策。",
      from: "2025.xx",
      to: "2025.xx"
    },
    {
      when: "战略研究 | 消费行业项目",
      description: "参与消费行业的增长研究，通过公开资料梳理品类、产品结构与竞争格局，为策略讨论提供清晰的信息框架和分析支持。",
      from: "2024.xx",
      to: "2024.xx"
    },
    {
      when: "内容产品 | 互动体验团队",
      description: "参与面向大众用户的互动内容产品，从案例研究、受众分析到玩法设计和增长方案，协作推动产品上线并持续优化体验。",
      from: "2023.xx",
      to: "2023.xx"
    }
  ],

  projects: [
    {
      title: "Portfolio",
      description: "Portfolio 是一个用于展示产品思考、视觉表达与创作实践的个人网站。它以作品和过程为核心，呈现 AI builder 如何把想法变成可体验的产品。网站基于开源项目 <a href='https://github.com/Cyprien-png/portfolio' target='_blank' class='underline hover:text-white/80'>jaquier.dev</a> 搭建。",
      stage: "项目阶段：已部署上线",
      link: "https://github.com/Sanyuexi-JoyceChen/Joyce-personal-website",
      background: "/projects/portfolio-images/background.jpg",
      images: ["/projects/portfolio-images/homepage-screenshot.png", "/projects/portfolio-images/page2-screenshot.png", "/projects/portfolio-images/page3-screenshot.png", "/projects/portfolio-images/page4-screenshot.png"],
      desktop_pic: "",
      mobile_pic: ""
    },
    {
      title: "Poker Analysis",
      description: "这是一个帮助德扑新手用数据复盘决策的工具。它支持导入手牌历史，自动解析并进行翻前决策审计、翻后损失分析和 GTO 对比，辅助用户发现并纠正决策问题。基于 React Native + Expo，支持 iOS / Android / Web 三端。",
      stage: "项目阶段：部署上线",
      link: "https://pokeranalysis.vercel.app/",
      background: "/projects/pokeranalysis/background.jpg",
      images: ["/projects/pokeranalysis/home.png", "/projects/pokeranalysis/loading.png", "/projects/pokeranalysis/pokeranalysis-3.png", "/projects/pokeranalysis/pokeranalysis-4.png"],
      mobile_pic: "",
      desktop_pic: ""
    },
    {
      title: "FIRE模拟器",
      description: "这是一个本地运行的个人财务规划工具。用户可以导入账单 CSV，自动汇总支出类型、月度开销和主要支出；再输入示例资产、收入与预期回报率，模拟达到 FIRE（财务自由）的时间和进度。页面中的财务数据均为演示内容。",
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
