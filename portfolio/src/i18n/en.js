export default {
  loading: "The paint is drying...",
  langToggle: "中",
  nav: {
    joyce: "Joyce",
    "about-me": "about me",
    projects: "projects",
    awards: "awards",
    testimonials: "testimonials",
    contact: "contact"
  },
  hero: {
    line1: "In order",
    line2prefix: "to ",
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
      description: "GENSMO is a leading AI fashion app in North America with over a million downloads. I led two core initiatives: building the Couple Try-on feature from zero to one, which achieved the highest next-day retention across the app (35\u201340%) with 10+ generations per user; and owning iterations for Savyo, an independent web product, where I identified key pain points through user feedback, designed image-text Refine and a guided homepage, boosting image search usage to 60% and detail page click-through from 15% to 20%.",
      from: "2025.10",
      to: "2026.02"
    },
    {
      image: "/about/atom.png",
      when: "AI Investment Intern | Atom VC",
      description: "At Atom VC, I focused on angel-round investments in the AI sector. To address the high-volume, low-efficiency bottleneck in BP screening, I designed a BP Scoring Agent on Coze that reduced per-project initial screening time from 4 hours to 1 hour. I also built a GitHub deal sourcing system, a YC S25 project insights dashboard, and an automated industry news workflow using tools like Cursor, Octoparse, and n8n \u2014 freeing the team to focus on deeper analysis. On the research side, I completed two reports on open-source project investment strategy and AI Infra sub-sectors. During my internship, I participated in evaluating 50+ projects, followed 3 into due diligence, and 1 was successfully invested.",
      from: "2025.06",
      to: "2025.10"
    },
    {
      image: "/about/bcg.png",
      when: "PTA Intern | BCG",
      description: "At BCG, I contributed to a strategic growth project for an apparel industry client. My work centered on desk research \u2014 reviewing and analyzing extensive industry materials, mapping the brand's category logic, product architecture, and competitor positioning to provide data and analytical support for the client's pricing and marketing strategy decisions.",
      from: "2024.01",
      to: "2024.03"
    },
    {
      image: "/about/qiaodou.png",
      when: "Content Product Intern | Qiaodou Culture",
      description: "At Qiaodou Culture, I worked on Zootopia One Paw \u2014 an interactive entertainment mini-program built for Shanghai Disneyland based on the Zootopia IP. Starting with competitive analysis, I studied numerous Disney and Universal Studios IP digital product cases and produced strategy reports tailored to the target audience. I then deeply participated in product planning, designing the user nurturing system and AR park exploration features. After launch, the mini-program accumulated over 2.5 million users, with the Zootv creative trailer garnering 210K+ likes on Xiaohongshu.",
      from: "2023.06",
      to: "2023.09"
    }
  ],

  projects: [
    {
      title: "Game Engine",
      description: "Sprunk-engine is an open-source web game engine (available on npm) that I developed with some friends. We wanted a challenging, architecture-focused project, so we built a game engine with almost no external libraries. It lets developers create 2D browser games, and we made two demo games available on the official website. I worked on our custom math library, the 2D physics engine, and I'm now developing a new 3D physics engine. This project helped me deepen my understanding of algorithms, optimization, mathematics, and open-source collaboration.",
      link: "https://sprunk-engine.com/",
      background: "/projects/sprunk/background.jpg",
      mobile_pic: "/projects/sprunk/web.png",
      desktop_pic: "/projects/sprunk/template.jpg"
    },
    {
      title: "Find your tribe",
      description: "Find your tribe is a small project inspired by a music festival I attended abroad with friends. With over 60,000 people per day, it was nearly impossible to find each other once the group split up due to the crowd, noise, and lack of landmarks. The app solves this by letting users create groups to chat, see each other's live locations, set and share map landmarks, and use 3D arrows powered by the phone's gyroscope to point directly to their friends in real time. The 3D arrow feature is built using my modular \u201Cgame engine\u201D project.",
      link: "https://github.com/orgs/retrouve-ta-tribu/repositories",
      background: "/projects/find-your-tribe/background.jpg",
      mobile_pic: "/projects/find-your-tribe/map.png",
      desktop_pic: "/projects/find-your-tribe/irl.jpg"
    },
    {
      title: "Portfolio",
      description: "The portfolio project is the website you're on right now. While many of my projects focus on architecture, algorithms, and data science, I've always had a strong passion for frontend development. I've long dreamed of becoming a \u201CCreative Developer,\u201D and I regularly explore awwwards.com for inspiration and to study the techniques behind advanced visual effects. This portfolio is both a way to present my work and a way to stay true to that ambition. If you have any suggestions or feedback, feel free to reach out!",
      link: "https://github.com/Cyprien-png/portfolio",
      background: "/backgrounds/mountains.jpg",
      mobile_pic: "/projects/portfolio/contact.png",
      desktop_pic: "/projects/portfolio/home.jpg"
    },
    {
      title: "SeaCracker",
      description: "SeaCracker is another open-source project I built with the same team as the game engine, a few months earlier. We wanted to explore design patterns and web app architecture, so we created a Kahoot-like platform where users can build quizzes and play them in live sessions. The host presents each question, while players join with their phones and submit answers like a remote control. A leaderboard is shown between questions to keep things engaging. This project introduced me to state machines, event-driven architecture, and gave me my first real experience with WebSockets.",
      link: "https://github.com/orgs/SeaCrackers/repositories",
      background: "/projects/sea-cracker/background.jpg",
      mobile_pic: "/projects/sea-cracker/answer.png",
      desktop_pic: "/projects/sea-cracker/question.jpg"
    }
  ],

  awards: [
    {
      title: "Best diploma project",
      description: "At the end of my higher education in application development, I received the cantonal award for the best final project. This project, combining development and cybersecurity, involved securing confidential data within a production software.",
      date: "2025"
    },
    {
      title: "Solidarity and comradeship",
      description: "The year I completed my compulsory schooling, my teachers and the school administration agreed to create a special award for me, recognizing my social skills and my commitment to supporting classmates through academic difficulties.",
      date: "2019"
    }
  ],

  testimonials: [
    {
      writer_image: "/testimonials/man-1.jpg",
      writer_position: "CEO of an E-Learning solutions company",
      stars: 5,
      description: "Joyce stood out for his professionalism, analytical mindset, and impressive learning agility. He consistently demonstrated autonomy, curiosity, and precision in his work. His reliability, enthusiasm, and drive for excellence make him a true asset in any collaboration. I can confidently recommend him to anyone seeking a skilled, motivated, and forward-thinking professional."
    },
    {
      writer_image: "/testimonials/man-2.jpg",
      writer_position: "CEO of a healthcare software company",
      stars: 5,
      description: "Working with Joyce was an excellent experience. He quickly understood our goals, aligned perfectly with the team, and brought valuable technical insight and structure to our workflow. His proactive mindset, clarity in communication, and ability to turn ideas into tangible results made a lasting impact. Joyce is someone you can trust to deliver, both technically and creatively."
    },
    {
      writer_image: "/testimonials/man-3.jpg",
      writer_position: "CTO at a Medical Group",
      stars: 5,
      description: "Joyce approached every collaboration with professionalism, motivation, and genuine team spirit. His adaptability and reliability made him a pleasure to work with, and his commitment to quality was evident in everything he delivered. Highly dedicated and always eager to contribute, he consistently exceeded expectations and brought a positive energy to every project."
    }
  ],

  contact: {
    "Hire me": [
      {
        text: "joyce@example.com",
        href: "mailto:joyce@example.com"
      }
    ],
    "Social": [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/joyce",
        target: "_blank"
      }
    ],
    "Open source": [
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
