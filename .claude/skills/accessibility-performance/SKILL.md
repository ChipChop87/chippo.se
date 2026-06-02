# accessibility-performance-skill

## Purpose

Use this skill when reviewing, improving or testing accessibility, responsiveness and performance for the Chippo domain projects.

This skill applies to:

- `chippo.se`
- `chippo.dev`
- future `angmans.se`
- any static HTML/CSS/JS implementation
- any future framework implementation if the projects later move to Astro, React or Next.js

The goal is to make the sites easy to use, fast to load, readable, keyboard-friendly and respectful of user preferences.

---

## Core rule

The site must be:

```text
readable
fast
responsive
keyboard-friendly
screen-reader-aware
low-friction on mobile
safe for users with reduced-motion preferences
```

Do not sacrifice usability for visual effects.

---

## Priority

For these projects, prioritize:

```text
1. readable content
2. working navigation
3. mobile usability
4. accessible links/buttons/forms
5. fast static loading
6. subtle animation
7. visual polish
```

If an animation or visual effect makes the page harder to use, remove or reduce it.

---

## Accessibility baseline

Every page must have:

```text
[ ] valid document structure
[ ] one clear h1
[ ] logical heading order
[ ] semantic landmarks where useful
[ ] readable text size
[ ] sufficient contrast
[ ] keyboard navigation
[ ] visible focus states
[ ] useful link text
[ ] alt text for meaningful images
[ ] labels for form fields
[ ] no keyboard traps
[ ] reduced motion support
```

---

## HTML structure rules

Use semantic HTML.

Prefer:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Avoid:

```text
div-only structure for everything
clickable divs instead of buttons/links
empty href="#"
multiple h1 elements without reason
heading levels used only for styling
```

Buttons and links must be used correctly:

```text
Use <a> for navigation.
Use <button> for actions.
```

---

## Heading hierarchy

Recommended:

```text
h1 = main page identity
h2 = major sections
h3 = cards/subsections
h4-h6 = only when needed
```

For `chippo.se`:

```text
h1: Peter "Chippo" Ångman
h2: Gateway cards / sections if needed
```

For `chippo.dev`:

```text
h1: Cyber Security Portfolio / Peter "Chippo" Ångman
h2: Focus areas, Case Studies, Skills, Cyber Lab, About, Contact
h3: individual cards/cases
```

---

## Keyboard navigation

The site must work with keyboard only.

Check:

```text
[ ] Tab moves through navigation logically.
[ ] Focus indicator is visible.
[ ] Buttons can be activated with Enter/Space.
[ ] Links can be activated with Enter.
[ ] Mobile menu can be opened and closed by keyboard.
[ ] Cyber Lab can be closed with Escape if modal/overlay is used.
[ ] No focus gets trapped accidentally.
```

Do not remove focus outlines unless replacing them with a better visible style.

Good CSS pattern:

```css
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}
```

---

## Images and alt text

Meaningful images need descriptive alt text.

Examples:

```html
<img src="assets/images/chippo-hero.png" alt="Illustration för Peter Chippo Ångmans tekniska portfolio">
```

Decorative images should use:

```html
<img src="assets/images/decorative-glow.png" alt="" aria-hidden="true">
```

Rules:

```text
- Do not write "image of" unless needed.
- Keep alt text short but useful.
- Do not leave meaningful images without alt.
- Do not use filenames as alt text.
```

---

## Forms

If forms are used:

```text
[ ] every input has a label
[ ] required fields are clear
[ ] error states are understandable
[ ] mailto fallback is documented
[ ] no fake endpoint is added
[ ] no secret/API key is placed in frontend
```

For MVP, `mailto:` is preferred over a fake backend.

---

## Contrast and readability

Text must be readable on all backgrounds.

Check:

```text
[ ] body text has strong contrast
[ ] muted text is still readable
[ ] buttons are readable
[ ] terminal text is readable
[ ] text over images has overlay/backdrop if needed
[ ] status is not communicated only by color
```

Avoid:

```text
thin low-contrast text
bright glow behind important text
small font sizes on mobile
text directly on busy images
```

Recommended minimums:

```text
body text: 16px or larger
line-height: about 1.5-1.8
button target size: comfortable on mobile
```

---

## Reduced motion

All motion-heavy effects must respect user preference.

Add:

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

For custom JavaScript motion, check:

```js
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
```

If true:

```text
- disable parallax
- disable typewriter animation
- disable floating hero movement
- keep content usable
```

---

## Responsive design

Test or reason through these widths:

```text
1440px desktop
1280px laptop
768px tablet
390px mobile
```

Minimum requirements:

```text
[ ] no horizontal scroll
[ ] navigation is usable on mobile
[ ] hero does not overflow
[ ] cards stack cleanly
[ ] text remains readable
[ ] buttons are tappable
[ ] images scale correctly
[ ] terminal/Cyber Lab does not overflow
[ ] footer links remain readable
```

Useful CSS patterns:

```css
img {
  max-width: 100%;
  height: auto;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
```

---

## Performance principles

MVP should be fast and simple.

Prefer:

```text
static HTML/CSS/JS
local assets
optimized images
no unnecessary libraries
no tracking scripts
no external fonts unless justified
minimal JavaScript
```

Avoid:

```text
large hero images without optimization
multiple heavy background videos
unneeded frameworks
third-party analytics in MVP
large icon libraries
uncompressed screenshots
autoplay media
```

---

## Image optimization

Before publishing images:

```text
[ ] resize to sensible dimensions
[ ] compress images
[ ] use modern format if practical
[ ] include width/height if possible
[ ] lazy-load non-critical images
[ ] keep hero image quality balanced against load time
```

Example:

```html
<img src="assets/images/case-study-thumb.webp" alt="..." loading="lazy" width="800" height="500">
```

Do not lazy-load the main hero image if it is the largest above-the-fold content and should appear immediately.

---

## JavaScript performance

Rules:

```text
- keep JS small
- avoid expensive scroll/mousemove handlers
- use requestAnimationFrame for visual updates
- remove listeners when not needed
- do not poll continuously
- no network calls in MVP unless required
```

For hero hover/parallax:

```text
- throttle with requestAnimationFrame
- disable on mobile if needed
- disable when reduced motion is active
```

---

## CSS performance

Prefer simple CSS.

Avoid:

```text
huge box-shadows on many elements
large blur filters everywhere
continuous animations
layout-shifting effects
overly complex selectors
```

Use transitions sparingly:

```css
.card {
  transition: transform 180ms ease, border-color 180ms ease;
}
```

---

## Loading and layout stability

Avoid layout shift.

Check:

```text
[ ] images have reserved space where possible
[ ] fonts do not cause major jump
[ ] hero layout is stable
[ ] buttons do not move after JS loads
[ ] content is visible without JavaScript where possible
```

---

## No-JavaScript fallback

The core site should still be understandable without JavaScript.

Minimum:

```text
- content visible
- main links work
- contact link works
- portfolio/GitHub links work
```

JavaScript may enhance:

```text
theme toggle
mobile menu
hero hover
Cyber Lab
language toggle
```

But the core page must not be empty without JavaScript.

---

## Testing checklist

Use this checklist before finishing.

### Accessibility

```text
[ ] One h1.
[ ] Logical headings.
[ ] Alt text checked.
[ ] Labels checked.
[ ] Keyboard navigation checked.
[ ] Focus visible.
[ ] Contrast acceptable.
[ ] Reduced motion supported.
[ ] No keyboard trap.
```

### Responsive

```text
[ ] Desktop checked.
[ ] Laptop checked.
[ ] Tablet checked.
[ ] Mobile checked.
[ ] No horizontal scroll.
[ ] Buttons are tappable.
[ ] Cards stack properly.
```

### Performance

```text
[ ] No unnecessary dependencies.
[ ] Images optimized or documented as TODO.
[ ] No heavy autoplay media.
[ ] JavaScript is minimal.
[ ] No console errors.
[ ] Page loads locally.
```

### Content and UTF-8

```text
[ ] Swedish characters display correctly.
[ ] Ångman displays correctly.
[ ] cybersäkerhet displays correctly.
[ ] åtgärd/lärdom/nätverk/härdning display correctly.
```

---

## Suggested documentation updates

When this skill changes the project, update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md
VERSION_LOG.md
CHANGELOG.md
```

If specific accessibility or performance findings exist, create or update:

```text
docs/accessibility-notes.md
docs/performance-notes.md
docs/visual-qa.md
```

---

## Definition of done

A page is not done until:

```text
[ ] it works locally
[ ] it is readable on mobile
[ ] it is keyboard usable
[ ] it has visible focus states
[ ] it respects reduced motion
[ ] it avoids unnecessary heavy dependencies
[ ] it preserves Swedish characters
[ ] it has no obvious console errors
[ ] documentation/handoff is updated
```

---

## Summary

This skill keeps the projects usable and fast.

The goal is not only to make the pages look good. The goal is to make them:

```text
clear
fast
accessible
responsive
professional
easy to maintain
```
