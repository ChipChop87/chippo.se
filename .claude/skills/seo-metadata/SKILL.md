# seo-metadata-skill

## Purpose

Use this skill when creating, reviewing or updating SEO, metadata, social preview tags, favicon, robots.txt, sitemap.xml, titles or descriptions for the Chippo domain projects.

This skill applies to:

- `chippo.se`
- `chippo.dev`
- future `angmans.se`
- Open Graph previews
- social sharing previews
- browser tab titles
- search engine snippets
- Cloudflare Pages static deployments

The goal is to make the sites clear, professional, discoverable and accurate without exaggerating skills, certifications or claims.

---

## Core rule

Metadata must accurately describe the page.

Do not use metadata to exaggerate experience, imply certifications, claim employment, or make the site sound like an offensive hacking service.

Use:

```text
portfolio
cyber security student
practical labs
case studies
documented security work
Azure / Python / Windows / Linux / networks
```

Avoid:

```text
elite hacker
penetration expert
offensive operator
guaranteed security
certified specialist unless true
company/role claims that are not true
```

---

## Domain metadata roles

### chippo.se

`chippo.se` is a personal gateway.

Metadata should say:

```text
personal gateway
Peter "Chippo" Ångman
cyber security student
links to portfolio, GitHub and contact
```

It should not say:

```text
full cyber security portfolio
case study archive
document portal
```

Those belong to `chippo.dev`.

### chippo.dev

`chippo.dev` is the main cyber security portfolio.

Metadata should say:

```text
Cyber Security Portfolio
case studies
practical security labs
Azure, Python, Windows Server, Active Directory, Linux and networking
```

It may mention LIA only while LIA is active.

### angmans.se

Future family site.

Do not use cyber metadata by default.

---

## Required head tags

Every HTML page should include:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>...</title>
<meta name="description" content="...">
```

Swedish pages should use:

```html
<html lang="sv">
```

If English pages are added later:

```html
<html lang="en">
```

---

## UTF-8 requirement

Metadata must preserve Swedish characters.

Correct:

```text
Peter "Chippo" Ångman
cybersäkerhet
säkerhetsprojekt
åtgärd
lärdom
nätverk
härdning
```

Incorrect:

```text
Angman
cybersakerhet
sakerhetsprojekt
atgard
lardom
natverk
hardning
```

Do not replace Swedish characters with HTML entities unless there is a specific technical reason.

---

## Recommended title: chippo.se

Use one of these:

```html
<title>Chippo.se | Peter "Chippo" Ångman</title>
```

or:

```html
<title>Peter "Chippo" Ångman | Personal Gateway</title>
```

Swedish variant:

```html
<title>Chippo.se | Peter "Chippo" Ångman</title>
```

Keep titles concise.

Avoid:

```text
Home
Untitled
Portfolio
Best Hacker Portfolio
Hermes Clone
```

---

## Recommended meta description: chippo.se

Suggested:

```html
<meta name="description" content="Personlig gateway för Peter &quot;Chippo&quot; Ångman – cybersäkerhetsstudent med fokus på praktiska labbar, dokumenterade lösningar och tekniska projekt.">
```

Alternative English/SV mix:

```html
<meta name="description" content="Personal gateway for Peter &quot;Chippo&quot; Ångman with links to cyber security portfolio, GitHub projects and contact.">
```

Rules:

```text
- mention gateway
- mention portfolio link
- keep it short
- do not claim it is the full portfolio
```

---

## Recommended title: chippo.dev

Use:

```html
<title>Peter "Chippo" Ångman | Cyber Security Portfolio</title>
```

or:

```html
<title>Chippo.dev | Cyber Security Portfolio</title>
```

Swedish-focused variant:

```html
<title>Peter "Chippo" Ångman | Cybersäkerhetsportfolio</title>
```

Recommended default:

```html
<title>Peter "Chippo" Ångman | Cyber Security Portfolio</title>
```

---

## Recommended meta description: chippo.dev

Permanent portfolio version:

```html
<meta name="description" content="Cyber Security Portfolio för Peter &quot;Chippo&quot; Ångman med praktiska case studies inom Azure, Python, Windows Server, Active Directory, Linux, nätverk och systemhärdning.">
```

LIA-active version:

```html
<meta name="description" content="Cyber Security Portfolio för Peter &quot;Chippo&quot; Ångman. Cybersäkerhetsstudent som söker LIA och visar praktiska case studies inom Azure, Python, Windows Server, Active Directory, Linux och nätverk.">
```

Rules:

```text
- use LIA wording only while LIA is active
- keep portfolio first
- do not make LIA the permanent identity
- do not promise services that are not offered
```

---

## Open Graph tags

Add Open Graph metadata for better previews.

### chippo.se

```html
<meta property="og:title" content="Chippo.se | Peter &quot;Chippo&quot; Ångman">
<meta property="og:description" content="Personlig gateway till portfolio, GitHub och kontakt för Peter &quot;Chippo&quot; Ångman.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://chippo.se/">
<meta property="og:image" content="https://chippo.se/assets/og-image.png">
```

### chippo.dev

```html
<meta property="og:title" content="Peter &quot;Chippo&quot; Ångman | Cyber Security Portfolio">
<meta property="og:description" content="Praktiska case studies inom cybersäkerhet, Azure, Python, Windows Server, Active Directory, Linux och nätverk.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://chippo.dev/">
<meta property="og:image" content="https://chippo.dev/assets/og-image.png">
```

---

## Twitter/X card tags

Optional but recommended:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Peter &quot;Chippo&quot; Ångman | Cyber Security Portfolio">
<meta name="twitter:description" content="Praktiska case studies inom cybersäkerhet, Azure, Python, Windows Server, Active Directory, Linux och nätverk.">
<meta name="twitter:image" content="https://chippo.dev/assets/og-image.png">
```

Adjust domain and title for `chippo.se`.

---

## Canonical URL

Add canonical tags to avoid confusion between `www` and apex.

### chippo.se

```html
<link rel="canonical" href="https://chippo.se/">
```

### chippo.dev

```html
<link rel="canonical" href="https://chippo.dev/">
```

Preferred URLs:

```text
https://chippo.se
https://chippo.dev
```

`www` should redirect or point correctly.

---

## Favicon requirements

Recommended files:

```text
assets/favicon.ico
assets/favicon-32x32.png
assets/apple-touch-icon.png
assets/og-image.png
```

Recommended HTML:

```html
<link rel="icon" href="/assets/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
```

Rules:

```text
- favicon must be owned/created for Chippo
- do not use Hermes/Huly/HackerTyper logos
- test browser tab display
```

---

## robots.txt

For a public static site, create:

```text
User-agent: *
Allow: /

Sitemap: https://chippo.dev/sitemap.xml
```

For `chippo.se`:

```text
User-agent: *
Allow: /

Sitemap: https://chippo.se/sitemap.xml
```

Do not block the whole site unless intentionally private.

---

## sitemap.xml

For simple static MVP, include main page.

### chippo.se

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://chippo.se/</loc>
  </url>
</urlset>
```

### chippo.dev

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://chippo.dev/</loc>
  </url>
</urlset>
```

If case-study pages are added later, add them explicitly.

---

## 404 page

Create a simple `404.html`.

For `chippo.se`:

```text
This gateway page could not be found.
Return to chippo.se or enter the cyber portfolio at chippo.dev.
```

For `chippo.dev`:

```text
This portfolio page could not be found.
Return to the case studies or contact page.
```

Include links back to:

```text
/
https://chippo.se or https://chippo.dev as appropriate
GitHub/contact if useful
```

---

## LIA metadata rules

If LIA is active:

```text
- mention LIA in meta description if useful
- keep portfolio first
- mark LIA content as temporary in HTML
```

When LIA ends:

```text
- remove or update LIA from title/description
- remove LIA status from OG text
- remove temporary LIA snippets
- update sitemap/README/handoff if sections change
```

Do not create a permanent identity around temporary LIA status.

---

## Case study metadata

If separate case-study pages are added later, each should have unique metadata.

Pattern:

```html
<title>Azure Security Baseline Lab | Peter "Chippo" Ångman</title>
<meta name="description" content="Case study om säker grundkonfiguration i Azure med fokus på RBAC, Key Vault, nätverk, policy, loggning och verifiering.">
```

Do not expose private details in metadata.

Avoid metadata with:

```text
internal IPs
private customer/school names
teacher comments
full report contents
sensitive screenshots
```

---

## Privacy and indexing

Do not index private or request-only documents.

Rules:

```text
- do not put private PDFs in public folders
- do not link request-only files directly in sitemap
- do not expose private filenames in metadata
- do not rely only on robots.txt for privacy
```

Private material must not be deployed.

---

## Metadata QA checklist

Before finishing, check:

```text
[ ] charset UTF-8 exists.
[ ] viewport exists.
[ ] title is accurate.
[ ] meta description is accurate.
[ ] Open Graph title exists.
[ ] Open Graph description exists.
[ ] Open Graph URL matches domain.
[ ] Open Graph image path is correct or TODO documented.
[ ] canonical URL matches preferred domain.
[ ] favicon links exist or TODO documented.
[ ] robots.txt exists.
[ ] sitemap.xml exists.
[ ] no private info in metadata.
[ ] Swedish characters display correctly.
```

---

## Social preview checklist

If possible, verify preview output:

```text
[ ] title looks good
[ ] description is not too long
[ ] image loads
[ ] correct domain appears
[ ] no old LIA text remains after LIA mode is removed
```

---

## Documentation updates

When SEO/metadata changes, update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md
VERSION_LOG.md
CHANGELOG.md
```

If deployment domain behavior changes, also update:

```text
CLOUDFLARE_INLEED_DEPLOYMENT_GUIDE.md
```

---

## Do not over-optimize MVP

For the first version, do not spend too much time on advanced SEO.

MVP needs:

```text
title
description
Open Graph basics
favicon placeholder or TODO
robots.txt
sitemap.xml
canonical URL
```

Advanced later:

```text
separate case-study pages
structured data
language routes /sv/ and /en/
richer OG images
blog/writeup metadata
```

---

## Definition of done

SEO/metadata work is done when:

```text
[ ] metadata accurately matches the domain role
[ ] no exaggerated claims
[ ] no private data
[ ] UTF-8 works
[ ] Open Graph basics exist
[ ] favicon/robots/sitemap are present or documented
[ ] canonical URL is correct
[ ] documentation and handoff are updated
```

---

## Summary

This skill keeps metadata clean and truthful:

```text
chippo.se = personal gateway
chippo.dev = cyber security portfolio
LIA = temporary, not permanent identity
SEO = accurate, safe and professional
```

The most important rule:

```text
Metadata must describe what is actually public on the page, not what the project may become later.
```
