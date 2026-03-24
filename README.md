<div align="center">

# ⚡ Zeit Telecom — Conectividade Corporativa

**Landing page institucional moderna para operadora de telecomunicações com design cinematográfico, animações fluidas e internacionalização completa**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12-FF6F61)](https://motion.dev/)

[Funcionalidades](#-funcionalidades) • [Stack Tecnológica](#%EF%B8%8F-stack-tecnológica) • [Instalação](#-instalação) • [Estrutura do Projeto](#-estrutura-do-projeto) • [Licença](#-licença)

**Idiomas:** [🇺🇸 English](README.en.md) • [🇪🇸 Español](README.es.md)

</div>

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Sobre o Desenvolvedor](#-sobre-o-desenvolvedor)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológica](#%EF%B8%8F-stack-tecnológica)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Licença](#-licença)

---

## 🎯 Visão Geral

**Zeit Telecom** é uma landing page institucional de alta performance desenvolvida para uma operadora de telecomunicações especializada em soluções corporativas. O projeto combina um design cinematográfico com animações sofisticadas e uma experiência de navegação por seções full-screen controlada por scroll/swipe.

**Principais diferenciais:**
- Design cinematográfico com vídeo de fundo, partículas animadas e efeitos de glow
- Navegação full-screen por seções com scroll hijacking e suporte a gestos touch
- Sistema de internacionalização (i18n) completo com suporte a Português, Inglês e Espanhol
- Detecção automática de idioma do navegador com redirecionamento
- Componentes interativos com efeito de luz que acompanha o cursor (GlowCard/GlowButton)
- Animações SVG sincronizadas com timeline de vídeo
- Tipografia responsiva com alinhamento dinâmico por JavaScript
- Performance otimizada com Vercel Analytics e Speed Insights

---

## 👨‍💻 Sobre o Desenvolvedor

<div align="center">

**Desenvolvido por Rafael Vieira (TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

**Desenvolvedor Full-Stack & Especialista em Automação com IA**

Especializado em **aplicações web modernas**, **sistemas de automação**, **integrações com IA** e **desenvolvimento full-stack**.

### 💼 Principais Competências

- 💻 Desenvolvimento Full-Stack (Next.js, React, TypeScript, Node.js)
- 🎨 Desenvolvimento de UI/UX Modernas (Tailwind CSS, Motion, shadcn/ui)
- 🔍 Web Scraping & Extração de Dados
- ⚡ Automação de Processos & Workflows
- 🤖 Integrações de IA (OpenAI, Anthropic, Google Gemini, sistemas RAG)
- 📊 Design & Otimização de Bancos de Dados
- 🚀 Performance, SEO & Analytics

### 🌍 Idiomas

🇺🇸 **English** • 🇧🇷 **Português** • 🇪🇸 **Español**

### 📬 Contato

**Email**: [contact@techbe.me](mailto:contact@techbe.me)

</div>

---

## ✨ Funcionalidades

### 🎬 Design Cinematográfico
- **Vídeo de Fundo**: Hero section com vídeo em loop, overlays em gradiente e partículas animadas
- **Efeitos de Glow**: Componentes GlowCard e GlowButton com luz que segue o cursor
- **Partículas Animadas**: 30 partículas com posições pré-computadas para evitar mismatch de hidratação
- **Gradientes Atmosféricos**: Sistema de cores com paleta amber/metallic silver sobre superfícies escuras

### 📜 Navegação por Seções Full-Screen
- **Scroll Hijacking**: Transições suaves entre seções de tela cheia
- **Suporte a Touch**: Navegação por swipe em dispositivos móveis
- **Navbar Interativa**: Navegação centralizada em pill com efeito de glow e alternância de idioma
- **Scroll Interno**: Seção de Soluções com carrossel vertical controlado por scroll/swipe
- **Footer Revelável**: Seção Sobre desliza para revelar o footer com animação

### 🌐 Internacionalização (i18n)
- **3 Idiomas**: Português (padrão), Inglês e Espanhol
- **Detecção Automática**: Middleware detecta o idioma do navegador via `Accept-Language`
- **Rotas Dinâmicas**: URL com prefixo de locale (`/pt`, `/en`, `/es`)
- **Dicionários JSON**: Textos separados por idioma com tipagem TypeScript completa
- **SEO Localizado**: Meta tags, Open Graph e `hreflang` por idioma

### ⚡ Soluções Corporativas
- **Internet Dedicada**: Link dedicado com SLA de 99,5% e suporte 24/7
- **Data Center & Colocation**: Infraestrutura Tier III com redundância total
- **Fibra Ponto a Ponto**: Conexão direta entre filiais com latência ultrabaixa
- **Firewall Gerenciado**: Proteção perimetral com monitoramento em tempo real

### 🎨 Animações & Microinterações
- **Motion (Framer Motion)**: Transições de entrada, parallax e animações de scroll
- **SVG Animado**: Borda do botão CTA sincronizada com timeline do vídeo (30fps)
- **Tipografia Responsiva**: Tamanho de fonte calculado via JavaScript para alinhamento perfeito
- **AnimatePresence**: Transições suaves de background na troca de soluções ativas

---

## 🛠️ Stack Tecnológica

### Frontend

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) | 16.2+ | Framework React com App Router |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | 5.0+ | Tipagem estática |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | 19.2+ | Biblioteca de UI com Server Components |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white) | 4.0+ | Framework CSS utility-first |
| **Motion** | 12.38+ | Animações e transições fluidas |

### Analytics & Performance

| Tecnologia | Finalidade |
|------------|------------|
| **Vercel Analytics** | Métricas de uso e audiência |
| **Vercel Speed Insights** | Monitoramento de Core Web Vitals |

### Ferramentas de Desenvolvimento

| Ferramenta | Finalidade |
|------------|------------|
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white) | Linting de código |
| **PostCSS** | Processamento de CSS |
| **TypeScript** | Verificação de tipos |

---

## 📦 Instalação

### Pré-requisitos

- **Node.js 20+** ([Download](https://nodejs.org/))
- **npm** ou **yarn**

### Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/TechBeme/zeit.git
cd zeit

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) 🚀

### Build para Produção

```bash
# Build otimizado
npm run build

# Iniciar servidor de produção
npm run start
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificar erros de lint
```

---

## 📁 Estrutura do Projeto

```
zeit/
├── public/
│   ├── hero.mp4                    # Vídeo de fundo do hero
│   ├── about.png                   # Background da seção sobre
│   ├── logo.png                    # Logo principal
│   ├── brand.png                   # Logo da marca
│   └── solucoes/                   # Imagens das soluções
│       ├── internet.png
│       ├── data-center.png
│       ├── fibra-ponto-a-ponto.png
│       └── firewall.png
│
├── src/
│   ├── middleware.ts                # Detecção de idioma e redirecionamento
│   ├── app/
│   │   ├── globals.css             # Design tokens e estilos globais
│   │   └── [locale]/
│   │       ├── layout.tsx          # Layout com fontes, metadata e i18n
│   │       └── page.tsx            # Página principal com seções
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Hero com vídeo, partículas e CTA animado
│   │   │   ├── SolucoesSection.tsx  # Carrossel vertical de soluções
│   │   │   ├── SobreSection.tsx    # Sobre com logo e estatísticas
│   │   │   └── InfraestruturaSection.tsx  # Seção de infraestrutura
│   │   └── ui/
│   │       ├── Navbar.tsx          # Navegação com alternância de idioma
│   │       ├── Footer.tsx          # Footer revelável
│   │       ├── GlowButton.tsx      # Botão com efeito de luz no cursor
│   │       ├── GlowCard.tsx        # Card com efeito de luz no cursor
│   │       └── SectionScroller.tsx  # Gerenciador de scroll entre seções
│   │
│   └── i18n/
│       ├── config.ts               # Configuração de locales
│       ├── getDictionary.ts        # Carregamento dinâmico de dicionários
│       ├── DictionaryProvider.tsx   # Context provider para i18n
│       └── dictionaries/
│           ├── pt.json             # Português (padrão)
│           ├── en.json             # Inglês
│           └── es.json             # Espanhol
│
├── next.config.ts                  # Configuração do Next.js
├── tsconfig.json                   # Configuração TypeScript
├── eslint.config.mjs               # Configuração ESLint
├── postcss.config.mjs              # Configuração PostCSS
└── package.json                    # Dependências e scripts
```

---

## 🎨 Design System

### Paleta de Cores

| Token | Cor | Uso |
|-------|-----|-----|
| `--color-primary` | `#f6be39` | Destaques, CTAs, subtítulos |
| `--color-on-surface` | `#e5e2e1` | Textos principais |
| `--color-secondary` | `#c6c6cf` | Textos secundários |
| `--color-surface` | `#131313` | Fundo principal |
| `--color-surface-container-lowest` | `#0c0c0c` | Fundo mais escuro (footer, sobre) |
| `--color-outline-variant` | `#4f4634` | Bordas sutis |

### Tipografia

- **Headline**: Space Grotesk (títulos com tracking apertado)
- **Body**: Manrope (textos corridos)
- **Label**: Inter (navegação, labels e botões)

---

## 📝 Licença

**Licença Proprietária - Todos os Direitos Reservados**

Copyright © 2026 Rafael Vieira (TechBeme)

### ❌ Restrições

- Proibido uso comercial sem permissão escrita
- Proibido modificações ou trabalhos derivados
- Proibido distribuição, sublicenciamento ou hospedagem pública
- Proibida engenharia reversa ou descompilação

### ✅ Uso Permitido

- Visualizar código-fonte para fins educacionais
- Executar localmente para estudo pessoal e não comercial
- Fork para aprendizado privado e pessoal

### 📧 Licenciamento Comercial

Para uso comercial, desenvolvimento customizado ou consultas de licenciamento:

**Contato**: [contact@techbe.me](mailto:contact@techbe.me)

---

## 🙏 Agradecimentos

Construído com tecnologias open-source incríveis:

[Next.js](https://nextjs.org/) • [React](https://reactjs.org/) • [TypeScript](https://www.typescriptlang.org/) • [Tailwind CSS](https://tailwindcss.com/) • [Motion](https://motion.dev/) • [Vercel](https://vercel.com/)

---

<div align="center">

**Desenvolvido por [Rafael Vieira](https://github.com/TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

</div>
