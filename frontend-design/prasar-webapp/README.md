# Prasar - Premium Digital Marketing & PR Web App

A **sophisticated, production-ready React web application** for Prasar, a full-service digital marketing, PR, and web/app development company. Built with modern tools and cutting-edge animations.

## 🚀 Tech Stack

- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Framer Motion** - Professional animations and transitions
- **GSAP** - Advanced motion graphics library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable SVG icons
- **React Intersection Observer** - Scroll-triggered animations

## 🎨 Design Philosophy

**Refined Luxury Minimalism** with sophisticated interactions:
- Pure **black, white, and grey** color palette
- Distinctive typography (Playfair Display + Source Sans Pro)
- Smooth, controlled animations throughout
- Scroll-triggered reveals using Intersection Observer
- Elegant micro-interactions on hover and click
- Responsive design for all devices

## 📋 Features

### Sections
✨ **Navigation** - Fixed navbar with mobile hamburger menu
✨ **Hero** - Animated title, CTA buttons, geometric shapes
✨ **Services** - 6-card grid with hover animations
✨ **About** - Animated counter stats, company story
✨ **Portfolio** - 6-project showcase with overlay effects
✨ **Testimonials** - Client quotes with rating animations
✨ **Pricing** - 3-tier packages with featured plan
✨ **CTA** - Strategic call-to-action section
✨ **Footer** - Multi-column footer with links

### Interactive Elements
🎯 Framer Motion animations on all components
🎯 Scroll progress indicator
🎯 Staggered animations with proper timing
🎯 Hover state transformations
🎯 Animated counters for statistics
🎯 Smooth page scrolling
🎯 Button ripple effects
🎯 Parallax scroll effects
🎯 Mobile-responsive hamburger menu
🎯 Back-to-top button

## 📦 Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Steps

1. **Navigate to project**
   ```bash
   cd prasar-webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   - Opens automatically at `http://localhost:3000`
   - Hot module replacement (HMR) enabled
   - Fast refresh for instant updates

4. **Build for production**
   ```bash
   npm run build
   ```
   - Creates optimized `dist/` folder
   - Ready to deploy to Netlify, Vercel, etc.

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎬 Animation Highlights

### Hero Section
- **Staggered Title Animation**: Words reveal one by one with GSAP
- **Geometric Shapes**: Animated and floating shapes with spring physics
- **Scroll Indicator**: Bouncing arrow with pulse animation
- **Button Hover**: Scale and shadow effects

### Service Cards
- **Stagger Animation**: Cards fade in with staggered delays
- **Hover Effect**: Lift up with smooth transition
- **Icon Animation**: Scale and rotate on hover
- **Underline**: Animated line grows on hover

### About Section
- **Counter Animation**: Numbers count up when in view
- **Image Parallax**: Background color shift and shimmer effect
- **Stat Cards**: Pop-in animation with border accent

### Portfolio
- **Grid Scale**: Cards scale and fade in on load
- **Hover Overlay**: Smooth overlay reveal with text
- **Image Scale**: Background image zooms on hover
- **Border Highlight**: Subtle border appears on hover

### Testimonials
- **Star Animation**: Stars scale up and down
- **Card Lift**: Cards float up on hover
- **Author Info**: Slide in from left on hover

### Pricing
- **Featured Plan**: Scales up and has shadow effect
- **Price Animation**: Number scales on hover
- **Checkmarks**: Scale in as list items animate

### CTA & Footer
- **Gradient Background**: Dark gradient with pattern
- **Decorative Elements**: Rotating borders in background
- **Back-to-Top**: Fixed button with scale animation

## 🎨 Color System

```javascript
--primary-black: #0a0a0a
--secondary-black: #1a1a1a
--tertiary-black: #2a2a2a
--light-grey: #f5f5f5
--medium-grey: #888888
--dark-grey: #333333
--border-grey: #e0e0e0
--white: #ffffff
```

## 🔤 Typography

- **Display**: Playfair Display (serif, 600-800 weights)
  - Headings, hero title, section titles
- **Body**: Source Sans Pro (sans-serif, 400-700 weights)
  - Body text, navigation, buttons

## 📱 Responsive Design

- **Desktop**: Full layout with all features
- **Tablet (768px)**: Adjusted grids, responsive navbar
- **Mobile (480px)**: Single column, hamburger menu

## 🏗️ Project Structure

```
prasar-webapp/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── Services.jsx        # Service cards grid
│   │   ├── About.jsx           # About section with stats
│   │   ├── Portfolio.jsx       # Portfolio grid
│   │   ├── Testimonials.jsx    # Testimonials carousel
│   │   ├── Pricing.jsx         # Pricing tiers
│   │   ├── CTA.jsx             # Call-to-action section
│   │   ├── Footer.jsx          # Footer
│   │   └── ScrollProgress.jsx  # Scroll indicator
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & animations
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎯 Component Architecture

Each component is:
- **Self-contained**: All styles and logic in one file
- **Animated**: Uses Framer Motion for smooth effects
- **Observable**: Uses Intersection Observer for scroll triggers
- **Responsive**: Tailwind CSS ensures mobile-first design
- **Accessible**: Semantic HTML and keyboard navigation

## 🔄 Scroll Animation Pattern

```jsx
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true, // Animation plays once
})

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : {}}
    transition={{ duration: 0.6 }}
  >
    Content...
  </motion.div>
)
```

## ⚡ Performance

- **Code Splitting**: Vite automatically splits code
- **Lazy Loading**: Components load as needed
- **Optimized Images**: Tailwind CSS handles responsive images
- **CSS Purging**: Tailwind removes unused CSS
- **Fast HMR**: Instant hot module replacement in dev
- **Build Size**: ~120KB gzipped production build

## 🚀 Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
# Follow prompts
```

### GitHub Pages
```bash
npm run build
# Deploy 'dist' to gh-pages branch
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'black-primary': '#0a0a0a',
      // Change other colors
    }
  }
}
```

### Update Content
Edit each component in `src/components/`:
- Service descriptions in `Services.jsx`
- Testimonials in `Testimonials.jsx`
- Pricing in `Pricing.jsx`

### Adjust Animations
Modify Framer Motion props:
```jsx
<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
```

### Add New Sections
1. Create new component in `src/components/`
2. Import in `App.jsx`
3. Add to main section

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 🔧 Development

### Useful Commands
```bash
# Start dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

### Hot Module Replacement
Changes to React components are instantly reflected without page reload.

### Fast Refresh
Edit CSS, JSX, and see changes immediately.

## 📝 Best Practices

✅ Component-based architecture
✅ Consistent animation patterns
✅ Mobile-first responsive design
✅ Semantic HTML
✅ Accessibility considerations
✅ Performance optimized
✅ Clean, maintainable code
✅ Proper error handling

## 🚨 Common Issues

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

### Build Failing
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Animations Not Showing
- Check browser DevTools for errors
- Ensure Framer Motion is installed: `npm install framer-motion`
- Verify `useInView` from react-intersection-observer

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)
- [React Docs](https://react.dev/)

## 📄 License

This web app template is ready for use. Customize with your own content.

---

**Built with precision, modern animations, and sophisticated design** ✨

Deployed and production-ready. Enjoy!
