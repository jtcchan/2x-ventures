# 2x Ventures - Pixel Perfect Rebuild Spec

## Reference Screenshots
Located in `/reference-screenshots/`:
- `live-1.png` through `live-4.png` - Original site
- `staging-1.png`, `staging-2.png` - Current broken staging

## Critical Fixes Required

### 1. HERO SECTION (Most Important)

**Current (broken):** Plain white background, black text, two buttons
**Target:** 
- Full-width gradient background: `linear-gradient(135deg, #5BBFBA 0%, #4A90A4 50%, #3D5A80 100%)` (teal to blue)
- Decorative wave/mountain pattern at bottom with white dot markers
- White text throughout
- "MICRO PRIVATE EQUITY FOR DTC ECOMMERCE AND SAAS" - small caps, letter-spaced
- "We buy and grow high potential brands." - Large serif font (like Playfair Display), italic
- Subtext about growth marketing agency with underlined link
- NO "Apply Now" or "View Portfolio" buttons in hero

### 2. HEADER/NAVIGATION

**Current:** "Portfolio, Criteria, Apply" links
**Target:**
- Logo: "2x MICRO VENTURES" with stylized "2" icon (white on gradient hero)
- Nav links: "ABOUT US" (text link) + "APPLY NOW" (outlined button)
- Header should be transparent on hero, showing gradient through

### 3. TYPOGRAPHY

**Current:** All bold sans-serif
**Target:**
- Section labels: Small caps, gray, letter-spaced (e.g., "OUR INVESTMENT FOCUS")
- Section headlines: Serif font (Playfair Display or similar), italic
- Body text: Clean sans-serif (Inter or similar)

### 4. PORTFOLIO SECTION

**Current:** Bordered card layout
**Target:**
- "OUR PORTFOLIO" label (small caps, gray)
- Horizontal grid layout (3 across, 1 below)
- Each item: Icon + Company name + Description (no borders/cards)
- Companies: Brushbox, Neverquit Apparel, Goodbits, Dayboard

### 5. CRITERIA SECTION

**Current:** White background, left-aligned bullets
**Target:**
- Light gray background (#F8F9FA or similar)
- "OUR CRITERIA" label (small caps)
- "Finding a good fit" headline (serif, italic)
- Centered bullet list with ➤ markers
- Bullets should be centered, not left-aligned

### 6. HOW IT WORKS SECTION

**Current:** Full bordered cards
**Target:**
- "How it works" headline (serif, italic)
- Two side-by-side cards with ONLY top border (teal/cyan color)
- "OPTION 1: FULL ACQUISITION" / "OPTION 2: PARTNERSHIP" labels
- Clean, minimal card design

### 7. CTA SECTION (Next Steps)

**Current:** Black background
**Target:**
- Light gray background (#F8F9FA)
- "NEXT STEPS" label (small caps)
- "Interested to learn more?" headline (serif, italic)
- "APPLY TO INVEST" button (teal/cyan solid, ~#5BBFBA)
- "Have a general inquiry? Reach out to hello@2xcd.com" text below

### 8. FOOTER

**Current:** Different column structure
**Target:**
- Dark charcoal background (#1F2937 or similar)
- 2x logo (stylized, white/teal)
- Three columns:
  - COMPANY: About Us, Invest With Us, Our Agency (teal links)
  - OUR OFFICE: 2x Conversion Design Ltd., 450 S.W. Marine Dr, Marine Gateway 18th Floor, Vancouver BC V5X 0C3
  - GET IN TOUCH: hello@2xcd.com
- Copyright: © 2022 2x Ventures Ltd. All rights reserved.

## Color Palette

- Primary gradient start: #5BBFBA (teal)
- Primary gradient mid: #4A90A4 
- Primary gradient end: #3D5A80 (slate blue)
- Accent/buttons: #5BBFBA
- Light background: #F8F9FA
- Dark footer: #1F2937
- Text dark: #1F2937
- Text gray: #6B7280
- Text light: #FFFFFF

## Fonts

- Headlines: Playfair Display (serif, italic)
- Body/UI: Inter or system sans-serif
- Labels: Inter, small caps, letter-spaced

## Files to Modify

Primary files in `/app/` and `/components/`:
- `app/page.tsx` - Homepage
- `app/globals.css` - Global styles
- `components/Header.tsx`
- `components/Hero.tsx` - MAJOR changes needed
- `components/InvestmentFocus.tsx`
- `components/Portfolio.tsx`
- `components/InvestmentCriteria.tsx`
- `components/HowItWorks.tsx`
- `components/CTA.tsx`
- `components/Footer.tsx`

## Priority Order

1. Hero section (gradient + wave pattern + typography)
2. Header/navigation
3. Typography across all sections
4. Footer
5. Individual section styling
