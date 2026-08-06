# Waydean Nursery — Website

This repository contains the static website for Waydean Nursery.

## Quick SEO & Hosting notes
- `Index.html` includes enriched JSON-LD LocalBusiness schema and meta tags.
- `robots.txt` references `sitemap.xml` (already present in repo).

## Publish to GitHub (commands)
Run these commands from the project root to push to a GitHub repository you create.

```bash
# create repository on GitHub first, then run in project folder:
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git branch -M main
git push -u origin main
```

## Enable GitHub Pages
1. In the repository on GitHub, go to Settings → Pages.
2. Select branch `main` (or `gh-pages`) and root (`/`) as the source.
3. Save — the site will be published at `https://<USERNAME>.github.io/<REPO>/` within a few minutes.

## Optional: Use a custom domain
- Add `CNAME` file with your domain at the repo root.
- Configure DNS (A records / CNAME) per GitHub Pages docs.

## Local preview
Open `Index.html` in a browser or run a simple static server:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```
