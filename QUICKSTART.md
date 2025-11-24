# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd ayham-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Your Portfolio

#### Update Personal Information
Edit `src/lib/data.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... update all fields
};
```

#### Add Your Projects
```typescript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    // ... add your projects
  },
];
```

#### Add Your CV
1. Place your CV PDF in `public/` folder
2. Name it `cv.pdf`
3. The download button will work automatically

## 📝 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run linter
```

## 🎨 Customization Tips

### Change Theme Colors
Edit `tailwind.config.ts` to modify:
- Primary color
- Background colors
- Border colors
- And more...

### Modify Sections
All page sections are in:
- `src/app/page.tsx` - Home page
- `src/app/projects/page.tsx` - Projects page
- `src/app/experience/page.tsx` - Experience page
- `src/app/about/page.tsx` - About page

### Update Components
Reusable components are in:
- `src/components/ui/` - Base UI components
- `src/components/sections/` - Layout components
- `src/components/cards/` - Card components

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

## 💬 Need Help?

Check the full README.md for detailed documentation.

---

**Happy Coding! 🎉**
