# 2x Ventures Project Files Reference

This document provides a detailed overview of all files in the 2x Ventures Next.js project.

## 📂 Directory Structure

```
2x-ventures/
├── app/
│   ├── apply/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── favicon.ico
│   └── next-env.d.ts
├── components/
│   ├── ApplyForm.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── InvestmentCriteria.tsx
│   ├── InvestmentFocus.tsx
│   └── Portfolio.tsx
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .env.example
├── .eslintrc.json
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.js
├── netlify.toml
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── SETUP.md
├── PROJECT_FILES.md (this file)
└── tsconfig.json
```

## 📄 File Descriptions

### App Router Pages & Layout

#### `app/layout.tsx`
- Root layout component wrapping all pages
- Imports and uses Header and Footer components
- Sets up metadata for SEO
- Configures Inter font from Google Fonts

#### `app/page.tsx`
- Homepage - imports and combines all homepage sections
- Uses App Router - no file-based routing needed
- Components included:
  - Hero
  - InvestmentFocus
  - Portfolio
  - InvestmentCriteria
  - HowItWorks
  - CTA

#### `app/apply/page.tsx`
- Application/contact page
- Sets page-specific metadata
- Imports ApplyForm component
- Displays form with intro text

#### `app/globals.css`
- Global Tailwind CSS imports (@tailwind directives)
- Base styles and resets
- Custom transitions and animations
- Form styling utilities
- Reduced motion preferences

#### `app/favicon.ico`
- Site favicon (Next.js default)

### Components

#### `components/Header.tsx`
- Sticky navigation header
- Logo/branding on left
- "Apply" button on right
- Links to home and apply page
- Uses Next.js Link component

#### `components/Footer.tsx`
- Multi-column footer
- Company description
- Quick links to sections
- Contact CTA
- Copyright information
- Responsive grid layout

#### `components/Hero.tsx`
- Large hero section with gradient background
- Main headline: "We buy and grow high potential brands"
- Subheading with description
- CTA button linking to apply page
- Full viewport height

#### `components/InvestmentFocus.tsx`
- Section describing the investment philosophy
- Main heading with centered text
- Two paragraphs explaining approach
- Clean, readable typography
- White background

#### `components/Portfolio.tsx`
- Portfolio grid showcasing 4 companies
- Grid layout (2 columns on desktop, 1 on mobile)
- Companies included:
  1. Brushbox - Oral care subscription
  2. Neverquit Apparel - Padded socks
  3. Goodbits - Newsletter curator
  4. Dayboard - Task management
- Cards with emoji icons, names, and descriptions
- Hover effects on cards

#### `components/InvestmentCriteria.tsx`
- Investment criteria section
- 5 bulleted points explaining investment requirements
- Criteria include:
  1. Proven products or self-serve B2B SaaS
  2. Predictable revenues up to 25k/mo
  3. Gross margins of 60%+
  4. At least 2 years operating history
  5. Established or growing categories
- Uses arrow (➤) bullets as per original design
- White background with readable spacing

#### `components/HowItWorks.tsx`
- "How It Works" section with 2 options
- Flexible partnership approach
- Two options displayed:
  1. Full Acquisition - with 🏢 icon
  2. Partnership - with 🤝 icon
- Card layout with descriptions
- Gray background section

#### `components/CTA.tsx`
- Call-to-action section
- Dark background (gray-900)
- Large centered text
- "Apply Now" button
- Links to /apply page

#### `components/ApplyForm.tsx`
- Contact form for applications
- **'use client'** - Client component for interactivity
- **Form Fields:**
  1. Full Name - text input (required)
  2. Email - email input (required)
  3. Investment Preference - radio buttons
     - Full Acquisition
     - Partnership
     - Not Sure
  4. Minimum Investment Amount - number input (required)
  5. Maximum Investment Amount - number input (required)
  6. Experience Description - textarea (required)
  7. Additional Information - textarea (optional)

- **Features:**
  - Netlify Forms integration (name="apply")
  - Honeypot spam protection (bot-field)
  - Form submission handling
  - Loading state during submission
  - Success message display
  - Form validation
  - TypeScript for type safety

- **Netlify Integration:**
  - Form name must match `netlify.toml` config
  - Honeypot field prevents spam
  - Submissions appear in Netlify dashboard

### Configuration Files

#### `netlify.toml`
- Netlify-specific configuration
- Build settings:
  - Command: `npm run build`
  - Publish directory: `.next`
  - Node version: 18
- Security headers configuration:
  - X-Frame-Options
  - X-Content-Type-Options
  - X-XSS-Protection
  - Referrer-Policy
- SPA redirects for Next.js routing

#### `next.config.js`
- Next.js configuration
- React strict mode enabled
- Compression enabled
- TypeScript support
- Image optimization settings
- Web formats (AVIF, WebP)

#### `tailwind.config.ts`
- Tailwind CSS configuration
- Default Next.js template configuration
- Can be customized for brand colors

#### `tsconfig.json`
- TypeScript compiler configuration
- Strict mode enabled
- Path aliases (@/* for imports)
- Next.js integration via plugin
- Supports ES2020 and DOM libraries

#### `postcss.config.mjs`
- PostCSS configuration
- Tailwind CSS and Autoprefixer plugins
- Generated by create-next-app

#### `package.json`
- Project metadata (name, version, private)
- **Scripts:**
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm start` - Start production server
  - `npm run lint` - Run ESLint
- **Dependencies:**
  - next: 16.1.6
  - react: 19.2.3
  - react-dom: 19.2.3
- **Dev Dependencies:**
  - TypeScript
  - Tailwind CSS
  - ESLint
  - Next.js ESLint config

#### `.gitignore`
- Ignores node_modules, .next build directory
- Ignores environment files
- Ignores IDE configurations (.vscode, .idea)
- Ignores OS files (.DS_Store)
- Ignores Netlify directory

#### `.eslintrc.json`
- ESLint configuration for Next.js
- Uses Next.js recommended rules
- Extends "next/core-web-vitals"

#### `.env.example`
- Example environment variables
- Documents available env vars
- Currently empty (no env vars needed)
- Rename to .env.local for local development

### Documentation Files

#### `README.md`
- Project overview
- Features list
- Tech stack explanation
- Getting started instructions
- Development commands
- Deployment instructions (Netlify)
- Responsive design info
- Security features
- Configuration file descriptions
- Contributing guidelines

#### `SETUP.md`
- Detailed setup instructions
- GitHub push instructions
- Netlify deployment options (3 methods)
- Netlify configuration details
- Environment variables info
- Local development instructions
- Project structure overview
- Troubleshooting guide
- Support resources

#### `PROJECT_FILES.md` (this file)
- Complete file reference
- Descriptions of all files
- Component purposes
- Configuration details

### Generated/Auto Files

#### `package-lock.json`
- Lock file for npm dependencies
- Ensures reproducible installs
- Generated by npm install

#### `next-env.d.ts`
- TypeScript definitions for Next.js
- Generated automatically
- Provides IDE autocomplete

#### `eslint.config.mjs`
- ESLint configuration (modern format)
- Generated by create-next-app

## 🎨 Responsive Design Classes

All components use Tailwind's responsive prefixes:
- `sm:` - Small screens (≥640px)
- `md:` - Medium screens (≥768px)
- `lg:` - Large screens (≥1024px)

Examples from components:
- `text-4xl sm:text-5xl lg:text-6xl` - Responsive text sizes
- `grid-cols-1 md:grid-cols-2` - Responsive grid columns
- `px-4 sm:px-6 lg:px-8` - Responsive padding

## 🔗 Component Dependencies

```
page.tsx
├── Hero
├── InvestmentFocus
├── Portfolio
├── InvestmentCriteria
├── HowItWorks
└── CTA

layout.tsx
├── Header
│   └── Link
├── main (children)
└── Footer
    └── Link

apply/page.tsx
└── ApplyForm
    └── useState (React hook)
```

## 🎯 Key Features Implemented

✅ Next.js 14 with App Router
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Responsive design (mobile/tablet/desktop)
✅ 6 main page sections on homepage
✅ Dedicated /apply page with form
✅ Netlify Forms integration
✅ Honeypot spam protection
✅ Success message after form submission
✅ Optimized production build
✅ ESLint configuration
✅ Security headers
✅ SEO-friendly metadata

## 📦 Build Artifacts

After running `npm run build`:
- `.next/` directory contains the optimized production build
- Pages are pre-rendered as static content
- This directory is deployed to Netlify (set as publish directory)

## 🚀 Deployment Ready

The project is fully configured for Netlify:
- ✅ `netlify.toml` configured
- ✅ Next.js optimized for Netlify
- ✅ Forms ready for Netlify handling
- ✅ Build command and publish directory specified
- ✅ Security headers configured
- ✅ Node version specified

---

All files are production-ready and follow Next.js best practices. The project can be deployed immediately to Netlify or any other Next.js-compatible hosting platform.
