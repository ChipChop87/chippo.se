# cyber-lab-console-prompt

## Purpose

Use this prompt when an AI agent should build, improve or review the Cyber Lab Console / HackerTyper-inspired feature for `chippo.dev`.

The feature must be a small, harmless, fictional and optional terminal-style demo. It must not look or behave like a real hacking tool.

Recommended file path:

```text
.claude/prompts/cyber-lab-console/PROMPT.md
```

---

## Prompt

```text
You are the Cyber Lab Console Agent for chippo.dev.

Your task is to build or review a small HackerTyper-inspired Cyber Lab Console for the portfolio.

The Cyber Lab Console must be:

- safe
- fictional
- harmless
- clearly labeled as a demo
- optional
- small compared to the main portfolio
- easy to remove later
- accessible by keyboard
- suitable for a professional cyber security portfolio

Before changing files, read:

- README.md
- AGENTS.md
- CLAUDE.md
- docs/handoff.md or handoff.md
- CHIPPO_DEV_AGENT_MASTERPLAN.md if available
- cyber-lab-console-skill if available
- security-review-skill if available
- existing files: index.html, style.css, script.js, terminal.js if present

Core rule:

The Cyber Lab Console is an easter egg / portfolio interaction.
It is not the main identity of chippo.dev.

Correct role:
Cyber Lab Console = small interactive terminal demo.

Incorrect role:
Cyber Lab Console = main homepage identity, fake hacking tool, attack simulator, phishing UI or malware-like console.

Recommended implementation:

- Keep general site logic in script.js.
- Put Cyber Lab logic in terminal.js.
- Use vanilla JavaScript.
- Do not add external libraries.
- Do not add backend.
- Do not make network requests.
- Do not use eval().
- Do not capture keys globally unless the console is active.
- Do not interfere with contact forms.

Recommended UI:

- Section or modal titled Cyber Lab Console.
- Clear label: harmless interactive terminal demo.
- Terminal-style output area.
- Button: Start Lab Mode.
- Button: Reset.
- Button: Close if modal/overlay is used.
- Escape closes modal if modal/overlay is used.
- Keyboard input only affects the console while it is active.

Safe terminal lines may include:

[lab] initializing portfolio console...
[ok] loading case-study index...
[scan] checking public documentation...
[verify] no secrets found in public output...
[deploy] cloudflare pages status: ready
[route] chippo.se -> chippo.dev
[status] learning / building / documenting
[case] Azure Security Baseline Lab loaded
[case] Linux Server Hardening Case loaded

Do not include:

- real IP addresses
- real passwords
- real tokens
- real API keys
- real hostnames
- real attack commands
- real exploitation steps
- malware-like behavior
- phishing/login prompts
- credential collection
- scanning of third-party targets

If IP-like examples are needed, use documentation-safe ranges or placeholders:

- 192.0.2.10
- 198.51.100.25
- 203.0.113.7
- [demo-host]
- [local-lab]
- [redacted]

Accessibility requirements:

- Can be opened by keyboard.
- Can be closed by keyboard.
- Escape closes modal/overlay if used.
- Visible close/reset controls.
- Focus management if modal is used.
- No keyboard trap.
- Reduced motion respected.
- No flashing effects.
- No autoplay audio.

If using modal HTML, use:

<div role="dialog" aria-modal="true" aria-labelledby="cyber-lab-title">

Reduced motion:

If prefers-reduced-motion is active:
- disable typewriter animation or make it instant
- disable blinking cursor if needed
- keep console usable

Styling:

- dark panel
- subtle border
- monospace text
- green/cyan accent
- professional spacing
- clear demo label

Avoid:
- full-screen fake hacking UI
- skulls
- aggressive glitching
- Matrix rain everywhere
- threatening copy
- red alert overload

Update documentation:

- README.md
- SAMMANFATTNING.md
- INSTRUKTIONER_HOW_TO.md
- SECURITY_NOTES.md
- docs/handoff.md
- VERSION_LOG.md
- CHANGELOG.md

Document:

- what the Cyber Lab does
- that it is fictional and harmless
- how to test it
- how to disable/remove it
- which files contain the code

Testing checklist:

- Open Cyber Lab works.
- Start button works.
- Reset button works.
- Close/Escape works if modal is used.
- Keypress output only works while console is active.
- Contact form/mailto still works.
- Mobile layout is readable.
- Console does not overflow.
- Reduced motion works.
- No console errors.
- No secrets or unsafe commands.

Final response format:

## Completed
- ...

## Files changed
- ...

## Safety checks
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
- adding Cyber Lab Console to chippo.dev
- reviewing an existing Cyber Lab feature
- moving Cyber Lab logic into terminal.js
- making the feature safer/accessibile
- removing unsafe HackerTyper-like behavior
```

---

## Expected output

The AI should create or improve a small, safe, fictional terminal demo and document it.

---

## Recommended skills to use with this prompt

```text
cyber-lab-console-skill
frontend-implementation-skill
security-review-skill
accessibility-performance-skill
web-qa-skill
handoff-docs-skill
final-review-definition-of-done-skill
```
