# image-asset-management-skill

## Purpose

Use this skill when adding, reviewing, optimizing, replacing or documenting images and visual assets for the Chippo domain projects.

This skill applies to:

- hero images
- profile images
- logos
- icons
- favicon files
- Open Graph images
- screenshots
- case-study thumbnails
- background images
- family/private images for future `angmans.se`
- any image placed in `assets/`

The goal is to keep visual assets organized, optimized, accessible, legally safe and privacy-safe.

---

## Core rule

Do not publish an image unless it is:

```text
approved for public use
properly placed
reasonably optimized
given suitable alt text when meaningful
free of private/sensitive details
not copied from protected branding
```

If unsure, classify the image as PRIVATE or REQUEST_ONLY and do not publish it.

---

## Asset folder structure

Use this structure:

```text
assets/
├── images/
├── logos/
├── icons/
├── favicon/
└── og-image.png
```

For `chippo.dev`, case-study assets may use:

```text
assets/images/cases/
```

Example:

```text
assets/images/cases/azure-security-baseline.webp
assets/images/cases/linux-hardening.webp
assets/images/cases/windows-server-hardening.webp
```

---

## Naming conventions

Use lowercase kebab-case.

Good filenames:

```text
chippo-hero.png
chippo-logo.svg
chippo-gateway-hero.webp
case-azure-security-baseline.webp
case-linux-hardening.webp
favicon-32x32.png
apple-touch-icon.png
og-image.png
```

Avoid:

```text
IMG_1234.PNG
Skärmbild 2026-05-28.png
finalfinal.png
copy-of-logo.png
hermes-logo.png
huly-copy.png
private-azure-screen.png
```

---

## Public vs private image rules

### PUBLIC images

May be used openly if reviewed:

```text
- custom Chippo logo
- approved profile/illustration
- cleaned project screenshots
- generic diagrams created for the site
- public case-study thumbnails
- favicon and OG image
```

### REQUEST_ONLY images

Should not be public by default:

```text
- detailed lab screenshots
- report screenshots
- screenshots with partial private context
- CV-related screenshots
- school assignment evidence
```

### PRIVATE images

Must not be published:

```text
- personal/family photos unless explicitly approved
- screenshots with names, e-mail, IPs, tokens, IDs
- unredacted school/lab screenshots
- private documents as images
- copied copyrighted brand assets
- images with other people who have not approved publication
```

---

## Brand/copyright rules

Do not use or publish:

```text
Hermes logos
Huly logos
HackerTyper assets
proprietary fonts/images
screenshots implying official affiliation
third-party brand assets without permission
```

Allowed:

```text
- original Chippo assets
- user-provided assets approved for use
- self-created graphics
- public-domain or properly licensed assets if license is documented
- inspiration-based design recreated from scratch
```

The sites may be inspired by Hermes/Huly/HackerTyper, but must not copy their assets.

---

## Hero image rules

### chippo.se

Hero image should support:

```text
dark gateway feeling
mysterious technical identity
Hermes-inspired but original look
subtle floating/hover effect
```

Requirements:

```text
- must be an original/approved image
- must work on desktop and mobile
- must not reduce text readability
- must have overlay/backdrop if text sits on image
- must respect reduced motion
```

### chippo.dev

Hero visual should support:

```text
professional portfolio
cyber security lab identity
case-study/documentation focus
```

Avoid making the hero look like an offensive hacking service.

---

## Logo rules

Logo should be:

```text
simple
readable
owned/created for Chippo
usable on dark background
usable as favicon or simplified mark
```

Do not use logos from:

```text
Hermes
Huly
HackerTyper
other companies/tools unless representing links or references with permission
```

---

## Favicon rules

Recommended files:

```text
assets/favicon/favicon.ico
assets/favicon/favicon-32x32.png
assets/favicon/apple-touch-icon.png
```

or if keeping simple:

```text
assets/favicon.ico
assets/favicon-32x32.png
assets/apple-touch-icon.png
```

HTML example:

```html
<link rel="icon" href="/assets/favicon/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
<link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png">
```

Favicon must not use third-party logos.

---

## Open Graph image rules

Recommended file:

```text
assets/og-image.png
```

Recommended dimensions:

```text
1200 x 630
```

OG image should include:

```text
site identity
Chippo name or mark
domain role
clean readable composition
```

Examples:

```text
chippo.se -> Gateway / Peter "Chippo" Ångman
chippo.dev -> Cyber Security Portfolio / Case Studies
```

Do not include private screenshots or sensitive lab details in OG images.

---

## Screenshot rules

Before using screenshots publicly, inspect for:

```text
names
email addresses
IP addresses
hostnames
subscription IDs
tenant IDs
tokens
passwords
paths with usernames
browser tabs
notifications
private file names
school/teacher comments
personal data
```

If any sensitive detail exists:

```text
crop
blur
redact
replace with mockup
or do not publish
```

Screenshots should usually start as REQUEST_ONLY until cleaned.

---

## Alt text rules

Meaningful images need alt text.

Good examples:

```html
<img src="assets/images/chippo-hero.webp" alt="Illustration för Peter Chippo Ångmans tekniska portfolio">
```

```html
<img src="assets/images/cases/azure-security-baseline.webp" alt="Visualisering av Azure Security Baseline Lab som portfolio-case">
```

Decorative images should use:

```html
<img src="assets/images/decorative-glow.webp" alt="" aria-hidden="true">
```

Rules:

```text
- do not use filenames as alt text
- do not write overly long alt text
- describe the purpose of the image
- preserve Swedish characters
```

---

## Optimization rules

Before publishing, images should be:

```text
resized to appropriate dimensions
compressed
converted to web-friendly format when practical
named clearly
placed in correct folder
documented if important
```

Recommended formats:

```text
SVG for logos/icons when appropriate
PNG for transparent graphics
WebP for photos/illustrations/screenshots when practical
ICO/PNG for favicons
```

Avoid huge files in MVP.

---

## Size guidance

General guidance:

```text
hero image: optimized, typically under 500 KB if possible
case thumbnails: usually under 250 KB if possible
icons/logos: very small
OG image: optimized but can be larger than thumbnails
```

These are practical targets, not absolute rules. Quality and context matter.

---

## HTML image attributes

Use:

```html
<img src="..." alt="..." width="..." height="..." loading="lazy">
```

For non-critical images, use:

```html
loading="lazy"
```

Do not lazy-load the main above-the-fold hero image if it hurts perceived loading.

---

## Image inventory

For `chippo.dev`, important images should be listed in:

```text
docs/content-inventory.md
```

Recommended fields:

```text
- filename
- type
- source/owner
- classification
- public use
- alt text
- needs redaction
- notes
```

Example:

```md
| File | Type | Classification | Use | Notes |
|---|---|---|---|---|
| chippo-hero.webp | hero | PUBLIC | chippo.se hero | User-approved illustration |
| azure-lab-screenshot.png | screenshot | REQUEST_ONLY | Case study reference | Needs IP redaction |
```

---

## CSS background image caution

If an image conveys meaning, do not use it only as a CSS background.

Use `<img>` with alt text for meaningful content.

CSS backgrounds are okay for:

```text
decorative glows
abstract gradients
non-essential textures
```

---

## Private/family image caution

For future `angmans.se`, treat family images as PRIVATE by default.

Before publishing family images, confirm:

```text
- user approval
- other people’s privacy
- children/privacy concerns
- whether the page is public or restricted
```

Do not reuse family images on `chippo.dev` unless explicitly intended.

---

## Cloudflare/GitHub deployment rules

Before deploying:

```text
[ ] no private images in public assets folder
[ ] no unredacted screenshots
[ ] no huge unnecessary images
[ ] correct filenames
[ ] correct paths
[ ] images load in local server
[ ] images load in Cloudflare preview
```

Remember:

```text
If it is in the public repo and deployed by Cloudflare Pages, it is public.
```

---

## Image QA checklist

Before finishing image work:

```text
[ ] image is approved for public use
[ ] no private data visible
[ ] no copyrighted/proprietary asset issue
[ ] file is in correct folder
[ ] filename is clear
[ ] file size is reasonable
[ ] alt text exists if meaningful
[ ] decorative image has empty alt/aria-hidden
[ ] image works on mobile
[ ] image does not reduce contrast
[ ] image path works locally
[ ] image path works in deployment preview
```

---

## Documentation updates

When important image assets change, update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md
VERSION_LOG.md
CHANGELOG.md
docs/content-inventory.md
```

Document:

```text
- image filename
- where it is used
- whether it is public
- source/ownership
- any TODOs for optimization/redaction
```

---

## Hard stop conditions

Stop before publishing if:

```text
- image contains visible secrets or private data
- source/license is unclear
- image belongs to Hermes/Huly/HackerTyper or another brand
- screenshot has unredacted IPs/tokens/names
- family/private photo approval is unclear
- file is accidentally in assets but should be private
```

---

## Definition of done

Image/asset work is done when:

```text
[ ] assets are organized
[ ] images are optimized enough for MVP
[ ] alt text is correct
[ ] private content is not exposed
[ ] branding/copyright risk is avoided
[ ] paths work locally
[ ] documentation/handoff is updated
```

---

## Summary

This skill keeps visual assets safe, organized and professional.

The most important rule:

```text
Only publish images that are approved, clean, optimized and legally/privacy safe.
```
