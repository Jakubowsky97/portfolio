# Portfolio Website

Modern, responsive portfolio website showcasing my work, skills, and professional journey as a Front-End / Full-Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, elegant design with smooth animations and transitions
- 🌓 **Dark Mode Support** - Automatic dark mode based on system preferences
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized** - Fast loading times with Next.js 16 and optimized images
- 🎭 **Interactive Animations** - Scroll-triggered animations and smooth transitions
- 🖼️ **Project Showcase** - Interactive project cards with image galleries
- 📊 **Progress Indicator** - Visual scroll progress bar
- 🔝 **Scroll to Top** - Smooth scroll back to top button
- 🎯 **Active Navigation** - Highlighted current section in navigation
- ♿ **Accessible** - Built with accessibility best practices

## 🚀 Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### Features & Libraries
- Custom scroll animations with Intersection Observer
- Image optimization with Next.js Image component
- Smooth scrolling navigation
- Glassmorphism effects
- Gradient animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jakubowsky97/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx          # Sticky navigation with active section
│   │   ├── ScrollToTop.tsx         # Scroll to top button
│   │   ├── ScrollAnimation.tsx     # Scroll-triggered animations
│   │   ├── AnimatedBackground.tsx  # Floating background elements
│   │   ├── Hero.tsx                # Hero section
│   │   ├── About.tsx               # About section
│   │   ├── Skills.tsx              # Technical skills
│   │   ├── Experience.tsx          # Work experience
│   │   ├── Projects.tsx            # Projects showcase
│   │   ├── Education.tsx           # Education section
│   │   ├── LanguagesAndInterests.tsx
│   │   ├── Footer.tsx              # Footer
│   │   ├── ProjectCard.tsx         # Reusable project card
│   │   ├── ProjectImage.tsx        # Image viewer with modal
│   │   ├── ExperienceCard.tsx      # Reusable experience card
│   │   ├── SectionHeader.tsx       # Section header component
│   │   └── SectionDivider.tsx      # Section divider
│   ├── globals.css                 # Global styles and animations
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Main page
├── public/                         # Static assets
│   ├── tripmate.png
│   ├── loslaseros.png
│   ├── bilgokart.png
│   └── astrocolony.png
├── cv.txt                          # CV content
└── README.md                       # This file
```

## 🎯 Key Components

### Navigation
- Smooth scroll to sections
- Active section highlighting
- Scroll progress indicator
- Responsive mobile menu

### Project Cards
- Interactive hover effects
- Image previews with full-page view
- Technology badges
- External links (GitHub, Live Demo)

### Animations
- Fade-in on scroll
- Smooth transitions
- Floating background elements
- Gradient text animations

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This portfolio is deployed on [Vercel](https://vercel.com) for optimal performance with Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Jakubowsky97/portfolio)

## 🎨 Design Features

- **Gradient Backgrounds** - Subtle animated gradients
- **Glassmorphism** - Modern frosted glass effects
- **Smooth Animations** - Intersection Observer-based animations
- **Responsive Typography** - Fluid typography that scales across devices
- **Color Scheme** - Indigo/Purple theme with dark mode support

## 📱 Mobile Optimization

- Touch-optimized interactions
- Disabled image expansion on mobile (better UX)
- Responsive grid layouts
- Mobile-first approach

## 🔧 Customization

To customize this portfolio for your own use:

1. Update personal information in `app/page.tsx` and components
2. Replace project images in `public/` folder
3. Modify color scheme in `app/globals.css`
4. Update CV content from `cv.txt`
5. Adjust animations and timing in component files

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jakub Mądry**

- 📧 Email: [jakubowskyy97@gmail.com](mailto:jakubowskyy97@gmail.com)
- 💼 LinkedIn: [jakub-mądry](https://www.linkedin.com/in/jakub-mądry-28b694267/)
- 🐙 GitHub: [@Jakubowsky97](https://github.com/Jakubowsky97)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Geist](https://vercel.com/font)

---

⭐ If you like this project, please give it a star!
