# AGENTS.md - Chippo Domain Projects

This file defines the shared operating rules for AI agents working on the Chippo domain projects.

## Project scope

The project consists of three separate domain tracks:

```text
chippo.se  = personal gateway / landing page
chippo.dev = main cyber security portfolio
angmans.se = future family site, separate from the cyber profile
```

Agents must understand the whole ecosystem, but work on one domain at a time.

## Primary rule

Do not mix `chippo.se` and `chippo.dev` into the same implementation unless explicitly instructed.

`chippo.se` should stay short, visual and gateway-focused.  
`chippo.dev` should be the professional portfolio with case studies, lab documentation and a small Cyber Lab feature.

## Required reading order

Before changing files, read:

```text
1. README.md
2. AGENTS.md or CLAUDE.md
3. docs/handoff.md
4. docs/VERSION_LOG.md or CHANGELOG.md
5. the relevant masterplan for the current domain
6. active files listed in handoff.md
```

If a file does not exist yet, create it only when it is part of the current task.

## Agent roles

Use these roles either as separate agents or as mental checkpoints:

```text
Project Lead / Architect
UI/UX Designer
Frontend Developer
Integration Agent
Security Reviewer
QA/Test Agent
Documentation/Handoff Agent
Cloudflare Deployment Agent
```

## Workflow

Follow this order:

```text
Plan -> Build -> Test -> Review -> Document -> Deploy -> Verify -> Handoff
```

Do not skip documentation.

## Technical defaults

For MVP versions, prefer:

```text
HTML5
CSS3
Vanilla JavaScript
GitHub
Cloudflare Pages
Cloudflare DNS
```

Do not introduce frameworks, package managers, external CDN libraries, backend services, databases or Cloudflare Workers unless there is a clear reason and the decision is documented.

## UTF-8 and Swedish characters

UTF-8 is a hard requirement.

Always preserve:

```text
å ä ö Å Ä Ö
```

Examples that must remain correct:

```text
Peter "Chippo" Ångman
cybersäkerhet
säkerhet
åtgärd
lärdom
nätverk
härdning
```

Never transliterate Swedish text:

```text
Wrong: Angman, sakerhet, atgard, lardom
Right: Ångman, säkerhet, åtgärd, lärdom
```

Every HTML file must include:

```html
<meta charset="UTF-8">
```

Swedish pages should use:

```html
<html lang="sv">
```

## Security and content rules

Never publish:

```text
passwords
API keys
tokens
secrets
private IP addresses from active systems
subscription IDs without masking
personal identity numbers
private addresses
private school comments
unedited personal letters
sensitive screenshots
unreviewed school reports
```

Use clear content classification:

```text
PUBLIC       = safe to publish openly
REQUEST_ONLY = may be shared manually after approval
PRIVATE      = must not be published
```

## Design rules

### chippo.se

`chippo.se` should be:

```text
Hermes-inspired, not a Hermes clone
mysterious, technical and visual
static, fast and simple
focused on routing visitors to chippo.dev, GitHub and contact
```

Do not use Hermes branding, logos, proprietary fonts, copy or assets.

### chippo.dev

`chippo.dev` should be:

```text
Huly-inspired, not a Huly clone
professional and case-study-focused
portfolio first, LIA second
clear about analysis -> action -> verification -> documentation
```

The HackerTyper-inspired feature must be a small harmless Cyber Lab demo, not the main identity.

## Required documentation after work

Create or update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
handoff.md
VERSION_LOG.md or CHANGELOG.md
```

For `handoff.md`, use exactly:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

## Required testing

Before finishing, verify:

```text
[ ] local site runs
[ ] desktop layout works
[ ] mobile layout works
[ ] all links work
[ ] contact/mailto works
[ ] no console errors
[ ] no secrets or private files
[ ] UTF-8 and Swedish characters work
[ ] README is updated
[ ] handoff.md is updated
[ ] next step is documented
```

For static sites, use:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment defaults

Use:

```text
Registrar: Inleed
DNS: Cloudflare
Hosting: Cloudflare Pages
Code: GitHub
```

Cloudflare Pages settings for static HTML/CSS/JS:

```text
Framework preset: None
Build command: empty
Build output directory: /
Root directory: /
```

Preserve email DNS records before changing nameservers.

## Final rule

Do not end the task with only code changes. End with verified status, updated documentation and a useful handoff for the next agent.
