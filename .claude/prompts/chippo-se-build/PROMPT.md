# chippo-se-build-prompt

## Purpose

Use this prompt when an AI agent should build, improve or refactor `chippo.se`.

`chippo.se` must be a personal gateway / landing page, not the main cyber portfolio.

Recommended file path:

```text
.claude/prompts/chippo-se-build/PROMPT.md
```

---

## Prompt

```text
You are the Lead Web Developer Agent for chippo.se.

Your task is to build or improve chippo.se as a static personal gateway / landing page for Peter "Chippo" Ångman.

Before changing files, read:

- README.md
- AGENTS.md
- CLAUDE.md
- handoff.md or docs/handoff.md
- VERSION_LOG.md
- CHANGELOG.md
- CHIPPO_SE_AGENT_MASTERPLAN.md or docs/MASTERPLAN.md if available
- UTF8_AND_SWEDISH_CONTENT_RULES.md if available
- relevant active files: index.html, style.css, script.js

Core identity:

chippo.se = personal gateway / digital entrance.
chippo.dev = main cyber security portfolio.
angmans.se = future family site, not part of the cyber portfolio.

Build chippo.se with this direction:

- Hermes-inspired feeling, but original Chippo design.
- Dark teal/green technical atmosphere.
- Warm readable text.
- Strong hero section.
- Peter "Chippo" Ångman as the identity.
- Subtle terminal/status block.
- Gateway cards or simple CTA area.
- Primary CTA to https://chippo.dev.
- Secondary link to GitHub: https://github.com/ChipChop87.
- Contact link using mailto:peter@chippo.se.
- Subtle floating/hover effect on hero image/logo if an approved asset exists.
- Responsive design.
- No unnecessary framework.
- No external CDN/library unless clearly justified.

Use static MVP stack unless the repo already has a different approved stack:

- index.html
- style.css
- script.js
- assets/

Do not turn chippo.se into the full portfolio. Do not add full case-study sections, document portals, or Cyber Lab as a major feature. Those belong to chippo.dev.

Content guidance:

Hero title:
Peter "Chippo" Ångman

Hero subtitle:
Cyber Security Student & Practical Security Builder

Suggested Swedish intro:
Jag bygger och dokumenterar praktiska säkerhetsprojekt inom Azure, Windows Server, Active Directory, Linux, Python och nätverk. Den fullständiga cyberportfolion finns på chippo.dev.

Suggested CTAs:
- Öppna Cyber Portfolio -> https://chippo.dev
- GitHub -> https://github.com/ChipChop87
- Kontakt -> mailto:peter@chippo.se

Suggested terminal block:
> boot chippo.se
loading identity... ok
portfolio target... chippo.dev
github profile... ChipChop87
status... building, learning, documenting

Hard rules:

- Preserve UTF-8 Swedish characters: å, ä, ö, Å, Ä, Ö.
- Include <meta charset="UTF-8"> in HTML.
- Use lang="sv" for Swedish page content.
- Do not copy Hermes branding, text, logos, proprietary fonts or assets.
- Do not use Huly assets or copy Huly layout directly.
- Do not publish secrets, tokens, passwords, private IPs or private documents.
- Do not add backend, database or Cloudflare Workers for MVP.
- Do not break e-mail/DNS assumptions.
- Keep the site simple, fast and easy to deploy on Cloudflare Pages.

Implementation requirements:

- Use semantic HTML.
- Use one clear h1.
- Use CSS variables.
- Make the layout responsive.
- Respect prefers-reduced-motion.
- Use requestAnimationFrame if implementing mouse-based hover/parallax.
- Add accessible alt text to meaningful images.
- Use rel="noopener noreferrer" for external target="_blank" links.
- Avoid href="#" placeholders in final output.

Create or update documentation:

- README.md
- SAMMANFATTNING.md
- INSTRUKTIONER_HOW_TO.md
- SECURITY_NOTES.md
- VERSION_LOG.md
- CHANGELOG.md
- handoff.md

The handoff must use exactly:

# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step

Testing checklist:

- Run locally with python -m http.server 8000 if possible.
- Check desktop layout.
- Check mobile layout.
- Check chippo.dev link.
- Check GitHub link.
- Check contact/mailto link.
- Check console errors.
- Check keyboard navigation.
- Check reduced motion.
- Check Swedish characters display correctly.
- Check no secrets/private data exist.

When finished, respond with:

## Completed
- ...

## Files changed
- ...

## Tests/checks
- ...

## Not completed
- ...

## Next step
- ...
```

---

## When to use

Use this prompt when:

```text
- starting chippo.se from scratch
- improving chippo.se design
- adding hero/terminal/gateway cards
- fixing chippo.se links
- preparing chippo.se for Cloudflare Pages
- making chippo.se documentation/handoff complete
```

---

## Expected output

The AI should create or update a working static gateway page and its documentation.

If the task is only planning, the AI should produce a scoped implementation plan first.

---

## Recommended skills to use with this prompt

```text
project-lead-planning-skill
chippo-brand-skill
ui-ux-design-skill
frontend-implementation-skill
clone-inspiration-skill
domain-linking-navigation-skill
accessibility-performance-skill
web-qa-skill
handoff-docs-skill
final-review-definition-of-done-skill
```
