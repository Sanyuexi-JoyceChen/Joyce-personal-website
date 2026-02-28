---
name: 个人网站素材准备清单
overview: 基于现有 Vue 作品集站点的页面与数据文件，整理出改造成「陈少瑾」个人网站所需的所有文案与图片素材清单，并说明每类素材的用途与建议规格。
todos: []
isProject: false
---

# 个人网站改造——素材准备清单

当前站点是 [portfolio](portfolio/) 目录下的 **Vue 3 作品集**，原为 Cyprien Jaquier 的创意开发者作品集。下面按「文案」与「图片」分类列出你需要准备的素材；你的简历 [陈少瑾-上交-26届.md](陈少瑾-上交-26届.md) 已包含大部分文案可用的原始信息。

---

## 一、网站结构速览

站点包含 6 个主区块，内容主要由 **JSON 数据文件** 和 **Vue 组件内少量硬编码文案** 驱动：


| 区块      | 数据/文案来源                                                                                          | 说明                                            |
| ------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| 首页 Hero | [Home.vue](portfolio/src/views/Home.vue) 内文案                                                     | 大标题 + 轮播词（如 Build / Develop / Impact）         |
| 关于我     | [about-me.json](portfolio/src/data/about-me.json)                                                | 4 段实习经历 + 每段配 1 张图（已删万仪，改造时需扩展原 3 段布局）        |
| 项目      | [projects.json](portfolio/src/data/projects.json)                                                | Vibe Coding 项目：pokeranalysis、个人网站作品集等，每项 3 张图 |
| Others  | [awards.json](portfolio/src/data/awards.json) 改作 others.json 或沿用                                 | 业务生活爱好：自媒体、播客等，封面 + 链接                        |
| ~~推荐语~~ | ~~[testimonials.json]~~                                                                          | **已删除**，改造时移除该区块及相关路由/导航                      |
| 联系      | [contact.json](portfolio/src/data/contact.json) + [Contact.vue](portfolio/src/views/Contact.vue) | LinkedIn、小红书、GitHub、微信、邮箱、手机                  |


改造时需替换上述 JSON 与 Vue 内文案，并替换下方列出的所有图片路径对应的图片文件。

---

## 二、文案类素材（你需准备/确认的内容）

### 1. 首页 Hero（[Home.vue](portfolio/src/views/Home.vue)）

- **主标语**：当前为 “In order to [轮播词] the future one line at a time.”
- 改为：In order to  [轮播词] the AI Native future.
- （固定五行，分号表示每行内容）In order ; to   [轮播词] ;the AI ; Native ; future.
- **轮播词改为**： `['Build', 'Invest', 'Explore', 'All in']`

### 2. 关于我（[about-me.json](portfolio/src/data/about-me.json)）

- 原网站为 3 段：童年 / 青少年 / 今天，每段含 `when`、`description`、`from`、`to`。
- 改造方向：**实习经历**。每个实习单独一段，时间精确到月份，**按时间从近到远**排列。共 **4 段**（已删万仪）：GENSMO → 原子投资 → BCG → 巧豆。改造时需扩展为 4 段（原组件为 3 段滚动，需调整布局或滚动逻辑）。
- **description 格式（改造方案）**：**参考原网站**，改为**一段完整段落描述**，而非 bullet points。原网站示例：
  > "I was always curious about the world around me. I loved drawing, tinkering, and most of my questions began with how or why. When I got my first video game console, something clicked..."
  - 每段实习经历的 `description` 写成一整段**流畅叙述**，将核心工作内容、成果与亮点串联成段落，便于阅读且与站点整体风格一致。
  - 数据结构保持：`when`（如「AI 产品实习生｜GENSMO」）、`description`（整段文本）、`from`、`to`（如 2025.10）。
  - 组件层面：沿用当前 `<p>{{ story.description }}</p>` 渲染即可，**无需** `whitespace-pre-line` 或列表样式。

**文案初稿（时间从近到远，description 用整段叙述，参考原网站格式）：**

---

**段 1 · AI 产品实习生｜GENSMO**（2025.10 / 至今）  
配图：`about/gensmo.png`

GENSMO 是北美 AI 时尚应用赛道头部产品（下载量 100 万+），聚焦虚拟试穿、数字分身与 AI 造型推荐。

```markdown
Couple Try-on 双人 AI 试衣功能 0-1 上线
```

我参与 Couple Try-on 双人试衣从 0 到 1 的搭建，负责竞品调研与 PRD 设计，首期上线 9 个模板；通过首页改版、运营位与 banner 调整，将 DAU 渗透率由 1.2% 提升至 5.5%，并优化模板选择与上传页交互，使模板转化率从 50% 提升至 90%、上传完成率达 70%。

```markdown
AI 找平替工具 Savyo 功能迭代
```

在 Savyo 图搜与 LLM 迭代中，我通过 Reddit 反馈与 query 分析识别「精准表达难」「首页过载」等痛点，设计图文混合 Refine 与引导式首页。整体成果包括次日留存 35–40%、save 率 50%+，以及 64% 的付费转化贡献。

---

**段 2 · AI 投资实习生｜原子创投**（2025.06 / 2025.10）  
配图：`about/atom.png`

在原子创投，我聚焦 AI 初创项目的天使轮投资，通过 Agent、工具与研究支持投决，深度参与筛选、尽调及投决汇报。

```markdown
投资分析 Agent 开发
```

我基于 Coze 设计 BP 打分 Agent，实现智能解析、多维度评分与信息补全，将初筛时间从 4 小时压缩至 1 小时，月均处理量提升约 3 倍。

```markdown
投资辅助 AI 工具构建
```

我使用 Cursor 开发 GitHub 爬取筛选系统发现标的，通过 Octoparse 与数据分析完成 YC S25 洞察、分析 140+ 项目并搭建交互网页，并以 n8n 资讯工作流替代人工，日均节省约 2 小时。

```markdown
AI 赛道深度研究与投资全流程参与
```

AI赛道研究：开源项目投资策略与 AI Infra 细分赛道研究，产出研究报告两份

全程参与 50+ 项目评估、输出 30+ 报告，1 个项目成功投出。

---

**段 3 · PTA 实习生｜波士顿咨询（BCG）**（2024.01 / 2024.03）  
配图：`about/bcg.png`

在 BCG，我参与服装行业客户战略增长项目的案头研究。我查阅、整理并分析大量二手资料，研究品牌品类划分逻辑、产品架构及竞争对手定位，为客户在定价、营销等市场策略制定提供数据与分析支持。

---

**段 4 · 内容产品实习生｜巧豆文化**（2023.06 / 2023.09）  
配图：`about/qiaodou.png`

在巧豆文化，我参与「动物城一爪通」项目，为上海迪士尼打造基于疯狂动物城 IP 的互动娱乐小程序。我搜索百余篇迪士尼与环球影城 IP 数字产品资料与研报进行竞品分析，研究衍生形式与效果，并结合 IP 与受众产出策略报告。在产品策划中，我参与设计养成系统（动物测试、装扮、虚拟家园、Zootizen ID、门票/年卡绑定）与 AR 探索（AR 相机联动园区、解锁故事与奖励、生日月专属滤镜与大屏祝福）。小程序上线累计用户 250 万+，Zootv 预告在小红书获赞 21 万+。

---

**对应图片路径：** `about/gensmo.png`、`about/atom.png`、`about/bcg.png`、`about/qiaodou.png`（共 4 张，竖版 9:16 更佳）。

**【改造方案已定】** description 采用**整段叙述**（参考原网站），非 bullet；[about-me.json](portfolio/src/data/about-me.json) 需填入上述 4 段文案；**图片路径** 改为 `about/gensmo.png`、`about/atom.png`、`about/bcg.png`、`about/qiaodou.png`；组件沿用 `<p>{{ story.description }}</p>` 即可，无需 `whitespace-pre-line`。

### 3. 项目（[projects.json](portfolio/src/data/projects.json)）

- **改造方向**：展示 **Vibe Coding / 个人项目**，不再展示实习经历（实习已放在「关于我」）。
- 每个项目需要：`title`、`description`、`link`（可选），以及 3 张图（见下文图片清单）。

1. Poker Analysis

这是一个帮助德扑新手用数据复盘提升水平的工具。需求和灵感源自于我刚开始接触德州扑克时发现对于新手而言，没有现成的可以帮助自己复盘回忆每局手牌的行动并改善决策质量的工具，而请教练又贵，所以自己做一个辅助新手进阶的工具。网站支持导入 PokerNow 导出的手牌历史，自动解析并进行翻前决策审计、翻后损失分析和 GTO 对比，辅助发现和纠正决策问题。基于 React Native + Expo，支持 iOS / Android / Web 三端，数据本地存储

link：[https://pokeranalysis.vercel.app/](https://pokeranalysis.vercel.app/)

1. Portfolio

作品集就是你现在浏览的这个网站。在我求职面试的过程中，我需要大量地重复自己过往的实习经历和项目经历中的细节，有时需要现场演示，于是我就想到那句“show，don't tell”，为什么不自己做一个这样的网站集合并展示我的所有作品和经历呢？这是最好的证明自己是个AI builder的方式。这个网站的搭建是基于开源项目，感谢它的贡献。欢迎通过该网站联系我！

1. FIRE模拟器

帮你数字化这样一个疑问：“如果按照现在的财务状态持续发展，多久后我能躺平？”，或者这样一个疑问“假设低物欲的生活，手头的钱能让我gap多久？”

- **建议项目**（共 2 个）：
  - **pokeranalysis**：德扑复盘分析工具，每条准备 1 段简短描述 + 链接（若有）。
  - **个人网站作品集**：本网站本身，可沿用原站点的展示方式（如 "The portfolio project is the website you're on right now..." 式描述），保留为自我展示项目。
- 每条准备 1 段简短项目描述（2–4 句即可）。

### 4. Others（原荣誉/奖项，[awards.json](portfolio/src/data/awards.json) 改作 others.json ）

- **改造方向**：替换为 **Others**，展示业务生活、爱好与兴趣。
- 每条需要：`title`、`description`（可选）、`link`、`cover`（封面图）。
- **建议内容**：
  - 自媒体（如小红书，粉丝 2k+）：封面 + 主页链接。
  - 播客（若有）：封面 + 收听链接。
  - 可扩展：辩论、商赛、运动兴趣等，视需要加封面与链接。
- 改造时需将 Awards 区块改为 Others 布局，支持封面图 + 链接跳转。

### 5. ~~推荐语~~（已删除）

- 改造时删除 [testimonials.json](portfolio/src/data/testimonials.json) 引用，移除 Testimonials / TestimonialsMobile 路由与导航入口，不再准备推荐人头像与文案。

### 6. 联系（[contact.json](portfolio/src/data/contact.json) + [Contact.vue](portfolio/src/views/Contact.vue)）

- **contact.json**：展示以下联系方式（可分组）：
  - **LinkedIn**：个人主页链接
  - **小红书**：主页链接
  - **GitHub**：个人主页链接
  - **微信**：微信号或二维码（若希望展示）
  - **邮箱**：`shaojinchen0593@gmail.com`
  - **手机**：+86 15201977685
- **Contact.vue**：保留 “Let’s work together”

### 7. 全局与 SEO

- [index.html](portfolio/index.html)：`<title>`、`<meta name="description">`、`lang`。
- [App.vue](portfolio/src/App.vue)：页脚 “Read the code here” 的链接可改为你的 GitHub

---

## 三、图片类素材（路径与建议规格）

所有图片放在 [portfolio/public](portfolio/public) 下，路径与现有引用一致即可被替换。下面按**目录**列出路径及建议用途与规格（尺寸为建议值，便于排版与加载）。

### 1. 背景图 `public/backgrounds/`


| 文件              | 用途             | 建议规格                              |
| --------------- | -------------- | --------------------------------- |
| `mountains.jpg` | 首页 Hero 全屏背景   | 横版，约 1920×1080 或 2:1，风景/城市/个人风格均可 |
| `sky.jpg`       | 原推荐语区块（已删除可复用） | 横版，约 1920×1080，可改作 Others 背景或移除   |
| `room.jpg`      | 关于我区块背景        | 横版，约 1920×1080，室内/工作场景/氛围图        |


### 2. 关于我实习经历图 `public/about/`


| 文件            | 用途（展示顺序：近→远） | 建议规格                              |
| ------------- | ------------ | --------------------------------- |
| `gensmo.png`  | 段 1 · GENSMO | 竖版 9:16 更佳，约 540×960，AI 产品/时尚应用相关 |
| `atom.png`    | 段 2 · 原子投资   | 竖版 9:16，约 540×960，投资/工具/Agent 相关  |
| `bcg.png`     | 段 3 · BCG    | 竖版 9:16，约 540×960，咨询/策略/服装行业相关    |
| `qiaodou.png` | 段 4 · 巧豆文化   | 竖版 9:16，约 540×960，内容/迪士尼/IP 相关    |


格式可用 PNG（透明）或 JPG；改造时需同步改 [about-me.json](portfolio/src/data/about-me.json) 中的 `image` 字段。

### 3. 联系页视差图 `public/contact/`

当前 [Contact.vue](portfolio/src/views/Contact.vue) 使用多层视差（天空 + 山 + 小路 + 人物身体 + 手臂），需保持**分层**才能保留动效。


| 文件              | 用途          | 建议规格                     |
| --------------- | ----------- | ------------------------ |
| `sky.jpeg`      | 联系页最底层天空    | 横版，约 1920×1080           |
| `mountains.png` | 山/远景层（可透明）  | 横版宽幅，约 1920×600          |
| `path.png`      | 小路/中景层（可透明） | 横版宽幅，约 1920×600          |
| `body.png`      | 人物身体（可透明）   | 竖版 9:16，约 400×700，用于居中偏下 |
| `arm.png`       | 手臂（可透明）     | 与 body 同比例，便于叠合          |


若不想做视差人物，可后续在改造时改为单张背景图或其它布局，则只需准备 1 张联系页背景图。

### 4. Others 页 `public/others/`（原 awards）

- 改造时可将 `awards/` 重命名或新增 `others/`，用于存放爱好/自媒体/播客封面等。


| 文件           | 用途         | 建议规格                             |
| ------------ | ---------- | -------------------------------- |
| `sky.jpg`    | Others 区背景 | 横版，约 1920×1080，可沿用原 awards 背景    |
| `clouds.png` | 装饰层（可透明）   | 横版宽幅，约 1920×400                  |
| 各条目封面        | 自媒体/播客等封面  | 方形或竖版，约 400×400 或 300×400，每项 1 张 |


### 5. ~~推荐人头像~~（已删除）

- 推荐语区块已删除，`public/testimonials/` 及相关图片无需准备。

### 6. 项目图（每个项目 3 张）`public/projects/<项目名>/`

当前结构为每个项目一个子文件夹，内含：

- `background.jpg`：项目卡片/详情背景，横版约 1920×1080。
- `mobile_pic`：列表或移动端展示用图，常为竖版或方形，约 800×800 或 600×1000。
- `desktop_pic`：桌面端大图，横版约 1200×800。

**Vibe Coding 项目**（共 2 个）：

- `public/projects/pokeranalysis/`：background.jpg、界面/功能截图（mobile_pic）、桌面大图（desktop_pic）。
- `public/projects/portfolio/`：个人网站本身，可沿用原站点的 home.jpg、contact.png 等图。

若项目数或命名与现有一致，只需按上述命名替换图片；若变更，需同步改 [projects.json](portfolio/src/data/projects.json) 中的 `background`、`mobile_pic`、`desktop_pic` 路径。

### 7. 其它

- **favicon**：`public/favicon.ico`，可替换为你自己的头像或 Logo，16×16 / 32×32。

---

## 四、素材准备清单小结（可直接按此准备）

**文案：**

- 首页：1 句主标语 + 4–5 个轮播词。
- 关于我：4 段实习经历（GENSMO、原子、BCG、巧豆），每段**整段叙述**（参考原网站格式）+ 起止月份。
- 项目：2 个 Vibe Coding 项目（pokeranalysis、个人网站作品集），每项标题 + 1 段描述 + 链接（可选）。
- Others：自媒体、播客等，每项标题 + 封面 + 链接。
- ~~推荐语~~：已删除。
- 联系：LinkedIn、小红书、GitHub、微信、邮箱、手机。
- 全局：站点 title、meta description、页脚链接。

**图片：**

- 背景：`backgrounds/mountains.jpg`、`room.jpg`；`sky.jpg` 可改作 Others 背景或移除。
- 关于我：`about/gensmo.png`、`atom.png`、`bcg.png`、`qiaodou.png`（共 4 张，竖版 9:16 更佳）。
- 联系页：`contact/sky.jpeg`、`mountains.png`、`path.png`、`body.png`、`arm.png`（若保留现视差效果）。
- Others：`others/` 或沿用 `awards/`，每项爱好/自媒体/播客配 1 张封面。
- ~~推荐语~~：已删除，无需准备。
- 项目：`projects/pokeranalysis/`、`projects/portfolio/` 各 3 张（background + mobile_pic + desktop_pic）。
- 其它：`favicon.ico`。

准备好上述素材后，改造步骤即为：替换 [portfolio/public](portfolio/public) 中对应文件、修改各 JSON 与 Vue 内文案、移除推荐语区块与路由、将 Awards 改造为 Others、将 Projects 改为 Vibe Coding 项目。