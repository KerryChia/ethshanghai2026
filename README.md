# ETHShanghai 2026 · 中文导读与深度研究

[在线阅读](https://kerrychia.github.io/ethshanghai2026/) · [研究专题索引](https://kerrychia.github.io/ethshanghai2026/research/)

这是一个**非官方**的 ETHShanghai 活动中文导读。首页按活动梳理讨论内容；14 篇专题文章进一步解释技术原理、应用案例、现实限制，并给出独立分析和延伸阅读资料。

内容涉及 Vitalik Buterin 的技术演讲、以太坊生态与社区实践、乡村协作、开源 AI、密码学与隐私，以及预测市场、稳定币和卫星基础设施等话题。

## 如何阅读

- 从[首页](https://kerrychia.github.io/ethshanghai2026/)了解活动脉络，按目录跳转到各场讨论。
- 点击每节的“延伸研究”，进入对应专题；也可以直接进入[专题索引](https://kerrychia.github.io/ethshanghai2026/research/)搜索关键词。
- 专题中的章节链接可直达具体机制、案例、取舍或分析；文末列出相关资料。**现场观点、项目介绍和独立研究不应混为一谈。**

## 仓库内容

```text
index.html                  活动导读首页
research/index.html         14 篇研究专题的索引
research/*.html             各专题的独立页面
assets/research.css         专题页面样式
assets/research.js          导航与搜索交互
favicon.*                   网站图标
apple-touch-icon.png        移动设备图标
```

仓库**只包含网站正常展示所需的静态文件**；不提供原始录音、逐字转写、PDF、制作过程资料或部署凭据。

## 本地预览

克隆仓库后，在仓库根目录启动静态文件服务器：

```bash
python -m http.server 8000
```

然后打开 <http://localhost:8000/>。直接双击 HTML 也能阅读多数页面，但本地服务器更适合检查页面之间的链接。

网站目前由 GitHub Pages 从 `gh-pages` 分支根目录发布。更新网页时，请保持站内链接为相对路径，以便站点在 `/ethshanghai2026/` 子路径下正常工作。

## 使用说明

本项目旨在帮助读者理解议题，**不是活动主办方的官方纪要**。专题中的示例推演与作者分析并非嘉宾原话；涉及尚在草案阶段的技术提案，也不表示已经在以太坊主网启用。有关金融产品、法律或投资的讨论仅用于理解技术和应用，不构成建议。

文章引用了外部资料，相关内容以原机构发布的最新版本为准。仓库目前未附内容或代码的开放许可证；公开可阅读不等于自动授予转载、改编或商用许可。
