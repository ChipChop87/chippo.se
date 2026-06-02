# ui-ux-design-skill

## Purpose

Use this skill when designing, reviewing, polishing or refactoring the visual experience for the Chippo domain projects.

This skill defines how the AI should handle:

- visual direction
- layout
- hierarchy
- spacing
- responsive design
- accessibility
- animation
- inspiration from Hermes, Huly and HackerTyper
- the difference between `chippo.se` and `chippo.dev`

---

## Core design rule

The two main domains must feel related, but they must not become the same type of website.

```text
chippo.se
= personal gateway
= dark, mysterious, artistic, technical
= Hermes-inspired feeling
= short, memorable and link-focused

chippo.dev
= professional cyber security portfolio
= structured, clear, case-study based
= Huly-inspired layout principles
= suitable for LIA, GitHub, CV and companies
```

The AI must preserve this difference at all times.

---

## Brand relationship

The sites may share:

```text
- Chippo / Peter "Chippo" Ångman identity
- dark technical base
- green/cyan/teal accents
- terminal details
- GitHub/contact links
- careful cyber security tone
- UTF-8 Swedish content
```

But they must differ in function:

```text
chippo.se  -> entrance / identity / gateway
chippo.dev -> proof / portfolio / case studies
```

---

## Design direction for chippo.se

`chippo.se` should feel like:

```text
a small personal technical portal
a mysterious but professional gateway
a landing page that makes visitors want to enter the portfolio
```

### Visual keywords

```text
dark teal
warm cream text
subtle glow
mysterious
technical
minimal
artistic
terminal-like
```

### Recommended elements

```text
- strong hero
- large personal name/title
- subtle hero image or logo
- floating/parallax hover effect
- terminal/status block
- gateway cards
- clear CTA to chippo.dev
- GitHub link
- contact link
- simple footer
```

### Avoid

```text
- full portfolio content
- too many sections
- heavy HackerTyper effects
- aggressive hacker clichés
- copying Hermes branding or text
- using proprietary Hermes assets or fonts
```

---

## Design direction for chippo.dev

`chippo.dev` should feel like:

```text
a modern cyber security portfolio
a structured case-study site
a professional presentation of practical security work
```

### Visual keywords

```text
modern
structured
clean
technical
portfolio-first
case-study driven
dark by default
professional
```

### Recommended elements

```text
- large hero section
- clear navigation
- focus area cards
- featured case study
- case-study grid
- skills/technology section
- small Cyber Lab Console
- about section
- contact/LIA section
- footer with gateway link
```

### Huly-inspired principles

The AI may use Huly as inspiration for:

```text
- spacious sections
- clean cards
- modern SaaS-like hierarchy
- gradients
- feature grids
- strong CTA blocks
- mockup/panel style elements
```

The AI must not copy:

```text
- Huly logo
- Huly copy/text
- Huly proprietary assets
- exact Huly layout
- branding that makes the site look like a Huly clone
```

---

## HackerTyper / Cyber Lab design

Cyber Lab is only a small interactive detail.

It must feel like:

```text
a harmless visual terminal demo
a personal easter egg
a fun detail for the portfolio
```

It must not feel like:

```text
the main identity
a real hacking tool
a phishing interface
an intrusion demo
a Hollywood hacker parody
```

### Design rules

```text
- Keep it small and optional.
- Make it clearly harmless.
- Use fake/safe terminal lines only.
- Do not use real IPs, credentials, tokens or commands against systems.
- Include a close/reset control if modal/overlay is used.
- Ensure keyboard accessibility.
```

---

## Layout principles

Prefer:

```text
clear hierarchy
large readable headings
short paragraphs
cards with consistent spacing
responsive grids
wide desktop layout
single-column mobile layout
strong CTA placement
simple navigation
```

Avoid:

```text
crowded pages
too many animations
tiny text
low contrast
hidden navigation
overlapping content
unexplained icons
too many visual themes at once
```

---

## Typography

Use safe fonts unless a font license is known and documented.

Recommended font stacks:

```css
--font-display: Georgia, "Times New Roman", serif;
--font-body: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
--font-mono: "Courier New", Consolas, "Liberation Mono", monospace;
```

Rules:

```text
- Fonts must support Swedish characters.
- Do not use proprietary fonts without license.
- Body text must be comfortable to read.
- Code/terminal blocks should use monospace.
```

---

## Color direction

### chippo.se

Recommended feeling:

```text
dark teal background
warm cream text
soft green/cyan accents
subtle borders
low-key glow
```

Example palette:

```text
background: #041C1C
deep background: #021010
text: #FFE6CB
muted: #B8C8BD
accent: #6EE7B7
warning/status: #F59E0B
border: rgba(255, 230, 203, 0.18)
```

### chippo.dev

Recommended feeling:

```text
dark technical base
cyan/green accents
card/panel surfaces
clean borders
professional contrast
```

The palette may be related to `chippo.se`, but `chippo.dev` should feel more structured and portfolio-oriented.

---

## Motion and animation

Animations should be subtle and useful.

Allowed:

```text
- gentle hover lift
- subtle hero image movement
- soft glow
- card hover transition
- small terminal typing effect
- modal open/close transition
```

Avoid:

```text
- flashing text
- constant Matrix rain
- aggressive shake/glitch effects
- motion that makes text hard to read
- animations that break mobile performance
```

Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
    scroll-behavior: auto;
  }
}
```

---

## Responsive design rules

The AI must test or reason through at least:

```text
desktop: 1440px
laptop: 1280px
tablet: 768px
mobile: 390px
```

Minimum requirements:

```text
- no horizontal scroll
- readable text on mobile
- buttons are tappable
- navigation works on mobile
- cards stack cleanly
- hero does not overflow
- images scale correctly
```

---

## Accessibility rules

The design must include:

```text
- semantic HTML
- one clear h1
- visible focus states
- keyboard navigation
- alt text for meaningful images
- labels for forms
- good contrast
- status not communicated by color only
- Cyber Lab can be closed without mouse
```

Decorative images should use empty alt text only when appropriate.

---

## Content hierarchy

The AI should use this hierarchy:

### chippo.se

```text
1. Who is this?
2. What is the technical direction?
3. Where do I go next?
4. How do I contact/view GitHub?
```

### chippo.dev

```text
1. Who is this portfolio for?
2. What areas does Chippo work with?
3. What practical cases prove the work?
4. What skills/tools are used?
5. How can a company/contact person reach him?
```

---

## UI components to prefer

For `chippo.se`:

```text
hero
terminal block
gateway cards
simple CTA buttons
subtle footer
```

For `chippo.dev`:

```text
hero
navigation
focus cards
featured case card
case-study grid
skills chips
Cyber Lab module
contact block
footer
```

---

## UI components to avoid in MVP

Avoid unless clearly needed:

```text
complex dashboards
login UI
admin panels
database-backed content
large icon libraries
external animation libraries
heavy 3D effects
tracking widgets
```

---

## Review checklist

Before finishing a UI/UX task, check:

```text
[ ] The domain identity is correct.
[ ] chippo.se does not look like a full portfolio.
[ ] chippo.dev does not look like only a gateway.
[ ] Inspiration is not copied.
[ ] Main CTA is clear.
[ ] Text is readable.
[ ] Layout works on mobile.
[ ] Contrast is acceptable.
[ ] Motion is subtle.
[ ] reduced-motion is respected.
[ ] Focus states are visible.
[ ] Swedish characters display correctly.
[ ] No external assets are used without reason/license.
```

---

## Output expected from this skill

When this skill is used, the AI should produce or update:

```text
- design plan or design notes
- HTML/CSS/JS implementation guidance
- visual QA notes
- known limitations
- next UI/UX improvement step
```

If a file is created, recommended names are:

```text
docs/design-notes.md
docs/ui-review.md
docs/visual-qa.md
```

---

## Summary

This skill keeps the visual direction disciplined:

```text
chippo.se = dark personal gateway
chippo.dev = professional cyber portfolio
Cyber Lab = small harmless detail
Hermes/Huly/HackerTyper = inspiration only, never direct copying
```

The goal is a site that looks polished, personal and professional without becoming cluttered, unsafe or derivative.
