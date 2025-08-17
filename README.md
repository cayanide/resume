# Sayan Chatterjee — Portfolio

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green) ![React](https://img.shields.io/badge/React-18-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3.3-blue) ![Vite](https://img.shields.io/badge/Vite-4-orange) ![Live Demo](https://img.shields.io/badge/Live-Portfolio-purple)

A fast, responsive, and accessible developer portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Router**. It showcases projects, experience, skills, certifications, and a downloadable resume, with a frosty dark theme optimized for readability.

## Live Site

[https://cayanide.github.io/resume/](https://cayanide.github.io/resume/)

## Repository

[https://github.com/cayanide/resume](https://github.com/cayanide/resume)

---

## Features

* Frosty dark UI for comfortable reading with glassmorphism accents
* Fully responsive layout with animated, mobile-optimized navbar and slide-down menu
* Smooth, subtle animations with Framer Motion
* Experience presented as a vertical timeline with progress line
* “Toolbelt” skills section using chips mirroring the resume 1:1
* Education cards with logo (LPU) and updated dates
* Resume page with embedded PDF viewer + Download/Open/Print actions
* Contact page with action cards, copy-to-clipboard email, correct link behaviors
* Hash-based routing for reliable GitHub Pages support
* Optimized assets and clean, maintainable code structure

---

## Tech Stack

* **React** (functional components, hooks)
* **Vite** (fast dev server and build tool)
* **Tailwind CSS** (utility-first styling)
* **Framer Motion** (micro-animations and transitions)
* **React Router** (HashRouter for SPA routing on GitHub Pages)
* **React Icons** (consistent iconography)

---

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   └── Certifications.jsx
├── App.jsx
├── main.jsx
public/
├── SayanChatterjee.pdf
├── favicon.ico
└── any static files
tailwind.config.js
postcss.config.js
vite.config.js
```

**Notes:**

* Assets like images used via imports should live in `src/assets/`.
* Static files served as-is (e.g., the resume PDF) belong in `public/`.

---

## Getting Started (Local Development)

### Prerequisites

* Node.js 18–22 recommended
* npm (or pnpm/yarn)

### Install Dependencies

```bash
npm install
```

### Run the Dev Server

```bash
npm run dev
```

Local: `http://localhost:5173/`

> Important for routing in local dev: The app uses **HashRouter**, so internal routes appear as `http://localhost:5173/#/resume`, avoiding refresh 404s and mirroring production behavior on GitHub Pages.

---

## Build

```bash
npm run build
```

Output is written to `dist/`.

### Preview Production Build Locally

```bash
npm run preview
```

Default: `http://localhost:4173/`

---

## Deployment (GitHub Pages)

* The project is configured for deployment to GitHub Pages at:
  [https://cayanide.github.io/resume/](https://cayanide.github.io/resume/)

* **Vite Base:**
  `vite.config.js` sets `base: "/resume/"` so asset paths resolve correctly on GitHub Pages.

### One-Time Setup on GitHub

1. Repository → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages`
4. Folder: `/` (root)
5. Save

### Deploy from Local Using `gh-pages`

```bash
npm run deploy
```

* This runs a build and publishes `dist/` to the `gh-pages` branch automatically.
* Your site will be live at: [https://cayanide.github.io/resume/](https://cayanide.github.io/resume/)

> Tip: HashRouter is used to avoid 404s on deep links with GitHub Pages. No extra `404.html` handling required.

---

## Configuration

### Vite Config (`vite.config.js`)

* `base: "/resume/"` is critical when deploying to a non-root path on GitHub Pages.
* `server.open` and `server.port` aid local dev.

### Resume PDF Path

```js
const pdfPath = import.meta.env.BASE_URL + "SayanChatterjee.pdf";
```

* Ensure `SayanChatterjee.pdf` is in `public/`.

### Routing

* `App.jsx` uses `HashRouter`.
* Routes include: `/`, `/about`, `/projects`, `/resume`, `/certifications`, `/contact`.
* A wildcard route points back to Home for safety.

---

## Accessibility and UX

* Sufficient color contrast on the dark theme
* Clear focus states on interactive elements
* Reduced motion-friendly: subtle animations with reasonable durations and easing
* Large tap targets on mobile
* `mailto` and external links use proper `rel` attributes and `target` behaviors

---

## Scripts

| Script    | Description                                         |
| --------- | --------------------------------------------------- |
| `dev`     | Start the Vite dev server                           |
| `build`   | Build the production bundle                         |
| `preview` | Preview the production build locally                |
| `deploy`  | Publish `dist/` to GitHub Pages (`gh-pages` branch) |

---

## Common Issues and Fixes

* **Blank page on GitHub Pages:**
  Ensure `base: "/resume/"` in `vite.config.js`. Rebuild and redeploy.
* **404 on refresh or deep link:**
  Confirm the app uses HashRouter (not BrowserRouter).
* **PDF not rendering in iframe:**
  Use base-aware path and confirm the file exists in `public/`. Some browsers block inline PDF viewing; the “Open in new tab” and “Download” buttons are provided as fallbacks.
* **Vite warning:** Convert internal anchors `<a href="/path">` to `<Link to="/path">` or use `useNavigate`. Keep external links as anchors.

---

## Customization

* **Colors and Theme:** Tailwind classes in components (e.g., slate/gray palettes, `bg-white/5`, `border-white/10`)
* **Animations:** Framer Motion presets (fade-in, stagger, hover/tap interactions)
* **Icons:** React Icons; replace or extend as desired
* **Content:** Update snapshot bullets, experience timeline, toolbelt, and education in `About.jsx`; projects in `Home/Projects.jsx`; contact details in `Contact.jsx`

---

## Roadmap Ideas

* Add project filters and tags
* Light/dark theme toggle with system preference detection
* Blog or notes section using MDX
* Contact form via EmailJS or serverless endpoint
* Lighthouse accessibility/performance audits and tweaks

---

## License

This portfolio’s source code is shared for personal use and reference. If forking, please replace personal information, images, and branding with your own. Review licenses of third-party assets if publishing publicly.

---

## Contact

* **Email:** [sayanc354@gmail.com](mailto:sayanc354@gmail.com)
* **GitHub:** [https://github.com/cayanide](https://github.com/cayanide)
* **LinkedIn:** [https://www.linkedin.com/in/sayan-chatterjee-a43613176/](https://www.linkedin.com/in/sayan-chatterjee-a43613176/)
* **Portfolio:** [https://cayanide.github.io/resume/](https://cayanide.github.io/resume/)
