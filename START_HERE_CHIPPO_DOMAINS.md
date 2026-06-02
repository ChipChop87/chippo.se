# START HERE - Chippo Domain Projects

**Project:** `chippo.se` + `chippo.dev`  
**Purpose:** First file to read before using the Chippo domain documentation, skills and prompts.  
**Encoding:** UTF-8. Preserve Swedish characters: `å`, `ä`, `ö`, `Å`, `Ä`, `Ö`.

---

## 1. Read this first

This file explains how to use the Chippo domain package.

The package contains:

- masterplans
- agent instructions
- deployment guides
- UTF-8 rules
- skills
- prompts
- indexes
- handoff files

The goal is to help an AI agent continue the project without starting over or mixing up the domain roles.

---

## 2. Domain roles

```text
chippo.se
= personal gateway / landing page
= Hermes-inspired, dark, technical, artistic
= points to chippo.dev, GitHub and contact
= not the full portfolio

chippo.dev
= main cyber security portfolio
= Huly-inspired structure
= case studies, skills, Cyber Lab, LIA/contact
= professional enough for GitHub, CV and LIA/company review

angmans.se
= future family/personal site
= separate from the cyber portfolio
= not prioritized now
```

---

## 3. Best first reading order

For a new AI agent or new session, read in this order:

```text
1. START_HERE_CHIPPO_DOMAINS.md
2. COMBINED_DOMAIN_AGENT_MASTERPLAN.md
3. AGENTS.md
4. CLAUDE.md
5. CHIPPO_SKILLS_INDEX.md
6. CHIPPO_PROMPTS_INDEX.md
7. Relevant domain plan:
   - CHIPPO_SE_AGENT_MASTERPLAN.md
   - CHIPPO_DEV_AGENT_MASTERPLAN.md
8. UTF8_AND_SWEDISH_CONTENT_RULES.md
9. CLOUDFLARE_INLEED_DEPLOYMENT_GUIDE.md if deployment is involved
10. Current handoff.md / docs/handoff.md if working inside a repo
```

---

## 4. First prompt to use

Always start a fresh AI-agent session with:

```text
.claude/prompts/project-start-context-intake/PROMPT.md
```

This prompt forces the agent to:

```text
read context
identify project/domain
check current state
inspect handoff
propose scope
avoid blind edits
```

Do not start with a build prompt before context intake is done.

---

## 5. Which build prompt to use

For `chippo.se`:

```text
.claude/prompts/chippo-se-build/PROMPT.md
```

For `chippo.dev`:

```text
.claude/prompts/chippo-dev-build/PROMPT.md
```

For review after building:

```text
.claude/prompts/codex-review-qa/PROMPT.md
```

Before public release/deploy:

```text
.claude/prompts/security-content-review/PROMPT.md
```

Before ending the session:

```text
.claude/prompts/documentation-handoff/PROMPT.md
```

---

## 6. Skills folder

Copy skills into:

```text
.claude/skills/
```

Minimum setup:

```text
.claude/skills/chippo-brand/SKILL.md
.claude/skills/project-lead-planning/SKILL.md
.claude/skills/frontend-implementation/SKILL.md
.claude/skills/security-review/SKILL.md
.claude/skills/web-qa/SKILL.md
.claude/skills/handoff-docs/SKILL.md
.claude/skills/utf8-swedish-content/SKILL.md
.claude/skills/final-review-definition-of-done/SKILL.md
```

Full list is in:

```text
CHIPPO_SKILLS_INDEX.md
```

---

## 7. Prompts folder

Copy prompts into:

```text
.claude/prompts/
```

Minimum setup:

```text
.claude/prompts/project-start-context-intake/PROMPT.md
.claude/prompts/chippo-se-build/PROMPT.md
.claude/prompts/chippo-dev-build/PROMPT.md
.claude/prompts/security-content-review/PROMPT.md
.claude/prompts/documentation-handoff/PROMPT.md
```

Full list is in:

```text
CHIPPO_PROMPTS_INDEX.md
```

---

## 8. Practical workflow

Recommended flow:

```text
1. Context intake
2. Choose one domain only
3. Build or improve
4. Run QA/review
5. Run security/content review
6. Update documentation
7. Update handoff
8. Deploy only when ready
```

Do not build `chippo.se` and `chippo.dev` at the same time unless explicitly requested.

---

## 9. Hard rules

```text
- Preserve å, ä, ö, Å, Ä, Ö.
- Keep all files UTF-8.
- Do not publish secrets, tokens, passwords or private data.
- Do not publish personal letters or unredacted school reports.
- Use Hermes, Huly and HackerTyper as inspiration only.
- Do not copy logos, text, assets, fonts or branding.
- Keep chippo.se and chippo.dev roles separate.
- Keep LIA temporary on chippo.dev.
- Update handoff before ending.
```

---

## 10. If unsure

If unsure, the AI agent should:

```text
1. Stop.
2. Check the relevant masterplan.
3. Check handoff.md.
4. Use the safest interpretation.
5. Document the uncertainty.
```

Most important rule:

```text
Do not guess with private content, DNS/e-mail, deployment, or destructive file changes.
```

---

## 11. Recommended next action

For a new repo/session:

```text
Use project-start-context-intake-prompt first.
Then decide whether the next step belongs to chippo.se or chippo.dev.
```
