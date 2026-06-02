---
name: cloudflare-deploy-skill
description: Use this skill when preparing, reviewing, documenting, or troubleshooting deployment for Chippo domain projects using GitHub, Cloudflare Pages, Cloudflare DNS, HTTPS, custom domains, redirects, and Inleed as registrar.
---

# Cloudflare Deploy Skill

## Purpose

This skill defines the required deployment workflow for the Chippo domain projects:

- `chippo.se` — personal gateway / landing page.
- `chippo.dev` — cyber security portfolio.
- `angmans.se` — future family site, not part of the cyber portfolio.

The goal is to keep deployment simple, safe, reproducible, and well documented.

## Core deployment model

Use this model unless the user explicitly decides otherwise:

```text
Registrar:        Inleed
DNS:              Cloudflare
Hosting:          Cloudflare Pages
Source control:   GitHub
Deployment:       GitHub -> Cloudflare Pages
HTTPS:            Cloudflare
Primary domains:  chippo.se, chippo.dev
```

Inleed owns/renews the domain. Cloudflare manages DNS, HTTPS, security settings, redirects, and Pages hosting.

## Hard rules

Never deploy before local testing and review are complete.

Never modify DNS blindly.

Never remove existing MX, SPF, DKIM, DMARC, or mail-related DNS records unless the user explicitly approves it.

Never publish secrets, API keys, tokens, private reports, private screenshots, or unreviewed school documents.

Never give an AI agent broad Cloudflare or GitHub write access unless the user has explicitly chosen that workflow.

Never mix `chippo.se` and `chippo.dev` deployment settings in the same repo unless a monorepo has been explicitly chosen.

## Recommended repository model

Prefer separate repositories:

```text
ChipChop87/chippo.se
ChipChop87/chippo.dev
ChipChop87/angmans.se    # later
```

This reduces confusion and makes Cloudflare Pages easier to manage.

## Static site defaults

For MVP versions, prefer static HTML/CSS/JS.

Cloudflare Pages settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: /
Root directory: /
Production branch: main
```

Only use frameworks such as Next.js, Astro, Vite, or React if there is a clear reason and the decision is documented.

## Pre-deployment checklist

Before deployment, verify:

```text
[ ] Site works locally.
[ ] Mobile layout works.
[ ] Desktop layout works.
[ ] Navigation links work.
[ ] Contact/mailto links work.
[ ] No console errors.
[ ] No secrets in repository.
[ ] No private documents in repository.
[ ] UTF-8 works for Swedish characters.
[ ] README is updated.
[ ] INSTRUKTIONER_HOW_TO.md is updated.
[ ] handoff.md is updated.
[ ] VERSION_LOG.md or CHANGELOG.md is updated.
```

Local static test:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Secret and private-data scan

Before pushing/deploying, run a search similar to:

```bash
rg -i "password|secret|token|api_key|apikey|subscription|personnummer|private|todo|client_secret|access_key|connection string"
```

Also manually check:

```text
[ ] No real passwords.
[ ] No API keys or tokens.
[ ] No subscription IDs unless masked.
[ ] No private IP addresses from active systems.
[ ] No personal identity numbers.
[ ] No private addresses.
[ ] No unredacted screenshots.
[ ] No unpublished school reports.
[ ] No personal letters.
```

## Inleed nameserver workflow

Use Inleed only as registrar unless the user chooses otherwise.

Standard nameserver workflow:

```text
1. Add the domain as a site/zone in Cloudflare.
2. Cloudflare gives two assigned nameservers.
3. Log in to Inleed.
4. Open the domain settings.
5. Go to DNS / Nameservers.
6. Replace current nameservers with Cloudflare's nameservers.
7. Save.
8. Wait for propagation.
9. Confirm that Cloudflare shows the zone as Active.
```

Important:

```text
After Cloudflare nameservers are active, DNS records are managed in Cloudflare, not Inleed.
```

## Email DNS warning

Before changing nameservers, check whether the domain uses email.

If email is active, document and preserve:

```text
MX records
SPF TXT records
DKIM records
DMARC records
Autodiscover records if relevant
Any mail provider verification records
```

Do not break `peter@chippo.se` or any future domain email by replacing nameservers without copying mail-related DNS records to Cloudflare.

## Cloudflare Pages workflow

Standard Pages workflow:

```text
1. Cloudflare Dashboard.
2. Workers & Pages.
3. Create application.
4. Pages.
5. Connect to Git.
6. Select the correct GitHub repository.
7. Set framework preset to None for static sites.
8. Leave build command empty.
9. Set output directory to /.
10. Deploy.
11. Test the pages.dev preview URL.
12. Add custom domain.
13. Test HTTPS.
```

## Custom domain setup

For `chippo.se`:

```text
Primary: https://chippo.se
Also add: https://www.chippo.se
Preferred redirect: www.chippo.se -> chippo.se
```

For `chippo.dev`:

```text
Primary: https://chippo.dev
Also add: https://www.chippo.dev
Preferred redirect: www.chippo.dev -> chippo.dev
```

When adding custom domains in Cloudflare Pages, confirm that DNS records are created correctly.

## HTTPS and SSL/TLS

Recommended Cloudflare settings:

```text
SSL/TLS mode: Full
Always Use HTTPS: On
Automatic HTTPS Rewrites: On
```

For `.dev`, HTTPS is especially important because browsers expect secure connections for `.dev` domains.

## Redirect policy

Use one canonical URL per site.

Recommended:

```text
www.chippo.se  -> chippo.se
www.chippo.dev -> chippo.dev
```

Document any redirects in:

```text
INSTRUKTIONER_HOW_TO.md
handoff.md
```

## Cloudflare security defaults

For a portfolio or static gateway, start simple:

```text
Security Level: Medium
Bot Fight Mode: On, if appropriate
DDoS protection: default Cloudflare protection
WAF: default/free managed rules if available
Brotli: On
Auto Minify HTML/CSS/JS: On, if it does not break the site
Caching Level: Standard
```

Do not create overly strict Content Security Policy rules until assets, scripts, and deployment behavior are known.

## Preview vs production

Use three environments conceptually:

```text
Local:      developer machine
Preview:    Cloudflare Pages preview / pages.dev
Production: chippo.se or chippo.dev
```

Production must not be used as the only test environment.

## Rollback workflow

If deployment breaks:

```text
1. Stop making unrelated changes.
2. Identify the last working Git commit or Cloudflare Pages deployment.
3. Roll back using Git or Cloudflare Pages rollback.
4. Document the failure in handoff.md under Failed attempts.
5. Add the fix as a separate commit.
6. Re-test preview before production.
```

Common failure causes:

```text
Wrong output directory
Missing index.html
Broken relative paths
Case-sensitive filename mismatch
Missing assets
Wrong custom domain
DNS not propagated
HTTPS not active yet
Email DNS records not copied
```

## Required documentation after deployment

After deployment or deployment preparation, update:

```text
README.md
INSTRUKTIONER_HOW_TO.md
handoff.md
VERSION_LOG.md or CHANGELOG.md
SECURITY_NOTES.md if relevant
```

The deployment documentation must include:

```text
- GitHub repository name.
- Cloudflare Pages project name.
- Production branch.
- Build settings.
- Custom domains.
- DNS/nameserver status.
- HTTPS status.
- Redirect status.
- Known limitations.
- Next step.
```

## Per-domain notes

### chippo.se

`chippo.se` is the gateway site.

Deployment must keep it:

```text
- Static.
- Fast.
- Simple.
- Focused on linking to chippo.dev, GitHub, and contact.
```

Do not turn it into the full portfolio.

### chippo.dev

`chippo.dev` is the main cyber security portfolio.

Deployment must support:

```text
- Case studies.
- Cyber Lab Console.
- Contact/LIA section.
- Future content growth.
- Secure public/private content separation.
```

Do not publish full reports or private reference material by accident.

### angmans.se

`angmans.se` is future family/personal site.

Do not include cyber identity, HackerTyper, LIA material, or security lab content unless the user explicitly changes the plan.

## Final deployment confirmation template

When deployment work is done, report:

```text
Deployment summary
- Site:
- Repository:
- Pages project:
- Preview URL:
- Production URL:
- Build settings:
- Custom domains:
- HTTPS status:
- Redirect status:
- DNS/email notes:
- Tests performed:
- Known issues:
- Next step:
```

## Definition of done

Deployment work is complete only when:

```text
[ ] Local version works.
[ ] GitHub repository is clean and committed.
[ ] Cloudflare Pages deploy succeeds.
[ ] Preview URL works.
[ ] Custom domain works.
[ ] HTTPS works.
[ ] www behavior is correct.
[ ] No secrets or private files are public.
[ ] UTF-8 Swedish characters render correctly.
[ ] Deployment documentation is updated.
[ ] handoff.md contains the exact current state and next step.
```
