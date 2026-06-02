# handoff-docs-skill

## Purpose

Use this skill whenever an AI agent works on `chippo.se`, `chippo.dev`, or related Chippo domain documentation and needs to finish, pause, hand off, or document a completed version.

This skill ensures that every work session ends with clear documentation, a version summary, a practical how-to, and a handoff that allows a fresh AI agent to continue without repeating the same work.

## Core rule

The agent must not consider a task complete until documentation and handoff files have been created or updated.

For every completed version or significant work session, update or create:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
VERSION_LOG.md
CHANGELOG.md
handoff.md
```

For `chippo.dev`, the handoff file may live here:

```text
docs/handoff.md
```

For simpler projects such as `chippo.se`, the handoff file may live in the repo root:

```text
handoff.md
```

Use the structure already present in the project if one exists.

## Language rules

Project documentation can be written in Swedish for the owner.

Agent-facing instructions may be written in English.

Always preserve Swedish characters exactly:

```text
å ä ö Å Ä Ö
Ångman
cybersäkerhet
säkerhet
åtgärd
lärdom
nätverk
härdning
```

Never transliterate Swedish text:

```text
Wrong: Angman, sakerhet, atgard, lardom
Correct: Ångman, säkerhet, åtgärd, lärdom
```

All files must be UTF-8.

## Required handoff.md structure

The handoff file must use exactly this top-level structure:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

### # Goal

Describe what the agent tried to build or change.

Include:

```text
- target site or repo
- intended outcome
- relevant masterplan or instruction file
- whether this was chippo.se, chippo.dev, combined domain work, or documentation work
```

### ## Current state

Describe the actual current state after the session.

Include:

```text
- what works now
- what has been tested
- what is not finished
- whether the project runs locally
- whether deployment has been tested
- whether there are known issues
```

### ## Files in flight

List active files that were created, edited, or are important for the next agent.

Example:

```md
## Files in flight

- `index.html` — main page structure
- `style.css` — design system and responsive layout
- `script.js` — navigation and interaction logic
- `docs/handoff.md` — current handoff state
- `README.md` — project overview
```

### ## Changed

Summarize what changed in the session.

Use concise bullets:

```md
## Changed

- Built the initial static gateway layout.
- Added hero CTA links to chippo.dev, GitHub and contact.
- Added UTF-8 meta tag and Swedish content.
- Added documentation files for local use and deployment.
```

### ## Failed attempts

Document anything that did not work and why.

Do not hide failed attempts. They help the next agent avoid repeating the same mistake.

If nothing failed, write:

```md
## Failed attempts

- None documented in this session.
```

Examples of useful failed attempt notes:

```md
- Tried using an external icon CDN, but removed it because MVP should not depend on external scripts.
- Tried a strict Content-Security-Policy, but it was deferred because it could break inline testing.
- Tried using a heavy JS animation, but replaced it with a reduced-motion-safe CSS/JS implementation.
```

### ## Next Step

Give the exact next action for the next agent.

This section must be practical and specific.

Good example:

```md
## Next Step

1. Run `python -m http.server 8000` from the repo root.
2. Open `http://localhost:8000`.
3. Test desktop and mobile layout.
4. Fix any console errors.
5. Update `VERSION_LOG.md` after QA.
```

Bad example:

```text
Continue improving the site.
```

## README.md requirements

README.md should be short and useful.

Include:

```text
- what the project is
- live URL if available
- tech stack
- file structure
- how to run locally
- how deployment works
- important documentation links
```

README.md should not replace `SAMMANFATTNING.md` or `INSTRUKTIONER_HOW_TO.md`.

## SAMMANFATTNING.md requirements

This file is for the owner and should summarize what was done in the version.

Recommended structure:

```md
# Sammanfattning - <project> <version>

## Vad som byggdes

## Vad som ändrades

## Vilka filer som berördes

## Designbeslut

## Säkerhetsbeslut

## Vad som inte gjordes

## Kända begränsningar

## Nästa steg
```

Keep it clear enough that the owner can understand what happened without reading the code.

## INSTRUKTIONER_HOW_TO.md requirements

This file should be a practical guide.

For `chippo.se`, include:

```md
# Instruktioner - chippo.se

## Köra lokalt

## Ändra text

## Byta hero-bild eller logga

## Ändra länkar

## Testa hover/floating-effekt

## Testa mobilvy

## Pusha till GitHub

## Deploy via Cloudflare Pages

## Koppla domän via Inleed och Cloudflare

## Felsökning
```

For `chippo.dev`, include:

```md
# Instruktioner - chippo.dev

## Köra lokalt

## Ändra text

## Ändra case studies

## Ändra bilder

## Aktivera/inaktivera LIA-läge

## Testa Cyber Lab Console

## Testa mobilvy

## Pusha till GitHub

## Deploy via Cloudflare Pages

## Koppla domän via Inleed och Cloudflare

## Felsökning
```

## VERSION_LOG.md requirements

VERSION_LOG.md should track meaningful versions.

Recommended structure:

```md
# Version Log

## v0.1.0 - YYYY-MM-DD

### Goal

### Completed

### Not completed

### Known issues

### Files changed

### Next step
```

Use version numbers consistently.

Suggested version labels:

```text
v0.1-foundation
v0.2-design-system
v0.3-content-and-cases
v0.4-qa-and-deploy
v1.0-live
```

## CHANGELOG.md requirements

CHANGELOG.md should be shorter and more change-focused than VERSION_LOG.md.

Recommended structure:

```md
# Changelog

## Unreleased

## 0.1.0 - YYYY-MM-DD

- Added initial static page structure.
- Added responsive design.
- Added documentation and handoff files.
```

## Version memory files

If the project uses memory files, create:

```text
docs/memory/version-vX.X-memory.md
```

Recommended structure:

```md
# Version memory - vX.X

## What this version represents

## Important decisions

## What not to repeat

## Known issues

## Next major goal
```

## Documentation after QA

After running QA, documentation must be updated with results.

Include:

```text
- local test result
- desktop test result
- mobile test result
- link test result
- console error result
- UTF-8 check result
- security review result
- deploy/preview result if applicable
```

Example:

```md
## QA result

- Local server: tested with `python -m http.server 8000`
- Desktop: passed
- Mobile: passed at 390px width
- Links: chippo.dev, GitHub and mailto tested
- Console: no errors observed
- UTF-8: Ångman, cybersäkerhet and åtgärd displayed correctly
- Security: no secrets found in public files
```

## Required final response from an AI agent

When an AI agent finishes a session, it should summarize:

```text
- what was done
- which files were changed
- what was not done
- what was tested
- where the handoff is
- exact next step
```

Do not claim completion if testing or documentation was skipped.

Use wording like:

```text
Completed and documented. Local QA passed. Deployment was not tested yet.
```

or:

```text
Implemented, but mobile QA is still pending and is listed in handoff.md.
```

## Do not do this

Do not:

```text
- finish without updating handoff.md
- bury known problems in vague language
- overwrite previous handoff content without preserving important state
- mix README, summary, how-to and changelog into one file
- claim deploy success without checking it
- claim tests passed if they were not run
- remove failed attempts because they look bad
```

## Quick checklist

Before ending a session, confirm:

```text
[ ] README.md updated if project overview changed
[ ] SAMMANFATTNING.md created or updated
[ ] INSTRUKTIONER_HOW_TO.md created or updated
[ ] VERSION_LOG.md updated
[ ] CHANGELOG.md updated
[ ] handoff.md created or updated with required headings
[ ] Failed attempts documented, or explicitly marked as none
[ ] Next Step is specific and actionable
[ ] UTF-8 characters still display correctly
[ ] Security notes are included if public content changed
[ ] Final response matches actual tested state
```
