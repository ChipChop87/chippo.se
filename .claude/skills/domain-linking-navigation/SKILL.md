# domain-linking-navigation-skill

## Purpose

Use this skill when creating, reviewing or changing navigation, links, CTAs, footers, domain references or cross-domain flow for the Chippo projects.

This skill applies to:

- `chippo.se`
- `chippo.dev`
- future `angmans.se`
- GitHub links
- contact links
- Cloudflare Pages preview links
- custom domain links
- footer/navigation structure

The goal is to make the domains feel connected while keeping their roles separate.

---

## Core rule

Do not blur the purpose of the domains.

```text
chippo.se
= personal gateway / entry point

chippo.dev
= main cyber security portfolio

angmans.se
= future family/personal site, separate from cyber profile
```

Every link and navigation choice must support this separation.

---

## Domain map

```text
chippo.se
  -> primary CTA to chippo.dev
  -> GitHub
  -> contact

chippo.dev
  -> portfolio content
  -> case studies
  -> GitHub
  -> contact / LIA
  -> subtle footer link back to chippo.se

angmans.se
  -> later family site
  -> do not place in main cyber navigation unless explicitly requested
```

---

## Primary link flow

The main user journey should be:

```text
Visitor lands on chippo.se
-> clicks Enter Cyber Portfolio
-> arrives at chippo.dev
-> reviews case studies / skills / contact
```

Secondary paths:

```text
chippo.se -> GitHub
chippo.se -> Contact
chippo.dev -> GitHub
chippo.dev -> Contact
chippo.dev -> chippo.se footer link
```

---

## chippo.se navigation

`chippo.se` should have minimal navigation.

Recommended nav:

```text
CHIPPO.SE / CHIPPO ÅNGMAN
Portfolio
GitHub
Contact
```

Recommended CTA labels:

```text
Enter Cyber Portfolio
Open Cyber Portfolio
Öppna Cyber Portfolio
View GitHub
Contact
Kontakt
```

Recommended links:

```text
Portfolio -> https://chippo.dev
GitHub    -> https://github.com/ChipChop87
Contact   -> mailto:peter@chippo.se
```

Do not add large portfolio navigation to `chippo.se`.

Avoid:

```text
Case Studies
Skills
Documents
Cyber Lab
LIA pages
```

Those belong on `chippo.dev`.

---

## chippo.dev navigation

`chippo.dev` should have portfolio navigation.

Recommended nav:

```text
Start
Focus
Case Studies
Skills
Cyber Lab
About
Contact
```

Swedish variant:

```text
Start
Fokus
Case Studies
Kompetens
Cyber Lab
Om mig
Kontakt
```

If LIA is active, it may appear as:

```text
LIA
Kontakt / LIA
```

But LIA must remain temporary and removable.

---

## chippo.dev footer links

The footer should include:

```text
chippo.se
GitHub
Contact
Privacy/Access notes if needed
```

Recommended footer label:

```text
Personal gateway: chippo.se
```

or:

```text
Gateway: chippo.se
```

Do not make `chippo.se` compete with the main portfolio content.

---

## GitHub link rules

Use:

```text
https://github.com/ChipChop87
```

For external links opening in a new tab, use:

```html
target="_blank" rel="noopener noreferrer"
```

Example:

```html
<a href="https://github.com/ChipChop87" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

Do not link to unfinished/private repositories unless explicitly approved.

---

## Contact link rules

Recommended MVP contact:

```text
mailto:peter@chippo.se
```

Other known email options may be used only if approved for public display:

```text
chippo.angman@gmail.com
chippo@angmans.se
```

Preferred public contact for the domain projects:

```text
peter@chippo.se
```

For mailto links, use clear labels:

```html
<a href="mailto:peter@chippo.se">Contact</a>
```

or:

```html
<a href="mailto:peter@chippo.se">Kontakt</a>
```

Do not add fake form endpoints or API keys.

---

## LIA link rules

LIA content belongs mainly on `chippo.dev`.

LIA-related CTAs may include:

```text
Kontakt / LIA
Söker LIA
LIA-förfrågan
```

Rules:

```text
- LIA must be temporary.
- Mark LIA content in HTML comments.
- Do not make the whole portfolio dependent on LIA.
- Make it easy to remove after LIA is complete.
```

Example:

```html
<!-- TEMP: LIA SECTION - remove or update after LIA -->
<section id="lia">
  ...
</section>
<!-- END TEMP: LIA SECTION -->
```

---

## angmans.se link rules

`angmans.se` is a future family/personal site.

Rules:

```text
- Do not add it to chippo.dev main navigation by default.
- Do not mix family content with cyber portfolio.
- Do not add cyber/hacker styling to angmans.se planning.
- Only add a discreet link if explicitly requested.
```

If mentioned, use a neutral label:

```text
Family site
Familjesida
angmans.se
```

---

## Internal anchor links

Use clear section IDs.

For `chippo.dev`:

```html
<section id="home">
<section id="focus">
<section id="cases">
<section id="skills">
<section id="lab-console">
<section id="about">
<section id="contact">
```

For `chippo.se`, keep it simpler:

```html
<section id="home">
<section id="gateway">
<section id="contact">
```

Do not create empty anchor links like:

```html
<a href="#">Click</a>
```

Use real targets.

---

## URL consistency

Preferred production URLs:

```text
https://chippo.se
https://chippo.dev
https://www.chippo.se -> https://chippo.se
https://www.chippo.dev -> https://chippo.dev
```

Use HTTPS everywhere.

Avoid mixing:

```text
http://
pages.dev links in final public nav
temporary preview URLs in production HTML
```

Pages preview URLs may be used in documentation, not in final public navigation.

---

## External link safety

All external links opening in a new tab must use:

```html
rel="noopener noreferrer"
```

Examples of external links:

```text
GitHub
LinkedIn
Cloudflare Pages preview
external documentation
```

Internal links on the same domain do not need `target="_blank"`.

---

## Link text quality

Use descriptive link text.

Good:

```text
Enter Cyber Portfolio
View GitHub
Read case studies
Contact Peter
Open Cyber Lab
```

Avoid:

```text
click here
more
link
read
# 
```

---

## Navigation accessibility

Navigation must be keyboard-friendly.

Check:

```text
[ ] nav is reachable by Tab
[ ] active/focus state is visible
[ ] mobile menu can be opened by keyboard
[ ] mobile menu can be closed by keyboard
[ ] links have meaningful names
[ ] skip link may be added for larger pages
```

Suggested skip link:

```html
<a class="skip-link" href="#main">Skip to main content</a>
```

---

## Mobile navigation

For small screens:

```text
- keep navigation short
- avoid overcrowded headers
- use a simple menu if needed
- ensure touch targets are large enough
- keep primary CTA visible
```

For `chippo.se`, mobile nav may be as simple as:

```text
Portfolio
GitHub
Contact
```

For `chippo.dev`, use a collapsible or wrapped nav if needed.

---

## Footer requirements

Every public page should include:

```text
copyright
primary domain link
GitHub link
contact link
optional gateway/portfolio cross-link
```

Example `chippo.se` footer:

```text
© 2026 Peter "Chippo" Ångman. Gateway to chippo.dev.
chippo.dev · GitHub · Contact
```

Example `chippo.dev` footer:

```text
© 2026 Peter "Chippo" Ångman. Cyber Security Portfolio.
Gateway: chippo.se · GitHub · Contact
```

---

## Broken link checks

Before finishing navigation changes, check:

```text
[ ] chippo.se link works.
[ ] chippo.dev link works.
[ ] GitHub link works.
[ ] mailto link uses correct address.
[ ] all internal anchors exist.
[ ] footer links work.
[ ] no href="#" remains unless explicitly intentional and documented.
[ ] no preview URL is used in final production navigation.
```

---

## Documentation updates

When navigation/domain links change, update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md
VERSION_LOG.md
CHANGELOG.md
```

If deployment links or custom domains change, also update:

```text
CLOUDFLARE_INLEED_DEPLOYMENT_GUIDE.md
docs/deployment-notes.md
```

---

## Security and privacy notes

Do not link to:

```text
private documents
private school reports
private screenshots
personal letters
unreviewed PDFs
secret or internal repos
Cloudflare dashboard URLs
Inleed dashboard URLs
admin panels
```

If request-only documents are planned, link to a request/contact section instead of direct files.

---

## Suggested final link map

### chippo.se

```text
/
  -> https://chippo.dev
  -> https://github.com/ChipChop87
  -> mailto:peter@chippo.se
```

### chippo.dev

```text
/
  #focus
  #cases
  #skills
  #lab-console
  #about
  #contact
  -> https://github.com/ChipChop87
  -> https://chippo.se
  -> mailto:peter@chippo.se
```

### angmans.se

```text
future only
no default cyber links
```

---

## Definition of done

Navigation/linking work is done when:

```text
[ ] domain roles are preserved
[ ] primary CTA is clear
[ ] chippo.se points clearly to chippo.dev
[ ] chippo.dev has discreet link back to chippo.se
[ ] GitHub link is correct
[ ] contact link is correct
[ ] external links use safe attributes
[ ] all anchors exist
[ ] mobile navigation works
[ ] documentation is updated
```

---

## Summary

This skill ensures the domain ecosystem stays clean:

```text
chippo.se = entry
chippo.dev = portfolio
angmans.se = future family site
GitHub = code/projects
contact = approved public email
```

The most important rule:

```text
Link the sites together clearly, but never mix their roles.
```
