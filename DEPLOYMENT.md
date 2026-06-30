# Deployment Guide - Anil Hardware Website

This project is a static website and can be hosted on GitHub Pages, Netlify, or Vercel.

## Option A: GitHub Pages with GitHub Actions (Recommended)

1. Create a new GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, open:
   Settings -> Pages
4. Set Source to `GitHub Actions`.
5. Push any change to `main` and the workflow will deploy automatically.

Workflow file already included:
- `.github/workflows/deploy-gh-pages.yml`

## Option B: GitHub Pages from Branch Root

1. Push code to `main` branch.
2. Open:
   Settings -> Pages
3. Under Build and deployment:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. Save.

## Option C: Netlify Drop Deploy

1. Open Netlify.
2. Choose Add new site -> Deploy manually.
3. Drag this project folder.
4. Netlify will assign a live URL.

## Option D: Vercel Import

1. Import the GitHub repository in Vercel.
2. Framework preset: Other.
3. Build command: none.
4. Output directory: `/` (root).
5. Deploy.

## Production Checklist Before Final Deploy

- Update phone and WhatsApp number placeholders.
- Update `sitemap.xml` production domain.
- Confirm all brand offers and prices.
- Confirm WhatsApp links open correctly.
