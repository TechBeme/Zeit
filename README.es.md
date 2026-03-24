<div align="center">

# ⚡ Zeit Telecom — Conectividad Corporativa

**Landing page institucional moderna para operadora de telecomunicaciones con diseño cinematográfico, animaciones fluidas e internacionalización completa**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12-FF6F61)](https://motion.dev/)

[Funcionalidades](#-funcionalidades) • [Stack Tecnológico](#%EF%B8%8F-stack-tecnológico) • [Instalación](#-instalación) • [Estructura del Proyecto](#-estructura-del-proyecto) • [Licencia](#-licencia)

**Idiomas:** [🇧🇷 Português](README.md) • [🇺🇸 English](README.en.md)

</div>

---

## 📋 Índice

- [Visión General](#-visión-general)
- [Sobre el Desarrollador](#-sobre-el-desarrollador)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológico](#%EF%B8%8F-stack-tecnológico)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Licencia](#-licencia)

---

## 🎯 Visión General

**Zeit Telecom** es una landing page institucional de alto rendimiento desarrollada para una operadora de telecomunicaciones especializada en soluciones corporativas. El proyecto combina un diseño cinematográfico con animaciones sofisticadas y una experiencia de navegación por secciones de pantalla completa controlada por scroll/swipe.

**Principales diferenciales:**
- Diseño cinematográfico con video de fondo, partículas animadas y efectos de glow
- Navegación de pantalla completa por secciones con scroll hijacking y soporte a gestos táctiles
- Sistema de internacionalización (i18n) completo con soporte para Portugués, Inglés y Español
- Detección automática del idioma del navegador con redirección
- Componentes interactivos con efecto de luz que sigue el cursor (GlowCard/GlowButton)
- Animaciones SVG sincronizadas con la línea de tiempo del video
- Tipografía responsiva con alineación dinámica por JavaScript
- Rendimiento optimizado con Vercel Analytics y Speed Insights

---

## 👨‍💻 Sobre el Desarrollador

<div align="center">

**Desarrollado por Rafael Vieira (TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

**Desarrollador Full-Stack & Especialista en Automatización con IA**

Especializado en **aplicaciones web modernas**, **sistemas de automatización**, **integraciones con IA** y **desarrollo full-stack**.

### 💼 Competencias Principales

- 💻 Desarrollo Full-Stack (Next.js, React, TypeScript, Node.js)
- 🎨 Desarrollo de UI/UX Modernas (Tailwind CSS, Motion, shadcn/ui)
- 🔍 Web Scraping & Extracción de Datos
- ⚡ Automatización de Procesos & Workflows
- 🤖 Integraciones de IA (OpenAI, Anthropic, Google Gemini, sistemas RAG)
- 📊 Diseño & Optimización de Bases de Datos
- 🚀 Rendimiento, SEO & Analytics

### 🌍 Idiomas

🇺🇸 **English** • 🇧🇷 **Português** • 🇪🇸 **Español**

### 📬 Contacto

**Email**: [contact@techbe.me](mailto:contact@techbe.me)

</div>

---

## ✨ Funcionalidades

### 🎬 Diseño Cinematográfico
- **Video de Fondo**: Sección hero con video en loop, overlays en degradado y partículas animadas
- **Efectos de Glow**: Componentes GlowCard y GlowButton con luz que sigue el cursor
- **Partículas Animadas**: 30 partículas con posiciones pre-calculadas para evitar desajustes de hidratación
- **Degradados Atmosféricos**: Sistema de colores con paleta ámbar/plata metálico sobre superficies oscuras

### 📜 Navegación por Secciones de Pantalla Completa
- **Scroll Hijacking**: Transiciones suaves entre secciones de pantalla completa
- **Soporte Táctil**: Navegación por swipe en dispositivos móviles
- **Navbar Interactiva**: Navegación centralizada tipo pill con efecto de glow y selector de idioma
- **Scroll Interno**: Sección de Soluciones con carrusel vertical controlado por scroll/swipe
- **Footer Revelable**: Sección Sobre se desliza para revelar el footer con animación

### 🌐 Internacionalización (i18n)
- **3 Idiomas**: Portugués (predeterminado), Inglés y Español
- **Detección Automática**: Middleware detecta el idioma del navegador vía `Accept-Language`
- **Rutas Dinámicas**: URL con prefijo de locale (`/pt`, `/en`, `/es`)
- **Diccionarios JSON**: Textos separados por idioma con tipado TypeScript completo
- **SEO Localizado**: Meta tags, Open Graph y `hreflang` por idioma

### ⚡ Soluciones Corporativas
- **Internet Dedicado**: Enlace dedicado con SLA de 99,5% y soporte 24/7
- **Data Center & Colocation**: Infraestructura Tier III con redundancia total
- **Fibra Punto a Punto**: Conexión directa entre sucursales con latencia ultrabaja
- **Firewall Gestionado**: Protección perimetral con monitoreo en tiempo real

### 🎨 Animaciones & Microinteracciones
- **Motion (Framer Motion)**: Transiciones de entrada, parallax y animaciones de scroll
- **SVG Animado**: Borde del botón CTA sincronizado con la línea de tiempo del video (30fps)
- **Tipografía Responsiva**: Tamaño de fuente calculado vía JavaScript para alineación perfecta
- **AnimatePresence**: Transiciones suaves de fondo al cambiar soluciones activas

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white) | 16.2+ | Framework React con App Router |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | 5.0+ | Tipado estático |
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | 19.2+ | Biblioteca de UI con Server Components |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white) | 4.0+ | Framework CSS utility-first |
| **Motion** | 12.38+ | Animaciones y transiciones fluidas |

### Analytics & Rendimiento

| Tecnología | Propósito |
|------------|-----------|
| **Vercel Analytics** | Métricas de uso y audiencia |
| **Vercel Speed Insights** | Monitoreo de Core Web Vitals |

### Herramientas de Desarrollo

| Herramienta | Propósito |
|-------------|-----------|
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white) | Linting de código |
| **PostCSS** | Procesamiento de CSS |
| **TypeScript** | Verificación de tipos |

---

## 📦 Instalación

### Requisitos Previos

- **Node.js 20+** ([Download](https://nodejs.org/))
- **npm** o **yarn**

### Instalación Rápida

```bash
# 1. Clonar el repositorio
git clone https://github.com/TechBeme/zeit.git
cd zeit

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Acceda a [http://localhost:3000](http://localhost:3000) 🚀

### Build para Producción

```bash
# Build optimizado
npm run build

# Iniciar servidor de producción
npm run start
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Verificar errores de lint
```

---

## 📁 Estructura del Proyecto

```
zeit/
├── public/
│   ├── hero.mp4                    # Video de fondo del hero
│   ├── about.png                   # Fondo de la sección sobre
│   ├── logo.png                    # Logo principal
│   ├── brand.png                   # Logo de marca
│   └── solucoes/                   # Imágenes de soluciones
│       ├── internet.png
│       ├── data-center.png
│       ├── fibra-ponto-a-ponto.png
│       └── firewall.png
│
├── src/
│   ├── middleware.ts                # Detección de idioma y redirección
│   ├── app/
│   │   ├── globals.css             # Design tokens y estilos globales
│   │   └── [locale]/
│   │       ├── layout.tsx          # Layout con fuentes, metadata e i18n
│   │       └── page.tsx            # Página principal con secciones
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Hero con video, partículas y CTA animado
│   │   │   ├── SolucoesSection.tsx  # Carrusel vertical de soluciones
│   │   │   ├── SobreSection.tsx    # Sobre con logo y estadísticas
│   │   │   └── InfraestruturaSection.tsx  # Sección de infraestructura
│   │   └── ui/
│   │       ├── Navbar.tsx          # Navegación con selector de idioma
│   │       ├── Footer.tsx          # Footer revelable
│   │       ├── GlowButton.tsx      # Botón con efecto de luz en cursor
│   │       ├── GlowCard.tsx        # Card con efecto de luz en cursor
│   │       └── SectionScroller.tsx  # Gestor de scroll entre secciones
│   │
│   └── i18n/
│       ├── config.ts               # Configuración de locales
│       ├── getDictionary.ts        # Carga dinámica de diccionarios
│       ├── DictionaryProvider.tsx   # Context provider para i18n
│       └── dictionaries/
│           ├── pt.json             # Portugués (predeterminado)
│           ├── en.json             # Inglés
│           └── es.json             # Español
│
├── next.config.ts                  # Configuración de Next.js
├── tsconfig.json                   # Configuración TypeScript
├── eslint.config.mjs               # Configuración ESLint
├── postcss.config.mjs              # Configuración PostCSS
└── package.json                    # Dependencias y scripts
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

| Token | Color | Uso |
|-------|-------|-----|
| `--color-primary` | `#f6be39` | Destacados, CTAs, subtítulos |
| `--color-on-surface` | `#e5e2e1` | Textos principales |
| `--color-secondary` | `#c6c6cf` | Textos secundarios |
| `--color-surface` | `#131313` | Fondo principal |
| `--color-surface-container-lowest` | `#0c0c0c` | Fondo más oscuro (footer, sobre) |
| `--color-outline-variant` | `#4f4634` | Bordes sutiles |

### Tipografía

- **Headline**: Space Grotesk (títulos con tracking ajustado)
- **Body**: Manrope (textos de contenido)
- **Label**: Inter (navegación, labels y botones)

---

## 📝 Licencia

**Licencia Propietaria - Todos los Derechos Reservados**

Copyright © 2026 Rafael Vieira (TechBeme)

### ❌ Restricciones

- Prohibido el uso comercial sin permiso escrito explícito
- Prohibidas las modificaciones u obras derivadas
- Prohibida la distribución, sublicencia u hospedaje público
- Prohibida la ingeniería inversa o descompilación

### ✅ Uso Permitido

- Ver el código fuente con fines educativos y de aprendizaje
- Ejecutar localmente para estudio personal y no comercial
- Fork para aprendizaje privado y personal

### 📧 Licenciamiento Comercial

Para uso comercial, desarrollo personalizado o consultas de licencia:

**Contacto**: [contact@techbe.me](mailto:contact@techbe.me)

---

## 🙏 Agradecimientos

Construido con tecnologías open-source increíbles:

[Next.js](https://nextjs.org/) • [React](https://reactjs.org/) • [TypeScript](https://www.typescriptlang.org/) • [Tailwind CSS](https://tailwindcss.com/) • [Motion](https://motion.dev/) • [Vercel](https://vercel.com/)

---

<div align="center">

**Desarrollado por [Rafael Vieira](https://github.com/TechBeme)**

[![GitHub](https://img.shields.io/badge/GitHub-TechBeme-181717?logo=github)](https://github.com/TechBeme)
[![Fiverr](https://img.shields.io/badge/Fiverr-Tech__Be-1DBF73?logo=fiverr)](https://www.fiverr.com/tech_be)
[![Upwork](https://img.shields.io/badge/Upwork-Profile-14a800?logo=upwork)](https://www.upwork.com/freelancers/~01f0abcf70bbd95376)
[![Email](https://img.shields.io/badge/Email-contact@techbe.me-EA4335?logo=gmail)](mailto:contact@techbe.me)

</div>
