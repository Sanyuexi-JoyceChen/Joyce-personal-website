# 上传到 GitHub 的步骤

项目已完成首次 Git 提交。按以下步骤即可推送到 GitHub。

## 1. 在 GitHub 上创建新仓库

1. 打开 [https://github.com/new](https://github.com/new)
2. 填写：
   - **Repository name**：如 `personal-website` 或 `portfolio`
   - **Description**：可选，例如“陈少瑾个人网站”
   - 选择 **Public**
   - **不要**勾选 “Add a README file”（本地已有内容）
3. 点击 **Create repository**

## 2. 添加远程仓库并推送

在 **个人网站** 目录打开终端（PowerShell 或 CMD），执行：

```bash
# 将下面 YOUR_USERNAME 和 YOUR_REPO 替换为你的 GitHub 用户名和仓库名
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送到 GitHub（首次推送）
git branch -M main
git push -u origin main
```

**示例**（假设用户名为 `shaoj`，仓库名为 `personal-website`）：

```bash
git remote add origin https://github.com/shaoj/personal-website.git
git branch -M main
git push -u origin main
```

## 3. 若提示需要登录

- **HTTPS**：会提示输入 GitHub 用户名和密码；密码需使用 [个人访问令牌 (PAT)](https://github.com/settings/tokens) 代替
- **SSH**：若有 SSH 密钥，可用 `git@github.com:YOUR_USERNAME/YOUR_REPO.git` 作为 remote 地址

## 当前仓库状态

- 已完成首次提交：`Initial commit: 个人网站项目`
- 包含：portfolio 网站、素材清单、简历、设计文件等
- 分支：`master`（推送时会重命名为 `main`）
