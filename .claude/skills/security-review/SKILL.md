# security-review-skill

## Purpose

Use this skill when reviewing `chippo.se`, `chippo.dev`, documentation, assets, case studies, screenshots, deployment notes, or any content that may become public.

The goal is to prevent accidental publication of sensitive information, private documents, credentials, internal lab details, or content that could make the portfolio look irresponsible or offensive.

This skill applies to both:

```text
chippo.se  = personal gateway / landing page
chippo.dev = cyber security portfolio / case studies / LIA material
```

It also applies to future related domains such as:

```text
angmans.se
lab.chippo.dev
docs.chippo.dev
api.chippo.dev
```

---

## Core rule

Before any file is published, committed, deployed, linked, or shown publicly, classify and review it.

Every document, asset, screenshot, report, case study, and code sample must be treated as one of:

```text
PUBLIC
REQUEST_ONLY
PRIVATE
```

No uncertain file should be treated as public.

When in doubt, mark it as:

```text
REQUEST_ONLY or PRIVATE
```

---

## Classification levels

### PUBLIC

Content that may be openly visible on `chippo.se`, `chippo.dev`, GitHub, Cloudflare Pages, screenshots, README files, or public portfolio pages.

Allowed examples:

```text
- Clean case study summaries
- General project descriptions
- Sanitized screenshots
- Public GitHub links
- Generic commands without secrets
- General explanations of learning outcomes
- High-level architecture diagrams without sensitive values
- Public contact information approved by the owner
```

PUBLIC content should be useful, professional, and safe.

---

### REQUEST_ONLY

Content that should not be openly published but may be shared manually after review.

Examples:

```text
- Full school reports
- Assignment PDFs
- Appendices
- Detailed lab documentation
- CV, if not intended to be fully public
- Longer technical write-ups with details that need review
- Screenshots that may contain usernames, hostnames, paths, IPs, or metadata
```

REQUEST_ONLY content can be referenced publicly with language like:

```text
Full report available on request.
Sanitized screenshots available on request.
Detailed documentation can be shared after manual review.
```

Do not upload REQUEST_ONLY material directly to a public repo unless it has been sanitized and reclassified as PUBLIC.

---

### PRIVATE

Content that must not be published, linked, committed to public repositories, deployed, or shown on the website.

Examples:

```text
- Passwords
- API keys
- Access tokens
- Secret values
- Private keys
- Personnummer / Swedish personal identity numbers
- Private addresses
- Private phone numbers
- Personal letters
- Unedited school reports
- Teacher comments
- Sensitive screenshots
- Internal IP addresses from active systems
- Subscription IDs
- Tenant IDs if not explicitly approved
- Private DNS records
- Real customer/company data
- Unredacted lab data
- Any material that exposes another person without approval
```

PRIVATE material can be used only as reference during planning if the owner has provided it for that purpose. It must not be copied into public output.

---

## Mandatory secret scan

Before deployment or commit, search for common sensitive terms.

Recommended command:

```bash
rg -i "password|passwd|pwd|secret|token|api_key|apikey|bearer|client_secret|private_key|subscription|tenant|personnummer|ssn|nyckel|lösenord|hemlighet|internal|private|todo|fixme"
```

Also search for likely IP addresses:

```bash
rg -n "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b"
```

Do not automatically publish IP addresses. Review context first.

Safe examples may include documentation ranges such as:

```text
192.0.2.0/24
198.51.100.0/24
203.0.113.0/24
10.x.x.x
172.16.x.x
192.168.x.x
```

Still, prefer masking unless the address is clearly fictional or intentionally generic.

---

## Redaction rules

Use clear masking when details are needed conceptually but should not be exposed.

Examples:

```text
[REDACTED]
10.x.x.x
192.168.x.x
xxxx-xxxx-xxxx
user@example.com
<PRIVATE_EMAIL>
<PRIVATE_PERSON>
<PRIVATE_HOSTNAME>
<PRIVATE_TOKEN>
```

Do not use fake redaction that still reveals enough to reconstruct the value.

Bad:

```text
p@ssw0rd123 -> p@ss****123
```

Good:

```text
[REDACTED_PASSWORD]
```

---

## Portfolio tone and ethical cyber framing

`chippo.dev` is a defensive cybersecurity portfolio. It must show learning, analysis, hardening, documentation, verification, and responsible lab work.

Prefer language like:

```text
- security lab
- hardening
- analysis
- verification
- documentation
- defensive security
- controlled lab environment
- authorized testing
- learning project
- case study
```

Avoid exaggerated or risky language like:

```text
- real hacking
- exploit companies
- bypass security
- steal credentials
- attack targets
- break into systems
- undetectable
- weaponized
```

If offensive security concepts are mentioned, add clear context:

```text
This was performed only in a controlled lab environment for learning and defensive understanding.
```

---

## Brand and copyright review

### For `chippo.se`

The site may be Hermes-inspired, but must not copy Hermes/Nous branding.

Do not publish:

```text
- Hermes logos
- Hermes/Nous proprietary images
- copied Hermes copy/text
- proprietary fonts without license
- design elements that make the site look like the real Hermes service
```

Allowed:

```text
- dark teal/green mood
- terminal-inspired layout
- subtle floating hero effect
- own image/logo/illustration
- own text
- own brand identity
```

### For `chippo.dev`

The site may be Huly-inspired, but must not copy Huly branding.

Do not publish:

```text
- Huly logos
- Huly copy
- Huly screenshots as design assets
- cloned components that appear identical
```

Allowed:

```text
- large clean sections
- cards
- gradients
- modern SaaS-inspired spacing
- case-study layout
```

### HackerTyper / Cyber Lab

The HackerTyper-inspired feature must be clearly harmless.

Required framing:

```text
- demo
- visual easter egg
- harmless interactive terminal
- no real commands
- no real targets
- no real data
```

Do not make it look like a real intrusion tool.

---

## Contact information review

Only publish contact details approved by the owner.

Known allowed examples from the planning documents:

```text
peter@chippo.se
chippo.angman@gmail.com
GitHub: https://github.com/ChipChop87
```

If uncertain, use placeholders:

```html
<!-- TODO: Add approved contact link -->
```

Do not publish private phone numbers or addresses unless explicitly approved.

---

## Repository safety

Before pushing to GitHub, verify that public repositories do not contain private material.

`.gitignore` should include at least:

```gitignore
.env
.env.local
*.log
.DS_Store
Thumbs.db
node_modules/
dist/
.cache/
.vscode/
.idea/
private-reference/
```

If `private-reference/` exists, it must not be committed to a public repo.

---

## Screenshot review

Before using screenshots in portfolio or reports, check for:

```text
- usernames
- full names
- e-mail addresses
- tenant/subscription IDs
- IP addresses
- hostnames
- browser bookmarks
- open tabs
- file paths
- desktop notifications
- access tokens
- keys or secrets
- school/private comments
```

If a screenshot is valuable but contains sensitive information, create a sanitized copy.

Do not rely on “small text is unreadable”. Zoomed images and high-DPI screenshots can reveal details.

---

## Documentation review

Public documentation should explain what was done without exposing private details.

Good public structure:

```text
Goal
Process
Result
Lessons learned
Tools used
Security considerations
What is not public
```

Avoid dumping full raw reports directly into the public site.

For case studies, prefer short, sanitized summaries on the site, with request-only details available manually.

---

## Deployment safety

Before Cloudflare Pages deployment:

```text
[ ] Public files are reviewed.
[ ] No secrets are present.
[ ] No private-reference folder is included.
[ ] No unedited reports are included.
[ ] No sensitive screenshots are included.
[ ] Contact details are approved.
[ ] Metadata does not expose private data.
[ ] Open Graph image is safe.
[ ] robots.txt and sitemap do not reveal private paths.
```

Do not deploy just because the page builds. Security review is part of Definition of Done.

---

## Final checklist

The Security Review Agent must confirm:

```text
[ ] All public content is classified as PUBLIC.
[ ] REQUEST_ONLY content is not deployed publicly.
[ ] PRIVATE content is not committed or deployed.
[ ] Secret scan has been run.
[ ] IP/hostname scan has been reviewed.
[ ] Screenshots are sanitized.
[ ] Contact details are approved.
[ ] Hermes/Huly inspiration is not copied branding.
[ ] Cyber Lab is clearly a harmless demo.
[ ] LIA content is professional and temporary.
[ ] No school/private reports are public without review.
[ ] README / handoff / VERSION_LOG mention what was reviewed.
```

---

## Output format after review

When this skill is used, end with a short security review summary:

```md
## Security Review Summary

### Status
Pass / Needs fixes / Blocked

### Reviewed
- Files:
- Assets:
- Links:
- Metadata:

### Findings
- ...

### Required fixes before publish
- ...

### Classification notes
- PUBLIC:
- REQUEST_ONLY:
- PRIVATE:
```

If any serious issue exists, mark the result as:

```text
Blocked
```

Do not recommend deployment until the issue is fixed.
