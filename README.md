# 2x Ventures

A modern, responsive website for 2x Ventures built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Project Overview

This is a complete rebuild of the 2x Ventures website featuring:

- **Homepage** with hero section, investment focus, portfolio grid, investment criteria, and how it works sections
- **Apply Page** with a contact form integrated with Netlify Forms
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Modern Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Netlify Deployment** ready with form handling

## 📁 Project Structure

```
2x-ventures/
├── app/
│   ├── layout.tsx          # Root layout with header and footer
│   ├── page.tsx            # Homepage
│   ├── apply/
│   │   └── page.tsx        # Apply page
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── InvestmentFocus.tsx # Investment focus section
│   ├── Portfolio.tsx       # Portfolio grid (4 companies)
│   ├── InvestmentCriteria.tsx  # Investment criteria (5 points)
│   ├── HowItWorks.tsx      # How it works (2 options)
│   ├── CTA.tsx             # Call-to-action section
│   └── ApplyForm.tsx       # Application form with Netlify integration
├── public/                 # Static assets
├── netlify.toml            # Netlify configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── .gitignore              # Git ignore rules
```

## 🎨 Features

### Homepage Sections
1. **Hero** - Eye-catching headline with CTA
2. **Investment Focus** - Description of investment philosophy
3. **Portfolio** - Grid showcasing 4 portfolio companies (Brushbox, Neverquit Apparel, Goodbits, Dayboard)
4. **Investment Criteria** - 5 key criteria for investment
5. **How It Works** - 2 flexible options (Full Acquisition, Partnership)
6. **CTA Section** - Call-to-action with apply button

### Apply Page
- Full-featured contact form with validation
- Fields:
  - Full Name (required)
  - Email (required)
  - Investment Preference (radio buttons: Full Acquisition, Partnership, Not Sure)
  - Minimum Investment Amount (required)
  - Maximum Investment Amount (required)
  - Experience Description (required)
  - Additional Information (optional)
- Netlify Forms integration for spam protection (honeypot field)
- Success message after submission

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Netlify Forms** - Form submission and handling
- **Responsive Design** - Mobile-first approach

## 📦 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jtcchan/2x-ventures.git
cd 2x-ventures

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site in action.

### Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🚀 Deployment

### Netlify Deployment

This project is configured for Netlify deployment:

1. **Connect to GitHub**
   - Push code to GitHub: `https://github.com/jtcchan/2x-ventures`
   - Connect repository to Netlify

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

3. **Environment Variables**
   - No additional environment variables needed for basic functionality

4. **Form Handling**
   - Netlify Forms are automatically configured via the `netlify.toml` file
   - Form submissions are handled through Netlify's serverless functions

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

All components use Tailwind's responsive utilities for optimal viewing experience.

## 🔒 Security

- Security headers configured in `netlify.toml`
- Honeypot field protection against spam bots
- TypeScript for type safety
- Next.js built-in security features

## 📄 Configuration Files

### netlify.toml
Configures Netlify build process, functions, headers, and redirects.

### next.config.js
Next.js-specific configuration including image optimization and performance settings.

### tailwind.config.ts
Tailwind CSS configuration with custom theme settings.

### tsconfig.json
TypeScript compiler options and path aliases.

## 🤝 Contributing

To make changes:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -am 'Add feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

## 📞 Contact

For questions or support, visit the [Apply page](https://2x.ventures/apply).

## 📄 License

This project is proprietary software for 2x Ventures.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
