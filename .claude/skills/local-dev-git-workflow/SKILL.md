# local-dev-git-workflow-skill

## Purpose

Use this skill when working locally with the Chippo domain projects, especially when starting a new implementation pass, testing changes, committing work, preparing deployment or recovering from mistakes.

This skill applies to:

- `chippo.se`
- `chippo.dev`
- future `angmans.se`
- shared planning/documentation repositories
- static HTML/CSS/JS projects
- future framework-based versions if added later

The goal is to keep local development safe, repeatable and easy to hand off.

---

## Core rule

Do not overwrite a working version without a safe recovery path.

Before major changes, the agent must ensure at least one of these exists:

```text
- a clean Git commit
- a new Git branch
- a copied backup folder
- a documented rollback point
```

---

## Recommended workflow

Use this flow:

```text
1. Inspect current state.
2. Check Git status.
3. Read handoff/version log.
4. Create a branch or backup.
5. Make small changes.
6. Test locally.
7. Review for secrets/private data.
8. Update documentation.
9. Commit changes.
10. Update handoff with next step.
```

---

## Initial state check

Before editing files, run or perform the equivalent of:

```bash
git status
```

Then identify:

```text
- current branch
- uncommitted changes
- untracked files
- modified documentation
- active files from handoff.md
```

If the working tree is dirty, do not overwrite files without first understanding what changed.

---

## Branch strategy

For normal work, create a task branch.

Examples:

```bash
git checkout -b chippo-se-gateway-v1
git checkout -b chippo-dev-case-studies-v1
git checkout -b docs-agent-guides-v1
git checkout -b fix-mobile-navigation
```

Branch names should be:

```text
short
descriptive
lowercase
hyphen-separated
```

Avoid:

```text
new-branch
test
final-final
random dates without purpose
```

---

## Backup strategy if Git is not available

If the folder is not a Git repo, create a backup before large edits.

Example backup naming:

```text
chippo.dev_backup_before_case_studies_2026-05-28
chippo.se_backup_before_hero_refactor_2026-05-28
```

The agent should document:

```text
- backup folder name
- why it was created
- what version it represents
```

---

## Commit strategy

Commits should be small and meaningful.

Good commit messages:

```bash
git commit -m "Add chippo.se gateway hero and terminal block"
git commit -m "Add chippo.dev case study grid"
git commit -m "Add Cyber Lab Console demo"
git commit -m "Update deployment guide and handoff"
git commit -m "Fix mobile navigation and focus states"
```

Avoid:

```text
update
fix
stuff
final
changes
more changes
```

---

## Static local server

For static HTML/CSS/JS projects, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

This is preferred over double-clicking `index.html` because it better matches deployed behavior for relative paths and assets.

If port 8000 is busy:

```bash
python -m http.server 8080
```

---

## Framework local server

If the project later uses a framework, use the documented commands.

Typical examples:

```bash
npm install
npm run dev
npm run build
npm start
```

Do not introduce npm or a framework unless the project masterplan clearly allows it.

For MVP, prefer static HTML/CSS/JS.

---

## Local test checklist

Before committing, check:

```text
[ ] Page runs locally.
[ ] index.html loads.
[ ] CSS loads.
[ ] JavaScript loads without console errors.
[ ] Images/assets load.
[ ] Navigation links work.
[ ] Contact/mailto link works.
[ ] Mobile layout is usable.
[ ] No horizontal scroll.
[ ] Swedish characters display correctly.
[ ] No secrets or private data are present.
```

---

## Secret scan

Before committing or pushing, run or perform the equivalent of:

```bash
rg -i "password|secret|token|api_key|apikey|subscription|personnummer|private|todo|fixme"
```

Review matches manually.

Important:

```text
A match is not automatically a problem.
A match must be reviewed before publishing.
```

Do not commit real secrets, tokens, passwords, private IPs, subscription IDs or personal data.

---

## Large file check

Before pushing, check for large files.

Example:

```bash
find . -type f -size +5M
```

On PowerShell:

```powershell
Get-ChildItem -Recurse -File | Where-Object { $_.Length -gt 5MB } | Select-Object FullName, Length
```

Large files should be intentional and documented.

Avoid committing:

```text
uncompressed screenshots
raw videos
private PDFs
large exports
temporary design files
node_modules
```

---

## .gitignore baseline

Recommended `.gitignore` for static/front-end repos:

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

If additional local files are created, add them to `.gitignore` before committing.

---

## Private reference folder

If private material is needed for AI context, keep it out of the public repo.

Recommended folder:

```text
private-reference/
```

Rules:

```text
- must be in .gitignore
- must not be published
- may contain private source material
- must not be referenced as public assets
```

---

## Documentation update rule

Any meaningful change must update documentation.

At minimum:

```text
docs/handoff.md
VERSION_LOG.md
```

For feature or release-level work, update:

```text
README.md
SAMMANFATTNING.md
INSTRUKTIONER_HOW_TO.md
docs/handoff.md
VERSION_LOG.md
CHANGELOG.md
```

---

## Handoff update rule

At the end of work, update:

```text
# Goal

## Current state

## Files in flight

## Changed

## Failed attempts

## Next Step
```

The handoff must tell the next agent:

```text
- what was attempted
- what changed
- what did not work
- what files matter now
- what to do next
```

---

## Rollback strategy

If a change breaks the site:

```text
1. Stop making additional changes.
2. Identify the last known working commit or backup.
3. Check what changed.
4. Revert the smallest possible change.
5. Test again.
6. Document the failure in handoff.md.
```

Useful commands:

```bash
git status
git diff
git log --oneline -5
```

If reverting a file:

```bash
git restore path/to/file
```

If reverting a commit, only do so with care:

```bash
git revert <commit>
```

Avoid destructive commands unless explicitly required and understood.

---

## Dangerous commands

Do not run destructive commands without a clear reason and backup.

Dangerous examples:

```bash
rm -rf .
git reset --hard
git clean -fdx
git push --force
```

If such a command seems necessary, document why and prefer a safer alternative.

---

## Push strategy

Before pushing:

```text
[ ] local tests completed
[ ] documentation updated
[ ] secret scan reviewed
[ ] git status checked
[ ] commit message is meaningful
```

Then:

```bash
git add .
git commit -m "Meaningful commit message"
git push origin <branch>
```

For `main`, only push when the version is tested and intended for deployment.

---

## Cloudflare Pages connection

If the repo is connected to Cloudflare Pages, every push to the production branch may deploy.

Therefore, before pushing to `main`:

```text
[ ] confirm production deploy is intended
[ ] verify no private files are included
[ ] verify no broken links
[ ] verify documentation is updated
```

For experiments, use a separate branch if Cloudflare preview deployments are configured.

---

## Version naming

Suggested version tags:

```text
v0.1-foundation
v0.2-design-system
v0.3-case-studies
v0.4-cyber-lab
v0.5-cloudflare-preview
v1.0-live
```

Only tag versions that are meaningful and tested.

Example:

```bash
git tag v0.1-foundation
git push origin v0.1-foundation
```

---

## File change discipline

The agent must avoid touching unrelated files.

Rules:

```text
- Change only files needed for the task.
- Do not reformat entire files without reason.
- Do not rename files unless the plan says so.
- Do not move docs/assets without updating references.
- Do not delete working code unless documented.
```

---

## Common local commands

### Check files

```bash
ls
find . -maxdepth 2 -type f
```

### Start local static server

```bash
python -m http.server 8000
```

### Git state

```bash
git status
git diff
git log --oneline -5
```

### Search

```bash
rg "chippo.dev"
rg -i "password|secret|token|api_key|personnummer"
```

---

## Windows / PowerShell notes

PowerShell commands for UTF-8 and clipboard-safe output:

```powershell
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [System.Text.UTF8Encoding]::new($false)
```

Read files as UTF-8:

```powershell
Get-Content ".\README.md" -Encoding utf8
```

Write files as UTF-8:

```powershell
Set-Content -Path ".\test.md" -Value "Å Ä Ö å ä ö" -Encoding utf8
```

---

## Definition of done

A local development session is done when:

```text
[ ] relevant files were changed intentionally
[ ] site was tested locally if code changed
[ ] no obvious console errors
[ ] no secrets/private data
[ ] documentation updated
[ ] handoff updated
[ ] git status understood
[ ] commit/backup exists or next step says why not
```

---

## Recommended final response from an agent

At the end of work, the agent should report:

```text
## Completed
- ...

## Changed files
- ...

## Tests
- ...

## Not completed
- ...

## Next step
- ...
```

---

## Summary

This skill keeps development safe and recoverable.

The most important rules are:

```text
Do not overwrite working code without backup.
Do not push untested changes to production.
Do not commit secrets or private files.
Always update handoff before ending.
```
