# clone-inspiration-skill

## Purpose

Use this skill when working on `chippo.se` or `chippo.dev` and the design direction references external inspiration such as Hermes Agent, Huly, HackerTyper, or similar websites.

The goal is to borrow **design principles, interaction ideas, layout patterns, and mood** without copying protected branding, text, logos, assets, exact layouts, proprietary fonts, or misleading identity.

This skill is especially important because:

- `chippo.se` should be Hermes-inspired, but not a Hermes clone.
- `chippo.dev` should be Huly-inspired, but not a Huly clone.
- HackerTyper should only be a harmless Cyber Lab / easter egg, not the main identity.
- The finished sites must feel original, personal, and suitable for a cybersecurity portfolio.

---

## Hard rule

Never copy a website directly.

Do not copy:

```text
- brand names
- logos
- exact text/copy
- proprietary images
- proprietary icons
- proprietary fonts
- exact section order if it creates clone-like output
- unique visual compositions that clearly identify the original site
- HTML/CSS/JS from another website without permission
```

Use inspiration only at the level of:

```text
- mood
- color direction
- layout principles
- interaction style
- spacing principles
- card hierarchy
- animation feeling
- navigation simplicity
- terminal/lab atmosphere
```

---

## Domain-specific inspiration rules

## chippo.se

`chippo.se` is a personal gateway / landing page.

Allowed inspiration:

```text
- dark mysterious gateway feeling
- teal/green/cream color mood
- hero image with subtle floating or hover movement
- terminal-like status block
- minimal navigation
- short identity-focused copy
- strong primary CTA to chippo.dev
```

Not allowed:

```text
- using Hermes/Nous branding
- copying Hermes text
- copying Hermes logo or imagery
- using proprietary Hermes fonts without license
- making visitors think the site is related to Hermes/Nous
- copying the exact page structure pixel-for-pixel
```

The final result should be:

```text
A Chippo-branded personal technical gateway with a Hermes-like mood, not a Hermes clone.
```

---

## chippo.dev

`chippo.dev` is the professional cybersecurity portfolio.

Allowed Huly-style inspiration:

```text
- clean SaaS-like structure
- large spacious sections
- modern cards
- case-study grid
- subtle gradients
- polished typography
- clear CTA hierarchy
- product-like presentation of projects
```

Not allowed:

```text
- using Huly logo
- copying Huly text
- copying exact Huly page sections
- copying proprietary icons or illustrations
- making chippo.dev look like an official Huly page
```

The final result should be:

```text
A professional cybersecurity portfolio with a modern Huly-inspired structure, clearly branded as Chippo.
```

---

## HackerTyper / Cyber Lab rules

HackerTyper is only inspiration for a small interactive effect.

Allowed:

```text
- fake terminal typing
- harmless visual demo
- Cyber Lab Console
- predefined fake lab output
- keyboard interaction for fun
- clear demo/easter-egg labeling
```

Not allowed:

```text
- making the whole site look like a fake hacking tool
- real scanning commands
- real exploit text
- real IP addresses
- real credentials
- fake phishing UI
- misleading access-granted messages without context
- aggressive hacker language
```

Preferred wording:

```text
Cyber Lab Console
Harmless interactive terminal demo
Portfolio easter egg
Visual lab mode
```

Avoid wording that sounds like real intrusion:

```text
Hack target
Exploit system
Steal credentials
Bypass access
Real scan
Crack password
```

---

## Design transformation process

When using an external site as inspiration, follow this process:

```text
1. Identify the useful design principles.
2. Translate those principles into Chippo's own brand.
3. Replace all original copy with original Chippo-specific copy.
4. Replace all original assets with user-owned or newly created assets.
5. Change layout enough that the result is not a recognizable clone.
6. Check accessibility, performance, and mobile behavior.
7. Document what was used as inspiration and what was intentionally changed.
```

---

## Safe inspiration examples

## Good

```text
Use a dark teal background, warm cream text, and a subtle hero-image hover effect for chippo.se.
```

```text
Use large cards and clear case-study sections on chippo.dev, inspired by modern SaaS landing pages.
```

```text
Create a small Cyber Lab Console that types safe fake lines such as: [verify] no secrets found.
```

## Bad

```text
Recreate the Hermes site exactly with Chippo's name inserted.
```

```text
Copy Huly's feature section layout and text directly.
```

```text
Use a HackerTyper-style full-screen fake hacking interface as the main homepage.
```

---

## Required originality checks

Before finalizing any design, check:

```text
[ ] The page has Chippo-specific text.
[ ] The page does not use protected logos or brand assets.
[ ] The page does not copy another site's exact structure.
[ ] The page does not claim affiliation with Hermes, Huly, Nous, or HackerTyper.
[ ] The page does not use proprietary fonts without license.
[ ] Images/assets are user-owned, generated for the project, or clearly licensed.
[ ] Visual inspiration has been transformed into a distinct Chippo design.
[ ] The result feels like a portfolio/gateway, not a clone.
```

---

## Content rules

All public content must be original.

Write content around Chippo's actual themes:

```text
- cybersecurity student
- practical labs
- Azure
- Python
- Windows Server
- Active Directory
- Linux
- networking
- documentation
- case studies
- secure portfolio deployment
```

Do not invent:

```text
- certifications
- employers
- senior roles
- client work
- production security experience
- offensive capabilities beyond ethical lab context
```

---

## Legal and ethical positioning

The sites must communicate:

```text
- learning
- practical labs
- defensive security
- documentation
- ethical cybersecurity
- portfolio work
```

They must not communicate:

```text
- unauthorized access
- criminal hacking
- phishing
- credential theft
- malware deployment
- impersonation of another brand
```

---

## Accessibility and motion rules

Inspired animation must not harm usability.

Requirements:

```text
[ ] Hover/floating effects are subtle.
[ ] Animations are disabled or reduced under prefers-reduced-motion.
[ ] Text remains readable over backgrounds/images.
[ ] Keyboard navigation works.
[ ] Cyber Lab can be closed with Escape and by button.
[ ] No autoplay sound.
[ ] Mobile users get a stable layout.
```

---

## Documentation requirements

When this skill is used, update project documentation with:

```text
- what inspired the design
- what was transformed
- what was not copied
- what assets are user-owned or placeholders
- what still needs review
```

Recommended documentation locations:

```text
README.md
SAMMANFATTNING.md
docs/design-notes.md
handoff.md
SECURITY_NOTES.md
```

---

## Final output checklist

Before ending a session involving design inspiration:

```text
[ ] chippo.se still feels like a gateway, not a full portfolio.
[ ] chippo.dev still feels like a portfolio, not a visual toy.
[ ] HackerTyper/Cyber Lab is clearly harmless and secondary.
[ ] No external brand assets were copied.
[ ] No protected text was copied.
[ ] No proprietary fonts were used without license.
[ ] All public text is original.
[ ] The design feels like Chippo's own identity.
[ ] UTF-8 Swedish text is preserved correctly.
[ ] Work is documented in handoff.md.
```

---

## Recommended prompt snippet

Use this in agent prompts when design inspiration is involved:

```text
Use Hermes, Huly, or HackerTyper only as visual and interaction inspiration. Do not copy branding, logos, exact text, proprietary assets, exact layout, or fonts. Transform the inspiration into a distinct Chippo-branded design. chippo.se should be a mysterious technical gateway. chippo.dev should be a professional cybersecurity portfolio. HackerTyper-style interaction may only appear as a small harmless Cyber Lab demo.
```
