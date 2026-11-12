# Elaine's illustrated engineering portfolio 🌸

A responsive React + Vite portfolio inspired by a pastel, hand-drawn meadow, with functioning navigation, project detail pages, filtering, subtle animations, and Netlify deployment configuration.

## Quick start

1. Install Node.js 20.19+ or 22.12+.
2. Open this folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (typically http://localhost:5173).

## Edit your information

- **`src/data.js`** — edit your introduction, email, LinkedIn, GitHub, projects, experience, skills, and leadership. All projects and details are controlled from this one file.
- **`src/style.css`** — colors, typography, spacing, layouts, and animations.
- **`src/main.jsx`** — React components and routing.
- **`public/reference/`** — the four original generated visual mockups are included for reference, **not used as nonfunctional screenshot backgrounds**.

### Real project images

1. Add images to `public/projects/` (make the folder).
2. In `src/data.js`, set a project's `photos` array to paths such as `['/projects/my-board.jpg']`.
3. On the project detail page, these will appear in the gallery. The main project artwork remains an illustrative SVG placeholder; replace `<ProjectVisual kind={...}/>` in `src/main.jsx` with your own `<img>` if you want a real photo as the cover.
4. Add the actual public GitHub repository URL in the project's `github` field. Empty URLs hide the GitHub button.
5. Replace all example results and claims with verified measurements, and get approval before publishing confidential team or employer material.

### Résumé

Put a PDF named `resume.pdf` in `public/` and change `resume: ''` to `resume: '/resume.pdf'` in `src/data.js`.

## Deploy to Netlify

1. Push the folder contents to a GitHub repository.
2. In Netlify, select **Add new project → Import an existing project**.
3. Select the repository. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy. `netlify.toml` already provides the redirect needed for React Router deep links.
5. Add a custom domain under Netlify's domain settings when you're ready.

## Notes

- The site uses original SVG scenery and characters drawn in React, inspired by the reference style. They are separate from the real, accessible HTML content.
- The generated mockups are references, not pixel-perfect implementations. This version is a functional, responsive starting point.
- All illustrative project diagrams are **placeholders**, not evidence of fabricated builds or measurements.
- External fonts load from Google Fonts; the site falls back to system fonts if offline.
