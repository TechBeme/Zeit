<div align="center">

# ⚡ Zeit Telecom — Corporate Connectivity

**Modern institutional landing page for a telecommunications operator with cinematic design, fluid animations, and full internationalization**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12-FF6F61)](https://motion.dev/)

[Features](#-features) • [Tech Stack](#%EF%B8%8F-technology-stack) • [Installation](#-installation) • [Project Structure](#-project-structure) • [License](#-license)

**Languages:** [🇧🇷 Português](README.md) • [🇪🇸 Español](README.es.md)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [About the Developer](#-about-the-developer)
- [Features](#-features)
- [Technology Stack](#%EF%B8%8F-technology-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [License](#-license)

---

## 🎯 Overview

**Zeit Telecom** is a high-performance institutional landing page developed for a telecommunications operator specialized in corporate solutions. The project combines cinematic design with sophisticated animations and a full-screen section navigation experience controlled by scroll/swipe.

**Key differentiators:**
- Cinematic design with background video, animated particles, and glow effects
- Full-screen section navigation with scroll hijacking and touch gesture support
- Complete internationalization (i18n) system supporting Portuguese, English, and Spanish
- Automatic browser language detection with redirect
- Interactive components with cursor-following light effects (GlowCard/GlowButton)
- SVG animations synchronized with video timeline
- Responsive typography with dynamic JavaScript-driven alignment
- Performance optimized with Vercel Analytics and Speed Insights

---

## 👨‍💻 About the Developer

<div align="center">

**Developed by Rafael Vieira (TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

**Full-Stack Developer & AI Automation Specialist**

Specialized in **modern web applications**, **automation systems**, **AI integrations**, and **full-stack development**.

### 💼 Core Expertise

- 💻 Full-Stack Development (Next.js, React, TypeScript, Node.js)
- 🎨 Modern UI/UX Development (Tailwind CSS, Motion, shadcn/ui)
- 🔍 Web Scraping & Data Extraction
- ⚡ Process Automation & Workflows
- 🤖 AI Integrations (OpenAI, Anthropic, Google Gemini, RAG systems)
- 📊 Database Design & Optimization
- 🚀 Performance, SEO & Analytics

### 🌍 Languages

🇺🇸 **English** • 🇧🇷 **Português** • 🇪🇸 **Español**

### 📬 Contact

**Email**: [contact@techbe.me](mailto:contact@techbe.me)

</div>

---

## ✨ Features

### 🎬 Cinematic Design
- **Background Video**: Hero section with looping video, gradient overlays, and animated particles
- **Glow Effects**: GlowCard and GlowButton components with cursor-following light
- **Animated Particles**: 30 particles with pre-computed positions to avoid hydration mismatch
- **Atmospheric Gradients**: Color system with amber/metallic silver palette on dark surfaces

### 📜 Full-Screen Section Navigation
- **Scroll Hijacking**: Smooth transitions between full-screen sections
- **Touch Support**: Swipe navigation on mobile devices
- **Interactive Navbar**: Centered pill navigation with glow effect and language switcher
- **Internal Scroll**: Solutions section with vertical carousel controlled by scroll/swipe
- **Revealable Footer**: About section slides up to reveal footer with animation

### 🌐 Internationalization (i18n)
- **3 Languages**: Portuguese (default), English, and Spanish
- **Automatic Detection**: Middleware detects browser language via `Accept-Language`
- **Dynamic Routes**: URL with locale prefix (`/pt`, `/en`, `/es`)
- **JSON Dictionaries**: Texts separated by language with full TypeScript typing
- **Localized SEO**: Meta tags, Open Graph, and `hreflang` per language

### ⚡ Corporate Solutions
- **Dedicated Internet**: Dedicated link with 99.5% SLA and 24/7 support
- **Data Center & Colocation**: Tier III infrastructure with full redundancy
- **Point-to-Point Fiber**: Direct connection between branches with ultra-low latency
- **Managed Firewall**: Perimeter protection with real-time monitoring

### 🎨 Animations & Micro-interactions
- **Motion (Framer Motion)**: Entry transitions, parallax, and scroll animations
- **Animated SVG**: CTA button border synchronized with video timeline (30fps)
- **Responsive Typography**: Font size calculated via JavaScript for perfect alignment
- **AnimatePresence**: Smooth background transitions when switching active solutions

---

## 🛠️ Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) | 16.2+ | React framework with App Router |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | 5.0+ | Type-safe development |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | 19.2+ | UI library with Server Components |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white) | 4.0+ | Utility-first CSS framework |
| **Motion** | 12.38+ | Fluid animations and transitions |

### Analytics & Performance

| Technology | Purpose |
|------------|---------|
| **Vercel Analytics** | Usage and audience metrics |
| **Vercel Speed Insights** | Core Web Vitals monitoring |

### Development Tools

| Tool | Purpose |
|------|---------|
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white) | Code linting |
| **PostCSS** | CSS processing |
| **TypeScript** | Type checking |

---

## 📦 Installation

### Prerequisites

- **Node.js 20+** ([Download](https://nodejs.org/))
- **npm** or **yarn**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/TechBeme/zeit.git
cd zeit

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🚀

### Production Build

```bash
# Optimized build
npm run build

# Start production server
npm run start
```

### Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Check lint errors
```

---

## 📁 Project Structure

```
zeit/
├── public/
│   ├── hero.mp4                    # Hero background video
│   ├── about.png                   # About section background
│   ├── logo.png                    # Main logo
│   ├── brand.png                   # Brand logo
│   └── solucoes/                   # Solution images
│       ├── internet.png
│       ├── data-center.png
│       ├── fibra-ponto-a-ponto.png
│       └── firewall.png
│
├── src/
│   ├── middleware.ts                # Language detection and redirect
│   ├── app/
│   │   ├── globals.css             # Design tokens and global styles
│   │   └── [locale]/
│   │       ├── layout.tsx          # Layout with fonts, metadata, and i18n
│   │       └── page.tsx            # Main page with sections
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Hero with video, particles, and animated CTA
│   │   │   ├── SolucoesSection.tsx  # Vertical solutions carousel
│   │   │   ├── SobreSection.tsx    # About with logo and statistics
│   │   │   └── InfraestruturaSection.tsx  # Infrastructure section
│   │   └── ui/
│   │       ├── Navbar.tsx          # Navigation with language switcher
│   │       ├── Footer.tsx          # Revealable footer
│   │       ├── GlowButton.tsx      # Button with cursor light effect
│   │       ├── GlowCard.tsx        # Card with cursor light effect
│   │       └── SectionScroller.tsx  # Section scroll manager
│   │
│   └── i18n/
│       ├── config.ts               # Locale configuration
│       ├── getDictionary.ts        # Dynamic dictionary loading
│       ├── DictionaryProvider.tsx   # i18n context provider
│       └── dictionaries/
│           ├── pt.json             # Portuguese (default)
│           ├── en.json             # English
│           └── es.json             # Spanish
│
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── eslint.config.mjs               # ESLint configuration
├── postcss.config.mjs              # PostCSS configuration
└── package.json                    # Dependencies and scripts
```

---

## 🎨 Design System

### Color Palette

| Token | Color | Usage |
|-------|-------|-------|
| `--color-primary` | `#f6be39` | Highlights, CTAs, subtitles |
| `--color-on-surface` | `#e5e2e1` | Primary text |
| `--color-secondary` | `#c6c6cf` | Secondary text |
| `--color-surface` | `#131313` | Main background |
| `--color-surface-container-lowest` | `#0c0c0c` | Darkest background (footer, about) |
| `--color-outline-variant` | `#4f4634` | Subtle borders |

### Typography

- **Headline**: Space Grotesk (titles with tight tracking)
- **Body**: Manrope (body text)
- **Label**: Inter (navigation, labels, and buttons)

---

## 📝 License

**Proprietary License - All Rights Reserved**

Copyright © 2026 Rafael Vieira (TechBeme)

### ❌ Restrictions

- No commercial use without explicit written permission
- No modifications or derivative works
- No distribution, sublicensing, or public hosting
- No reverse engineering or decompilation

### ✅ Permitted Use

- View source code for educational and learning purposes
- Run locally for personal, non-commercial study
- Fork for private, personal learning

### 📧 Commercial Licensing

For commercial use, custom development, or licensing inquiries:

**Contact**: [contact@techbe.me](mailto:contact@techbe.me)

---

## 🙏 Acknowledgments

Built with amazing open-source technologies:

[Next.js](https://nextjs.org/) • [React](https://reactjs.org/) • [TypeScript](https://www.typescriptlang.org/) • [Tailwind CSS](https://tailwindcss.com/) • [Motion](https://motion.dev/) • [Vercel](https://vercel.com/)

---

<div align="center">

**Developed by [Rafael Vieira](https://github.com/TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

</div>
