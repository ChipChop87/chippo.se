# CHIPPO.SE AGENT MASTERPLAN

**Project:** `chippo.se`  
**Document type:** English AI-agent masterplan / implementation brief  
**Target site:** Personal gateway / landing page  
**Primary role:** Route visitors to `chippo.dev`, GitHub and contact  
**Design direction:** Hermes-inspired, but original Chippo identity  
**Hosting target:** GitHub + Cloudflare Pages  
**Registrar:** Inleed  
**Encoding rule:** UTF-8 everywhere, Swedish characters must be preserved  
**Version:** 1.0  
**Date:** 2026-05-28

---

## 0. What this document is

This document is the dedicated agent masterplan for building `chippo.se` as a small, polished and memorable personal gateway for Peter "Chippo" Ångman.

It is written for AI coding agents such as Claude Code, Codex CLI, Gemini CLI, Cursor agents or similar tools. The agent must use this as a practical work order, not just as inspiration.

The goal is to create a static, fast, secure, responsive and visually strong landing page that leads visitors to the real cyber security portfolio at `chippo.dev`.

The site must feel:

```text
mysterious, technical, personal, minimal, dark, memorable
```

It must not become:

```text
a full portfolio, a Huly clone, a Hermes clone, a fake hacking page, or a school-project list
```

---

## 1. Domain role

`chippo.se` has one clear role:

```text
chippo.se = personal gateway / digital entrance / identity landing page
```

It should answer four questions quickly:

1. Who is Chippo?
2. What technical direction does he have?
3. Where is the real cyber portfolio?
4. How can the visitor reach GitHub or contact him?

`chippo.se` should be easy to share verbally, visually strong and simple to maintain.

---

## 2. Relationship to the other domains

### 2.1 chippo.se

Role:

```text
Personal gateway, visual identity, entry point
```

Main links:

```text
chippo.dev
GitHub
Contact
```

### 2.2 chippo.dev

Role:

```text
Main cyber security portfolio with case studies, labs, LIA material and GitHub-related project work
```

`chippo.se` must point clearly to `chippo.dev`. The portfolio itself should live at `chippo.dev`, not inside `chippo.se`.

### 2.3 angmans.se

Role:

```text
Future family/personal family site
```

`angmans.se` must not be mixed with the cyber identity or LIA portfolio. If mentioned at all, it should be a future separate project.

---

## 3. Core principle

The agent must keep this distinction:

```text
chippo.se  = gateway, identity, mood, links
chippo.dev = full cyber portfolio, case studies, LIA, labs
angmans.se = family site later
```

If the agent is unsure whether a section belongs on `chippo.se`, ask this:

```text
Is this needed to help the visitor continue to chippo.dev, GitHub or contact?
```

If the answer is no, it probably belongs on `chippo.dev` or in a future document.

---

## 4. Design direction

### 4.1 Main style

`chippo.se` should be inspired by the visual feeling of Hermes Agent:

```text
- dark teal/green background
- mysterious hero image
- warm cream text
- terminal-like details
- subtle floating/hover motion
- minimal but memorable interface
```

However, the site must be original.

The agent must not copy:

```text
- Hermes branding
- Hermes logo
- Hermes proprietary assets
- Hermes text/copy
- proprietary fonts without license
- visual layout so closely that the site looks like a clone
```

The correct interpretation is:

```text
Hermes-inspired atmosphere + original Chippo identity + Swedish cyber/security context
```

### 4.2 Secondary Huly influence

Huly-inspired design may be used only for small structural details such as cards and CTA layout:

```text
- clean cards
- rounded panels
- subtle borders
- good spacing
- modern hierarchy
```

But `chippo.se` should still feel more like a mysterious gateway than a SaaS product page.

---

## 5. Visual identity

### 5.1 Recommended color palette

```css
:root {
  --bg: #041C1C;
  --bg-deep: #021010;
  --text: #FFE6CB;
  --muted: #B8C8BD;
  --accent: #6EE7B7;
  --accent-warm: #F59E0B;
  --border: rgba(255, 230, 203, 0.18);
}
```

The agent may adjust colors slightly, but the final feeling should remain dark teal/green with warm readable text.

### 5.2 Typography

Use safe font stacks:

```css
--font-display: Georgia, "Times New Roman", serif;
--font-body: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "Courier New", Consolas, monospace;
```

Do not use proprietary Hermes/Huly fonts unless the user provides a valid license and asks for it.

### 5.3 Motion

Motion must be subtle.

Allowed:

```text
- hero image floating/parallax
- soft glow
- small hover movement
- terminal cursor blink
```

Avoid:

```text
- heavy matrix rain
- flashing text
- aggressive hacker animation
- constant distracting movement
```

Always support reduced motion.

---

## 6. Content language

The agent instructions are in English, but the visible website content may be Swedish.

Recommended split:

```text
Instruction language: English
Website visible language: Swedish, with some technical English labels if natural
Owner documentation: Swedish or bilingual
Technical agent documentation: English
Encoding: UTF-8 everywhere
```

Swedish characters must be preserved:

```text
Ångman
cybersäkerhet
säkerhet
åtgärd
lärdom
nätverk
härdning
```

Never change them into:

```text
Angman
cybersakerhet
sakerhet
atgard
lardom
natverk
hardning
```

---

## 7. Recommended page structure

The first version should be a single static page.

```text
Header
Hero
Terminal/status block
Gateway cards
Footer
```

Optional but allowed:

```text
Small "About this gateway" micro-section
```

Do not add a full case-study section. That belongs on `chippo.dev`.

---

## 8. Header / navigation

Recommended header:

```text
CHIPPO.SE        Portfolio   GitHub   Contact
```

Alternative:

```text
CHIPPO ÅNGMAN    chippo.dev   GitHub   Kontakt
```

Requirements:

```text
- minimal
- sticky or fixed if it improves UX
- semi-transparent background
- subtle border-bottom
- clear keyboard focus states
- works on mobile
```

Header links:

```text
Portfolio -> https://chippo.dev
GitHub    -> https://github.com/ChipChop87
Contact   -> mailto:peter@chippo.se
```

If `peter@chippo.se` is not ready yet, use `chippo.angman@gmail.com` temporarily and mark the contact choice in documentation.

---

## 9. Hero section

### 9.1 Purpose

The hero section is the main experience of `chippo.se`.

It should introduce Chippo and move visitors toward the portfolio.

### 9.2 Recommended heading

```text
Peter "Chippo" Ångman
```

### 9.3 Recommended subheading

```text
Cyber Security Student & Practical Security Builder
```

### 9.4 Recommended Swedish body copy

```text
Jag bygger och dokumenterar praktiska säkerhetsprojekt inom Azure, Windows Server, Active Directory, Linux, Python och nätverk. Den fullständiga cyberportfolion finns på chippo.dev.
```

### 9.5 CTA buttons

Primary CTA:

```text
Öppna Cyber Portfolio -> https://chippo.dev
```

Secondary CTA:

```text
GitHub -> https://github.com/ChipChop87
```

Tertiary CTA:

```text
Kontakt -> mailto:peter@chippo.se
```

### 9.6 Hero image

The user may provide a personal image, logo or illustration. Use that if available.

Requirements:

```text
- no copied Hermes image unless explicitly owned/licensed
- no external hotlinked image
- local asset under assets/images/ or assets/logos/
- meaningful alt text
- optimized size
- visible fallback if image is missing
```

Recommended file placeholder:

```text
assets/images/chippo-hero.png
```

Recommended alt text:

```text
Illustration för Peter "Chippo" Ångmans tekniska gateway
```

---

## 10. Floating hero effect

The hero visual should react subtly to pointer movement, similar in spirit to Hermes, but implemented independently.

Implementation guidance:

```js
const visual = document.querySelector('.hero-visual');
let frame = null;

function updateVisual(event) {
  if (!visual || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 12;

  if (frame) cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    visual.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.03)`;
  });
}

window.addEventListener('pointermove', updateVisual, { passive: true });
```

The final code should be defensive and should not fail if `.hero-visual` is missing.

Reduced motion rule:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }

  .hero-visual {
    transform: none !important;
  }
}
```

---

## 11. Terminal/status block

Add a small terminal-style block to reinforce the technical gateway identity.

Recommended text:

```text
> boot chippo.se
loading identity... ok
portfolio target... chippo.dev
github profile... ChipChop87
status... building, learning, documenting
```

Requirements:

```text
- decorative but readable
- no fake illegal hacking language
- no real IP addresses
- no secrets or tokens
- visually secondary to hero CTA
```

---

## 12. Gateway cards

Add three cards below or beside the hero.

### Card 1: Cyber Portfolio

Link:

```text
https://chippo.dev
```

Text:

```text
Case studies, labbar och dokumenterade säkerhetsprojekt inom cloud, Windows/AD, Linux, Python och nätverk.
```

### Card 2: GitHub

Link:

```text
https://github.com/ChipChop87
```

Text:

```text
Kod, experiment, appar och tekniska projekt som visar hur jag bygger och lär mig praktiskt.
```

### Card 3: Contact

Link:

```text
mailto:peter@chippo.se
```

Text:

```text
Kontakta mig via e-post för LIA, projektfrågor eller teknisk dialog.
```

If the mail address changes, update it in all files and document the change in `CHANGELOG.md` and `handoff.md`.

---

## 13. Footer

Keep the footer short.

Recommended footer:

```text
© 2026 Peter "Chippo" Ångman. Static gateway for chippo.dev.
```

Footer links:

```text
chippo.dev · GitHub · Contact
```

No heavy footer navigation is needed.

---

## 14. Technical stack

Use a static stack for MVP:

```text
HTML5
CSS3
Vanilla JavaScript
GitHub
Cloudflare Pages
Cloudflare DNS
```

Do not introduce these unless explicitly justified:

```text
React
Next.js
Vite
Astro
npm packages
CDN scripts
icon libraries
analytics/tracking
backend/database
Cloudflare Workers
```

A static page is enough for `chippo.se`.

---

## 15. Recommended file structure

```text
chippo.se/
├── index.html
├── style.css
├── script.js
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── SAMMANFATTNING.md
├── INSTRUKTIONER_HOW_TO.md
├── SECURITY_NOTES.md
├── CHANGELOG.md
├── handoff.md
├── .editorconfig
├── .gitignore
└── assets/
    ├── images/
    │   └── chippo-hero.png
    ├── logos/
    │   └── chippo-logo.svg
    └── favicon/
```

If assets are missing, create placeholder references carefully and document what still needs to be added.

Do not create broken image links in the final version.

---

## 16. Required HTML features

`index.html` must include:

```html
<!doctype html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chippo.se - Peter "Chippo" Ångman</title>
  <meta name="description" content="Personlig gateway för Peter Chippo Ångman - cybersäkerhetsstudent med fokus på praktiska labbar, dokumenterade lösningar och tekniska projekt.">
</head>
```

Also include:

```text
- one clear h1
- semantic header/main/footer
- accessible buttons and links
- no empty href="#" links in final code
- no external scripts unless justified
- noscript fallback if JavaScript enhances important visuals
```

External links that open in a new tab must use:

```html
rel="noopener noreferrer"
```

---

## 17. Required CSS features

`style.css` must include:

```css
@charset "UTF-8";
```

Required CSS areas:

```text
- CSS variables
- reset/base styles
- responsive layout
- hero styling
- image/visual styling
- terminal block styling
- gateway card styling
- button styling
- focus states
- mobile breakpoints
- prefers-reduced-motion support
```

Avoid scattered hard-coded colors. Use variables.

---

## 18. Required JavaScript features

`script.js` should include only lightweight behavior:

```text
- floating hero effect
- optional terminal cursor/typewriter effect
- small mobile menu if needed
```

Requirements:

```text
- vanilla JS
- no dependencies
- defensive DOM checks
- requestAnimationFrame for pointer-driven motion
- no trackers
- no system interaction
- no fake attack scripts
```

---

## 19. SEO and social metadata

Add basic metadata.

Title:

```text
Chippo.se - Peter "Chippo" Ångman
```

Description:

```text
Personlig gateway för Peter "Chippo" Ångman - cybersäkerhetsstudent med fokus på praktiska labbar, dokumenterade lösningar och tekniska projekt.
```

Open Graph:

```html
<meta property="og:title" content="Chippo.se - Peter Chippo Ångman">
<meta property="og:description" content="Personlig gateway till cyberportfolio, GitHub och tekniska projekt.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://chippo.se/">
<meta property="og:image" content="https://chippo.se/assets/og-image.png">
```

If `og-image.png` does not exist, either create it later or document it as TODO. Avoid linking to a missing asset in production.

---

## 20. Security rules

The agent must never publish:

```text
- passwords
- API keys
- tokens
- private DNS values
- private IP addresses from active systems
- subscription IDs
- personal identity numbers
- private addresses
- unreviewed school reports
- private screenshots
- personal letters
- copied Hermes/Huly brand assets
```

Use defensive, ethical language.

Avoid text that implies unauthorized access or real hacking against third-party systems.

---

## 21. Accessibility rules

Required:

```text
- meaningful alt text
- visible keyboard focus states
- links reachable by Tab
- one clear h1
- readable contrast
- no information conveyed only by color
- reduced motion support
- mobile readable font sizes
```

The page must remain usable if JavaScript is disabled.

---

## 22. Performance rules

Required:

```text
- no unnecessary external resources
- optimized local images
- small CSS/JS files
- no heavy animation loops
- no tracking script in MVP
- works well on mobile
```

If a large hero image is used, optimize it and consider responsive image formats later.

---

## 23. Local testing

Run locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

Test at least:

```text
Desktop width: 1440px
Laptop width: 1280px
Tablet width: 768px
Mobile width: 390px
```

Manual checklist:

```text
[ ] page loads
[ ] no console errors
[ ] hero text is readable
[ ] hero visual loads or fallback works
[ ] floating effect is subtle
[ ] reduced motion works
[ ] all links work
[ ] mailto link works
[ ] keyboard navigation works
[ ] no horizontal scroll
[ ] Swedish characters display correctly
```

---

## 24. GitHub and Cloudflare deployment

Recommended repo:

```text
ChipChop87/chippo.se
```

Cloudflare Pages settings for static HTML:

```text
Framework preset: None
Build command: empty
Build output directory: /
Root directory: /
Production branch: main
```

Custom domains:

```text
chippo.se
www.chippo.se
```

Preferred canonical URL:

```text
https://chippo.se
```

Redirect goal:

```text
https://www.chippo.se -> https://chippo.se
```

---

## 25. Inleed and Cloudflare DNS

Inleed is the registrar. Cloudflare should handle DNS, security and Pages hosting.

General flow:

```text
1. Add chippo.se as a site/zone in Cloudflare.
2. Choose the Free plan unless there is a reason not to.
3. Cloudflare provides two nameservers.
4. Log in to Inleed.
5. Open the domain chippo.se.
6. Change nameservers to the two Cloudflare nameservers.
7. Save.
8. Wait until Cloudflare shows the zone as Active.
9. Create a Cloudflare Pages project.
10. Connect the GitHub repo.
11. Deploy.
12. Add custom domains chippo.se and www.chippo.se.
13. Verify HTTPS.
```

Important email warning:

```text
If peter@chippo.se or other domain email is active, do not change nameservers before documenting and recreating MX, SPF, DKIM and DMARC records in Cloudflare.
```

---

## 26. Documentation the agent must create

Each completed implementation version must include these files:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
SECURITY_NOTES.md
CHANGELOG.md
handoff.md
```

### 26.1 README.md

Must contain:

```text
- what the site is
- tech stack
- local run instructions
- file structure
- deployment overview
- contact/link overview
```

### 26.2 SAMMANFATTNING.md

Separate from README.

Must contain:

```text
# Sammanfattning - chippo.se vX.X

## Vad som byggdes
## Vad som ändrades
## Vilka filer som berördes
## Designbeslut
## Säkerhetsbeslut
## Vad som inte gjordes
## Kända begränsningar
## Nästa steg
```

### 26.3 INSTRUKTIONER_HOW_TO.md

Must contain:

```text
# Instruktioner - chippo.se

## Köra lokalt
## Ändra text
## Byta hero-bild eller logga
## Ändra länkar
## Testa sidan
## Pusha till GitHub
## Deploy via Cloudflare Pages
## Koppla domän via Inleed och Cloudflare
## Felsökning
```

### 26.4 SECURITY_NOTES.md

Must contain:

```text
- no secrets in repo
- no tokens/API keys
- external link rules
- image/licensing notes
- email/DNS warning
- security review checklist
```

### 26.5 handoff.md

Must use exactly this structure:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

### 26.6 CHANGELOG.md

Must log versioned changes.

Example:

```md
# Changelog

## 1.0.0 - Initial gateway
- Built static Hermes-inspired chippo.se landing page.
- Added hero visual and subtle floating effect.
- Added links to chippo.dev, GitHub and contact.
```

---

## 27. Agent team model

The work may be performed by one tool, but it should behave like a small web team.

### 27.1 Lead Planner / Architect

Responsibilities:

```text
- read this masterplan
- keep chippo.se scoped as a gateway
- avoid scope creep
- define implementation steps
- ensure documentation is created
```

### 27.2 UI/UX Designer

Responsibilities:

```text
- translate Hermes inspiration into original Chippo design
- choose spacing, hierarchy, palette and card layout
- verify desktop and mobile appearance
- keep the site memorable but professional
```

### 27.3 Frontend Developer

Responsibilities:

```text
- implement HTML/CSS/JS
- implement floating hero effect
- keep stack static and dependency-free
- make links and layout work
```

### 27.4 Accessibility and Performance Reviewer

Responsibilities:

```text
- keyboard navigation
- focus states
- contrast
- reduced motion
- image optimization
- mobile performance
```

### 27.5 Security Reviewer

Responsibilities:

```text
- scan for secrets
- scan for private data
- verify links
- verify no copied brand assets
- verify ethical wording
```

### 27.6 Deployment Agent

Responsibilities:

```text
- document GitHub repo setup
- document Cloudflare Pages setup
- document custom domains
- document Inleed nameserver flow
- document rollback path
```

### 27.7 Documentation/Handoff Agent

Responsibilities:

```text
- write README
- write SAMMANFATTNING
- write INSTRUKTIONER_HOW_TO
- write SECURITY_NOTES
- update CHANGELOG
- update handoff.md
```

---

## 28. Implementation workflow

### Phase 0 - Read and plan

```text
1. Read this document.
2. Read AGENTS.md or CLAUDE.md if present.
3. Read existing README and handoff if present.
4. Inspect existing files.
5. Write a short plan before major edits.
```

### Phase 1 - Create structure

```text
1. Create index.html.
2. Create style.css.
3. Create script.js.
4. Create asset folders.
5. Add README and documentation files.
```

### Phase 2 - Build page

```text
1. Build header.
2. Build hero.
3. Add hero visual/fallback.
4. Add terminal block.
5. Add gateway cards.
6. Add footer.
```

### Phase 3 - Add interaction

```text
1. Add subtle floating effect.
2. Add reduced motion support.
3. Add optional terminal cursor or typewriter effect.
4. Test that JS failure does not break the page.
```

### Phase 4 - QA

```text
1. Run local server.
2. Test desktop.
3. Test mobile.
4. Test links.
5. Test keyboard navigation.
6. Check console.
7. Check Swedish characters.
8. Check for secrets/private data.
```

### Phase 5 - Documentation

```text
1. Update README.
2. Create SAMMANFATTNING.
3. Create INSTRUKTIONER_HOW_TO.
4. Create SECURITY_NOTES.
5. Update CHANGELOG.
6. Update handoff.md.
```

### Phase 6 - Deploy preparation

```text
1. Commit stable version.
2. Push to GitHub.
3. Connect to Cloudflare Pages.
4. Add custom domains.
5. Verify HTTPS.
6. Document deployment status.
```

---

## 29. QA checklist

The agent must not mark the work complete until these are checked:

```text
[ ] Page runs locally with python -m http.server 8000
[ ] HTML contains <meta charset="UTF-8">
[ ] html tag uses lang="sv"
[ ] Swedish characters display correctly
[ ] Hero section is visible and readable
[ ] Hero visual loads or fallback works
[ ] Floating effect is subtle and not laggy
[ ] Reduced motion is respected
[ ] Gateway cards are visible
[ ] chippo.dev link works
[ ] GitHub link works
[ ] Contact/mailto link works
[ ] Keyboard navigation works
[ ] Focus states are visible
[ ] Mobile layout works
[ ] No horizontal scroll
[ ] No console errors
[ ] No secrets or private data
[ ] No copied Hermes/Huly assets
[ ] README exists
[ ] SAMMANFATTNING.md exists
[ ] INSTRUKTIONER_HOW_TO.md exists
[ ] SECURITY_NOTES.md exists
[ ] CHANGELOG.md exists
[ ] handoff.md exists
```

---

## 30. Definition of Done

`chippo.se` version 1.0 is done when:

```text
- It is a static, responsive, visually polished gateway.
- It clearly links to chippo.dev as the main portfolio.
- It links to GitHub and contact.
- It has an original Hermes-inspired Chippo design.
- It does not copy Hermes/Huly branding or assets.
- It has a subtle hero floating effect.
- It respects reduced motion.
- It preserves Swedish characters correctly.
- It has no secrets or private data.
- It works locally.
- It is ready for Cloudflare Pages.
- Documentation and handoff files are complete.
```

---

## 31. Start prompt for an AI coding agent

Use this prompt when starting the actual implementation:

```text
You are the Lead Web Developer Agent for chippo.se.

Read this CHIPPO_SE_AGENT_MASTERPLAN.md, then inspect the existing project files. Build chippo.se as a static Hermes-inspired gateway landing page for Peter "Chippo" Ångman.

Important scope:
- chippo.se is a gateway, not the full portfolio.
- chippo.dev is the main cyber security portfolio and must be the primary CTA.
- The design should be dark, mysterious, technical and personal.
- Use Hermes as atmosphere inspiration only. Do not copy Hermes branding, text, logo, images or proprietary fonts.
- Use Huly inspiration only for clean cards/CTA structure if helpful.

Technical requirements:
- Use vanilla HTML, CSS and JavaScript.
- No frameworks, no npm packages, no CDN dependencies.
- Include <meta charset="UTF-8"> and lang="sv".
- Preserve Swedish characters such as Ångman, cybersäkerhet, åtgärd and lärdom.
- Implement a subtle hero image floating/parallax effect with requestAnimationFrame.
- Respect prefers-reduced-motion.
- Make the page responsive and accessible.

Content:
- Main heading: Peter "Chippo" Ångman
- Subheading: Cyber Security Student & Practical Security Builder
- Swedish intro text about practical security projects within Azure, Windows Server, Active Directory, Linux, Python and networking.
- CTA to https://chippo.dev
- CTA to https://github.com/ChipChop87
- Contact via mailto:peter@chippo.se unless another approved address is specified.
- Add a small terminal/status block.
- Add three gateway cards: Cyber Portfolio, GitHub and Contact.

Documentation:
- Create or update README.md.
- Create SAMMANFATTNING.md separate from README.
- Create INSTRUKTIONER_HOW_TO.md.
- Create SECURITY_NOTES.md.
- Create CHANGELOG.md.
- Create handoff.md with exactly: # Goal, ## Current state, ## Files in flight, ## Changed, ## Failed attempts, ## Next Step.

QA before finishing:
- Run locally with python -m http.server 8000.
- Test desktop and mobile.
- Test all links.
- Check console errors.
- Check keyboard navigation.
- Check reduced motion.
- Check that no secrets or private data exist.
- Check that Swedish characters display correctly.

End with a clear summary of what was built, what was not built and what the next agent should do.
```

---

## 32. Notes for future versions

Future versions may add:

```text
- custom logo
- custom OG image
- improved hero illustration
- Cloudflare security headers
- more polished favicon set
- optional language toggle
- optional link to angmans.se when ready
```

Do not add these before the MVP gateway is stable unless the user explicitly requests it.

---

## 33. Final reminder

The purpose of `chippo.se` is not to show everything.

It should feel like opening a door:

```text
A clean, dark, personal gateway that says:
This is Chippo. Enter the real portfolio at chippo.dev.
```
