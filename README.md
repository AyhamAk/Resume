# Ayham Klaani - Portfolio Website

A modern, responsive personal portfolio website built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalistic UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme toggle with persistent preference
- **Performance Optimized**: Fast loading with Next.js App Router
- **SEO Friendly**: Optimized meta tags and Open Graph support
- **Animated**: Smooth page transitions and scroll animations
- **Type Safe**: Built with TypeScript for reliability

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ayham-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
ayham-portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── experience/        # Experience page
│   │   ├── projects/          # Projects page
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form API
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # ShadCN UI components
│   │   ├── sections/          # Page sections (Navbar, Footer, etc.)
│   │   └── cards/             # Reusable card components
│   └── lib/
│       ├── utils.ts           # Utility functions
│       └── data.ts            # Portfolio data
├── public/                     # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit `src/lib/data.ts` to update:
- Personal info (name, title, bio, contact)
- Skills and technologies
- Work experience
- Projects
- Education and certifications

### Add Your CV

1. Place your CV PDF in the `public/` directory
2. Name it `cv.pdf`
3. The download button will work automatically

### Change Colors

Edit theme colors in `tailwind.config.ts` or `src/app/globals.css`

### Modify Components

All components are in `src/components/` and are fully customizable

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📧 Contact Form

The contact form is currently configured as a dummy API. To make it functional:

1. Choose an email service (SendGrid, Resend, AWS SES)
2. Update `src/app/api/contact/route.ts`
3. Add your API keys to environment variables

Example with Resend:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST handler:
await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'your@email.com',
  subject: `Contact from ${name}`,
  text: message,
});
```

## 🎯 Features Included

### Pages
- ✅ Home (Hero, About, Skills, Projects, Experience, Contact)
- ✅ Projects (with filtering)
- ✅ Experience (timeline view)
- ✅ About (full bio and skills)

### Components
- ✅ Responsive Navbar with theme toggle
- ✅ Footer with social links
- ✅ Project cards with hover effects
- ✅ Experience timeline
- ✅ Skill badges with progress bars
- ✅ Animated sections
- ✅ Contact form

### Features
- ✅ Dark/Light mode
- ✅ Smooth animations
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Type-safe with TypeScript
- ✅ Production-ready

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear the `.next` folder
   ```bash
   rm -rf .next
   ```

2. Clear node_modules and reinstall
   ```bash
   rm -rf node_modules
   npm install
   ```

3. Check Node.js version (should be 18+)
   ```bash
   node --version
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/)

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact: ayham.klaani@example.com

---

**Built with ❤️ by Ayham Klaani**
