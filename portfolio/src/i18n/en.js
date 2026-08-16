export default {
  loading: "The paint is drying...",
  langToggle: "中",
  nav: {
    joyce: "Joyce",
    career: "career",
    "vibe-coding": "vibe coding",
    "ai-tools": "AI tools",
    contact: "contact"
  },
  hero: {
    line1: "In order",
    line2prefix: "to\u00A0",
    line3: "the AI Native",
    line4: "future.",
    rotatingWords: ['Build', 'Invest', 'Explore', 'All in']
  },
  viewMore: "View more",
  letsWork: "Let's work",
  together: "together",
  readCode: "Read the code here",

  aboutMe: [
    {
      when: "AI Product | Consumer Technology Team",
      description: "Contributed to AI consumer products from concept through launch, covering user research, interaction design, and iterative validation. Turned user feedback and behavioral signals into clearer and more useful product experiences.",
      from: "2025.xx",
      to: "2026.xx"
    },
    {
      when: "Technology Research | Early-stage Team",
      description: "Researched emerging technologies and early products, organized fragmented information, and used automation to improve repetitive workflows. Produced structured materials for more efficient comparison and decision-making.",
      from: "2025.xx",
      to: "2025.xx"
    },
    {
      when: "Strategy Research | Consumer Project",
      description: "Supported consumer-industry growth research by mapping categories, product structures, and competitive landscapes from public information.",
      from: "2024.xx",
      to: "2024.xx"
    },
    {
      when: "Content Product | Interactive Experience Team",
      description: "Worked on a general-audience interactive product across case research, audience analysis, interaction concepts, and growth ideas, collaborating through launch and iteration.",
      from: "2023.xx",
      to: "2023.xx"
    }
  ],

  projects: [
    {
      title: "Portfolio",
      description: "Portfolio is a personal website for product thinking, visual expression, and creative practice. It focuses on work and process, showing how an AI builder turns ideas into usable products. The site is built on the open-source project <a href='https://github.com/Cyprien-png/portfolio' target='_blank' class='underline hover:text-white/80'>jaquier.dev</a>.",
      stage: "Status: Deployed & Live",
      link: "https://github.com/Sanyuexi-JoyceChen/Joyce-personal-website",
      background: "/projects/portfolio-images/background.jpg",
      images: ["/projects/portfolio-images/homepage-screenshot.png", "/projects/portfolio-images/page2-screenshot.png", "/projects/portfolio-images/page3-screenshot.png", "/projects/portfolio-images/page4-screenshot.png"],
      desktop_pic: "",
      mobile_pic: ""
    },
    {
      title: "Poker Analysis",
      description: "A data-driven review tool for poker beginners. It imports hand histories, parses them, and performs preflop decision auditing, postflop loss analysis, and GTO comparison to help identify and correct decision-making issues. Built with React Native + Expo for iOS, Android, and Web.",
      stage: "Status: Deployed & Live",
      link: "https://pokeranalysis.vercel.app/",
      background: "/projects/pokeranalysis/background.jpg",
      images: ["/projects/pokeranalysis/home.png", "/projects/pokeranalysis/loading.png", "/projects/pokeranalysis/pokeranalysis-3.png", "/projects/pokeranalysis/pokeranalysis-4.png"],
      mobile_pic: "",
      desktop_pic: ""
    },
    {
      title: "FIRE Simulator",
      description: "A local-first personal finance planning tool. Users can import a transaction CSV to summarize spending categories, monthly expenses, and major purchases, then enter sample assets, income, and expected returns to simulate progress toward FIRE. All financial figures shown are demonstration data.",
      stage: "Status: Personal Use, Local Deployment",
      link: "",
      background: "/projects/fire-simulator/background.jpg",
      desktop_pic: "/projects/fire-simulator/screenshot-1.png",
      mobile_pic: "/projects/fire-simulator/screenshot-2.png"
    }
  ],

  aiTools: {
    title: "AI Toolkit",
    subtitle: "AI products and tools I use and love — each one has changed how I work in its own way.",
    tools: [
      { name: "Claude Code", logoDomain: "claude.ai", url: "https://docs.anthropic.com/en/docs/claude-code", desc: "AI coding terminal — the ceiling for code understanding and generation", large: true },
      { name: "Notion AI", logoDomain: "notion.so", url: "https://notion.so", desc: "Notes and knowledge management, supercharged by AI", large: true },
      { name: "NotebookLM", logoDomain: "notebooklm.google", url: "https://notebooklm.google.com", desc: "By Google — chat with docs and generate audio summaries", large: false },
      { name: "Typeless", logoDomain: "typeless.com", url: "https://typeless.com", desc: "AI voice dictation — speak 4x faster than you type", large: true },
      { name: "Pencil", logoDomain: "pencil.dev", url: "https://www.pencil.dev", desc: "Design on canvas, land in code", large: false },
      { name: "Den", logoDomain: "getden.io", url: "https://getden.io", desc: "Build AI agents in natural language, zero code automation", large: true },
      { name: "Google AI Studio", logoDomain: "aistudio.google.com", url: "https://aistudio.google.com", desc: "Google's model playground — Gemini series all in one place", large: false },
      { name: "Cursor", logoDomain: "cursor.com", url: "https://cursor.com", desc: "The AI-native code editor for the next era", large: false },
      { name: "LongCut", logoDomain: "longcut.ai", url: "https://www.longcut.ai", desc: "The best way to learn from long videos", large: true },
      { name: "Excalicord", logoDomain: "excalicord.com", url: "https://www.excalicord.com", desc: "Whiteboard + screen recording — draw to explain", large: false }
    ]
  },

  contact: {
    "Hire me": [
      {
        text: "shaojinchen0593@gmail.com",
        href: "mailto:shaojinchen0593@gmail.com"
      },
      {
        text: "+86 15201977685",
        href: "tel:+8615201977685"
      }
    ],
    "Social": [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/shaojin-chen-5a6192321",
        target: "_blank"
      },
      {
        text: "Rednote",
        href: "https://xhslink.com/m/5aRYvNntylm",
        target: "_blank"
      }
    ],
    "Open source": [
      {
        text: "GitHub",
        href: "https://github.com/Sanyuexi-JoyceChen",
        target: "_blank"
      }
    ]
  }
}
