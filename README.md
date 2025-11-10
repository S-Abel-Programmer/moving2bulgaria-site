
# Moving2Bulgaria – Next.js site

### Quick start
1) `npm i`
2) `npm run dev`
3) Open http://localhost:3000

### Deploy to Netlify
- Connect this folder to a GitHub repo
- In Netlify: New site from Git → pick the repo
- Build command: `npm run build`
- Publish directory: `.next` (Netlify auto-detects Next.js)

### Customize
- Edit constants at the top of `pages/index.js` for brand, products, and YouTube.
- Set `YOUTUBE.embed = true` **after** deploying to production if your editor blocks iframes in preview.
- Payment buttons: set each `buyUrl` to Stripe/Payhip/Gumroad checkout links.
