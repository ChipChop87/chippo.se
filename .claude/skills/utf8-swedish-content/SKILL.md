# utf8-swedish-content-skill

## Purpose

Use this skill whenever an AI agent creates, edits, reviews, exports, or publishes files for the Chippo domain projects where Swedish text may appear.

The goal is to guarantee that Swedish characters are preserved correctly everywhere:

```text
å, ä, ö, Å, Ä, Ö
```

This applies to:

```text
chippo.se
chippo.dev
future angmans.se work
HTML
CSS
JavaScript
Markdown
README files
documentation files
GitHub commits
Cloudflare Pages deployments
PDF exports
handoff files
agent instructions
```

Swedish characters must never be transliterated or simplified.

---

## Hard rule

All project files must be saved as **UTF-8**.

Never change:

```text
Ångman -> Angman
från -> fran
säkerhet -> sakerhet
åtgärd -> atgard
lärdom -> lardom
nätverk -> natverk
härdning -> hardning
förstå -> forsta
Söker LIA -> Soker LIA
```

Correct examples:

```text
Peter "Chippo" Ångman
cybersäkerhet
inlämningsuppgifter
säkerhet
åtgärd
lärdom
nätverk
härdning
förstå
Söker LIA
```

---

## When to use this skill

Use this skill when:

```text
- creating or editing HTML files
- creating or editing CSS files
- creating or editing JavaScript files
- creating or editing Markdown documentation
- creating README, AGENTS.md, CLAUDE.md or handoff files
- writing Swedish website content
- writing Swedish owner documentation
- exporting Markdown or HTML to PDF
- reviewing files before GitHub push
- reviewing files before Cloudflare Pages deploy
- fixing text copied from terminals or AI outputs
```

---

## HTML requirements

Every HTML file must include this early in the `<head>`:

```html
<meta charset="UTF-8">
```

Recommended base:

```html
<!doctype html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Peter "Chippo" Ångman | Cyber Security Portfolio</title>
</head>
```

Rules:

```text
- Use lang="sv" for Swedish pages.
- Use real Swedish characters directly.
- Do not replace Swedish characters with HTML entities unless there is a specific technical reason.
- Prefer Ångman over &Aring;ngman.
- Ensure meta title and meta description keep Swedish characters intact.
```

---

## CSS requirements

CSS files must be saved as UTF-8.

Add this at the top of `style.css` when appropriate:

```css
@charset "UTF-8";
```

Use font stacks that support Swedish characters:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
```

Rules:

```text
- Do not use custom fonts unless they support å, ä, ö, Å, Ä, Ö.
- If custom fonts are used, document the font name, file name, license and Swedish character support.
- Do not use image text as a substitute for proper Swedish text.
```

---

## JavaScript requirements

JavaScript files must be saved as UTF-8.

Correct examples:

```js
const profileName = 'Peter "Chippo" Ångman';
const statusText = 'Söker LIA inom cybersäkerhet';
const methodText = 'analys -> åtgärd -> verifiering -> dokumentation';
```

Rules:

```text
- Preserve Swedish characters in strings.
- Preserve Swedish characters in translation objects.
- Preserve Swedish characters in terminal/demo text.
- Preserve Swedish characters in DOM-generated text.
- Do not generate fallback text where Swedish words lose å, ä or ö.
```

---

## Markdown requirements

All Markdown files must be saved as UTF-8.

Applies especially to:

```text
README.md
AGENTS.md
CLAUDE.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
SECURITY_NOTES.md
VERSION_LOG.md
CHANGELOG.md
handoff.md
docs/*.md
.claude/skills/*/SKILL.md
```

Rules:

```text
- Keep Swedish section names intact.
- Keep Swedish names intact.
- Keep Swedish content examples intact.
- Do not remove accents when converting between English and Swedish documents.
- Do not let terminal copy/paste corrupt Swedish characters.
```

---

## Editor configuration

Create or update `.editorconfig` in the repo root:

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

Recommended VS Code project settings:

```json
{
  "files.encoding": "utf8",
  "files.autoGuessEncoding": false,
  "files.eol": "\n"
}
```

---

## Git requirements

Recommended Git settings:

```bash
git config --global core.quotepath false
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
```

Check current settings:

```powershell
git config --list | findstr /i "encoding quotepath"
```

Rules:

```text
- Commit messages may contain Swedish text, but must stay UTF-8.
- File names may contain Swedish text if needed, but prefer simple ASCII file names for technical files.
- Content inside files must preserve proper Swedish characters.
```

---

## Windows PowerShell requirements

For better UTF-8 behavior in PowerShell:

```powershell
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [System.Text.UTF8Encoding]::new($false)
```

When writing files:

```powershell
Set-Content -Path ".\test.md" -Value "Å Ä Ö å ä ö" -Encoding utf8
```

When reading files:

```powershell
Get-Content ".\test.md" -Encoding utf8
```

When copying to clipboard:

```powershell
Get-Content ".\README.md" -Encoding utf8 | Set-Clipboard
```

Avoid workflows where text passes through old ANSI encodings.

---

## Python requirements

When Python is used for file generation or conversion, always specify UTF-8 explicitly:

```python
from pathlib import Path

text = Path("README.md").read_text(encoding="utf-8")
Path("README.md").write_text(text, encoding="utf-8")
```

For HTML/PDF generation:

```python
html = Path("input.html").read_text(encoding="utf-8")
Path("output.html").write_text(html, encoding="utf-8")
```

Rules:

```text
- Never rely on platform default encoding.
- Always inspect generated PDF output when Swedish text exists.
- Use fonts that support Swedish characters.
```

---

## PDF export requirements

When exporting Markdown or HTML to PDF:

```text
- Use a font that supports å, ä, ö, Å, Ä, Ö.
- Verify the rendered PDF visually.
- Check first page and at least one later page.
- Include Swedish control words in the visual check.
```

Control words:

```text
Peter "Chippo" Ångman
från
säkerhet
åtgärd
lärdom
nätverk
härdning
Söker LIA
```

If a PDF shows `Angman`, `sakerhet`, `atgard`, `lardom`, or similar, the export is not accepted.

---

## Cloudflare Pages and GitHub checks

After deployment, verify Swedish text in:

```text
GitHub file preview
Cloudflare Pages preview URL
Production URL
```

Check especially:

```text
https://chippo.se
https://chippo.dev
```

Control words to verify in browser:

```text
Ångman
Söker LIA
cybersäkerhet
säkerhetsprojekt
härdning
nätverk
åtgärd
lärdom
```

---

## Common failure patterns

Reject or fix these immediately:

```text
Angman instead of Ångman
sakerhet instead of säkerhet
atgard instead of åtgärd
lardom instead of lärdom
natverk instead of nätverk
hardning instead of härdning
Soker instead of Söker
lasning instead of läsning
```

Also check mixed corruption, for example:

```text
Ã¥
Ã¤
Ã¶
Ã…
Ã„
Ã–
```

These usually mean UTF-8 text was interpreted with the wrong encoding.

---

## Required QA checklist

Before any AI agent marks work as complete, verify:

```text
[ ] All HTML files include <meta charset="UTF-8">.
[ ] Swedish pages use lang="sv".
[ ] CSS files are saved as UTF-8.
[ ] JavaScript files are saved as UTF-8.
[ ] Markdown files are saved as UTF-8.
[ ] README and docs show Swedish characters correctly.
[ ] Browser preview shows Swedish characters correctly.
[ ] GitHub preview shows Swedish characters correctly.
[ ] Cloudflare Pages preview shows Swedish characters correctly.
[ ] PDF export shows Swedish characters correctly, if PDF exists.
[ ] No words have been transliterated unintentionally.
[ ] No mojibake such as Ã¥, Ã¤, Ã¶ exists.
```

---

## Required handoff note

Every handoff must mention UTF-8 status:

```md
## UTF-8 status

Swedish characters were checked in HTML, CSS, JavaScript, Markdown and browser/PDF output where applicable. The words Ångman, cybersäkerhet, åtgärd, lärdom, nätverk and härdning display correctly.
```

If not checked, write:

```md
## UTF-8 status

Not fully verified yet. Next agent must check Swedish characters in browser, GitHub and any PDF output before release.
```

---

## Final instruction to the agent

Before finishing any work for the Chippo domain projects, verify that Swedish characters are preserved correctly.

UTF-8 and Swedish characters are not optional polish. They are a hard project requirement.
