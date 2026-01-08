# Full Stack Developer & DevOps Engineer Portfolio

A modern, cutting-edge portfolio website showcasing full-stack development and DevOps expertise. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion with advanced animations and modern design patterns.

## ✨ Features

### Design & UI
- 🎨 **Modern Dark Theme** - Industry-standard dark color scheme with purple/cyan gradients
- 💎 **Glassmorphism Effects** - Frosted glass UI elements with backdrop blur
- 🌈 **Gradient Text & Backgrounds** - Animated gradients throughout the design
- 🎭 **Advanced Animations** - Smooth scroll-triggered animations using Framer Motion
- ✨ **Particle Background** - Interactive particle system in the hero section
- 🎯 **3D Hover Effects** - Transform animations on cards and buttons
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)

### Technical Features
- 🚀 **Next.js 14** with App Router and TypeScript
- 💅 **Tailwind CSS** with custom gradient utilities
- ✨ **Framer Motion** for advanced animations
- 🎨 **Custom Animations** - Floating elements, gradient animations, scroll triggers
- 📄 **Resume Section** - Professional experience timeline and education
- 💼 **Project Showcase** - Featured projects with gradient cards
- 📧 **Contact Form** - Modern form with validation
- 🎭 **Particle System** - Canvas-based particle background

### Sections

1. **Hero** - Stunning introduction with particle background, animated gradients, and call-to-action
2. **About** - Personal background with feature cards and modern layout
3. **Skills** - Comprehensive skill showcase with animated progress bars:
   - Frontend Development (React, Next.js, TypeScript, JavaScript)
   - Backend Development (Node.js, Express, Python)
   - Database & Caching (MongoDB, PostgreSQL, Redis)
   - DevOps & Cloud (Docker, Kubernetes, AWS, Terraform, Jenkins, GitHub Actions)
4. **Projects** - Featured projects with gradient headers and hover effects
5. **Resume** - Work experience timeline, education, and certifications
6. **Contact** - Contact form and social links with glassmorphism design
7. **Footer** - Footer with social links and copyright

## 🎨 Color Scheme

The portfolio uses a modern purple/cyan gradient color palette:
- **Primary**: Purple (#a855f7) to Pink gradient
- **Accent**: Cyan (#06b6d4) to Blue gradient
- **Background**: Dark slate (slate-900)
- **Text**: White with gray variants for hierarchy

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update social media links
   - Modify the introduction text
   - Customize particle system if needed

2. **About Section** (`components/About.tsx`):
   - Customize your bio and journey
   - Update feature cards

3. **Skills Section** (`components/Skills.tsx`):
   - Adjust skill levels (percentages)
   - Add or remove technologies
   - Customize gradient colors for each category

4. **Projects Section** (`components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Update GitHub and demo links
   - Customize gradient colors for each project

5. **Resume Section** (`components/Resume.tsx`):
   - Update work experience
   - Modify education details
   - Add your certifications

6. **Contact Section** (`components/Contact.tsx`):
   - Update email, phone, and location
   - Add your social media links
   - Connect form to backend (currently uses alert)

### Adding a Resume PDF

1. Create a PDF resume file
2. Place it in the `public` folder as `resume.pdf`
3. The download button will automatically link to it

### Styling & Colors

Customize colors in `tailwind.config.js`:

```js
colors: {
  primary: {
    // Your custom purple color palette
  },
  accent: {
    // Your custom cyan color palette
  },
}
```

Custom utility classes are defined in `app/globals.css`:
- `.glass` - Glassmorphism effect
- `.glass-strong` - Stronger glassmorphism
- `.gradient-text` - Animated gradient text
- `.gradient-text-static` - Static gradient text
- `.glow` - Glow effect
- `.hover-glow` - Hover glow effect

### Animations

Animations are powered by Framer Motion. Customize animations in component files:
- Scroll-triggered animations use `whileInView`
- Hover effects use `whileHover`
- Page transitions use `initial` and `animate`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deployment

This portfolio can be deployed on:

- **Vercel** (recommended for Next.js) - One-click deployment
- **Netlify** - Great for static exports
- **AWS Amplify** - Full CI/CD integration
- **GitHub Pages** - With static export

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy with one click - Vercel automatically detects Next.js

### Environment Variables

Create a `.env.local` file in the root directory for email functionality:

```bash
# Resend API Key for contact form
# Get your free API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here
```

**Setting up Email Functionality:**

1. Sign up for a free account at [Resend](https://resend.com) (100 emails/day free tier)
2. Get your API key from the [API Keys page](https://resend.com/api-keys)
3. Create `.env.local` file in the root directory
4. Add your Resend API key: `RESEND_API_KEY=re_your_api_key_here`
5. Restart your development server

**Note:** Without the API key, the form will still work in development mode (logs to console) but won't send actual emails. For production, you must set the `RESEND_API_KEY` environment variable.

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Canvas**: Native HTML5 Canvas (for particles)

## 🎨 Design Features

- **Glassmorphism**: Modern frosted glass effects
- **Gradient Animations**: Smooth color transitions
- **Particle System**: Interactive background particles
- **3D Transforms**: Hover effects with scale and rotation
- **Scroll Animations**: Elements animate on scroll
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Modern dark color scheme

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Update the contact information in `components/Contact.tsx` with your details.

---

Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion

**Showcase your skills with style!** 🚀