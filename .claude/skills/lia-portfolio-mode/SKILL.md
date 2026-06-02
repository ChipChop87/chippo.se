# lia-portfolio-mode-skill

## Purpose

Use this skill when adding, reviewing or changing LIA-related content on `chippo.dev`.

The goal is to make LIA visible when relevant, while keeping `chippo.dev` as a long-term cyber security portfolio first.

This skill applies to:

- `chippo.dev`
- hero text
- contact section
- LIA status badges
- LIA buttons
- metadata
- case-study presentation
- README and documentation
- future removal/update of LIA content

---

## Core rule

`chippo.dev` must be:

```text
portfolio first
LIA second
```

LIA is temporary. The portfolio is permanent.

The AI must never make the whole site depend on LIA status.

---

## Correct positioning

Correct:

```text
Peter "Chippo" Ångman is building a cyber security portfolio with documented practical work.
He may currently be open for LIA.
```

Incorrect:

```text
The entire site exists only to find LIA.
All headings and metadata are LIA-only.
Case studies are hidden behind LIA messaging.
```

---

## Permanent vs temporary content

### Permanent portfolio content

These sections should remain useful after LIA:

```text
Hero
Focus areas
Case Studies
Skills
Cyber Lab Console
About
Contact
GitHub links
Secure Portfolio Deployment
```

### Temporary LIA content

These must be easy to remove or update:

```text
Söker LIA badge
LIA CTA button
LIA-specific hero sentence
LIA section
LIA text in contact section
LIA metadata
availability period
```

---

## Required marking in code

All LIA-specific HTML must be clearly marked.

Use:

```html
<!-- TEMP: LIA SECTION - remove or update after LIA -->
...
<!-- END TEMP: LIA SECTION -->
```

For smaller snippets:

```html
<!-- TEMP: LIA STATUS -->
<span class="status-pill">Söker LIA</span>
<!-- END TEMP: LIA STATUS -->
```

This makes future cleanup easy.

---

## Recommended LIA toggle

If JavaScript state/config is used, use a simple config object:

```js
const portfolioMode = {
  liaActive: true
};
```

Rules:

```text
- default can be true while the user is actively seeking LIA
- all LIA text should be easy to find
- do not hide critical portfolio content behind the toggle
```

---

## Hero rules

The hero may include LIA, but not as the main identity.

Good hero structure:

```text
Peter "Chippo" Ångman
Cyber Security Portfolio

Jag bygger och dokumenterar praktiska säkerhetsprojekt inom Azure, Python,
Windows Server, Active Directory, Linux och nätverk.
```

Optional temporary LIA sentence:

```text
Just nu söker jag LIA där jag kan utvecklas inom säker drift, cloud security, identitet, nätverk eller säkerhetsanalys.
```

Avoid:

```text
Söker LIA
Söker LIA
Söker LIA
```

as the main repeated message.

---

## Status badge rules

A status badge is allowed.

Examples:

```text
Söker LIA
Open for LIA
Portfolio in progress
Building practical case studies
```

Recommended:

```html
<!-- TEMP: LIA STATUS - remove or update after LIA -->
<span class="status-pill">Söker LIA</span>
<!-- END TEMP: LIA STATUS -->
```

Do not use urgent/aggressive text like:

```text
Hire me now
Need placement ASAP
```

Keep it professional.

---

## CTA rules

Recommended permanent CTAs:

```text
Se case studies
GitHub
Kontakt
```

Optional temporary LIA CTA:

```text
Kontakt / LIA
LIA-förfrågan
```

Rules:

```text
- permanent CTAs should remain after LIA
- LIA CTA must be removable
- do not replace all CTAs with LIA-only buttons
```

---

## Contact section rules

Permanent contact text:

```text
Kontakta mig gärna vid frågor om projekt, portfolio, GitHub eller framtida möjligheter inom IT och cybersäkerhet.
```

Temporary LIA addition:

```text
Företag som är nyfikna på LIA, projekt eller teknisk inriktning får gärna höra av sig.
```

Use approved contact methods only:

```text
mailto:peter@chippo.se
GitHub: https://github.com/ChipChop87
LinkedIn: TODO until ready
```

---

## Metadata rules

If LIA is active, metadata may mention LIA once.

Example active version:

```html
<meta name="description" content="Cyber Security Portfolio för Peter &quot;Chippo&quot; Ångman. Cybersäkerhetsstudent som söker LIA och visar praktiska case studies inom Azure, Python, Windows Server, Active Directory, Linux och nätverk.">
```

Permanent version:

```html
<meta name="description" content="Cyber Security Portfolio för Peter &quot;Chippo&quot; Ångman med praktiska case studies inom Azure, Python, Windows Server, Active Directory, Linux, nätverk och systemhärdning.">
```

When LIA is no longer active:

```text
- remove LIA from meta description
- remove LIA badges
- remove LIA-only CTA
- update contact text
- update handoff/version log
```

---

## Tone rules

LIA content should sound:

```text
professional
curious
practical
honest
learning-oriented
```

Avoid:

```text
desperate
overconfident
too salesy
fake seniority
too informal
```

Good wording:

```text
Jag söker en LIA-plats där jag kan fortsätta utvecklas praktiskt inom säker drift, systemhärdning, cloud security, identitet eller nätverk.
```

---

## Case study relation

Case studies should not be written only for LIA.

They should show long-term value:

```text
goal
process
result
lesson learned
tools
security thinking
documentation ability
```

It is fine to mention:

```text
useful as LIA discussion material
```

but do not make every case sound like an application letter.

---

## Removal checklist after LIA

When LIA ends or the user wants permanent portfolio mode:

```text
[ ] remove/update status badge
[ ] remove/update LIA CTA
[ ] remove/update LIA hero sentence
[ ] remove/update LIA section
[ ] remove/update contact LIA wording
[ ] remove/update LIA metadata
[ ] remove comments or leave archived notes if useful
[ ] update README
[ ] update VERSION_LOG
[ ] update handoff
```

---

## Documentation requirements

When adding or changing LIA mode, update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md
VERSION_LOG.md
CHANGELOG.md
```

How-To should explain:

```text
- where LIA content is located
- how to turn it off
- which text should be changed after LIA
```

---

## Security/privacy rules

Do not publish:

```text
personal identity number
private address
private phone number
private school comments
unredacted CV
personal letters
private company contact messages
```

If CV is linked, confirm it is approved for public use. Otherwise use:

```text
CV available on request.
```

---

## Recommended HTML section

Example structure:

```html
<!-- TEMP: LIA SECTION - remove or update after LIA -->
<section id="lia" class="section lia-section">
  <p class="section-eyebrow">LIA</p>
  <h2>Söker LIA inom cybersäkerhet</h2>
  <p>
    Jag söker en LIA-plats där jag kan utvecklas inom säker drift,
    systemhärdning, cloud security, identitet, nätverk eller säkerhetsanalys.
  </p>
  <a href="mailto:peter@chippo.se" class="button">Kontakt / LIA-förfrågan</a>
</section>
<!-- END TEMP: LIA SECTION -->
```

---

## QA checklist

Before finishing LIA work:

```text
[ ] portfolio is still the main identity
[ ] LIA content is marked as temporary
[ ] LIA can be removed without breaking the page
[ ] permanent CTAs still exist
[ ] metadata is accurate
[ ] contact link works
[ ] no private CV/personal data is exposed
[ ] mobile layout works
[ ] Swedish characters display correctly
[ ] documentation explains how to update/remove LIA
```

---

## Definition of done

LIA mode is done when:

```text
[ ] LIA is visible but not dominant
[ ] portfolio content remains strong
[ ] all LIA snippets are easy to find
[ ] metadata matches the active mode
[ ] contact flow is clear
[ ] privacy is protected
[ ] documentation and handoff are updated
```

---

## Summary

This skill keeps `chippo.dev` useful both now and later.

The most important rule:

```text
LIA is a temporary module. The cyber security portfolio is the permanent product.
```
