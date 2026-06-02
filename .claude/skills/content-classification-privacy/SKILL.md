# content-classification-privacy-skill

## Purpose

Use this skill when reviewing, preparing, publishing, summarizing or linking content for the Chippo domain projects.

This skill controls how school assignments, reports, screenshots, CV material, personal letters, lab notes, project files and case-study content are classified before anything becomes public.

It applies to:

- `chippo.dev`
- `chippo.se`
- future `angmans.se`
- case studies
- documents
- screenshots
- PDF exports
- GitHub repositories
- portfolio content
- request-only material
- private reference folders

---

## Core rule

No document, screenshot, report or file may be published before it has a classification.

Use exactly these levels:

```text
PUBLIC
REQUEST_ONLY
PRIVATE
```

If classification is uncertain, treat the material as:

```text
PRIVATE
```

until manually reviewed.

---

## Classification overview

```text
PUBLIC
= safe to show openly on the website or public GitHub.

REQUEST_ONLY
= can be shared manually after approval, but should not be directly public.

PRIVATE
= must not be published, linked or deployed.
```

---

## PUBLIC

PUBLIC material may be shown openly.

Examples:

```text
- short case-study summaries
- cleaned project descriptions
- sanitized screenshots
- general tools/skills lists
- public GitHub repository links
- high-level process descriptions
- general commands without secrets
- lessons learned
- sanitized architecture diagrams
```

PUBLIC content must not contain:

```text
- personal identity numbers
- private addresses
- private phone numbers
- real passwords
- tokens
- API keys
- subscription IDs
- internal IP addresses from active systems
- private school feedback
- private names unless approved
- sensitive screenshots
- unredacted reports
```

---

## REQUEST_ONLY

REQUEST_ONLY material can be mentioned publicly but not downloaded directly from the public site.

Examples:

```text
- full school reports
- full PDF assignments
- full appendices/bilagor
- detailed screenshots
- CV if not intended as fully public
- selected documentation for LIA/company review
- project reports with some private context
```

How to present REQUEST_ONLY material publicly:

```text
- show a summary
- show title/category/status
- describe what can be requested
- use contact/mailto flow
- do not expose the actual file directly
```

Recommended wording:

```text
Full report available on request.
Fullständig rapport kan delas efter godkänd förfrågan.
```

---

## PRIVATE

PRIVATE material must never be published.

Examples:

```text
- personal letters
- unedited school reports
- unredacted screenshots
- private feedback from teachers
- personal identity numbers
- private addresses
- private phone numbers
- real credentials
- secrets
- API keys
- tokens
- private DNS values
- Azure subscription IDs
- internal IP addresses from active systems
- home network details
- private chat logs
- private family content
- anything involving other people without approval
```

PRIVATE material may be used only as private reference if it is kept outside the public repo and not copied into public output.

---

## Default rule for school material

School assignments and reports should start as:

```text
REQUEST_ONLY
```

unless they have been manually cleaned and approved for public summary.

The public website should usually show:

```text
- case-study summary
- goal
- process
- result
- lesson learned
- tools used
```

not the full original submission.

---

## Default rule for personal letters

Personal letters are always:

```text
PRIVATE
```

They may be used only to understand writing tone if explicitly provided for that purpose.

They must not be:

```text
- quoted publicly
- uploaded to the website
- linked from the portfolio
- placed in a public GitHub repo
- included in screenshots
```

---

## Default rule for CV

CV can be:

```text
PUBLIC
REQUEST_ONLY
PRIVATE
```

depending on the user's decision.

Until explicitly approved for public publication, treat CV as:

```text
REQUEST_ONLY
```

or:

```text
PRIVATE
```

if it contains sensitive personal details.

A public portfolio can say:

```text
CV available on request.
```

---

## Screenshot rules

Before using screenshots publicly, check for:

```text
- names
- email addresses
- IP addresses
- hostnames
- subscription IDs
- tenant IDs
- tokens
- paths with usernames
- file names containing private info
- teacher/school/internal comments
- browser tabs
- notifications
- account names
```

If any sensitive detail exists:

```text
redact it
crop it
blur it
or do not publish it
```

Screenshots from labs are usually:

```text
REQUEST_ONLY
```

until cleaned.

---

## IP address rules

Do not publish real internal or active-system IP addresses.

Allowed in public content:

```text
- generic examples
- documentation ranges
- masked values
```

Safe examples:

```text
10.x.x.x
192.0.2.10
198.51.100.25
203.0.113.7
[REDACTED-IP]
```

Avoid:

```text
home network IPs
school lab IPs if identifying
active Azure public IPs
private internal topology details
```

---

## Secret and credential rules

Never publish:

```text
password
secret
token
API key
private key
connection string
SAS token
Azure subscription ID unless masked
tenant ID unless approved/masked
client secret
SSH private key
.env files
```

Mask if needed:

```text
[REDACTED]
xxxx-xxxx-xxxx
10.x.x.x
example-value-only
```

---

## Repo rules

Public repos must not contain:

```text
private-reference/
.env
.env.local
unredacted PDFs
private screenshots
personal letters
teacher feedback
large raw exports
credentials
```

Recommended `.gitignore` entries:

```gitignore
.env
.env.local
*.log
private-reference/
node_modules/
dist/
.cache/
.DS_Store
Thumbs.db
```

---

## private-reference folder

If the AI needs private source material, place it only in:

```text
private-reference/
```

Rules:

```text
- must be in .gitignore
- must not be deployed
- must not be linked
- must not be referenced in sitemap
- must not be used as asset source
```

---

## Content inventory

For `chippo.dev`, create or update:

```text
docs/content-inventory.md
```

Each item should include:

```text
- file/title
- type
- topic/category
- classification: PUBLIC / REQUEST_ONLY / PRIVATE
- short summary
- publication status
- needs redaction: yes/no
- where it may appear
- notes
```

Example:

```md
| Item | Type | Classification | Public use | Notes |
|---|---|---|---|---|
| Windows Server Hardening Report | PDF/report | REQUEST_ONLY | Summary only | Needs screenshot review |
| Personal LIA Letter | letter | PRIVATE | None | Do not publish |
| Python Log Analysis Project | code/project | PUBLIC | Case study + GitHub link | Remove local paths first |
```

---

## Case-study conversion

When turning private or request-only material into public case studies, use this safe structure:

```text
Title
Category
Status
Goal
Process
Result
Lessons learned
Tools/technologies
Publication level
```

Focus on what was learned and built, not on sensitive raw details.

Good public phrasing:

```text
The lab focused on analyzing exposed services, reducing attack surface and verifying changes through documented checks.
```

Avoid:

```text
Here are the exact internal hostnames, IP addresses, passwords and full screenshots from the lab.
```

---

## Request-only access flow

MVP should use:

```text
mailto:
manual review
manual sharing
```

Recommended public wording:

```text
Some full reports and appendices are not published directly. They can be shared on request after manual review.
```

Do not build an automated document portal in MVP unless explicitly requested.

Future options:

```text
Cloudflare Worker
Turnstile
R2
signed URLs
manual approval workflow
```

---

## GDPR-light note

If the site accepts access requests, include a simple privacy note.

Example:

```text
The information you send is used only to handle your access request. It is not sold or shared further. Requests are reviewed manually before any material is shared.
```

Swedish:

```text
Uppgifterna används endast för att hantera din åtkomstförfrågan. De säljs inte och delas inte vidare. Förfrågan granskas manuellt innan eventuell åtkomst ges.
```

---

## Public content tone

The portfolio should sound:

```text
professional
honest
defensive/security-focused
learning-oriented
practical
documented
```

Avoid:

```text
boasting
fake seniority
aggressive hacker language
threatening language
claims of unauthorized access
unverified certifications
```

---

## Review checklist before publishing

Before content becomes public:

```text
[ ] Classification exists.
[ ] No secrets.
[ ] No tokens/API keys.
[ ] No private IPs or hostnames.
[ ] No personal identity numbers.
[ ] No private addresses/phone numbers.
[ ] No private school feedback.
[ ] No personal letters.
[ ] No unredacted screenshots.
[ ] No private PDFs.
[ ] No misleading claims.
[ ] No unauthorized third-party branding/assets.
[ ] UTF-8 Swedish characters display correctly.
```

---

## Documentation updates

When content is classified or changed, update:

```text
docs/content-inventory.md
README.md
SAMMANFATTNING.md
docs/handoff.md
VERSION_LOG.md
CHANGELOG.md
```

If request-only content is planned, update:

```text
INSTRUKTIONER_HOW_TO.md
SECURITY_NOTES.md
```

---

## Security review integration

This skill should be used together with:

```text
security-review-skill
content-case-study-skill
handoff-docs-skill
seo-metadata-skill
```

If these skills disagree, follow the most restrictive/safest classification.

---

## Hard stop conditions

Stop before publishing if:

```text
- classification is missing
- the content includes possible personal data
- the content includes possible secrets
- the material is an unedited school report
- the material is a personal letter
- screenshots are not reviewed
- the user has not approved public sharing
```

Document the issue in `handoff.md`.

---

## Definition of done

Content is ready for public use only when:

```text
[ ] It is classified as PUBLIC.
[ ] It has been reviewed for secrets/private data.
[ ] It is summarized appropriately.
[ ] It does not expose sensitive screenshots or raw reports.
[ ] It uses professional defensive wording.
[ ] It preserves Swedish characters.
[ ] It is listed in content-inventory.md if applicable.
```

---

## Summary

This skill protects the portfolio from leaking private or sensitive material.

The most important rule:

```text
If unsure, classify as PRIVATE and do not publish.
```
