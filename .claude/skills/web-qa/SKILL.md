---
name: web-qa-skill
description: Use this skill whenever an AI agent tests, reviews, validates, or prepares chippo.se or chippo.dev for local preview, Cloudflare Pages preview, or production. It covers desktop/mobile QA, links, console errors, accessibility, performance, UTF-8, security checks, and deployment verification.
---

# web-qa-skill

## Purpose

This skill gives AI agents a practical QA workflow for the Chippo domain projects.

Use it when:

- testing `chippo.se`
- testing `chippo.dev`
- reviewing a pull request or AI-generated changes
- validating a local version before commit
- validating a Cloudflare Pages preview
- checking production after deploy
- preparing a handoff after a completed version

The goal is to prevent broken links, layout problems, console errors, accessibility issues, encoding problems, and unsafe published content.

---

## Core QA principle

Do not mark a version as finished until it has been tested in four stages:

```text
1. Local file/code review
2. Local browser test
3. Responsive/device test
4. Deployment/preview test
```

If a build system exists, the project must also pass its build command.

For static HTML/CSS/JS, local server testing is enough:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

---

## Project-specific QA priorities

### chippo.se

`chippo.se` is a gateway page. QA must focus on:

```text
- hero layout
- Hermes-inspired visual feeling without direct copying
- subtle floating/hover effect
- chippo.dev CTA
- GitHub link
- contact/mailto link
- mobile readability
- reduced-motion behavior
- no unnecessary dependencies
```

### chippo.dev

`chippo.dev` is a cyber security portfolio. QA must focus on:

```text
- case-study cards
- navigation sections
- Cyber Lab Console behavior
- contact / LIA sections
- dark/light mode if present
- document/publication safety
- no secrets or private data
- Cloudflare Pages deploy readiness
```

---

## Required local checks

Before any commit or deploy, run or perform:

```bash
git status
```

For static sites:

```bash
python -m http.server 8000
```

For projects with npm/build tooling:

```bash
npm install
npm run build
```

If no package manager is used, do not introduce one only for QA unless there is a clear reason.

---

## Browser test checklist

Test in a browser and confirm:

```text
[ ] Page loads without visible errors
[ ] Hero section displays correctly
[ ] Navigation works
[ ] All CTA buttons work
[ ] Footer links work
[ ] No horizontal scroll on mobile
[ ] Images/assets load correctly
[ ] Text is readable on all backgrounds
[ ] No layout overlap
[ ] No broken sections
[ ] No obvious placeholder text remains
```

---

## Responsive checklist

Test at least these widths:

```text
390px  - mobile
768px  - tablet
1280px - laptop
1440px - desktop
```

Confirm:

```text
[ ] Header/nav fits
[ ] Hero text wraps cleanly
[ ] Cards stack correctly
[ ] Buttons are usable on mobile
[ ] Images scale correctly
[ ] Terminal/Cyber Lab content does not overflow
[ ] Footer remains readable
```

---

## Link checklist

Check every visible link.

Required links for `chippo.se`:

```text
[ ] https://chippo.dev
[ ] https://github.com/ChipChop87
[ ] mailto:peter@chippo.se or approved contact email
```

Required links for `chippo.dev`:

```text
[ ] https://chippo.se if linked
[ ] https://github.com/ChipChop87
[ ] contact/mailto link
[ ] case-study anchors
[ ] Cyber Lab button/anchor if present
```

Rules:

```text
- No empty href="#" in finished versions.
- External links should use rel="noopener noreferrer" when target="_blank" is used.
- Do not add LinkedIn unless the user has approved the profile link.
```

---

## Console and runtime checks

Open browser DevTools and confirm:

```text
[ ] No JavaScript errors
[ ] No missing asset errors
[ ] No failed local file paths
[ ] No mixed content warnings after deploy
[ ] No blocked scripts caused by accidental external dependencies
```

If there are warnings, document whether they are harmless or need fixing.

---

## Accessibility checklist

Confirm:

```text
[ ] Exactly one clear h1 per page
[ ] Headings are in logical order
[ ] Images have useful alt text
[ ] Buttons and links have meaningful text
[ ] Keyboard navigation works with Tab
[ ] Focus states are visible
[ ] Forms have labels if forms exist
[ ] Color is not the only way to communicate status
[ ] Text contrast is readable
[ ] Motion respects prefers-reduced-motion
```

For Cyber Lab / terminal overlays:

```text
[ ] Can be closed with Escape
[ ] Has a visible close button
[ ] Does not trap keyboard focus permanently
[ ] Does not capture typing inside form fields
[ ] Does not autoplay sound
```

---

## UTF-8 and Swedish text checklist

Always verify Swedish characters:

```text
Ångman
cybersäkerhet
säkerhet
åtgärd
lärdom
nätverk
härdning
förstå
```

Required checks:

```text
[ ] HTML contains <meta charset="UTF-8">
[ ] html tag uses lang="sv" for Swedish pages
[ ] Markdown shows å, ä, ö, Å, Ä, Ö correctly
[ ] Browser preview shows Swedish letters correctly
[ ] PDF/exported docs show Swedish letters correctly when applicable
[ ] No accidental transliteration such as Angman, sakerhet, atgard, lardom
```

---

## Security and content safety checklist

Before publishing, search for sensitive terms:

```bash
rg -i "password|secret|token|api_key|apikey|subscription|personnummer|private|todo|fixme|key vault|client_secret"
```

Also check for:

```text
[ ] No passwords
[ ] No API keys
[ ] No tokens
[ ] No private IP addresses from active systems
[ ] No subscription IDs unless masked
[ ] No personal identity numbers
[ ] No private addresses
[ ] No unredacted school reports
[ ] No private screenshots
[ ] No personal letters
[ ] No copied Hermes/Huly/HackerTyper branding
```

If potentially sensitive content is found, classify it as:

```text
PUBLIC
REQUEST_ONLY
PRIVATE
```

Only PUBLIC content may be deployed openly.

---

## Performance checklist

For MVP versions, prefer simple static assets.

Check:

```text
[ ] No unnecessary frameworks
[ ] No unnecessary external CDN scripts
[ ] Images are not extremely large
[ ] Large images use lazy loading where appropriate
[ ] Animations are subtle
[ ] Page loads quickly on mobile
[ ] No tracking scripts unless explicitly approved
```

For files over 5 MB:

```bash
find . -type f -size +5M
```

If using PowerShell:

```powershell
Get-ChildItem -Recurse | Where-Object { $_.Length -gt 5MB } | Select-Object FullName, Length
```

---

## Cloudflare Pages preview checklist

After deploy to Cloudflare Pages preview, confirm:

```text
[ ] Preview URL loads
[ ] CSS loads
[ ] JS loads
[ ] Assets load
[ ] Routes/anchors work
[ ] Swedish characters display correctly
[ ] No mixed content warnings
[ ] No console errors
[ ] Contact/mailto works
[ ] Mobile layout still works
```

---

## Production checklist

For production domains:

```text
[ ] https://chippo.se loads if deploying chippo.se
[ ] https://www.chippo.se works or redirects correctly
[ ] https://chippo.dev loads if deploying chippo.dev
[ ] https://www.chippo.dev works or redirects correctly
[ ] HTTPS certificate is valid
[ ] Browser does not warn about security
[ ] Cloudflare zone is Active
[ ] Pages custom domain is connected
```

Recommended canonical direction:

```text
www.chippo.se  -> chippo.se
www.chippo.dev -> chippo.dev
```

---

## Documentation after QA

Every completed QA pass must update or create:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
VERSION_LOG.md or CHANGELOG.md
handoff.md
```

The handoff must contain:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

---

## Final QA report format

When finished, report:

```text
## QA Summary

Tested locally: yes/no
Tested responsive widths: yes/no
Checked links: yes/no
Checked console: yes/no
Checked accessibility basics: yes/no
Checked UTF-8 Swedish text: yes/no
Checked secrets/private content: yes/no
Checked Cloudflare preview: yes/no/not applicable
Checked production: yes/no/not applicable

## Issues found
- ...

## Fixed
- ...

## Still not done
- ...

## Next step
- ...
```

Do not claim everything is complete unless the checks were actually performed.

---

## Agent instruction snippet

Use this prompt when assigning QA work:

```text
You are the QA/Test Agent for the Chippo domain project. Use the web-qa-skill. Test the site locally first, then test responsive layouts, links, console errors, accessibility basics, UTF-8 Swedish text, and sensitive content. If Cloudflare Pages preview or production is available, test that too. Do not change the design direction unless required to fix a bug. Document every issue, fix, failed attempt, and next step in handoff.md.
```
