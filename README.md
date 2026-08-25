# Bible Station 📖

**Bible Station** is a modern Single Page Application (SPA) built with **Vue 3** and **Vite**, designed to help believers hide God's word in their hearts and find biblical encouragement for every season of life.

Live Site: [https://biblestation.org](https://biblestation.org)

---

## ✨ Features

- **🌐 Single Page Application with Global Navigation**: Fast, smooth client-side routing across all sections with clean direct URLs and responsive mobile navigation.
- **🏠 Home & Welcome**: Overview of the mission, quick feature access cards, and inspiring hero scripture banner.
- **📜 Devotionals**: Thoughtful devotional reflections and scripture applications, paginated (10 per page) with shareable deep links to individual posts.
- **🧠 Scripture Memory Tool**: Interactive scripture memorization suite with automated verse fetching via `bible-api.com` and fallback APIs (NIV, ESV, CSB, NASB, NKJV, NLT, NET, AMP, WEB, KJV, BBE, ASV, YLT) and Custom text paste, offering 5 distinct practice modes:
  1. **Vanish Mode**: Eraser slider (0% to 100%) with interactive click-to-reveal word blanks.
  2. **Fill in the Blanks**: Customizable blank percentage (25% to 100%) with automated answer validation and visual feedback.
  3. **Scramble Mode**: Word bank with randomly shuffled word buttons to reconstruct verses sequentially.
  4. **First Letter Mode**: Displays initial letters with word length placeholders and hover tooltip cheats.
  5. **Type Full Mode**: Letter-by-letter live comparison typing engine with color-coded feedback and memory challenge toggle.
- **🕊️ Bible Verses for Feelings**: Comprehensive catalog of 240 modern NIV verses across **30 emotional states** grouped into **10 categories** (Uplifting and Heavy feelings), complete with dynamic color accenting and random verse generation.

---

## 🛠️ Technology Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [Vue Router 4](https://router.vuejs.org/) (HTML5 Web History with SPA fallback for GitHub Pages)
- **Styling**: Vanilla CSS with custom CSS variables (Design Tokens)
- **CI/CD**: GitHub Actions deploying to **GitHub Pages** on commits to `main`

---

## 📂 Project Structure

```text
bible-station/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── 404.html                  # SPA redirect handler for GitHub Pages deep linking
│   ├── CNAME                     # Custom domain config (biblestation.org)
│   └── favicon.svg               # SVG bible icon favicon (with background for dark mode)
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css          # Design tokens, reset, typography & utility styles
│   ├── components/
│   │   ├── Navbar.vue            # Responsive global top navigation bar
│   │   └── AppFooter.vue         # Global application footer
│   ├── data/
│   │   ├── devotionalsData.js    # Devotional articles data
│   │   └── feelingsData.js       # 30 feelings categories and 240 modern NIV scripture texts
│   ├── router/
│   │   └── index.js              # Vue Router configuration
│   ├── views/
│   │   ├── HomeView.vue          # Landing page & hero
│   │   ├── DevotionalsView.vue   # Devotionals feed
│   │   ├── MemoryView.vue        # 5-mode interactive scripture memorizer
│   │   └── VersesForFeelingsView.vue # Categorized verses by emotion
│   ├── App.vue                   # Root application component
│   └── main.js                   # Application entrypoint
├── agents.md                     # AI Agent Constitutional Rules & Guidelines
├── index.html                    # HTML entry point with SPA redirect decoder
├── package.json                  # Project dependencies and npm scripts
├── spec.md                       # Comprehensive Application Specification
├── vite.config.js                # Vite build and path alias configuration
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 20.x recommended)
- npm (version 10.x or higher)

### Installation

```bash
# Clone the repository
git clone git@github.com:haftel/bible-station.git
cd bible-station

# Install dependencies
npm install
```

### Development Server

```bash
# Start local development server with Hot Module Replacement (HMR)
npm run dev
```

### Production Build

```bash
# Compile and optimize for production
npm run build

# Locally preview the production build
npm run preview
```

---

## 🌿 Contribution & Branching Workflow

To maintain production stability on `main`:
1. **Never commit directly to `main` without explicit user permission.**
2. Always create and work on a dedicated branch:
   ```bash
   git checkout -b feat/your-feature-name
   # or fix/..., docs/..., chore/...
   ```
3. Run and verify local builds (`npm run build`).
4. Update `spec.md` and `README.md` concurrently.
5. Request review and permission before merging into `main`.

---

## 🚢 Deployment (GitHub Pages)

Deployments are fully automated via GitHub Actions on every commit to the `main` branch.

1. The pipeline (`.github/workflows/deploy.yml`) checks out the code, runs on Node.js 20, executes `npm ci` and `npm run build`.
2. The generated production assets in `dist/` are packaged and published to GitHub Pages.
3. Clean deep links (such as `/devotionals` and `/memory`) are supported seamlessly using the `404.html` SPA routing fallback.
4. The custom domain `biblestation.org` is preserved across deploys via the `public/CNAME` file.

---

## 📋 Governance & Specifications

- **[spec.md](spec.md)**: Exhaustive functional and technical specification detailing all system behavior, components, and game algorithms.
- **[agents.md](agents.md)**: Constitutional rules and operational mandates governing AI coding agents on this codebase.

---

## 📄 License

&copy; 2026 Bible Station. All Rights Reserved.