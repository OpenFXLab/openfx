# Deploying the Landing Page via GitHub Pages

This document explains how to enable GitHub Pages for the OpenFXLab repository so that the static project landing page at `docs/index.html` is publicly accessible.

---

## Prerequisites

- You must have admin access to the `OpenFXLab/openfx` repository.
- The `docs/` directory must contain `index.html`, `styles.css`, and `app.js` (all present in this repository).

---

## Steps

### 1. Go to repository settings

Navigate to:

```
https://github.com/OpenFXLab/openfx/settings/pages
```

Or from the repository home page: **Settings → Pages** (in the left sidebar under "Code and automation").

### 2. Set the source

Under **"Build and deployment"**:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/docs`

Click **Save**.

### 3. Wait for deployment

GitHub will deploy the site within a few minutes. You will see a green banner confirming the URL when it is ready.

The site will be available at:

```
https://openfxlab.github.io/openfx/
```

### 4. Verify the site

Visit the URL and confirm:

- The landing page loads correctly
- Navigation links work
- All internal links (to other files in the repository) use the correct paths

---

## Maintaining the landing page

The landing page files are:

| File | Purpose |
|------|---------|
| `docs/index.html` | Landing page HTML |
| `docs/styles.css` | Landing page styles |
| `docs/app.js` | Landing page minimal JavaScript |

Changes to these files are deployed automatically on merge to `main`.

---

## Custom domain (optional, later)

If a custom domain (e.g., `openfxlab.io` or similar) is acquired in the future:

1. Add a `CNAME` file to the `docs/` directory containing the custom domain name.
2. Configure DNS at your domain registrar to point to GitHub Pages (follow GitHub's DNS configuration instructions).
3. Enable "Enforce HTTPS" in the GitHub Pages settings once DNS propagates.

---

## Troubleshooting

**Problem:** The site shows a 404 error.

**Check:**
- The source branch and folder are set correctly (`main` branch, `/docs` folder).
- `docs/index.html` exists at the correct path.
- GitHub Pages has finished deploying (check the Pages settings for a green status indicator).

**Problem:** Internal links are broken.

**Check:**
- Links from `docs/index.html` to other repository files should point to the raw GitHub content or to other `docs/` files.
- Relative paths within `docs/` work correctly on GitHub Pages.
- Links to other Markdown files in the repository (e.g., `../CONTRIBUTING.md`) may not render as HTML via GitHub Pages — these are best linked to their GitHub.com URLs.

---

## Notes

- The landing page does not require a build step or any external tools.
- The `docs/` directory is the only directory served by GitHub Pages. Other directories in the repository are not served.
- No external analytics, trackers, or CDN dependencies are used in the landing page.
