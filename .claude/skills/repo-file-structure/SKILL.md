# repo-file-structure-skill

## Purpose

Use this skill when creating, reviewing, reorganizing or documenting the file and folder structure for the Chippo domain projects.

This skill applies to:

- `chippo.se`
- `chippo.dev`
- future `angmans.se`
- shared planning/documentation repos
- `.claude/skills/`
- documentation folders
- assets folders
- private reference folders

The goal is to keep each project clean, predictable, AI-friendly and safe to deploy.

---

## Core rule

The repository structure must make it obvious:

```text
what is public
what is private
what is documentation
what is source code
what is an asset
what is an AI instruction
what is a handoff file
```

If a file’s purpose is unclear, rename it or document it.

---

## Recommended repo model

Use separate repositories for the main domains:

```text
ChipChop87/chippo.se
ChipChop87/chippo.dev
ChipChop87/angmans.se       # later
```

A monorepo may be used only if explicitly decided.

Preferred model:

```text
one domain = one repo
```

Reason:

```text
- simpler Cloudflare Pages setup
- less risk of mixing domain roles
- easier for AI agents to understand scope
- clearer documentation and deployment
```

---

## chippo.se recommended structure

`chippo.se` is a static gateway/landing page.

```text
chippo.se/
├── index.html
├── style.css
├── script.js
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── SAMMANFATTNING.md
├── INSTRUKTIONER_HOW_TO.md
├── SECURITY_NOTES.md
├── VERSION_LOG.md
├── CHANGELOG.md
├── handoff.md
├── assets/
│   ├── images/
│   ├── logos/
│   ├── favicon/
│   └── og-image.png
├── docs/
│   ├── MASTERPLAN.md
│   ├── design-notes.md
│   ├── deployment-notes.md
│   └── visual-qa.md
├── private-reference/
│   └── README_DO_NOT_PUBLISH.md
└── .claude/
    └── skills/
```

Notes:

```text
- `private-reference/` must be ignored by Git.
- `handoff.md` may live in root for a small repo.
- Keep `chippo.se` simple: no unnecessary framework structure.
```

---

## chippo.dev recommended structure

`chippo.dev` is the main cyber security portfolio.

```text
chippo.dev/
├── index.html
├── style.css
├── script.js
├── terminal.js
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── SAMMANFATTNING.md
├── INSTRUKTIONER_HOW_TO.md
├── SECURITY_NOTES.md
├── VERSION_LOG.md
├── CHANGELOG.md
├── assets/
│   ├── images/
│   ├── logos/
│   ├── icons/
│   ├── favicon/
│   └── og-image.png
├── docs/
│   ├── AI_MASTERPLAN.md
│   ├── handoff.md
│   ├── content-inventory.md
│   ├── case-study-template.md
│   ├── deployment-notes.md
│   ├── accessibility-notes.md
│   ├── performance-notes.md
│   ├── visual-qa.md
│   ├── case-studies/
│   └── memory/
│       └── version-v0.1-memory.md
├── private-reference/
│   └── README_DO_NOT_PUBLISH.md
└── .claude/
    ├── agents/
    └── skills/
```

Notes:

```text
- `terminal.js` is only for Cyber Lab Console logic.
- `script.js` is for general site behavior.
- full private reports should not be placed in public folders.
- content inventory must track classification.
```

---

## future angmans.se structure

`angmans.se` is a future family/personal site and must remain separate from the cyber portfolio.

```text
angmans.se/
├── index.html
├── style.css
├── script.js
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── SAMMANFATTNING.md
├── INSTRUKTIONER_HOW_TO.md
├── SECURITY_NOTES.md
├── VERSION_LOG.md
├── CHANGELOG.md
├── handoff.md
├── assets/
│   ├── images/
│   ├── favicon/
│   └── og-image.png
├── docs/
│   ├── MASTERPLAN.md
│   └── privacy-notes.md
├── private-reference/
└── .claude/
    └── skills/
```

Rules:

```text
- no cyber/hacker styling by default
- no mixing with LIA/cyber portfolio content
- protect family/private images carefully
```

---

## Shared planning repo structure

If using a planning/documentation repository:

```text
chippo-domains-planning/
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── docs/
│   ├── sv/
│   │   ├── SVENSK_OVERSIKT.md
│   │   ├── DOMANSTRATEGI.md
│   │   ├── DEPLOY_GUIDE_INLEED_CLOUDFLARE.md
│   │   └── UTF8_SVENSKA_TECKEN.md
│   └── agents/
│       ├── COMBINED_DOMAIN_AGENT_MASTERPLAN.md
│       ├── CHIPPO_SE_AGENT_MASTERPLAN.md
│       ├── CHIPPO_DEV_AGENT_MASTERPLAN.md
│       ├── AI_AGENT_TOOLING_RECOMMENDATIONS.md
│       ├── UTF8_AND_SWEDISH_CONTENT_RULES.md
│       ├── CLOUDFLARE_INLEED_DEPLOYMENT_GUIDE.md
│       └── SECURITY_AND_CONTENT_CLASSIFICATION.md
├── source-material/
│   ├── original-swedish-masterplans/
│   └── archived-reference/
└── .claude/
    └── skills/
```

---

## Required root files

For each active repo, include:

```text
README.md
AGENTS.md
CLAUDE.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
VERSION_LOG.md
CHANGELOG.md
```

For `chippo.se`, root handoff is acceptable:

```text
handoff.md
```

For `chippo.dev`, preferred:

```text
docs/handoff.md
```

Use one consistent location per repo and document it in `README.md`.

---

## Documentation file purposes

### README.md

Short project overview.

Should include:

```text
- what the project is
- live URL
- tech stack
- how to run locally
- basic file structure
- deploy summary
```

### SAMMANFATTNING.md

Separate summary for the current version.

Should include:

```text
- what was built
- version
- changed files
- design decisions
- security decisions
- what was not done
- known limitations
- next steps
```

### INSTRUKTIONER_HOW_TO.md

Practical user guide.

Should include:

```text
- how to run locally
- how to edit text
- how to change images/assets
- how to test
- how to push
- how to deploy with Cloudflare Pages
- how to troubleshoot
```

### SECURITY_NOTES.md

Security and privacy notes.

Should include:

```text
- no secrets rule
- private-reference rule
- public/request/private classification
- external link rules
- DNS/email warnings
```

### VERSION_LOG.md

Version history.

Should include:

```text
- version
- date
- goal
- changes
- not done
- known issues
- next step
```

### CHANGELOG.md

Short list of changes by version.

Use simple format:

```md
# Changelog

## 0.1.0 - Initial foundation
- Added static page structure.
- Added documentation.
```

### handoff.md / docs/handoff.md

Must use exact structure:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

---

## Assets rules

Use this structure:

```text
assets/
├── images/
├── logos/
├── icons/
├── favicon/
└── og-image.png
```

Rules:

```text
- images must be optimized before public deployment
- filenames should be lowercase and hyphen-separated
- do not store private screenshots in assets/
- do not use copyrighted/proprietary images without license
- do not use Hermes/Huly/HackerTyper logos or proprietary assets
```

Good filenames:

```text
chippo-hero.png
chippo-logo.svg
case-azure-baseline.webp
og-image.png
favicon-32x32.png
```

Avoid:

```text
IMG_1234.PNG
finalfinal.png
screenshot secret azure.png
huly-logo-copy.svg
```

---

## Docs folder rules

Use `docs/` for project documentation, not public site content unless intentionally linked.

Recommended:

```text
docs/
├── AI_MASTERPLAN.md
├── handoff.md
├── content-inventory.md
├── case-study-template.md
├── deployment-notes.md
├── accessibility-notes.md
├── performance-notes.md
├── visual-qa.md
├── case-studies/
└── memory/
```

Do not place private reports in `docs/` if the repo is public.

---

## private-reference rules

Use:

```text
private-reference/
```

for private context only.

Rules:

```text
- must be in .gitignore
- must not be deployed
- must not be referenced in HTML
- must not be included in sitemap
- must not be uploaded to Cloudflare Pages
- may contain source material for AI review only
```

Add a warning file:

```text
private-reference/README_DO_NOT_PUBLISH.md
```

Recommended content:

```md
# Do not publish

This folder may contain private or request-only source material.
It must stay out of Git, Cloudflare Pages and public links.
```

---

## .gitignore requirements

Recommended `.gitignore`:

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

If using build tools later, add:

```gitignore
.next/
out/
coverage/
```

---

## .editorconfig

Recommended `.editorconfig`:

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

---

## Claude skills structure

Recommended:

```text
.claude/
├── agents/
│   ├── project-lead.md
│   ├── frontend-developer.md
│   ├── ui-ux-reviewer.md
│   ├── security-reviewer.md
│   ├── qa-tester.md
│   └── documentation-agent.md
└── skills/
    ├── chippo-brand/
    │   └── SKILL.md
    ├── web-qa/
    │   └── SKILL.md
    ├── security-review/
    │   └── SKILL.md
    ├── handoff-docs/
    │   └── SKILL.md
    ├── cloudflare-deploy/
    │   └── SKILL.md
    ├── clone-inspiration/
    │   └── SKILL.md
    ├── content-case-study/
    │   └── SKILL.md
    └── utf8-swedish-content/
        └── SKILL.md
```

Additional skills may be added as needed.

---

## Naming conventions

Use:

```text
lowercase-kebab-case for folders
lowercase-kebab-case for assets
UPPERCASE.md for major agent docs only when already established
Swedish uppercase docs are okay for owner docs
```

Examples:

```text
case-study-template.md
content-inventory.md
deployment-notes.md
chippo-hero.png
CHIPPO_DEV_AGENT_MASTERPLAN.md
UTF8_AND_SWEDISH_CONTENT_RULES.md
```

Avoid:

```text
New Folder
final version.md
copy of copy.md
untitled.md
```

---

## Static MVP rule

For MVP, prefer:

```text
index.html
style.css
script.js
```

Only add framework folders such as `src/`, `app/`, `components/` if a framework is explicitly chosen.

Do not create unnecessary build folders for static projects.

---

## Do not mix public and private files

Public/deployed:

```text
index.html
style.css
script.js
terminal.js
assets/ cleaned public assets
robots.txt
sitemap.xml
404.html
public documentation if intentionally included
```

Private/not deployed:

```text
private-reference/
unredacted reports
personal letters
private screenshots
raw school material
.env files
```

---

## File review checklist

Before finishing structure work, check:

```text
[ ] README exists.
[ ] AGENTS.md exists.
[ ] CLAUDE.md exists.
[ ] handoff exists in documented location.
[ ] VERSION_LOG exists.
[ ] CHANGELOG exists.
[ ] assets folder is clean.
[ ] docs folder is organized.
[ ] private-reference is ignored.
[ ] .gitignore includes private-reference.
[ ] .editorconfig exists or is documented as TODO.
[ ] no private files are in public folders.
[ ] folder names are understandable.
```

---

## Documentation updates

When structure changes, update:

```text
README.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md or handoff.md
VERSION_LOG.md
CHANGELOG.md
```

If AI skills or agent docs change, update:

```text
AGENTS.md
CLAUDE.md
```

---

## Definition of done

A repo structure is ready when:

```text
[ ] public files are clearly separated from private files
[ ] docs are organized
[ ] assets are organized
[ ] AI instruction files exist
[ ] handoff location is clear
[ ] private-reference is ignored
[ ] Cloudflare Pages can deploy the intended root/output
[ ] the next AI agent can understand the repo in under 5 minutes
```

---

## Summary

This skill keeps the project organized and safe.

The most important rule:

```text
A future AI agent should immediately understand what each file/folder is for and whether it is safe to publish.
```
