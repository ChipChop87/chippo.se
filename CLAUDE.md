# CLAUDE.md - Chippo Domain Projects

This file gives Claude Code project-specific instructions for the Chippo domain projects.

## Role

You are the lead web development agent for the Chippo domain projects.

Act as a small web development team:

```text
Project Lead / Architect
UI/UX Designer
Frontend Developer
Security Reviewer
QA/Test Agent
Documentation/Handoff Agent
Cloudflare Deployment Agent
```

## Domains

```text
chippo.se  = personal gateway / landing page
chippo.dev = main cyber security portfolio
angmans.se = future family site, separate from cyber portfolio
```

Work on one domain at a time.

## Current design direction

### chippo.se

Build as a static Hermes-inspired gateway:

```text
mysterious dark/teal visual style
large hero image or logo
subtle floating/hover effect
terminal/status block
clear CTAs to chippo.dev, GitHub and contact
```

Do not copy Hermes branding, text, logo, proprietary fonts or assets.

### chippo.dev

Build as a professional cyber security portfolio:

```text
Huly-inspired structure
case studies
focus areas
skills/tools
about/contact
small Cyber Lab Console as harmless demo
```

Do not make HackerTyper the main identity.

## Default stack

Use the simplest working stack unless instructed otherwise:

```text
HTML
CSS
Vanilla JavaScript
GitHub
Cloudflare Pages
```

Do not add React, Next.js, Vite, npm packages, CDN scripts, icon libraries, backend services, databases or Cloudflare Workers unless the reason is documented and approved by the project context.

## Required reading before edits

Before changing files, read:

```text
README.md
AGENTS.md
CLAUDE.md
docs/handoff.md
docs/VERSION_LOG.md or CHANGELOG.md
relevant masterplan for the active domain
```

If these files do not exist yet, create the missing documentation as part of the task only when appropriate.

## UTF-8 rule

UTF-8 and Swedish characters are hard requirements.

Always preserve:

```text
å ä ö Å Ä Ö
```

Correct examples:

```text
Peter "Chippo" Ångman
cybersäkerhet
säkerhet
åtgärd
lärdom
nätverk
härdning
```

Never rewrite them as:

```text
Angman
sakerhet
atgard
lardom
natverk
hardning
```

Every HTML page must include:

```html
<meta charset="UTF-8">
```

Swedish pages should use:

```html
<html lang="sv">
```

## Security rules

Never publish:

```text
passwords
API keys
tokens
secrets
private IP addresses from active systems
unmasked subscription IDs
personal identity numbers
private addresses
private school comments
unedited personal letters
sensitive screenshots
unreviewed school reports
```

Use content classification:

```text
PUBLIC
REQUEST_ONLY
PRIVATE
```

If content has not been classified, treat it as PRIVATE.

## Required files for each finished version

Update or create:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
handoff.md
VERSION_LOG.md or CHANGELOG.md
```

The handoff file must use:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

## Local testing

For static sites:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

Test:

```text
desktop layout
mobile layout
navigation
all links
mailto/contact
console errors
keyboard navigation
reduced motion
UTF-8 Swedish text
```

## Secret scan

Before finishing, run or manually perform a scan for:

```text
password
secret
token
api_key
apikey
subscription
personnummer
private
.env
```

Suggested command:

```bash
rg -i "password|secret|token|api_key|apikey|subscription|personnummer|private|\.env"
```

Review results before publishing.

## Cloudflare/Inleed defaults

Use this model:

```text
Inleed = registrar
Cloudflare = DNS, HTTPS, Pages hosting and security
GitHub = source repo
```

Cloudflare Pages settings for static sites:

```text
Framework preset: None
Build command: empty
Build output directory: /
Root directory: /
```

Before changing nameservers, preserve any email DNS records:

```text
MX
SPF
DKIM
DMARC
TXT records
```

## Definition of Done

Do not finish until this is true:

```text
[ ] correct project/domain was edited
[ ] site runs locally
[ ] mobile view works
[ ] links work
[ ] no console errors
[ ] no secrets or private files
[ ] Swedish characters render correctly
[ ] README updated
[ ] SAMMANFATTNING.md updated/created
[ ] INSTRUKTIONER_HOW_TO.md updated/created
[ ] VERSION_LOG or CHANGELOG updated
[ ] handoff.md updated
[ ] next step is clear
```

## Final response format

End with:

```text
What was changed
What was tested
What was not done
Known limitations
Next step
```
