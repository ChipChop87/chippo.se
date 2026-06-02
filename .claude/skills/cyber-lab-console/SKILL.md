# cyber-lab-console-skill

## Purpose

Use this skill when creating, reviewing, testing or refactoring the Cyber Lab Console / HackerTyper-inspired feature for `chippo.dev`.

The goal is to create a small, fun, harmless and clearly fictional terminal-style interaction that adds personality to the portfolio without becoming the main identity of the site.

This skill applies mainly to:

```text
chippo.dev
```

It may also apply to future `lab.chippo.dev` concepts, but only after the MVP portfolio is stable.

---

## Core rule

The Cyber Lab Console must always be:

```text
safe
fictional
optional
small
clearly a demo
easy to remove
professional enough for a cyber security portfolio
```

It must never appear to be:

```text
a real hacking tool
a phishing interface
an intrusion system
a malware console
a credential harvester
a real scanner
a real attack simulation against third-party systems
```

---

## Role in the portfolio

The Cyber Lab Console is not the main purpose of `chippo.dev`.

Correct role:

```text
Cyber Lab Console = small easter egg / interactive visual demo
```

Incorrect role:

```text
Cyber Lab Console = main homepage identity
Cyber Lab Console = replacement for case studies
Cyber Lab Console = proof of hacking ability
```

The page must still feel like a professional portfolio first.

---

## Recommended placement

For MVP, use one of these:

```text
1. A section near the lower half of the homepage.
2. A modal opened by a small "Cyber Lab" button.
3. A compact card that expands into a safe demo.
```

Avoid making it the first thing visitors see.

Recommended section order on `chippo.dev`:

```text
Hero
Focus areas
Featured case study
Case studies grid
Skills
Cyber Lab Console
About
Contact
Footer
```

---

## Recommended file structure

Keep Cyber Lab logic separate from general site logic.

```text
chippo.dev/
├── index.html
├── style.css
├── script.js       # general site behavior
└── terminal.js     # Cyber Lab Console only
```

Do not mix all terminal logic into `script.js` unless the project is extremely small and clearly documented.

---

## Safe demo text

Only use fictional, harmless, portfolio-related terminal lines.

Good examples:

```text
[lab] initializing portfolio console...
[ok] loading case-study index...
[scan] checking public documentation...
[verify] no secrets found in public output...
[deploy] cloudflare pages status: ready
[route] chippo.se -> chippo.dev
[status] learning / building / documenting
[case] Azure Security Baseline Lab loaded
[case] Linux Server Hardening Case loaded
```

Avoid:

```text
real IP addresses
real domains not owned by the user
passwords
tokens
API keys
exploit names used as instructions
malware terms presented as actions
commands that suggest attacking systems
```

---

## Fictional data rules

If the demo needs IP-like values, use documentation-safe ranges and make them clearly fictional.

Allowed examples:

```text
192.0.2.10
198.51.100.25
203.0.113.7
example.local
lab.example
```

Better:

```text
[demo-host]
[redacted]
[local-lab]
[portfolio-node]
```

Do not use:

```text
real public IPs
school network IPs
home network IPs
Azure subscription IDs
real internal hostnames
real usernames from private labs
```

---

## Interaction model

Recommended MVP behavior:

```text
- button: Open Cyber Lab
- button: Start Lab Mode
- button: Reset
- button: Close
- keypress: writes safe fake terminal text
- Escape: closes modal/overlay
```

Optional shortcuts:

```text
Ctrl + H  -> show help
Shift + 1 -> show "documentation integrity check"
Shift + 2 -> show "case-study loader"
```

Do not capture global keyboard input when the user is typing in forms.

---

## Accessibility requirements

The Cyber Lab must be accessible.

Requirements:

```text
- can be opened with keyboard
- can be closed with Escape
- has a visible close button
- focus is managed if modal is used
- focus returns to trigger button after close
- terminal output area has accessible label
- no required mouse-only interactions
- no autoplay audio
- no flashing effects
```

If using a modal:

```html
<div role="dialog" aria-modal="true" aria-labelledby="cyber-lab-title">
```

Use appropriate focus management in JavaScript.

---

## Reduced motion

Respect user preferences.

If `prefers-reduced-motion: reduce` is active:

```text
- disable typewriter animation or make it instant
- avoid blinking cursor animation
- avoid excessive transitions
- keep the console usable
```

Example CSS:

```css
@media (prefers-reduced-motion: reduce) {
  .terminal-cursor,
  .terminal-line {
    animation: none;
  }
}
```

---

## Visual style

Cyber Lab should match the rest of `chippo.dev`.

Recommended style:

```text
dark panel
subtle border
monospace text
green/cyan accent
small status chips
clear demo label
professional spacing
```

Avoid:

```text
full-screen fake hacking UI
red warning overload
skulls
threatening copy
Matrix rain everywhere
aggressive glitching
```

Add a visible safety label such as:

```text
Harmless interactive terminal demo
```

or:

```text
Fictional portfolio console - no real systems are accessed
```

---

## JavaScript implementation rules

Use vanilla JavaScript for MVP.

Rules:

```text
- no external dependencies
- defensive checks for missing elements
- no network requests
- no real system commands
- no eval()
- no inline secrets
- no clipboard scraping
- no form capture
- no hidden tracking
```

The terminal should only manipulate the DOM on the local page.

---

## Suggested JavaScript behavior

Recommended structure in `terminal.js`:

```text
1. define safe terminal lines
2. find required DOM elements
3. attach open/close/reset listeners
4. attach keyboard listener only while console is active
5. write fake lines on keypress
6. stop capturing keys when closed
```

Use safe guards:

```js
if (!terminalPanel || !terminalOutput) {
  return;
}
```

---

## HTML requirements

Suggested structure:

```html
<section id="lab-console" class="section lab-console">
  <p class="section-eyebrow">Cyber Lab</p>
  <h2>Cyber Lab Console</h2>
  <p>En liten ofarlig terminaldemo inspirerad av klassisk HackerTyper-estetik.</p>

  <div class="terminal-demo" aria-label="Fictional Cyber Lab Console">
    <div class="terminal-header">
      <span>chippo.dev / lab-console</span>
      <span>demo mode</span>
    </div>
    <pre id="terminal-output"></pre>
  </div>

  <button type="button" id="terminal-start">Start Lab Mode</button>
  <button type="button" id="terminal-reset">Reset</button>
</section>
```

---

## Content boundaries

The console may reference:

```text
case studies
documentation checks
Cloudflare Pages
portfolio deployment
GitHub workflow
safe lab status
fake local lab nodes
```

The console must not include:

```text
step-by-step exploitation
credential dumping
real recon against real targets
persistence
evasion
malware-like behavior
phishing prompts
fake login screens
```

---

## Security review checklist

Before finishing Cyber Lab work, check:

```text
[ ] No real IPs, tokens, passwords or secrets.
[ ] No real attack commands.
[ ] No phishing-like UI.
[ ] No network requests.
[ ] No key capture outside active demo.
[ ] No form interference.
[ ] No external dependencies.
[ ] Demo is clearly labeled as harmless/fictional.
[ ] Escape closes the modal/console if applicable.
[ ] Reduced motion is respected.
[ ] Mobile layout works.
[ ] Keyboard navigation works.
[ ] Documentation explains the feature.
```

---

## QA checklist

Test:

```text
[ ] Open Cyber Lab button works.
[ ] Start button works.
[ ] Reset button works.
[ ] Close button works if modal is used.
[ ] Escape closes if modal is used.
[ ] Keypress output only happens while the console is active.
[ ] Contact forms still work normally.
[ ] Mobile layout is readable.
[ ] Console does not overflow horizontally.
[ ] No console errors in browser devtools.
```

---

## Documentation requirements

If the Cyber Lab Console is added or changed, update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md
VERSION_LOG.md
CHANGELOG.md
```

Document:

```text
- what the Cyber Lab does
- that it is fictional and harmless
- how to test it
- how to disable/remove it
- which files contain its code
```

---

## Recommended handoff note

When this feature is added, handoff should include:

```text
## Changed
- Added Cyber Lab Console as a harmless interactive terminal demo.
- Added terminal.js for isolated console behavior.
- Added safe fictional terminal output lines.

## Failed attempts
- None, or document any event listener/modal/focus issues.

## Next Step
- Review visual polish and test accessibility on mobile.
```

---

## Do not overbuild

For MVP, do not add:

```text
real command parser
backend
websocket
user accounts
database
logging of typed keys
external terminal libraries
sound effects
full-screen fake hacking mode
```

Keep it small and easy to maintain.

---

## Summary

The Cyber Lab Console should be:

```text
a fun portfolio easter egg
safe and fictional
small and optional
clearly labeled
accessible
easy to remove
```

The main message of `chippo.dev` must remain:

```text
professional cyber security portfolio with documented practical case studies
```
