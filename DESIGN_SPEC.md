# 2x Ventures - Design Specification

## Color Palette

### Primary Colors
- **Primary Black**: `#000000` (Main text, headers, CTAs)
- **Accent Blue**: `#0066FF` (Links, hover states, highlights)
- **Neutral White**: `#FFFFFF` (Backgrounds)

### Neutral Colors
- **Gray-50**: `#FAFAFA` (Light backgrounds)
- **Gray-100**: `#F3F3F3` (Subtle backgrounds)
- **Gray-200**: `#E5E5E5` (Borders, dividers)
- **Gray-300**: `#D4D4D4` (Disabled states)
- **Gray-600**: `#666666` (Secondary text)
- **Gray-700**: `#444444` (Body text)
- **Gray-900**: `#1F1F1F` (Headings)

### Semantic Colors
- **Success**: `#10B981` (Status, confirmations)
- **Warning**: `#F59E0B` (Alerts, cautions)
- **Error**: `#EF4444` (Errors, destructive actions)

---

## Typography

### Font Family
- **Primary**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
- **Fallback**: System fonts (platform native rendering)

### Type Scales

| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| H1 (Hero) | 48px (mobile: 36px) | Bold (700) | 1.2 | -0.02em |
| H2 (Section) | 36px (mobile: 28px) | Bold (700) | 1.3 | -0.01em |
| H3 (Subsection) | 24px (mobile: 20px) | Semibold (600) | 1.4 | 0 |
| Body Large | 18px | Regular (400) | 1.6 | 0.25px |
| Body Default | 16px | Regular (400) | 1.5 | 0 |
| Body Small | 14px | Regular (400) | 1.5 | 0.25px |
| Caption | 12px | Medium (500) | 1.4 | 0.25px |

---

## Spacing System

### Scale
Based on 4px unit:
- `4px` (xs)
- `8px` (sm)
- `12px` (md)
- `16px` (lg)
- `24px` (xl)
- `32px` (2xl)
- `48px` (3xl)
- `64px` (4xl)

### Section Spacing
- **Vertical Padding**: `64px` (desktop) / `48px` (tablet) / `32px` (mobile)
- **Horizontal Padding**: `32px` (desktop) / `24px` (tablet) / `16px` (mobile)
- **Max Width**: `1280px` (containers)
- **Column Gap**: `32px` (desktop) / `24px` (tablet) / `16px` (mobile)
- **Row Gap**: `32px` between rows

---

## Component Design

### Hero Section
- **Background**: Linear gradient from `#FAFAFA` to `#F3F3F3`
- **Min Height**: `100vh` on desktop, `80vh` on mobile
- **Alignment**: Centered, vertical + horizontal
- **Max Width**: 896px content area
- **Padding**: Top/Bottom `64px` desktop, `48px` tablet, `32px` mobile

**Typography**:
- **Headline (H1)**: 48px / 700 / `#000000`
- **Subheading**: 20px / 400 / `#444444`
- **CTA Button**: 16px / 600 / White text on black background

**Spacing**:
- H1 to Subheading: `24px`
- Subheading to CTA: `32px`

---

### Section Headers
- **Heading (H2)**: 36px / 700 / `#000000` / Center-aligned
- **Subheading (H3)**: 20px / 600 / `#0066FF` (accent when introducing subsections)
- **Bottom Margin**: `48px` to content

---

### Portfolio Cards
- **Layout**: 2-column grid (desktop), 1-column (mobile)
- **Column Gap**: `32px` desktop / `24px` mobile
- **Card Padding**: `32px`
- **Card Background**: White (`#FFFFFF`)
- **Card Border**: 1px solid `#E5E5E5`
- **Card Border Radius**: `12px`
- **Card Shadow**: `0 1px 3px rgba(0, 0, 0, 0.1)` on hover
- **Transition**: `0.3s ease` for shadow

**Typography**:
- **Title (H3)**: 24px / 700 / `#000000`
- **Description**: 16px / 400 / `#666666`

**Logo Treatment**:
- **Height**: `48px` max
- **Width**: Auto (maintain aspect ratio)
- **Bottom Margin**: `16px`

---

### Criteria List
- **List Item Style**: Arrow bullet (➤) prefix
- **Item Margin**: `16px` bottom between items
- **Text**: 18px / 400 / `#444444`
- **Text Color Accent**: `#0066FF` for emphasis

---

### How It Works Section
- **Card Layout**: 2-column grid (side by side)
- **Card Styling**: White background with `#E5E5E5` border
- **Border Radius**: `12px`
- **Padding**: `32px`
- **Spacing**: `32px` between cards

**Typography**:
- **Label (Badge)**: 12px / 600 / uppercase / `#0066FF` text with light blue background
- **Title**: 24px / 700 / `#000000`
- **Description**: 16px / 400 / `#444444`

---

### CTA Section
- **Background**: `#000000` (full width)
- **Text Color**: `#FFFFFF`
- **Padding**: `64px` (desktop) / `48px` (tablet) / `32px` (mobile)
- **Alignment**: Centered

**Typography**:
- **Heading**: 36px / 700 / White
- **Text**: 20px / 400 / `#CCCCCC`
- **Button**: 16px / 600 / White on transparent with white border

---

### Footer
- **Background**: `#F9F9F9`
- **Border Top**: 1px solid `#E5E5E5`
- **Link Color**: `#0066FF` on normal / `#005AFF` on hover
- **Text Color**: `#666666`

---

## Button Styles

### Primary Button (CTA)
- **Background**: `#000000`
- **Text**: `#FFFFFF` / 16px / 600
- **Padding**: `12px 32px`
- **Border Radius**: `8px`
- **Hover**: `#1F1F1F` background with subtle shadow
- **Transition**: `0.3s ease`

### Secondary Button (Outline)
- **Background**: Transparent
- **Border**: 2px solid `#000000`
- **Text**: `#000000` / 16px / 600
- **Padding**: `10px 30px` (accounting for border)
- **Border Radius**: `8px`
- **Hover**: `#000000` background with white text
- **Transition**: `0.3s ease`

### Link
- **Color**: `#0066FF`
- **Text Decoration**: None
- **Hover**: `#005AFF` with underline
- **Transition**: `0.2s ease`

---

## Responsive Breakpoints

| Device | Breakpoint | Behavior |
|--------|-----------|----------|
| Mobile | < 640px | Single column, 16px padding, 28px h2 |
| Tablet | 640px - 1024px | 2 columns (where applicable), 24px padding, 32px h2 |
| Desktop | > 1024px | Full layout, 32px padding, 36px h2 |

---

## Effects & Transitions

### Hover Effects
- **Buttons**: Smooth color + shadow change (0.3s)
- **Links**: Color change + underline (0.2s)
- **Cards**: Subtle shadow increase (0.3s)

### Scroll Behavior
- **Smooth Scroll**: Enabled on html element
- **Animations**: Fade-in on section load (optional, can be added with Intersection Observer)

---

## Accessibility

- **WCAG AA Compliance** (all text has sufficient contrast)
- **Font Size**: Minimum 16px for body text
- **Line Height**: Minimum 1.5 for body text
- **Focus States**: Visible outline (2px solid `#0066FF`)
- **Color Contrast**:
  - Text on White: Black (`#000000`) - 21:1
  - Text on Black: White (`#FFFFFF`) - 21:1
  - Links: Blue (`#0066FF`) - 7.45:1

---

## Visual Hierarchy

1. **Primary**: H1 headlines, primary CTA buttons (Black/White)
2. **Secondary**: H2 section headers, secondary information (Gray)
3. **Tertiary**: H3 subsections, descriptions (Light gray)
4. **Interactive**: Links and accent colors (Blue `#0066FF`)
5. **Emphasis**: Accent text, badges (Blue backgrounds)

---

## Images & Icons

- **Logo**: `/2x-logo.png` (sticky header)
- **Portfolio Logos**: Contained in image containers with 48px height max
- **Icons**: System icons (arrows, check marks as text symbols like ➤, ✓)

---

## Layout Principles

1. **Center-aligned** hero and main content sections
2. **Max-width** containers (1280px) for content
3. **Full-width** sections for background colors (like CTA)
4. **Consistent spacing** between sections (64px desktop / 48px tablet / 32px mobile)
5. **White space** prioritized over decoration
6. **Progressive enhancement** (mobile first, enhanced for larger screens)

---

## Animation & Motion

### Disabled States (Prefers Reduced Motion)
- `animation-duration: 0.01ms`
- `transition-duration: 0.01ms`
- Respects `prefers-reduced-motion` media query

### Enabled States
- **Button Transitions**: 0.3s ease
- **Link Transitions**: 0.2s ease
- **Card Hover**: 0.3s ease shadow-increase

---

## Known Assets
- Portfolio company logos available in `/public/`
  - `brushbox-logo.png`
  - `neverquit-logo.png`
  - `goodbits-logo.png`
  - `dayboard-logo.png`
- Main logo: `/2x-logo.png` or `/2x-mark.png`

---

**Design Version**: 1.0
**Last Updated**: January 28, 2025
**Next Review**: After implementation
