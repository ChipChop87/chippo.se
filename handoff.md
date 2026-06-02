# Goal

Bygga och underhålla `chippo.se` som en statisk, Hermes-inspirerad personlig
gateway för Peter "Chippo" Ångman, som leder besökaren vidare till `chippo.dev`,
GitHub och kontakt. Inte den fullständiga portfolion.

## Current state

v1.0 byggd och QA-testad lokalt. Sidan är komplett och redo för
security-content-review + deployment.

- `index.html`, `style.css`, `script.js` klara och fungerar med
  `python -m http.server 8000`.
- Stödfiler: `404.html`, `robots.txt`, `sitemap.xml`, `.editorconfig`, `.gitignore`.
- Egna SVG-tillgångar (logo + favicon).
- Hela dokumentationssetet skrivet.
- `.claude/skills` (23) och `.claude/prompts` (11) installerade.
- Git initierat (branch `main`), inget remote.

## Files in flight

Inga halvfärdiga filer. Allt incheckat-redo.

## Changed

Alla filer är nya (session zero). Se `CHANGELOG.md` / `VERSION_LOG.md`.

## Failed attempts

Inga. Bygget gick rent.

## Next Step

1. Bekräfta att `peter@chippo.se` är aktiv (annars fallback
   `chippo.angman@gmail.com` + notera i CHANGELOG).
2. Lägg in riktig hero-bild och skapa `og-image.png` (1200×630), referera i
   `index.html`.
3. Kör `.claude/prompts/security-content-review/PROMPT.md`.
4. Pusha till `ChipChop87/chippo.se` och deploya via Cloudflare Pages.
5. Dokumentera/återskapa e-post-DNS innan nameserver-byte (se `SECURITY_NOTES.md`).
