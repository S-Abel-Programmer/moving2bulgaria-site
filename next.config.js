/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // <-- required for static export
  images: { unoptimized: true } // avoids Next/Image server features on Netlify
  // trailingSlash: true,    // (optional) enable if you want folder-style URLs
};

module.exports = nextConfig;
