# content-case-study-skill

## Purpose

Use this skill when creating, editing, reviewing, or expanding case studies for the Chippo domain projects.

The goal is to turn school assignments, labs, reports, scripts, screenshots, and side projects into professional portfolio case studies without exposing private, sensitive, or unfinished material.

This skill applies mainly to:

- `chippo.dev` — cyber security portfolio and case studies
- future `docs.chippo.dev` or request-only document areas
- README and portfolio text connected to projects

It may also be used lightly for `chippo.se` if the gateway needs short teaser text that links to case studies on `chippo.dev`.

---

## Core rule

Always package projects as professional learning and security case studies, not as raw school assignments.

Do not present the user as more senior or more certified than they are. The tone should be honest, practical, and growth-oriented.

Preferred framing:

```text
Practical cyber security student portfolio
Documented labs and learning projects
Analysis → action → verification → documentation
```

Avoid framing:

```text
Elite hacker
Professional penetration tester
Guaranteed security expert
Offensive hacking specialist
```

---

## Required case study structure

Every case study should follow this structure when possible:

```md
# Case Study Title

## Category

## Status

## Summary

## Goal

## Context

## Process

## Result / Output

## Lessons Learned

## Tools and Technologies

## Security and Privacy Notes

## Publication Level

## Next Steps
```

For shorter homepage cards, use the compressed structure:

```text
Title
Category
Status
Short description
Goal
Process
Result
Lesson
Tags/tools
Publication level
```

---

## Recommended case study wording

Use clear, honest wording:

```text
This case study documents a practical lab where I analyzed, configured, tested, and documented security-related settings.
```

```text
The focus was not only to make the system work, but to verify the result and explain why each step mattered.
```

```text
The project shows how I work: identify the problem, apply a controlled change, verify the effect, and document the result.
```

Avoid exaggerated wording:

```text
I hacked the system.
I defeated enterprise security.
I exploited real targets.
I built an advanced red-team platform.
```

---

## Main case study categories

Use these categories for `chippo.dev`:

```text
Cloud Security & Azure
Python Security Automation
Windows Server Hardening
Active Directory Security
Linux Server Hardening
Network Analysis & Cisco Basics
Secure Portfolio Deployment
Documentation & Reporting
```

The first recommended case studies are:

```text
1. Secure Portfolio Deployment
2. Python Security Toolkit
3. Azure Security Baseline Lab
4. Windows Server Hardening Case
5. Active Directory Security Lab
6. Linux Server Hardening Case
7. Network Analysis & Cisco Basics
```

---

## PUBLIC / REQUEST_ONLY / PRIVATE classification

Every case study and linked document must be classified.

### PUBLIC

Safe to show openly:

```text
- cleaned summaries
- general goals
- general process descriptions
- sanitized screenshots
- safe command examples
- GitHub links to reviewed code
- lessons learned
```

### REQUEST_ONLY

May be shared manually after review:

```text
- full PDF reports
- school assignment PDFs
- detailed appendices
- selected screenshots
- CV, if approved
- deeper technical documentation
```

### PRIVATE

Never publish openly:

```text
- personal letters
- unedited school reports
- teacher comments
- personal data
- private addresses
- phone numbers
- personal identity numbers
- real secrets or passwords
- API keys or tokens
- active internal IP addresses
- private screenshots
- sensitive lab data
```

If classification is unclear, default to `PRIVATE` or `REQUEST_ONLY`, not `PUBLIC`.

---

## Sanitization rules

Before turning material into a public case study, check for:

```text
password
secret
token
api_key
apikey
subscription
tenant
client_secret
personnummer
private
internal
10.
192.168.
172.16.
```

This is not a complete list. The AI must also reason about screenshots, names, file paths, browser tabs, comments, and metadata.

Mask sensitive examples:

```text
[REDACTED]
10.x.x.x
192.168.x.x
xxxx-xxxx-xxxx
example.local
user@example.com
```

---

## Swedish content and UTF-8

Website content may be Swedish. Preserve Swedish characters exactly:

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
förståelse
```

Never transliterate:

```text
Angman
sakerhet
atgard
lardom
natverk
hardning
```

All HTML must include:

```html
<meta charset="UTF-8">
```

---

## Tone and style

Use a professional but personal tone.

Preferred style:

```text
clear
honest
practical
technical
student-friendly
portfolio-ready
```

Avoid:

```text
overclaiming
corporate buzzwords
Hollywood hacker language
unverified senior-level claims
fake certifications
fake client results
```

Good sentence pattern:

```text
In this lab, I focused on understanding how [technology] affects [security area], then documented the setup, verification steps, and lessons learned.
```

---

## How to convert a school assignment into a case study

When given a school assignment, do not publish it directly.

Convert it like this:

```text
Assignment title → Portfolio case title
Raw task → Goal and context
Commands/screenshots → Sanitized process summary
Teacher-specific details → Remove
Private data → Remove or mask
Full report → REQUEST_ONLY
Short public summary → PUBLIC
Reflection → Lessons learned
```

Example:

```text
Raw assignment:
"Bilaga A2 - Härdning Windows Server"

Portfolio case:
"Windows Server Hardening Case"

Public framing:
"A practical server hardening case focused on services, firewall rules, user permissions, Defender status, and verification before and after changes."
```

---

## Required case study sections in Swedish

For Swedish public case studies, use:

```md
# Titel

## Kategori

## Status

## Sammanfattning

## Mål

## Bakgrund

## Process

## Resultat

## Lärdom

## Verktyg och tekniker

## Säkerhets- och integritetsnoteringar

## Publiceringsnivå

## Nästa steg
```

Recommended wording:

```text
Det här caset visar hur jag arbetar praktiskt: analys, åtgärd, verifiering och dokumentation.
```

```text
Materialet är sammanfattat och rensat för att inte publicera privata uppgifter, känsliga screenshots eller oredigerade skolrapporter.
```

---

## Case study card template

Use this for `chippo.dev` homepage cards:

```md
### [Case title]

**Category:** [Category]  
**Status:** [Planned / In progress / Draft / Published]  
**Publication level:** [PUBLIC / REQUEST_ONLY / PRIVATE]

[2–4 sentence summary]

**Focus:** [short focus areas]  
**Tools:** [tools]  
**Next step:** [what remains]
```

---

## Full case study template

```md
# [Case Study Title]

## Category

[Cloud Security / Python / Windows Server / AD / Linux / Network / Web Deployment]

## Status

[Draft / In progress / Published / Needs sanitization]

## Summary

[Short overview of what the case is about.]

## Goal

[What the project/lab was trying to achieve.]

## Context

[Why this case matters and where it fits in the learning journey.]

## Process

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Result / Output

[What was created, verified, or documented.]

## Lessons Learned

[What the user learned technically and practically.]

## Tools and Technologies

- [Tool]
- [Tool]
- [Tool]

## Security and Privacy Notes

[What was removed, masked, or kept private.]

## Publication Level

[PUBLIC / REQUEST_ONLY / PRIVATE]

## Next Steps

[What should be improved later.]
```

---

## Case study examples

### Secure Portfolio Deployment

Use this case to show that the website itself is a technical project.

Focus areas:

```text
GitHub
Cloudflare Pages
custom domains
DNS
HTTPS
Inleed registrar flow
public/private content separation
```

### Azure Security Baseline Lab

Focus areas:

```text
Azure CLI
RBAC
Key Vault
Managed Identity
NSG
Azure Policy
logging
verification
```

### Windows Server Hardening Case

Focus areas:

```text
services
ports
firewall
Defender
users
permissions
verification
```

### Linux Server Hardening Case

Focus areas:

```text
users
sudo
SSH
UFW
Apache
services
packages
verification
```

---

## What not to include

Do not include:

```text
- full raw school reports in public pages
- private teacher comments
- real passwords or generated passwords
- raw Key Vault secret values
- subscription IDs unless masked
- private IP addresses from active systems
- screenshots with personal info
- offensive instructions without defensive context
- anything that implies unauthorized activity
```

---

## Review checklist

Before publishing a case study, verify:

```text
[ ] Title is professional and clear
[ ] Category is correct
[ ] Status is honest
[ ] Summary is short and useful
[ ] Goal is clear
[ ] Process explains what was done without exposing secrets
[ ] Result is realistic and not exaggerated
[ ] Lessons learned are included
[ ] Tools are listed
[ ] Publication level is set
[ ] No private data is included
[ ] No secrets or tokens are included
[ ] No sensitive screenshots are included
[ ] Swedish characters display correctly
[ ] Case fits the portfolio-first strategy
```

---

## Recommended output when this skill is used

When the AI creates or edits a case study, it should end with:

```text
Created/updated case study: [name]
Publication level: [PUBLIC / REQUEST_ONLY / PRIVATE]
Files changed: [list]
Sanitization notes: [what was removed or masked]
Next step: [what should be done next]
```

---

## Final instruction

The purpose of a Chippo case study is to show practical learning, documented technical work, and security-aware thinking. Keep the tone professional, truthful, and safe. Package the work clearly, but never publish private or sensitive material just to make the portfolio look more complete.
