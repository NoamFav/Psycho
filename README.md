<div align="center">

# 🌸 Séverine Favier - Psychopédagogue Website 🌸

[![React](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-Private-red.svg)](https://opensource.org/licenses/MIT)

<img src="src/assets/logo.png" width="250" alt="Séverine Favier Logo"/>

A modern, animated, responsive website showcasing professional psychopedagogy services with elegant design, smooth animations, and comprehensive educational content.

[Installation](#-installation-guide) •
[Features](#-key-features) •
[Tech Stack](#-tech-stack) •
[Deployment](#-deployment)

</div>

---

## 🎓 Overview

Welcome to **Séverine Favier's Professional Website** - a sophisticated digital presence for psychopedagogy services! Built with modern **React** and **Vite**, it delivers an immersive user experience with smooth animations, interactive elements, and comprehensive service information. Whether you're a student, parent, or educator, this platform provides clear insights into personalized learning support and educational methodologies.

<div align="center">
  <img src="src/assets/homepage-preview.png" width="600" alt="Website Homepage"/>
</div>

---

## 🛠️ Prerequisites

Before setting up the development environment, ensure your system meets these requirements:

| Requirement | Version      | Notes                                   |
| ----------- | ------------ | --------------------------------------- |
| **Node.js** | 18+ or later | [Download Node.js](https://nodejs.org/) |
| **npm**     | 9+           | Comes with Node.js                      |
| **Git**     | Latest       | [Download Git](https://git-scm.com/)    |
| **Browser** | Modern       | Chrome 90+, Firefox 88+, Safari 14+     |
| **Storage** | -            | 200MB free disk space                   |

---

## 🌱 Installation Guide

<details open>
<summary><b>Quick Start</b></summary>

Follow these simple steps to set up the development environment:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/severine-psychopedagogue-site.git
   cd severine-psychopedagogue-site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the website! 🚀

</details>

---

## 🎮 Development Commands

<details>
<summary><b>Available Scripts</b></summary>

Comprehensive list of all available npm scripts for development and deployment:

```bash
# Development
npm run dev          # Start development server with hot reload
npm run preview      # Preview production build locally

# Building
npm run build        # Create optimized production build
npm run build:data   # Process TOML configuration to JSON

# Code Quality
npm run lint         # Run ESLint for code quality checks

# Deployment
npm run predeploy    # Pre-deployment preparation
npm run deploy       # Deploy to GitHub Pages
```

</details>

<details>
<summary><b>Production Build</b></summary>

Create optimized builds for different deployment targets:

**Static Hosting (Netlify, Vercel, etc.):**

```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

**GitHub Pages:**

```bash
npm run deploy
# Automatically builds and deploys to gh-pages branch
```

**Manual Deployment:**

```bash
npm run build
# Copy contents of 'dist' folder to your web server
```

</details>

<details>
<summary><b>Development Environment Setup</b></summary>

**VS Code (Recommended):**

1. Install recommended extensions from `.vscode/extensions.json`
2. Use integrated terminal for npm commands
3. Enable Prettier formatting on save

**Other IDEs:**

- Ensure JavaScript/React syntax support
- Configure ESLint integration
- Set up Tailwind CSS IntelliSense

</details>

---

## 📺 Key Features

<div style="display: flex; flex-wrap: wrap;">

<div style="flex: 1; min-width: 250px; padding: 10px;">
<h3>🎨 Modern Animated Interface</h3>
<p>Stunning floating elements, smooth transitions, and Framer Motion animations create an engaging user experience that reflects professionalism and care.</p>
</div>

<div style="flex: 1; min-width: 250px; padding: 10px;">
<h3>📱 Fully Responsive Design</h3>
<p>Seamlessly adapts to all screen sizes - desktop, tablet, and mobile devices with optimized layouts and touch-friendly interactions.</p>
</div>

<div style="flex: 1; min-width: 250px; padding: 10px;">
<h3>🗺️ Multi-Page Navigation</h3>
<p>Smooth single-page application routing with HashRouter compatibility for static hosting, ensuring fast page transitions.</p>
</div>

<div style="flex: 1; min-width: 250px; padding: 10px;">
<h3>📚 Comprehensive Service Pages</h3>
<p>Detailed information about psychopedagogy approaches, personalized support, learning methodologies, and specialized programs.</p>
</div>

<div style="flex: 1; min-width: 250px; padding: 10px;">
<h3>🎯 Interactive Elements</h3>
<p>Dynamic image sliders, hover effects, and scroll-triggered animations enhance user engagement and content discovery.</p>
</div>

<div style="flex: 1; min-width: 250px; padding: 10px;">
<h3>🗺️ Integrated Contact Solutions</h3>
<p>Google Maps integration, contact forms, and clear communication channels make it easy for clients to connect.</p>
</div>

</div>

---

## 🛠️ Planned Enhancements

<table>
<tr>
<td width="33%">
<h3>📊 Analytics Integration</h3>
<p>Google Analytics and performance monitoring for insights into user engagement and site performance.</p>
</td>
<td width="33%">
<h3>🔍 SEO Optimization</h3>
<p>Enhanced meta tags, structured data, and search engine optimization for better visibility.</p>
</td>
<td width="33%">
<h3>🌐 Multi-language Support</h3>
<p>Internationalization (i18n) support for French and English content delivery.</p>
</td>
</tr>
<tr>
<td width="33%">
<h3>📝 Content Management</h3>
<p>Headless CMS integration for easy content updates without code changes.</p>
</td>
<td width="33%">
<h3>📧 Enhanced Contact Forms</h3>
<p>Advanced form validation, email integration, and appointment scheduling capabilities.</p>
</td>
<td width="33%">
<h3>♿ Accessibility Features</h3>
<p>WCAG 2.1 compliance with screen reader support and keyboard navigation.</p>
</td>
</tr>
</table>

---

## 🌟 Site Structure

<details open>
<summary><b>Page Architecture</b></summary>

**Core Pages:**

- **Home** - Hero section with service overview and dynamic sliders
- **Approach** - Detailed psychopedagogy methodology and philosophy
- **School Support** - Personalized educational assistance programs
- **Learning Methods** - Innovative teaching and learning strategies
- **Brevet Prep** - Specialized preparation for French diploma exams
- **Pre-Rentrée** - Back-to-school preparation programs
- **About** - Professional background and qualifications
- **Contact** - Multiple contact options with Google Maps integration

**Technical Features:**

- Intersection Observer for scroll animations
- Dynamic routing with React Router
- Responsive image optimization
- CSS-in-JS styling with Tailwind

</details>

<div align="center">
  <img src="src/assets/site-structure.png" width="400" alt="Site Structure"/>
</div>

---

## 🎧 Assets & Resources

- **Images**: Optimized for web delivery with WebP format support
- **Icons**: React Icons library for consistent iconography
- **Fonts**: Modern typography with web-safe fallbacks
- **Animations**: Framer Motion for smooth, performant transitions

---

## 👨‍💻 Technical Architecture

<details>
<summary><b>Project Structure</b></summary>

```
src/
├── assets/              # Static images and resources
├── components/          # Reusable React components
├── pages/              # Route components
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

Key architectural decisions:

- **Component-based architecture** for reusability
- **Custom hooks** for state management
- **Intersection Observer** for performance-optimized animations
- **HashRouter** for static hosting compatibility

</details>

<details>
<summary><b>Performance Optimizations</b></summary>

- **Code splitting**: Dynamic imports for route-based splitting
- **Image optimization**: Lazy loading and responsive images
- **Bundle optimization**: Vite's tree-shaking and minification
- **Caching strategies**: Browser caching and CDN-ready assets
- **Animation performance**: GPU-accelerated transitions

</details>

---

## 🚀 Deployment

<details>
<summary><b>Hosting Options</b></summary>

**GitHub Pages (Recommended):**

```bash
npm run deploy
# Automatically deploys to GitHub Pages with custom domain support
```

**Netlify:**

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable automatic deployments

**Vercel:**

1. Import GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## </details>

## 🌟 Support & Maintenance

For technical support, updates, or customizations, please contact through the official website channels.

**Development Tools:**

- React DevTools for debugging
- Lighthouse for performance auditing
- Tailwind CSS IntelliSense for styling

<div align="center">

### Professional psychopedagogy services, beautifully presented! 🎓

</div>
