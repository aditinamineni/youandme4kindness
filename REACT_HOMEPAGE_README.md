# You & Me For Kindness - React/Next.js Homepage

A modern, responsive nonprofit homepage built with **React**, **Next.js**, and **Tailwind CSS**. Featuring a warm, handmade creative aesthetic with smooth animations and accessible design.

## 🎨 Design Features

### Color Palette
- **Background**: `#F9F6F0` (Warm Ivory)
- **Primary Pink**: `#C8336B` (Deep Rose)
- **Accent Pink**: `#D94E7B` (Bright Rose)
- **Accent Yellow**: `#E8B11C` (Gold)
- **Dark Text**: `#2B2B2B` (Charcoal)
- **Muted Olive**: `#7A7A52`
- **Lavender**: `#B084CC`

### Typography
- **Headlines**: Playfair Display / Cormorant Garamond (Serif)
- **Body**: Inter / Poppins (Sans-serif)
- **Accents**: Caveat / Pacifico (Handwritten)

## 📁 Project Structure

```
you-and-me-for-kindness/
├── app/
│   ├── layout.jsx          # Root layout with fonts
│   ├── page.jsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   └── HomePage.jsx        # Main homepage component
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone repository (if applicable)
git clone https://github.com/aditinamineni/youandme4kindness.git
cd youandme4kindness

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the homepage.

## 📱 Features

### Navbar
- Sticky top navigation with gradient background
- Responsive mobile hamburger menu
- Shopping cart with item counter
- Yellow CTA "Contact" button
- 90px height on desktop

### Hero Section
- **Left Column**:
  - Large serif headline with yellow underline swoosh
  - Body paragraph with highlighted "empower" word
  - Call-to-action buttons
  
- **Right Column**:
  - Scrapbook-style collage with rotated image cards
  - Handwritten centered text overlay
  - Decorative doodles (stars, hearts, arrows)
  - Tape effect on image corners

### Responsive Design
- **Desktop**: 2-column layout with generous spacing
- **Tablet**: Maintains full features with adjusted sizing
- **Mobile**: Stacked layout, hamburger menu, optimized images

### Animations
- Hover scale effects on cards (110%)
- Smooth transitions (300ms ease)
- Bounce animations on decorative elements
- Floating animations on collage images

## 🛠️ Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  warmBg: '#F9F6F0',
  deepPink: '#C8336B',
  // ... other colors
}
```

### Typography
Fonts are configured in `app/layout.jsx` using Google Fonts.

### Components
Main components in `components/HomePage.jsx`:
- `Navbar` - Navigation bar
- `HeroSection` - Hero content
- `CollageSection` - Image collage
- `CollageCard` - Individual image card
- `Footer` - Footer section

## 🎯 Key Tailwind Classes

- `font-serif` - Serif typography
- `font-handwritten` - Handwritten style
- `rounded-full` - Pill-shaped buttons
- `shadow-lg` - Card shadows
- `hover:scale-110` - Scale effect
- `transition-all duration-300` - Smooth transitions

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Focus states on interactive elements
- Alt text support for images
- Keyboard navigation support

## 📊 Performance

- Optimized images with Next.js Image component
- CSS minification via Tailwind
- Font optimization with next/font
- Lazy loading support

## 🔧 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

Deploy to Vercel (recommended for Next.js):
```bash
npm install -g vercel
vercel
```

Or GitHub Pages, Netlify, etc.

## 📝 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Email**: [aditinamineni6@gmail.com](mailto:aditinamineni6@gmail.com)

**Organization**: You & Me For Kindness

## 📄 License

This project is for the You & Me For Kindness nonprofit organization.

---

**Built with ❤️ for empowerment and inclusion.**
