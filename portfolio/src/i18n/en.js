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
      image: "/about/gensmo.png",
      when: "AI Product Intern | GENSMO",
      description: "GENSMO is a leading AI fashion app in North America with over a million downloads. I led two core initiatives: building Couple Try-on, a dual AI try-on feature from zero to one that achieved the app's highest next-day retention; and iterating on Savyo, an independent web product where I identified key user pain points and designed solutions to help validate PMF in its seed stage.",
      from: "2025.10",
      to: "2026.02"
    },
    {
      image: "/about/atom.png",
      when: "AI Investment Intern | Atom VC",
      description: "At Atom VC, I focused on angel-round AI investments. To tackle inefficient BP screening, I built a Scoring Agent on Coze that boosted efficiency several times over. I also developed a GitHub project mapping system, accelerator portfolio analysis, and an automated news workflow using Cursor, Octoparse, and n8n. I authored two reports on open-source investment strategy and AI Infra sub-sectors, and followed 50+ project evaluations with deals successfully invested.",
      from: "2025.06",
      to: "2025.10"
    },
    {
      image: "/about/bcg.png",
      when: "PTA Intern | BCG",
      description: "At BCG, I joined a strategic growth project for a consumer goods client. My work focused on desk research \u2014 analyzing industry materials, mapping brand category logic, product architecture, and competitor positioning to support pricing and marketing decisions.",
      from: "2024.01",
      to: "2024.03"
    },
    {
      image: "/about/qiaodou.png",
      when: "Content Product Intern | Qiaodou Culture",
      description: "At Qiaodou Culture, I worked on Zootopia One Paw \u2014 an interactive mini-program for Shanghai Disneyland based on the Zootopia IP. I led competitive analysis across IP digital products, then designed the user nurturing system and AR park exploration features. The mini-program reached 2.5M+ users, with its Zootv trailer earning 210K+ likes on Xiaohongshu.",
      from: "2023.06",
      to: "2023.09"
    }
  ],

  projects: [
    {
      title: "Portfolio",
      description: "Portfolio is the website you're browsing right now. I believe the best way to introduce yourself in the AI era is \"show, don't tell\" — and that's how this personal site came to be. It reflects my attitude, aesthetics, and practice, serving as the best proof that I'm an AI builder. This site is built on the open-source project <a href='https://github.com/Cyprien-png/portfolio' target='_blank' class='underline hover:text-white/80'>jaquier.dev</a> — thanks to its contributors.",
      stage: "Status: Deployed & Live",
      link: "https://github.com/Sanyuexi-JoyceChen/Joyce-personal-website",
      background: "/projects/portfolio-images/background.jpg",
      desktop_pic: "/projects/portfolio-images/home.png",
      mobile_pic: ""
    },
    {
      title: "Poker Analysis",
      description: "A data-driven review tool to help poker beginners improve their game. When I first started playing Texas Hold'em, I found there was no free tool for beginners to review hand histories and improve decision quality — so I built one. It imports hand histories exported from PokerNow, automatically parses them, and performs preflop decision auditing, postflop loss analysis, and GTO comparison to help identify and correct decision-making issues. Built with React Native + Expo, supporting iOS / Android / Web.",
      stage: "Status: Deployed & Live",
      link: "https://pokeranalysis.vercel.app/",
      background: "/projects/pokeranalysis/background.jpg",
      images: ["/projects/pokeranalysis/home.png", "/projects/pokeranalysis/loading.png", "/projects/pokeranalysis/pokeranalysis-3.png", "/projects/pokeranalysis/pokeranalysis-4.png"],
      mobile_pic: "",
      desktop_pic: ""
    },
    {
      title: "FIRE Simulator",
      description: "This personal finance tool solves two questions I had: where does my money go, and how long until I can FIRE (Financial Independence, Retire Early)? A personal finance mini-tool: just upload your transaction CSV exported from WeChat Pay or Alipay — no manual logging needed. It automatically summarizes spending by category, estimates monthly expenses, and highlights the biggest single expenditures. Then enter your savings, annual income, and expected investment returns, and it estimates how many years until you reach FIRE and your current progress.",
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
      { name: "Claude Code", logoDomain: "anthropic.com", url: "https://docs.anthropic.com/en/docs/claude-code", desc: "AI coding terminal — the ceiling for code understanding and generation", large: true },
      { name: "Notion AI", logoDomain: "notion.so", url: "https://notion.so", desc: "Notes and knowledge management, supercharged by AI", large: true },
      { name: "NotebookLM", logoDomain: "notebooklm.google.com", url: "https://notebooklm.google.com", desc: "By Google — chat with docs and generate audio summaries", large: false },
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
