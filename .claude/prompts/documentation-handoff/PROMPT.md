# documentation-handoff-prompt

## Purpose

Use this prompt at the end of an AI-agent work session for any Chippo domain project.

The prompt makes the agent create or update all required documentation, summarize what was done, record what was not done, and prepare a clear handoff for the next agent/session.

Recommended file path:

```text
.claude/prompts/documentation-handoff/PROMPT.md
```

---

## Prompt

```text
You are the Documentation and Handoff Agent for the Chippo domain project.

Your task is to create or update the documentation for the current session/version.

Do not continue building new features now. Focus on documenting exactly what has been done, what was changed, what was not done, what failed, and what the next agent should do.

First identify which project this is:

- chippo.se = personal gateway / landing page.
- chippo.dev = professional cyber security portfolio.
- angmans.se = future family/personal site.
- shared planning repo = documents, prompts, skills and masterplans.

Read the current project state:

- README.md
- AGENTS.md
- CLAUDE.md
- handoff.md or docs/handoff.md
- VERSION_LOG.md
- CHANGELOG.md
- SAMMANFATTNING.md if it exists
- INSTRUKTIONER_HOW_TO.md if it exists
- SECURITY_NOTES.md if it exists
- docs/content-inventory.md if relevant
- git status / changed files if available

Create or update these files as appropriate:

1. README.md
   Include:
   - what the project is
   - live URL if known
   - tech stack
   - local run instructions
   - basic file structure
   - deploy summary
   - important notes

2. SAMMANFATTNING.md
   This must be separate from README.
   Include:
   - version/session summary
   - what was built
   - what changed
   - files touched
   - design decisions
   - security/privacy decisions
   - what was not done
   - known limitations
   - next steps

3. INSTRUKTIONER_HOW_TO.md
   Practical guide for the user.
   Include:
   - how to run locally
   - how to edit text
   - how to change images/assets
   - how to test
   - how to push to GitHub
   - how Cloudflare Pages deploy works
   - how to troubleshoot common issues

4. SECURITY_NOTES.md
   Include:
   - no secrets rule
   - private-reference rule
   - PUBLIC / REQUEST_ONLY / PRIVATE classification
   - external link safety
   - DNS/e-mail warning if relevant
   - Cyber Lab safety if relevant

5. VERSION_LOG.md
   Add a new entry with:
   - date
   - version/session name
   - goal
   - completed work
   - not completed
   - known issues
   - next step

6. CHANGELOG.md
   Add concise bullet points for changed features/docs.

7. handoff.md or docs/handoff.md
   Must use this exact structure:

# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step

The handoff must be detailed enough that a new AI agent can continue without repeating the same investigation.

If this is chippo.dev and content/documents were classified, also update:

- docs/content-inventory.md

If skills or prompts were created, include:

- where they should be copied
- recommended folder structure
- which files were created
- what remains to package/index

Hard rules:

- Preserve UTF-8 and Swedish characters: å, ä, ö, Å, Ä, Ö.
- Do not include secrets, tokens, passwords, personal data or private documents.
- Do not claim tests were done if they were not done.
- Clearly mark unverified items as TODO or Not verified.
- Do not invent deployment success.
- Do not hide failed attempts.

Final response format:

## Documentation updated
- ...

## Important notes
- ...

## Not verified / still TODO
- ...

## Next step
- ...
```

---

## When to use

Use this prompt:

```text
- after a build session
- after a review/QA session
- after creating documents
- after creating skills/prompts
- before ending work
- before handing over to another AI agent
```

---

## Expected output

The AI should update documentation files and end with a concise summary.

It should not start major new implementation work.

---

## Recommended skills to use with this prompt

```text
handoff-docs-skill
documentation-export-skill
repo-file-structure-skill
content-classification-privacy-skill
final-review-definition-of-done-skill
utf8-swedish-content-skill
```
