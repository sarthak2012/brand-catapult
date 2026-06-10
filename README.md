# Brand Catapult — Web Developer Assignment

A React conversion of the shared Figma landing page design, built to be
responsive and use clean, component-based code.

## Tech stack

- **React 18** (Vite)
- **Tailwind CSS** for styling
- Plain JavaScript (no TypeScript)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx              # composes all sections in order
  index.css            # Tailwind directives + a couple of helpers
  components/
    Header.jsx         # sticky nav with responsive mobile menu
    Hero.jsx           # "THAT MOVE WITH YOU" + CSS spheres/orbit
    About.jsx          # collective tagline band
    Approach.jsx       # dark case-study section ("accato")
    Work.jsx           # project cards (mapped from data)
    Divider.jsx        # decorative red/gold band (pure CSS)
    Plans.jsx          # "Plan A / Plan B" signs (pure CSS)
    Projects.jsx       # "Globally since 2015" + abstract orb
    Services.jsx       # interactive expandable services list (useState)
    Partner.jsx        # "WE PARTNER WITH PEOPLE IN MOTION"
    Stats.jsx          # metrics + dotted globe
    Contact.jsx        # controlled contact form (useState)
    Footer.jsx         # social orbit + link columns
    Logo.jsx           # reusable wordmark
    ArrowButton.jsx    # reusable red arrow button
```

## Notes

- Abstract brand visuals (hero spheres, the red/gold divider, Plan A/B signs,
  the orb and the globe) are recreated with **CSS gradients / SVG** instead of
  exported images, so they stay sharp at any screen size.
- Photographic content (client work, services, team photos) uses placeholder
  images from picsum.photos. These would be swapped for the real exported Figma
  assets in production.
- The layout is responsive from mobile up using Tailwind's breakpoints; the nav
  collapses into a hamburger menu on small screens.
- The Services list and Contact form are interactive (React state).
