# frontend-implementation-skill

## Purpose

Use this skill when implementing or modifying the frontend for `chippo.se` or `chippo.dev`.

The goal is to keep the frontend simple, fast, maintainable, secure and easy for future AI agents to understand.

Default stack for the MVP:

```text
HTML5
CSS3
Vanilla JavaScript
GitHub
Cloudflare Pages
```

Do not introduce React, Next.js, Vite, Astro, Tailwind, external icon libraries, CDN scripts or build tooling unless the user explicitly approves it or the project already uses that stack.

---

## Core rules

1. Build one site at a time.
2. Keep `chippo.se` and `chippo.dev` separated.
3. Use semantic HTML.
4. Use clean CSS with variables.
5. Use vanilla JavaScript for interactivity.
6. Avoid unnecessary dependencies.
7. Preserve UTF-8 and Swedish characters.
8. Make the site responsive from mobile to desktop.
9. Respect accessibility and reduced motion.
10. Document all important implementation decisions.

---

## Domain-specific frontend direction

### `chippo.se`

`chippo.se` is a gateway / landing page.

Frontend focus:

```text
- one strong hero section
- Hermes-inspired but original visual feeling
- own image/logo/illustration
- subtle hover/floating image effect
- terminal/status block
- gateway cards
- links to chippo.dev, GitHub and contact
- static HTML/CSS/JS only by default
```

Do not turn `chippo.se` into a full portfolio.

### `chippo.dev`

`chippo.dev` is the main cyber security portfolio.

Frontend focus:

```text
- Huly-inspired but original structure
- strong hero section
- focus areas
- featured case study
- case study grid
- skills/competence section
- Cyber Lab Console as a small optional feature
- about/contact/LIA module
- static HTML/CSS/JS by default
```

Do not let the Cyber Lab / HackerTyper detail become the main identity of the site.

---

## Required file structure for static MVP

Recommended structure for each repo:

```text
repo/
├── index.html
├── style.css
├── script.js
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── SAMMANFATTNING.md
├── INSTRUKTIONER_HOW_TO.md
├── CHANGELOG.md
├── docs/
│   ├── handoff.md
│   ├── VERSION_LOG.md
│   └── UTF8_SVENSKA_TECKEN.md
└── assets/
    ├── images/
    ├── logos/
    ├── icons/
    └── favicon/
```

For `chippo.dev`, add when needed:

```text
terminal.js
```

Use `terminal.js` only for Cyber Lab / terminal-specific logic.

---

## HTML requirements

Every HTML file must include:

```html
<!doctype html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

HTML must include:

```text
- one clear h1
- meaningful headings in correct order
- semantic sections
- accessible navigation
- descriptive links and buttons
- alt text for images
- labels for form fields
- no empty href="#" links in final code
- safe external links with rel="noopener noreferrer"
```

Preferred structure:

```html
<header>
  <nav>...</nav>
</header>

<main>
  <section id="home">...</section>
  <section id="focus">...</section>
</main>

<footer>...</footer>
```

---

## CSS requirements

Use CSS variables for colors, spacing and typography.

Example:

```css
@charset "UTF-8";

:root {
  --bg: #041c1c;
  --panel: rgba(255, 255, 255, 0.06);
  --text: #ffe6cb;
  --muted: #b8c8bd;
  --accent: #6ee7b7;
  --border: rgba(255, 230, 203, 0.18);
  --radius-lg: 24px;
  --shadow-soft: 0 24px 80px rgba(0, 0, 0, 0.28);
}
```

CSS must include:

```text
- base reset or normalization
- readable typography
- responsive layout
- mobile-first or carefully tested breakpoints
- visible focus states
- reduced motion support
- no scattered hardcoded colors if variables can be used
- no unnecessary !important rules
```

Required reduced motion pattern:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## JavaScript requirements

Use vanilla JavaScript unless the project already has a framework.

JavaScript must be:

```text
- defensive
- readable
- split by responsibility
- safe if elements are missing
- free from secrets/tokens/API keys
- compatible with static hosting
```

Example defensive pattern:

```js
const heroVisual = document.querySelector('[data-hero-visual]');

if (heroVisual) {
  // Add interaction only when the element exists.
}
```

Do not:

```text
- add tracking scripts without approval
- add external scripts without approval
- store secrets in JS
- create fake API endpoints
- add global keyboard shortcuts that break normal page use
```

---

## Hero floating / hover effect rules

For `chippo.se`, the hero image may have a subtle floating effect.

Rules:

```text
- use requestAnimationFrame
- keep movement subtle
- disable or reduce effect on mobile
- respect prefers-reduced-motion
- do not make text hard to read
- do not cause layout shift
```

Safe implementation pattern:

```js
const visual = document.querySelector('[data-hero-visual]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (visual && !reduceMotion) {
  let frame = null;
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 10;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 10;

    if (frame) return;

    frame = window.requestAnimationFrame(() => {
      visual.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1.02)`;
      frame = null;
    });
  });
}
```

---

## Cyber Lab / terminal implementation rules

For `chippo.dev`, terminal/Cyber Lab logic should be separate.

Recommended split:

```text
script.js   = normal site logic
terminal.js = Cyber Lab Console logic
```

Cyber Lab must:

```text
- be clearly harmless/demo-only
- use fictional text
- not use real IP addresses, tokens, passwords or commands against real systems
- not behave like phishing or intrusion tooling
- be easy to close
- support Escape to close if modal/overlay is used
- not capture keyboard input while typing in forms
```

Safe fake terminal examples:

```text
[lab] initializing demo console...
[ok] loading case-study index...
[verify] no secrets found in public output...
[deploy] cloudflare pages status: ready
```

---

## Accessibility requirements

Frontend work is not complete unless accessibility is checked.

Minimum requirements:

```text
- keyboard navigation works
- visible focus states exist
- images have useful alt text or empty alt when decorative
- form fields have labels
- contrast is readable
- sections have clear headings
- buttons and links have descriptive names
- interactive overlays can be closed with keyboard
```

---

## Performance requirements

MVP should be fast and simple.

Rules:

```text
- avoid unnecessary frameworks
- avoid CDN dependencies
- compress large images
- use lazy loading for non-critical images
- avoid autoplay media
- avoid tracking scripts
- avoid large JS bundles
```

Image example:

```html
<img src="assets/images/example.webp" alt="Description" loading="lazy">
```

Do not lazy-load the most important hero image if it hurts perceived loading.

---

## SEO and metadata requirements

Every site should include:

```text
- title
- meta description
- Open Graph title
- Open Graph description
- Open Graph image when available
- canonical URL when appropriate
- favicon
- robots.txt
- sitemap.xml
```

Example for `chippo.dev`:

```html
<title>Peter "Chippo" Ångman | Cyber Security Portfolio</title>
<meta name="description" content="Cyber Security Portfolio för Peter Chippo Ångman med praktiska case studies inom Azure, Python, Windows Server, Active Directory, Linux, nätverk och systemhärdning.">
```

---

## Security rules for frontend code

Never place these in frontend files:

```text
- passwords
- API keys
- tokens
- private URLs
- subscription IDs
- personal identification numbers
- private addresses
- real internal IP addresses from active systems
- unredacted screenshots
- private school reports
```

Use safe placeholders:

```text
[REDACTED]
10.x.x.x
example.local
example.com
```

---

## Local testing commands

Static site:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

Basic checks:

```bash
rg -i "password|secret|token|api_key|apikey|subscription|personnummer|private"
```

If Node tooling exists:

```bash
npm install
npm run build
npm run dev
```

Only use Node commands when the project actually has a Node-based setup.

---

## Required QA before finishing

Before ending frontend work, verify:

```text
[ ] Site runs locally
[ ] HTML validates reasonably
[ ] No console errors
[ ] Desktop layout works
[ ] Mobile layout works
[ ] Navigation works
[ ] Links work
[ ] Mailto/contact works
[ ] No horizontal scroll
[ ] Images load
[ ] Alt text exists
[ ] Focus states are visible
[ ] Reduced motion is respected
[ ] Swedish characters render correctly
[ ] No secrets/private data are present
[ ] Documentation/handoff is updated
```

---

## Documentation after frontend changes

After implementation, update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md
docs/VERSION_LOG.md
CHANGELOG.md
```

The handoff must include:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

---

## Definition of done

Frontend implementation is done only when:

```text
- the site works locally
- the layout is responsive
- the design matches the correct domain role
- no unnecessary dependencies were added
- no secrets or private data are present
- UTF-8 Swedish text works
- accessibility basics are checked
- documentation is updated
- next steps are clear
```
