# Footer QA Task

## Reference
The original Webflow footer (see `/root/clawd/2x-ventures/reference-screenshots/live-4.png`) shows:

**Layout:**
- Dark gray footer (#424448)
- 4-column layout on desktop: Logo | COMPANY | OUR OFFICE | GET IN TOUCH
- Proper spacing from CTA section above
- Logo is white 2x mark

**Styling details from reference:**
- Section headings: white, uppercase, ~16px
- Links (About Us, Invest With Us, Our Agency, hello@2xcd.com): teal/cyan color (#68b0cc)
- Address text: white, regular
- Copyright at bottom center: "© 2022 2x Ventures Ltd. All rights reserved."
- Good vertical spacing between CTA and footer

## Task
1. Use Playwright to screenshot the footer at https://2x-ventures.netlify.app (scroll to bottom, capture footer area)
2. Compare visually against reference-screenshots/live-4.png
3. Fix any discrepancies in components/Footer.tsx
4. Rebuild and deploy (git commit + push triggers Netlify)
5. Screenshot again and verify
6. Repeat until footer matches reference

## Key Files
- components/Footer.tsx - Footer component
- reference-screenshots/live-4.png - Target reference

## Commands
```bash
# Local dev
npm run dev

# Screenshot with Playwright
npx playwright screenshot https://2x-ventures.netlify.app --full-page /tmp/current-footer.png

# Deploy
git add -A && git commit -m "fix: Footer styling" && git push
```
