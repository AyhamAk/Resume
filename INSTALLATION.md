# Complete Installation & Setup Guide

## 📋 What You've Got

A fully functional, production-ready portfolio website with:

### ✅ Features Implemented
- **4 Pages**: Home, Projects, Experience, About
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Mode**: Theme toggle with persistent preference
- **Smooth Animations**: Framer Motion animations throughout
- **Contact Form**: Working contact form with API endpoint
- **SEO Optimized**: Meta tags and Open Graph support
- **Type-Safe**: Full TypeScript implementation
- **Modern UI**: ShadCN UI components with TailwindCSS

### 📦 Technologies Used
- Next.js 16 (App Router)
- TypeScript
- TailwindCSS 3
- ShadCN UI
- Framer Motion
- next-themes (Dark mode)
- Lucide React (Icons)

## 🛠 Installation Steps

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Step 1: Navigate to Project
```bash
cd ayham-portfolio
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages (~448 packages).

### Step 3: Start Development Server
```bash
npm run dev
```

The site will be available at: http://localhost:3000

### Step 4: Build for Production
```bash
npm run build
```

### Step 5: Run Production Build
```bash
npm start
```

## 📁 Project Structure

```
ayham-portfolio/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── page.tsx                  # Home page (Hero, About, Skills, Projects, Experience, Contact)
│   │   ├── about/page.tsx            # About page
│   │   ├── projects/page.tsx         # Projects page with filtering
│   │   ├── experience/page.tsx       # Experience timeline
│   │   ├── api/contact/route.ts      # Contact form API
│   │   ├── layout.tsx                # Root layout with Navbar & Footer
│   │   └── globals.css               # Global styles & theme variables
│   │
│   ├── components/
│   │   ├── ui/                       # ShadCN UI base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   └── textarea.tsx
│   │   │
│   │   ├── sections/                 # Layout components
│   │   │   ├── Navbar.tsx           # Sticky navbar with theme toggle
│   │   │   ├── Footer.tsx           # Footer with social links
│   │   │   ├── AnimatedSection.tsx  # Reusable animated wrapper
│   │   │   └── SocialButtons.tsx    # Social media buttons
│   │   │
│   │   └── cards/                    # Card components
│   │       ├── ProjectCard.tsx      # Project display card
│   │       ├── SkillBadge.tsx       # Skill badge with progress
│   │       └── ExperienceTimeline.tsx # Timeline item
│   │
│   ├── lib/
│   │   ├── utils.ts                  # Utility functions (cn)
│   │   └── data.ts                   # Portfolio data (CUSTOMIZE THIS!)
│   │
│   └── theme-provider.tsx            # Theme provider wrapper
│
├── public/                            # Static assets
│   └── README.md                     # Instructions for adding CV
│
├── tailwind.config.ts                # Tailwind configuration
├── postcss.config.mjs                # PostCSS configuration
├── tsconfig.json                     # TypeScript configuration
├── next.config.ts                    # Next.js configuration
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Git ignore file
├── package.json                      # Dependencies
├── README.md                         # Full documentation
├── QUICKSTART.md                     # Quick start guide
└── INSTALLATION.md                   # This file
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `src/lib/data.ts`:

```typescript
export const personalInfo = {
  name: "Ayham Klaani",           // Change to your name
  title: "Full-Stack Developer",   // Change to your title
  email: "your.email@example.com", // Change to your email
  github: "https://github.com/...", // Change to your GitHub
  linkedin: "https://linkedin.com/in/...", // Change to your LinkedIn
  bio: "Your bio here...",         // Change to your bio
  languages: ["Language 1", "Language 2"], // Your languages
};
```

### 2. Add Your Skills

```typescript
export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    // Add your skills with proficiency level (0-100)
  ],
  backend: [
    { name: "Node.js", level: 85 },
    // Add your backend skills
  ],
  // ... add more categories
};
```

### 3. Add Your Projects

```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo.com",
    category: "Web Development",
  },
  // Add more projects
];
```

### 4. Add Your Experience

```typescript
export const experience = [
  {
    id: 1,
    title: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Jan 2024 – Present",
    type: "Full-time",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
    ],
    technologies: ["Tech1", "Tech2"],
  },
  // Add more experiences
];
```

### 5. Add Your CV

1. Export your CV as PDF
2. Place it in `public/` folder
3. Rename it to `cv.pdf`
4. The download button will work automatically

### 6. Change Theme Colors

Edit `src/app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Change primary color (HSL) */
  --background: 0 0% 100%;      /* Background color */
  /* ... modify other colors */
}
```

Or edit `tailwind.config.ts` for more control.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Your site will be live in minutes!

### Deploy to Other Platforms

The site can also be deployed to:
- **Netlify**: Import from Git and deploy
- **AWS Amplify**: Connect repository and deploy
- **Railway**: Deploy from GitHub
- **Render**: Connect and deploy

## 📧 Configure Contact Form

The contact form currently logs to console. To make it functional:

### Option 1: Use Resend (Recommended)

```bash
npm install resend
```

Update `src/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: 'your@email.com',
    subject: `Contact from ${name}`,
    text: message,
  });

  return NextResponse.json({ success: true });
}
```

### Option 2: Use SendGrid, AWS SES, or Nodemailer

Install and configure your preferred email service.

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Dependencies Issue

```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

## 📚 Documentation

- **Full README**: See `README.md` for detailed documentation
- **Quick Start**: See `QUICKSTART.md` for fast setup
- **Next.js Docs**: https://nextjs.org/docs
- **TailwindCSS Docs**: https://tailwindcss.com/docs
- **ShadCN UI**: https://ui.shadcn.com

## ✅ Verification Checklist

After installation, verify:

- [ ] Development server runs (`npm run dev`)
- [ ] All pages load (Home, Projects, Experience, About)
- [ ] Theme toggle works (Dark/Light mode)
- [ ] Navigation works (Desktop & Mobile)
- [ ] Contact form submits (check console)
- [ ] Production build succeeds (`npm run build`)
- [ ] All animations work smoothly

## 🎉 You're Ready!

Your portfolio website is fully set up and ready to customize.

**Next Steps:**
1. Update `src/lib/data.ts` with your information
2. Add your CV to `public/cv.pdf`
3. Customize colors and styles
4. Deploy to Vercel or your preferred platform

---

**Need Help?** Open an issue or contact: ayham.klaani@example.com
