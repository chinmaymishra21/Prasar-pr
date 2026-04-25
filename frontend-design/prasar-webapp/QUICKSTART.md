# Quick Start Guide - Prasar Web App

## Get Up and Running in 3 Minutes

### 1. Install Dependencies
```bash
cd prasar-webapp
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
- Opens automatically at `http://localhost:3000`
- Hot reload enabled - changes appear instantly

### 3. Start Building!
- Edit files in `src/components/`
- See changes in real-time
- Full Framer Motion animations included

## What You Get

### ✨ Already Included:
- React 18 with Hooks
- Framer Motion (smooth animations)
- GSAP (advanced effects)
- Tailwind CSS (styling)
- Vite (ultra-fast dev server)
- Scroll progress indicator
- Mobile responsive design
- 8 complete sections

### 🎨 Design Features:
- Black/white/grey premium theme
- Sophisticated animations on scroll
- Hover effects on all interactive elements
- Animated counters and statistics
- Smooth page scrolling
- Mobile hamburger menu
- Animated portfolio grid
- Pricing cards with featured plan
- Testimonials section
- Call-to-action area
- Professional footer

## Project Structure

```
src/
  components/          # All React components
  ├── Navbar.jsx      # Navigation bar
  ├── Hero.jsx        # Hero section
  ├── Services.jsx    # Services grid
  ├── About.jsx       # About with stats
  ├── Portfolio.jsx   # Portfolio grid
  ├── Testimonials.jsx
  ├── Pricing.jsx     # Pricing tiers
  ├── CTA.jsx         # Call-to-action
  ├── Footer.jsx      # Footer
  └── ScrollProgress.jsx
  App.jsx             # Main component
  main.jsx            # Entry point
  index.css           # Global styles
```

## Key Files to Edit

### Change Content
- **Services** → `src/components/Services.jsx` (line 6-23)
- **Testimonials** → `src/components/Testimonials.jsx` (line 6-30)
- **Pricing** → `src/components/Pricing.jsx` (line 6-55)

### Change Colors
Edit `tailwind.config.js` color section

### Change Fonts
Edit Google Fonts link in `index.html`

## Common Tasks

### Add New Section
1. Create `src/components/NewSection.jsx`
2. Import in `App.jsx`
3. Add to main section

### Change Animation Speed
Edit `transition={{ duration: 0.6 }}`

### Add More Services
Edit `services` array in `Services.jsx`

## Available Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Features Tour

### Hero Section
- Animated title with staggered words
- Floating geometric shapes
- Bouncing scroll indicator

### Services
- 6 service cards
- Hover lift animation
- Icon animations

### About
- Animated stat counters
- Company story
- Animated background

### Portfolio
- 6-item grid
- Hover overlay reveals
- Image zoom effect

### Testimonials
- 3 client quotes
- Star rating animations
- Avatar styling

### Pricing
- 3-tier packages
- Featured "Growth" plan
- Animated pricing numbers

### CTA
- Gradient background
- Rotating decorative elements
- Dual button layout

### Footer
- Multi-column layout
- Social links
- Back-to-top button

## Tips for Best Results

1. **Test on Mobile** - Check responsive design
2. **Use Dev Tools** - F12 to debug
3. **Check Console** - No errors should appear
4. **Clear Cache** - Hard refresh if changes don't show
5. **Install All Dependencies** - Run `npm install` if errors occur

## Troubleshooting

### Port in use?
```bash
npm run dev -- --port 3001
```

### Animations not showing?
```bash
npm install framer-motion react-intersection-observer gsap
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Customize content in components
4. ✅ Update colors and fonts
5. ✅ Add your own sections
6. ✅ Deploy to Netlify/Vercel

## Deployment

### To Netlify:
```bash
npm run build
# Deploy the 'dist' folder
```

### To Vercel:
```bash
npm install -g vercel
vercel
```

## Need Help?

- Check `README.md` for detailed documentation
- Review component code for patterns
- Inspect elements in browser DevTools
- Check console for error messages

---

**You're all set! Start building your premium web app.** 🚀✨
