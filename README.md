# Brand Catapult — Web Developer Assignment

This is my React conversion of the Brand Catapult landing page from the shared Figma design. I built it to be fully responsive and to use clean, component-based code, with each section of the page broken out into its own component.

**Live demo:** https://brand-catapult.onrender.com/

## Tech stack

- **React 18** with **Vite**
- **Tailwind CSS** for styling
- Plain **JavaScript** (no TypeScript)

I went with Vite for the fast dev server and quick builds, and Tailwind because it let me match the design's spacing and colors quickly while keeping the styles right next to the markup.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

I composed the whole page in `App.jsx` and kept one component per section, plus a couple of small reusable ones.

```
src/
  App.jsx              # composes all the sections in order
  index.css            # Tailwind directives + a couple of small helpers
  components/
    Header.jsx         # sticky nav with a responsive mobile menu
    Hero.jsx           # "THAT MOVE WITH YOU" + the CSS spheres/orbit
    About.jsx          # the collective tagline band
    Approach.jsx       # dark case-study section ("accato")
    Work.jsx           # project cards, mapped from a data array
    Divider.jsx        # decorative red/gold band (pure CSS)
    Plans.jsx          # "Plan A / Plan B" signs
    Projects.jsx       # "Globally since 2015" + the abstract orb
    Services.jsx       # interactive expandable services list (useState)
    Partner.jsx        # "WE PARTNER WITH PEOPLE IN MOTION"
    Stats.jsx          # metrics + the dotted globe
    Contact.jsx        # controlled contact form (useState)
    Footer.jsx         # social orbit + link columns
    Logo.jsx           # reusable wordmark
    ArrowButton.jsx    # reusable red arrow button
```

## A few notes on my approach

- **Abstract visuals are recreated, not exported.** The hero spheres and orbit, the red/gold divider, the Plan A/B signs, the orb, and the globe are all built with CSS gradients / SVG rather than image files. I did this so they stay sharp at any screen size and keep the page light.
- **Photographic content uses placeholders.** For client work, services, and team photos I used placeholder images from picsum.photos. In production these would be swapped for the real exported Figma assets.
- **Responsive from mobile up.** I used Tailwind's breakpoints throughout, so the layout adapts from small screens upward. The nav collapses into a hamburger menu on mobile.
- **The interactive parts use React state.** The services list expands to show details for the selected item, and the contact form is fully controlled. The form currently logs its data and shows a confirmation; connecting it to a real backend would just mean adding an API call in the submit handler.

Thanks for taking the time to review it — happy to walk through any part of the code.

— Sarthak Srivastava
