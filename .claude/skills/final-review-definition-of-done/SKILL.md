# final-review-definition-of-done-skill

## Purpose

Use this skill at the end of any meaningful work session, version, feature pass or deployment preparation for the Chippo domain projects.

This skill acts as the final gate before an AI agent is allowed to say:

```text
Done
Klar
Ready for deploy
Ready for review
```

It applies to:

- `chippo.se`
- `chippo.dev`
- future `angmans.se`
- documentation-only updates
- skill updates
- Cloudflare deployment work
- content/case-study updates
- design/frontend changes
- PDF/Markdown export work

---

## Core rule

The agent must not claim a version is done unless the relevant checks are completed or clearly marked as not completed.

If something could not be checked, the agent must say so honestly and record it in the handoff.

---

## Final review flow

Use this order:

```text
1. Identify what changed.
2. Check domain/project scope.
3. Run relevant local tests.
4. Check links/navigation.
5. Check responsive behavior.
6. Check accessibility basics.
7. Check UTF-8 Swedish characters.
8. Check security/privacy.
9. Check assets and metadata.
10. Check documentation.
11. Update handoff.
12. State what is done and not done.
```

---

## Project scope check

Before finalizing, confirm:

```text
[ ] The work belongs to the correct domain.
[ ] chippo.se did not become a full portfolio.
[ ] chippo.dev did not become only a gateway.
[ ] angmans.se was not mixed into cyber content.
[ ] LIA content, if used, remains temporary.
[ ] Cyber Lab, if used, remains a small harmless demo.
```

---

## Local functionality checklist

For frontend/code changes:

```text
[ ] Site runs locally.
[ ] index.html loads.
[ ] CSS loads.
[ ] JavaScript loads.
[ ] No obvious browser console errors.
[ ] Images/assets load.
[ ] Contact/mailto works.
[ ] Main CTA works.
[ ] Footer links work.
[ ] No broken internal anchors.
```

Recommended static test:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

If local testing was not possible, document why.

---

## Responsive checklist

Check or reason through:

```text
[ ] Desktop layout works.
[ ] Laptop layout works.
[ ] Tablet layout works.
[ ] Mobile layout works.
[ ] No horizontal scroll.
[ ] Hero section does not overflow.
[ ] Cards stack correctly.
[ ] Buttons are tappable.
[ ] Navigation works on mobile.
[ ] Cyber Lab/terminal does not overflow.
```

Recommended widths:

```text
1440px
1280px
768px
390px
```

---

## Accessibility checklist

Minimum:

```text
[ ] One clear h1.
[ ] Logical heading order.
[ ] Links have meaningful text.
[ ] Buttons are real buttons.
[ ] Forms have labels if used.
[ ] Keyboard navigation works.
[ ] Focus states are visible.
[ ] Images have alt text if meaningful.
[ ] Decorative images are marked appropriately.
[ ] Reduced motion is respected.
[ ] Contrast is readable.
```

If full accessibility testing was not possible, document limitations.

---

## UTF-8 checklist

Check that Swedish characters display correctly in all relevant outputs.

Required test words:

```text
Peter "Chippo" Ångman
cybersäkerhet
säkerhet
åtgärd
lärdom
nätverk
härdning
från
förstå
```

Checklist:

```text
[ ] HTML contains <meta charset="UTF-8">.
[ ] Swedish characters render in browser.
[ ] Markdown files preserve å/ä/ö/Å/Ä/Ö.
[ ] PDF files preserve å/ä/ö/Å/Ä/Ö if PDF was created.
[ ] No accidental transliteration like Angman/sakerhet/fran.
```

---

## Security and privacy checklist

Before publishing or saying ready:

```text
[ ] No passwords.
[ ] No tokens.
[ ] No API keys.
[ ] No private keys.
[ ] No .env files.
[ ] No real secrets.
[ ] No private IPs from active systems.
[ ] No subscription IDs unless masked/approved.
[ ] No personal identity numbers.
[ ] No private addresses.
[ ] No unredacted screenshots.
[ ] No private school feedback.
[ ] No personal letters.
[ ] No private reports in public folders.
[ ] No private-reference folder included in public deploy.
```

Recommended scan:

```bash
rg -i "password|secret|token|api_key|apikey|subscription|personnummer|private|todo|fixme"
```

Matches must be reviewed manually.

---

## Content classification checklist

For `chippo.dev` content:

```text
[ ] Every document/content item is PUBLIC / REQUEST_ONLY / PRIVATE.
[ ] Full reports are not directly public unless approved.
[ ] Personal letters are PRIVATE.
[ ] CV is not public unless approved.
[ ] Screenshots are cleaned or kept request-only/private.
[ ] Case studies are summarized safely.
[ ] content-inventory.md is updated if relevant.
```

If classification is missing, do not mark the content as publish-ready.

---

## Design inspiration checklist

Before finalizing design work:

```text
[ ] Hermes inspiration is not copied.
[ ] Huly inspiration is not copied.
[ ] HackerTyper is only used as safe inspiration.
[ ] No third-party logos/assets/fonts are used without permission.
[ ] The design feels like Chippo, not a clone.
```

---

## Image/asset checklist

```text
[ ] Image paths work.
[ ] No private images in assets/.
[ ] No unredacted screenshots.
[ ] Images have useful filenames.
[ ] Meaningful images have alt text.
[ ] Decorative images are marked correctly.
[ ] Favicon/OG image are present or TODO is documented.
[ ] File sizes are reasonable or optimization TODO is documented.
```

---

## SEO/metadata checklist

For public web pages:

```text
[ ] title exists.
[ ] meta description exists.
[ ] viewport exists.
[ ] charset exists.
[ ] Open Graph basics exist or TODO is documented.
[ ] canonical URL is correct or TODO is documented.
[ ] robots.txt exists.
[ ] sitemap.xml exists.
[ ] 404.html exists.
[ ] Metadata does not contain private data.
[ ] Metadata does not exaggerate claims.
```

---

## DNS/deployment checklist

If deployment is part of the task:

```text
[ ] GitHub repo/branch is correct.
[ ] Cloudflare Pages project is correct.
[ ] Build settings are documented.
[ ] Custom domain is documented.
[ ] HTTPS is checked or TODO is documented.
[ ] www/apex behavior is checked or TODO is documented.
[ ] Rollback path is documented.
[ ] E-mail DNS records are considered before nameserver changes.
```

If nameservers or DNS are involved:

```text
[ ] MX records checked.
[ ] SPF checked.
[ ] DKIM checked.
[ ] DMARC checked or TODO documented.
[ ] Mail-related records are DNS-only where needed.
```

---

## Documentation checklist

Before finishing, update relevant docs.

For code/site changes:

```text
[ ] README.md
[ ] SAMMANFATTNING.md
[ ] INSTRUKTIONER_HOW_TO.md
[ ] VERSION_LOG.md
[ ] CHANGELOG.md
[ ] handoff.md or docs/handoff.md
```

For content changes:

```text
[ ] docs/content-inventory.md if relevant
[ ] SECURITY_NOTES.md if relevant
```

For deployment changes:

```text
[ ] deployment guide/notes
[ ] rollback notes
```

---

## Required handoff structure

The handoff must include exactly:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

The next agent must understand:

```text
what was attempted
what changed
what failed
what files matter
what to do first next
```

---

## Git/final state checklist

Before finalizing a repo session:

```text
[ ] git status checked.
[ ] changed files understood.
[ ] accidental files removed/ignored.
[ ] private-reference is ignored.
[ ] commit exists or next commit step is documented.
[ ] no destructive commands are needed.
```

If Git is not available:

```text
[ ] backup exists or backup TODO is documented.
```

---

## Documentation/PDF export checklist

If documents were created:

```text
[ ] Markdown file exists.
[ ] PDF file exists if requested.
[ ] PDF first page checked.
[ ] PDF last page checked.
[ ] Page count noted if useful.
[ ] Swedish characters checked.
[ ] no private data included.
[ ] download links provided.
```

---

## Definition of Done: chippo.se

`chippo.se` is done for a version when:

```text
[ ] static page works locally
[ ] Hermes-inspired but original gateway design exists
[ ] hero works
[ ] subtle floating/hover effect works or TODO documented
[ ] CTA to chippo.dev works
[ ] GitHub link works
[ ] contact link works
[ ] responsive layout works
[ ] no secrets/private data
[ ] documentation updated
[ ] handoff updated
```

---

## Definition of Done: chippo.dev

`chippo.dev` is done for a version when:

```text
[ ] static page works locally
[ ] professional portfolio structure exists
[ ] focus areas exist
[ ] case studies exist
[ ] skills section exists
[ ] Cyber Lab is safe/small if included
[ ] contact/LIA module works if included
[ ] LIA is marked temporary
[ ] content is classified
[ ] no secrets/private data
[ ] responsive layout works
[ ] documentation updated
[ ] handoff updated
```

---

## Definition of Done: skills package

A skill package is done when:

```text
[ ] each skill has a clear purpose
[ ] each skill has rules/checklists
[ ] filenames are clear
[ ] recommended .claude/skills path is known
[ ] AGENTS.md/CLAUDE.md mention relevant skills or can reference them
[ ] no duplicate/conflicting rules remain unresolved
```

---

## Definition of Done: documentation package

A documentation package is done when:

```text
[ ] core masterplans exist
[ ] deployment guide exists
[ ] UTF-8 rules exist
[ ] AI/tooling recommendations exist
[ ] AGENTS.md exists
[ ] CLAUDE.md exists
[ ] Swedish owner PDFs exist where requested
[ ] all PDFs were checked
[ ] filenames are understandable
```

---

## If something is not done

Do not hide it.

Use:

```text
Not completed:
- Mobile test could not be verified in browser.
- Cloudflare deployment not tested because credentials/access were not available.
- Favicon is still a TODO.
```

This is better than pretending the version is finished.

---

## Recommended final response format

At the end of a work session, report:

```text
## Completed
- ...

## Files created/changed
- ...

## Checked
- ...

## Not completed
- ...

## Next step
- ...
```

For user-facing chat, keep it concise but honest.

---

## Hard stop conditions

Do not say ready/done if:

```text
- secrets may be present
- private documents may be public
- deployment could break e-mail DNS
- the domain target is unclear
- a large destructive change was made without rollback
- required handoff is missing
- user-requested PDF/Markdown file was not actually created
```

---

## Summary

This skill is the final gate.

The most important rule:

```text
Done means tested, safe, documented and handed off — or clearly marked as partially done.
```
