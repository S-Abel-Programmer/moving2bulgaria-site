
# Moving2Bulgaria – Next.js (Netlify-ready)

### Deploy
1) Make a GitHub repo (e.g. moving2bulgaria-site) and upload this entire folder.
2) Netlify → Add new site → Import from Git → select repo.
   - Build: `npm run build` (auto-detected)
   - Publish: `.next` (auto)
3) Add domains in Netlify → Domain Management:
   - Primary: moving2bulgaria.com
   - Secondary: moving2bulgaria.co.uk (will redirect to .com)

### Edit content
- `pages/index.js` → brand, products `buyUrl`, YouTube IDs.
- `YOUTUBE.embed = true` (already on) for inline player.

### Local
`npm i && npm run dev` → http://localhost:3000
