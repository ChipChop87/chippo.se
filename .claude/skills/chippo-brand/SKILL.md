---
name: chippo-brand-skill
description: Use this skill whenever an AI agent writes, edits, designs, reviews, or documents anything for the Chippo domain ecosystem. It keeps chippo.se, chippo.dev, and angmans.se clearly separated, preserves the correct brand direction, protects Swedish UTF-8 content, and prevents copied branding from Hermes, Huly, or HackerTyper.
---

# chippo-brand-skill

## Purpose

This skill protects the overall Chippo brand and domain strategy.

Use it for any work involving:

- `chippo.se`
- `chippo.dev`
- future `angmans.se`
- documentation for the domain projects
- AI-agent instructions
- UI copy
- case-study text
- README / handoff / How-To files
- Cloudflare / Inleed deployment documentation

The goal is to make every AI agent understand that the domains belong to the same person and ecosystem, but have different roles, tone, and design direction.

---

## Core domain roles

Always preserve this separation:

```text
chippo.se
= personal gateway / landing page
= Hermes-inspired, dark, technical, mysterious, artistic
= points visitors to chippo.dev, GitHub, and contact

chippo.dev
= main cyber security portfolio
= Huly-inspired structure, case studies, labs, GitHub, LIA support
= includes a small harmless Cyber Lab / HackerTyper-inspired feature

angmans.se
= future family/personal site
= warm, simple, separate from the cyber portfolio
= must not be mixed with the hacker/cyber identity
```

Never merge these roles unless the user explicitly says so.

---

## Brand identity

The person behind the sites is:

```text
Peter "Chippo" Ångman
```

The brand should feel:

```text
practical
technical
curious
hands-on
documented
security-aware
student-to-professional
honest about skill level
```

The brand should not feel:

```text
fake elite hacker
criminal
aggressive
corporate buzzword-heavy
overly childish
like a direct clone of Hermes, Huly, or HackerTyper
```

---

## Language rules

Use this language split unless the user says otherwise:

```text
AI-agent instructions: English
Technical documentation for agents: English
Owner-facing documentation: Swedish
Visible website content: Swedish by default
Optional future website language: English
Encoding: UTF-8 everywhere
```

Swedish content must preserve Swedish letters exactly:

```text
å ä ö Å Ä Ö
```

Never transliterate Swedish words.

Correct examples:

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

Incorrect examples:

```text
Angman
cybersakerhet
sakerhet
atgard
lardom
natverk
hardning
forsta
```

Every HTML file must include:

```html
<meta charset="UTF-8">
```

Swedish HTML pages should use:

```html
<html lang="sv">
```

---

## Design direction per domain

### chippo.se

`chippo.se` is the visual gateway.

Design direction:

```text
Hermes-inspired
mysterious
minimal
teal / dark green / cream
hero image or logo focus
subtle floating / hover / parallax effect
small terminal/status block
clear CTA to chippo.dev
```

Do:

- Use a strong hero.
- Use a subtle technical/mystical feeling.
- Link clearly to `https://chippo.dev`.
- Keep it short and memorable.
- Use static HTML/CSS/JS unless there is a strong reason not to.

Do not:

- Turn it into a full portfolio.
- Copy Hermes branding, text, proprietary fonts, logos, or assets.
- Use excessive Matrix/hacker effects.
- Make it visually noisy.

---

### chippo.dev

`chippo.dev` is the serious portfolio.

Design direction:

```text
Huly-inspired structure
modern portfolio
large sections
clean cards
case-study layout
cyber/terminal details
professional enough for LIA and companies
```

Do:

- Present practical case studies.
- Use the structure: Goal, Process, Result, Lessons learned.
- Make LIA content temporary and easy to remove.
- Include GitHub and contact paths.
- Include the Cyber Lab Console as a small optional detail.

Do not:

- Make HackerTyper the main identity.
- Present offensive security work without ethical/lab context.
- Publish private school reports, personal letters, secrets, or sensitive screenshots.
- Claim senior-level experience or certifications that do not exist.

---

### angmans.se

`angmans.se` is not a cyber site.

Design direction:

```text
family-oriented
warm
simple
photo-friendly
separate from chippo.dev and chippo.se
```

Do not add hacker/cyber styling to `angmans.se` unless the user explicitly changes the purpose.

---

## Content tone

Use a tone that is:

```text
clear
honest
practical
professional
Swedish-friendly
technically grounded
```

Avoid:

```text
exaggerated claims
fake authority
threatening language
overly dramatic hacker language
unverified credentials
```

Preferred phrasing for portfolio content:

```text
I build and document practical security projects.
I focus on analysis, hardening, verification, and documentation.
This case study shows the process and lessons learned.
```

Avoid phrasing like:

```text
I hack everything.
Elite hacker portfolio.
I break into systems.
Unstoppable cyber operator.
```

---

## Security-sensitive brand rules

Because this is a cyber security portfolio, brand trust matters.

Never publish:

```text
passwords
API keys
tokens
private IP addresses from active systems
subscription IDs without masking
personal identity numbers
private addresses
unredacted school reports
private screenshots
personal letters
teacher comments
private links
```

When needed, mask values like this:

```text
[REDACTED]
10.x.x.x
xxxx-xxxx-xxxx
example.local
```

Always package security work as:

```text
defensive
educational
lab-based
documented
permission-based
```

---

## Inspiration rules

Hermes, Huly, and HackerTyper are inspiration sources only.

Allowed:

```text
inspired visual mood
similar high-level layout principles
subtle hover/floating effects
clean SaaS-style cards
a harmless fake terminal demo
```

Not allowed:

```text
copied logos
copied text
copied proprietary assets
copied fonts without license
misleading brand imitation
passing the site off as Hermes/Huly/HackerTyper
```

Always make the result a distinct Chippo-branded implementation.

---

## When editing or creating content

Before writing, check:

```text
1. Which domain is this for?
2. Is the tone appropriate for that domain?
3. Is the content Swedish-facing or agent-facing?
4. Are Swedish letters preserved?
5. Could anything private or sensitive be exposed?
6. Is the content honest about skill level and project status?
7. Is LIA content temporary if used?
```

After writing, verify:

```text
[ ] chippo.se and chippo.dev roles are not mixed.
[ ] Swedish UTF-8 text is correct.
[ ] No copied third-party branding is present.
[ ] No secrets or private data are included.
[ ] Tone is professional and practical.
[ ] The user can understand what the page/document is for.
```

---

## Recommended shared vocabulary

Good terms:

```text
Cyber Security Portfolio
Practical Security Labs
Case Studies
Security Documentation
Cloud Security
Windows Server & Active Directory
Linux Server Hardening
Python for Security Automation
Network Analysis
Secure Portfolio Deployment
Cyber Lab Console
```

Good Swedish terms:

```text
cybersäkerhet
säkerhetsprojekt
praktiska labbar
case studies
dokumentation
härdning
åtgärd
verifiering
lärdom
nätverk
kontakt
LIA
```

---

## Output expectations

When this skill is used, the AI agent should produce output that:

```text
- respects the correct domain role
- preserves Swedish UTF-8 characters
- keeps the design direction consistent
- avoids copied branding
- avoids sensitive data exposure
- supports future AI-agent continuation
- is clear enough for Claude Code, Codex CLI, Cursor, Gemini CLI, or another coding agent
```

---

## Short instruction block for agents

Use this block when a shorter version is needed:

```text
Follow the Chippo brand rules. Keep chippo.se as a Hermes-inspired personal gateway, chippo.dev as a Huly-inspired cyber security portfolio with case studies, and angmans.se as a separate future family site. Preserve Swedish UTF-8 characters exactly. Do not copy Hermes, Huly, or HackerTyper branding. Do not publish secrets, private documents, internal IPs, personal data, or unredacted reports. Keep the tone practical, honest, documented, and security-aware.
```
