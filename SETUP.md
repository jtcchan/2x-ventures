# Setup Instructions for 2x Ventures

## 📋 Project Setup Summary

The complete 2x Ventures Next.js website has been built and is ready to deploy. This document explains how to push to GitHub and deploy to Netlify.

## 🔄 Push to GitHub

The project has been initialized with Git and a commit has been created. To push to the GitHub repository:

```bash
# Navigate to the project directory (if not already there)
cd 2x-ventures

# Verify the remote is configured
git remote -v

# Push to GitHub
git push -u origin main
```

### If you haven't set up GitHub access yet:

1. **Generate a Personal Access Token** (recommended over password):
   - Go to https://github.com/settings/tokens
   - Click "Generate new token"
   - Select scopes: `repo`, `workflow`
   - Copy the token

2. **Configure Git with Token**:
   ```bash
   # Option A: Use credential manager (recommended)
   git config --global credential.helper store
   git push -u origin main
   # When prompted, use your GitHub username and the token as password

   # Option B: Use SSH (if you have SSH key configured)
   git remote set-url origin git@github.com:jtcchan/2x-ventures.git
   git push -u origin main
   ```

## 🚀 Deploy to Netlify

### Option 1: Connect GitHub Repository (Recommended)

1. **Go to Netlify** (https://netlify.com)
2. **Sign in** with your GitHub account
3. **Click "New site from Git"**
4. **Select GitHub** as the provider
5. **Authorize Netlify** to access your GitHub account
6. **Select the repository**: `jtcchan/2x-ventures`
7. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 (set in netlify.toml)

8. **Click "Deploy site"**

Netlify will automatically:
- Build the Next.js project
- Deploy to production
- Set up automatic deployments on Git pushes
- Handle form submissions via Netlify Forms

### Option 2: Deploy from Local Directory

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from the project directory
cd 2x-ventures
netlify deploy --prod
```

### Option 3: Drag and Drop Deploy

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Go to https://app.netlify.com/drop
3. Drag and drop the `.next` directory
4. Your site will be deployed instantly

## 📝 Netlify Configuration

The `netlify.toml` file includes:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **Redirects**: SPA routing configuration

## 🔐 Environment Variables (If Needed)

Currently, no environment variables are required. The form submission is handled entirely by Netlify Forms.

If you need to add custom domains or analytics:

1. Go to Netlify Dashboard → Site Settings → Build & Deploy
2. Add environment variables as needed
3. Re-deploy the site

## ✅ After Deployment

1. **Verify the site is live**:
   - Check the Netlify dashboard
   - Visit your site URL (typically `[site-name].netlify.app`)

2. **Test the form**:
   - Navigate to `/apply`
   - Fill out the form and submit
   - Verify submission appears in Netlify Forms dashboard

3. **Custom domain** (optional):
   - Go to Site Settings → Domain management
   - Add your custom domain
   - Configure DNS records

4. **HTTPS**: Automatically enabled and renewed by Netlify

## 🧪 Local Development

To test the site locally before deploying:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000 in your browser
```

## 📂 Project Structure

```
2x-ventures/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── apply/
│   │   └── page.tsx        # Apply page
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/             # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── InvestmentFocus.tsx
│   ├── Portfolio.tsx
│   ├── InvestmentCriteria.tsx
│   ├── HowItWorks.tsx
│   ├── CTA.tsx
│   └── ApplyForm.tsx
├── public/                 # Static assets
├── netlify.toml            # Netlify config
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
├── README.md               # Project docs
└── SETUP.md                # This file
```

## 🐛 Troubleshooting

### Build fails on Netlify
- Check that all dependencies are in `package.json`
- Verify Node version is 18+ (set in `netlify.toml`)
- Check build logs in Netlify dashboard

### Form not submitting
- Verify the form name is `apply` (must match in netlify.toml)
- Check that form has `method="POST"`
- Look for honeypot field `bot-field` (for spam protection)
- Check Netlify Forms dashboard for submissions

### Site looks broken after deploy
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that `.next` is the publish directory
- Verify all assets are in `public/` folder

## 📞 Support

For issues or questions:
1. Check Netlify documentation: https://docs.netlify.com
2. Check Next.js documentation: https://nextjs.org/docs
3. Check the README.md file for more details

## 🎉 Success!

Once deployed, your 2x Ventures website will be live with:
- ✅ Homepage with all sections
- ✅ Apply page with form
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Netlify Forms integration
- ✅ Automatic form submissions
- ✅ Production-ready performance

Enjoy your new website! 🚀
