# 2x.ventures Visual QA Fixes - Summary

## Session Date: 2026-01-30

### Reference: Original site analyzed via CSS extraction and HTML inspection

---

## Fixes Made

### 1. Hero Section (`components/Hero.tsx`)
- **Gradient angle**: Changed from 165deg → **150deg** (matching original)
- **Gradient colors**: Updated to exact original: `#91a1df → #68b0cc (50%) → #68b0cc (65%) → #4d7fe8`
- **Height**: Changed from `min-h-[90vh]` → **`h-screen min-h-[660px]`** (exact original)
- **Background image**: Added `backdrop.png` (downloaded from original CDN) for the mountain/wave graphic
- **Removed SVG**: Deleted the SVG-based wave graphic in favor of the original background image
- **Text opacity**: Updated label and paragraph to `text-white/80` (original: opacity 0.8)
- **Letter spacing**: Corrected from 0.32em → **0.08em** (original: 1px ≈ 0.08em at 12px)
- **Paragraph font size**: Changed from `text-lg` → **`text-[20px]`** (original: 20px)
- **Link styling**: Changed to `border-b-2 border-dotted border-white` (original: dotted underline)

### 2. Header (`components/Header.tsx`)  
- **Padding**: Adjusted to `py-[20px] pb-[10px]` (original: 20px 20px 10px)
- **Logo height**: Set to 60px (original: 60px)
- **Nav link opacity**: Added `opacity-60 hover:opacity-90` (original: opacity 0.6)
- **Button styling**: Updated to `border-2 border-white opacity-80 bg-transparent` (original: 2px solid white, opacity 0.8)
- **Letter spacing**: Changed to `tracking-[0.08em]` (original: letter-spacing 1px)

### 3. Investment Focus (`components/InvestmentFocus.tsx`)
- **Padding**: Updated to `pt-0 pb-[60px]` with inner container padding
- **Text alignment**: Changed paragraphs to `text-left` (original: left-aligned)
- **Section heading**: Set to `text-[36px] leading-[50px]` (original: 36px/50px)
- **Label**: Updated tracking and opacity to match original

### 4. Portfolio (`components/Portfolio.tsx`)
- **Layout**: Changed to flex wrap (original: `.our-services-grid { display: flex; flex-wrap: wrap }`)
- **Logo filter**: Added `grayscale` filter (original: `filter: grayscale()`)
- **Opacity**: Set container to `opacity-70` (original: 0.7)
- **Font sizes**: Portfolio name: `text-[20px]` (original: 20px), description: `text-base`

### 5. Investment Criteria (`components/InvestmentCriteria.tsx`)
- **Background**: Updated to `#F6F7FA` (original: --white-smoke-2)
- **Border radius**: Set to `rounded-[10px]` (original: 10px)
- **Padding**: Updated to `py-[60px] px-[40px]` (original: 60px 40px)
- **List styling**: Changed to `list-none` with ➤ prefix (original format)

### 6. How It Works (`components/HowItWorks.tsx`)
- **Card borders**: Option 1 uses `#91a1df` (purple), Option 2 uses `#68b0cc` (teal/sky-blue)
- **Card styling**: Added `shadow-[0_2px_3px_rgba(0,0,0,0.15)]` (original box-shadow)
- **Layout**: Changed to flex with `justify-center gap-[30px]`
- **Card max-width**: Set to 320px (original: max-width 320px)

### 7. CTA Section (`components/CTA.tsx`)
- **Button color**: Changed to `bg-[#68b0cc]` (original: sky-blue #68b0cc)
- **Button padding**: Updated to `px-[35px] py-[16px]` (original: jumbo button padding)
- **Font size**: Set to `text-[14px]` (original: 14px)
- **Section margins**: Added `mx-[30px]` to match original section margins

### 8. Footer (`components/Footer.tsx`)
- **Link colors**: Changed to `#68b0cc` (original: sky-blue)
- **Heading font**: Set to `text-[16px] font-medium` (original: 16px, font-weight 500)
- **Layout**: Changed to `flex justify-around` (original: space-around)
- **Logo height**: Set to 75px (original: 75px image height)

---

## Assets Added
- `/public/backdrop.png` - Downloaded from original Webflow CDN (mountain/wave graphic)

---

## Remaining Considerations (Design Decisions Needed)

1. **Mobile responsive**: The fixes target desktop primarily (1440px). Mobile breakpoints may need separate review.
2. **Font rendering**: Original uses Webfont loader, Next.js uses next/font - slight rendering differences possible.
3. **Footer responsive**: On mobile, original stacks columns differently - may need adjustment.

---

## Build Status
✅ Build successful (Next.js 16.1.6, Turbopack)
✅ All routes generating correctly
