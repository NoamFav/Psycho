# Séverine Favier - Psychopédagogue Website

A modern, animated, responsive website built with React and Vite to showcase Séverine Favier's psychopedagogy services. Features smooth animations, floating elements, and elegant design focused on usability and professional presentation.

## ✨ Features

- **🎨 Modern Animated UI** - Floating backgrounds with dynamic transitions and smooth fade-in animations
- **🗺️ Multi-Page SPA** - Built with React Router DOM (HashRouter) for seamless navigation
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **⚡ Dynamic Content** - Interactive image sliders and animated components
- **🛠️ Custom Animations** - Intersection Observer-based animations and Framer Motion integration
- **📚 Comprehensive Pages**:
  - Home with hero section and services overview
  - Psychopedagogy Approach
  - Personalized School Support
  - Learning Methodologies
  - Brevet Preparation
  - Pre-Rentrée Programs
  - About (Qui suis-je)
  - Contact with Google Maps integration

## 🚀 Tech Stack

- **React 18+** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions
- **React Icons** - Comprehensive icon library
- **React Intersection Observer** - Scroll-based animations

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/severine-psychopedagogue-site.git

# Navigate to project directory
cd severine-psychopedagogue-site

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server with Vite
npm run build        # Build for production
npm run build:data   # Process TOML data to JSON
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
npm run predeploy    # Pre-deployment build
npm run deploy       # Deploy to GitHub Pages
```

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, and static assets
├── components/      # Reusable React components
│   ├── Menu.jsx     # Navigation component
│   ├── FloatingElements.jsx
│   └── AnimatedCard.jsx
├── pages/           # Route components
├── styles/          # CSS and Tailwind configurations
├── App.jsx          # Main application with routing
└── main.jsx         # Vite entry point
```

## 🌐 Deployment

This application uses HashRouter for compatibility with static hosting services.

### GitHub Pages
```bash
npm run deploy
```

### Other Static Hosts (Netlify, Vercel, etc.)
```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

## 🎨 Customization

### Assets
Replace images in `/src/assets/` directory with your own content while maintaining the same file structure.

### Styling
- Modify colors and themes through Tailwind CSS classes
- Update animations in Framer Motion components
- Customize responsive breakpoints in `tailwind.config.js`

### Content
- Pages are structured as functional React components for easy modification
- Update text content directly in component files
- Add new routes in `App.jsx`

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - TailwindCSS configuration
- `eslint.config.js` - ESLint rules and settings
- `postcss.config.js` - PostCSS and Autoprefixer setup

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers with modern JavaScript support

## 🤝 Contributing

This is a private project for Séverine Favier's professional website. Contributions are not currently accepted.

## 📄 License

This project is private and proprietary. Not intended for commercial redistribution or reuse.

## 📞 Contact

For questions about this website, please contact through the official channels provided on the live site.

---

*Built with ❤️ for professional psychopedagogy services*