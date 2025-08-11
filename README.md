# Hritabrata Das - Portfolio

A retro-styled portfolio website built with React, Vite, and TailwindCSS, featuring a 90s/early-2000s computer interface aesthetic.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.10.16-black?logo=framer)

## 🎨 Features

- **Retro 90s/2000s Theme**: Pixel-art inspired design with old operating system aesthetics
- **Dark/Light Mode**: Toggle between themes with retro-styled switches
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Single Page Application**: Smooth scrolling between sections
- **Interactive Elements**: Hover effects, retro cursors, and animated components

## 🚀 Sections

1. **Hero**: Introduction with animated elements and social links
2. **About**: Personal information and achievements
3. **Skills**: Technical skills with proficiency indicators
4. **Projects**: Featured projects with GitHub links
5. **Education**: Academic background and achievements
6. **Certifications**: Professional certifications and badges
7. **Contact**: Contact form and information

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 5.2.0
- **Styling**: TailwindCSS 3.4.17
- **Animations**: Framer Motion 11.10.16
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hrick-08/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deploy

### Local Build
```bash
npm run build
```

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select `gh-pages` branch
   - Save

Your portfolio will be available at: `https://hrick-08.github.io/portfolio`

## 🎨 Customization

### Colors
The retro theme uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  retro: {
    beige: '#F5F5DC',
    'dusty-pink': '#E8B4B8',
    'muted-blue': '#B8D4E3',
    cream: '#FFFDD0',
    'light-brown': '#D2B48C',
    // ... dark variants
  }
}
```

### Fonts
- **Pixel Font**: "Press Start 2P" for headings and buttons
- **Retro Font**: "VT323" for retro-style text
- **Body Font**: "Inter" for readable content

### Components
All components are located in `src/components/` and follow a consistent retro styling pattern:

- `retro-window`: Main container with title bar
- `retro-button`: Styled buttons with hover effects
- `retro-card`: Content cards with borders and shadows
- `retro-badge`: Skill and technology badges

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: SVG icons and optimized assets
- **Minimal Dependencies**: Only essential packages included
- **Fast Build**: Vite for rapid development and building

## 🔧 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills and technologies
│   ├── Projects.jsx    # Featured projects
│   ├── Education.jsx   # Education background
│   ├── Certifications.jsx # Certifications
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer with links
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles and Tailwind
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Retro Theme Elements

### UI Components
- **Window/Dialog Boxes**: Title bars with control buttons
- **Chunky Buttons**: Thick borders and drop shadows
- **Pixel Borders**: Sharp, defined edges
- **Retro Cursors**: Custom cursor styles
- **Loading Bars**: Blocky progress indicators
- **Speech Bubbles**: Message containers

### Animations
- **Window Opening**: Scale and fade effects
- **Hover States**: Color inversions and translations
- **Scroll Animations**: Staggered element reveals
- **Micro-interactions**: Button presses and form interactions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: hritabratadas8@gmail.com
- **GitHub**: [@Hrick-08](https://github.com/Hrick-08)
- **LinkedIn**: [Hritabrata Das](https://linkedin.com/in/hritabrata-das-913460326/)

---

Made with ❤️ using React, Vite, and TailwindCSS
