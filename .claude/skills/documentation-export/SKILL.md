# documentation-export-skill

## Purpose

Use this skill when creating, updating, exporting or packaging documentation for the Chippo domain projects.

This skill applies to:

- Markdown documents
- PDF exports
- owner-facing Swedish guides
- AI-agent-facing English guides
- handoff documents
- version summaries
- deployment guides
- skill files
- downloadable document packages

The goal is to create clear, reusable documentation with correct UTF-8 Swedish characters and predictable file naming.

---

## Core rule

Documentation must be useful for its intended reader.

There are two main reader types:

```text
Owner documentation
= Swedish
= written for Chippo
= clear, practical and easy to follow

AI agent documentation
= English
= written for Claude Code, Codex CLI, Gemini CLI, Cursor or other agents
= precise, structured and action-oriented
```

Do not mix these purposes unless the document is explicitly bilingual.

---

## Language rules

Use this split by default:

```text
AI-agent instructions: English
Website visible content: Swedish by default, English optional
Owner documentation: Swedish
Deployment instructions for the user: Swedish or English depending on request
Technical AI workflow documents: English
```

If the user asks for a Swedish PDF, create it in Swedish.

If the user asks for agent instructions, create them in English unless told otherwise.

---

## UTF-8 requirement

All files must be saved as UTF-8.

Swedish characters must be preserved:

```text
å ä ö Å Ä Ö
```

Correct examples:

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

Incorrect examples:

```text
Angman
cybersakerhet
sakerhet
atgard
lardom
natverk
hardning
fran
forsta
```

Never transliterate Swedish characters unless the user explicitly asks for ASCII-only output.

---

## Markdown creation rules

Markdown files should be clean and reusable.

Use:

```text
# Main title
## Major section
### Subsection
```

Prefer:

```text
short paragraphs
clear bullets
tables only when helpful
code fences for commands/file trees
consistent naming
```

Avoid:

```text
overly long paragraphs
unclear headings
mixed Swedish/English without reason
duplicated sections
broken code fences
raw tool logs unless needed
```

---

## PDF export rules

When creating a PDF from Markdown:

```text
[ ] preserve Swedish characters
[ ] use a font that supports Swedish
[ ] check first page
[ ] check last page
[ ] confirm page count
[ ] visually confirm that å/ä/ö render correctly
```

PDF must not show:

```text
fran instead of från
sakerhet instead of säkerhet
Angman instead of Ångman
broken code blocks
missing headings
cut-off tables
```

---

## Recommended output file naming

Use uppercase descriptive names for major documents:

```text
COMBINED_DOMAIN_AGENT_MASTERPLAN.md
CHIPPO_SE_AGENT_MASTERPLAN.md
CHIPPO_DEV_AGENT_MASTERPLAN.md
AI_AGENT_TOOLING_RECOMMENDATIONS.md
UTF8_AND_SWEDISH_CONTENT_RULES.md
CLOUDFLARE_INLEED_DEPLOYMENT_GUIDE.md
```

Use Swedish names for Swedish owner-facing documents:

```text
AI_AGENT_REKOMMENDATIONER_WEBBTEAM_SV.md
CLOUDFLARE_INLEED_DEPLOYMENT_GUIDE_SV.pdf
SVENSK_OVERSIKT.md
```

Use skill folder names in lowercase kebab-case:

```text
chippo-brand-skill_SKILL.md
web-qa-skill_SKILL.md
security-review-skill_SKILL.md
```

---

## Document types

### Masterplans

Use for large, strategic instructions.

Examples:

```text
COMBINED_DOMAIN_AGENT_MASTERPLAN.md
CHIPPO_SE_AGENT_MASTERPLAN.md
CHIPPO_DEV_AGENT_MASTERPLAN.md
```

Must include:

```text
purpose
domain role
technical model
workflow
security rules
documentation requirements
definition of done
```

### Guides

Use for practical instructions.

Examples:

```text
CLOUDFLARE_INLEED_DEPLOYMENT_GUIDE.md
INSTRUKTIONER_HOW_TO.md
```

Must include:

```text
step-by-step instructions
commands if relevant
what to verify
common mistakes
rollback or troubleshooting
```

### Handoff files

Use for continuation between sessions.

Must include exact structure:

```md
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

### Version summaries

Use for completed versions.

Must include:

```text
what was built
what changed
what was not done
known limitations
next step
```

### Skill files

Use for reusable AI behavior instructions.

Each skill should include:

```text
purpose
when to use it
core rules
checklists
definition of done
summary
```

---

## Required source attribution inside working notes

When creating documents from source material, document internally which source material was used.

For final downloadable project files, do not overfill with citations unless they are intended for reading as a research/report document.

For handoff/owner summaries, mention:

```text
based on chippo.se masterplan
based on chippo.dev masterplan
based on UTF-8 addendum
based on deployment plan
```

---

## Owner-facing Swedish document style

Swedish owner documents should be:

```text
clear
practical
direct
not too formal
easy to copy/use
step-by-step when needed
```

Use Swedish terms naturally:

```text
Syfte
Översikt
Steg
Kontroll
Nästa steg
Viktigt
Rekommendation
```

Preserve technical terms where natural:

```text
deploy
repo
branch
preview
custom domain
rollback
```

---

## AI-agent-facing English document style

English agent documents should be:

```text
strict
structured
implementation-focused
explicit about what not to do
easy for tools to follow
```

Use clear imperative rules:

```text
Do not publish secrets.
Use static HTML/CSS/JS for MVP.
Update handoff.md before finishing.
Keep chippo.se and chippo.dev separate.
```

---

## Packaging rules

When multiple documents are created, provide clear links and labels.

Group by purpose:

```text
Core agent masterplans
Deployment guides
Skills
Swedish owner PDFs
Repo root files
```

Avoid dumping unlabeled links.

---

## PDF quality checklist

Before delivering a PDF:

```text
[ ] file exists
[ ] file opens
[ ] first page renders correctly
[ ] last page renders correctly
[ ] page count is reasonable
[ ] headings are visible
[ ] code blocks are readable
[ ] Swedish characters are correct
[ ] no obvious layout cutoff
[ ] filename is descriptive
```

---

## Markdown quality checklist

Before delivering Markdown:

```text
[ ] file exists
[ ] UTF-8 encoding used
[ ] headings are logical
[ ] code fences are closed
[ ] file trees render correctly
[ ] links are understandable
[ ] no accidental private data
[ ] no broken Swedish characters
[ ] filename is descriptive
```

---

## Security and privacy rules

Documentation must not include:

```text
passwords
tokens
API keys
private IP addresses
subscription IDs
personal identity numbers
private addresses
unredacted screenshots
private school feedback
personal letters
Cloudflare dashboard secrets
Inleed account details
```

If examples are needed, use:

```text
[REDACTED]
example.com
192.0.2.10
10.x.x.x
```

---

## Versioning documentation

For major document updates, update or create:

```text
VERSION_LOG.md
CHANGELOG.md
docs/handoff.md
```

Version log entry should include:

```text
date
version
document changed
what changed
why
next step
```

---

## Recommended final response after creating documents

When delivering documents to the user, respond with:

```text
Klart.
- Short explanation of what was created.
- Download links.
- One sentence about verification, if PDF was rendered/checked.
```

Do not paste the entire document into chat unless the user asks for it.

---

## When to create PDF only

If the user says:

```text
Räcker med PDF
Bara PDF
PDF-version för mig
```

Then create only the PDF unless a source `.md` is also needed for conversion. If a temporary Markdown source is created internally, do not necessarily expose it unless useful.

---

## When to create Markdown only

If the user says:

```text
Skapa .md
Markdown räcker
Jag ska kopiera in detta i repo
```

Then create `.md` only.

---

## When to create both

Create both `.md` and PDF when the user asks for:

```text
.md och PDF
Markdown och PDF
en fil och PDF-version
```

---

## Documentation folder recommendations

For repo docs:

```text
docs/
├── AI_MASTERPLAN.md
├── handoff.md
├── content-inventory.md
├── deployment-notes.md
├── accessibility-notes.md
├── performance-notes.md
├── visual-qa.md
└── memory/
```

For planning docs:

```text
docs/
├── sv/
└── agents/
```

---

## Definition of done

Documentation/export work is done when:

```text
[ ] correct file type was created
[ ] filename is clear
[ ] UTF-8 is correct
[ ] Swedish characters are preserved
[ ] PDF was visually checked if created
[ ] source content is organized
[ ] no private data is included
[ ] links are provided to the user
```

---

## Summary

This skill ensures that documentation is:

```text
clear
downloadable
UTF-8 safe
reader-specific
safe to share
easy for future AI agents to use
```

The most important rule:

```text
A document is not finished until it is readable, correctly encoded, and useful for the person or agent who will use it next.
```
