# Anil Hardware Website

Production-ready, responsive website for **Anil Hardware** (J7PG+547, New Market, Patratu, Jharkhand 829119).

## Tech Stack

- HTML5 (semantic, SEO-ready structure)
- CSS3 (custom design system with variables, responsive layout, animations)
- Vanilla JavaScript ES modules (modular, no framework lock-in)
- PWA-ready manifest + GitHub Pages-compatible setup

## Features Delivered

- Modern premium UI tailored for a hardware and construction materials shop
- Mobile-first responsive design for desktop, tablet, and phone
- Searchable and filterable product catalog
- Category chips and product sorting (featured, price, rating)
- Brand gallery with featured offers (Berger, Asian Paints, Bangur, Ambuja, Tata, Jindal, Birla, German Rustic)
- One-click "Order on WhatsApp" action on each product card
- Estimate list panel with quantity controls and localStorage persistence
- Quote request form that opens pre-filled WhatsApp draft
- Quick enquiry form with validation and WhatsApp handoff
- FAQ accordion, testimonial section, service highlights
- SEO basics: title, meta description, Open Graph tags, robots, sitemap
- Deploy-ready static setup for GitHub Pages, Netlify, or Vercel

## Project Structure

- `index.html` - Main page and content
- `assets/css/styles.css` - Full visual design and responsive styles
- `assets/js/products.js` - Product catalog data
- `assets/js/main.js` - Interactive behaviors and form logic
- `assets/icons/icon.svg` - Branding favicon/icon
- `manifest.webmanifest` - Installable web metadata
- `robots.txt` and `sitemap.xml` - Search indexing support
- `CLIENT-HANDOVER-CHECKLIST.md` - Final delivery and QA checklist
- `DEPLOYMENT.md` - Multi-platform deployment guide
- `.github/workflows/deploy-gh-pages.yml` - GitHub Pages auto-deploy workflow

## Configure Before Client Handover

Please update these placeholders with real business values:

1. Phone number in `index.html` (`tel:+910000000000` and visible phone text)
2. WhatsApp number in `index.html` (floating button URL)
3. WhatsApp number in `assets/js/main.js` (`SHOP_CONFIG.whatsappNumber`)
4. Sitemap domain in `sitemap.xml` (`https://example.com/`)

## Run Locally

Because this is a static site, you can run it directly by opening `index.html` in a browser.

For best local testing, serve it with any static server.

## Deploy on GitHub Pages

Use either simple branch deployment or GitHub Actions auto deployment.

### Fast Branch Deployment

1. Create a new GitHub repository.
2. Push all files from this folder to the repository root.
3. In GitHub: **Settings -> Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: `main` and folder `/ (root)`
5. Save and wait for GitHub Pages URL generation.

### Auto Deployment via GitHub Actions

1. Push code to `main`.
2. In GitHub: **Settings -> Pages** set Source to **GitHub Actions**.
3. Workflow `.github/workflows/deploy-gh-pages.yml` will deploy automatically on push.

## Optional Next Upgrade

If you want advanced production features later, this can be migrated to React + TypeScript + CMS backend for real-time inventory and lead dashboard.
