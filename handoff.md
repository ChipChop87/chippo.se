# Goal

Bygga och underhålla `chippo.se` som en statisk, Hermes-inspirerad personlig
gateway för Peter "Chippo" Ångman, som leder besökaren vidare till `chippo.dev`,
GitHub och kontakt. Inte den fullständiga portfolion.

## Current state

v2.0 byggd och lokalt verifierad (programmatiskt). Elegant Hermes/Huly-gateway med
ägarens guld-emblemlogga som flytande centrum. Redo för din visuella granskning,
sedan security-content-review + deployment.

**Git:** Tre commits, working tree clean:
`3872b73` foundation → `70d12bb` handoff → `53d3e18` "Redesign gateway: gold emblem,
silhouette bg, big chippo.dev link" (hela v2.x-omarbetningen samlad). Ingen GitHub-push,
ingen deploy ännu (medvetet).

**Tooling tillgängligt (i förälder-mappen KomboVersion, ej i repot):** Supabase, Playwright,
Vercel, GitHub CLI m.fl. ligger som npm/CLI utanför `chippo.se/`. Repots `.gitignore` är härdad
mot node_modules/.vercel/.supabase/Playwright-artefakter. OBS: MVP är statisk per masterplanen –
inför INTE backend (Supabase) eller ramverk i chippo.se utan dokumenterat skäl. Användbart:
Playwright kan göra riktig visuell QA/skärmdumpar; GitHub CLI för repo+push; Vercel/Cloudflare för deploy.

**v2.1 (ocommittad) – elegant Hermes/Huly-gateway, emblem höger + bakgrundsbilder:**
- Tvåkolumns-hero: text vänster, **guld-emblem höger**, större och mer genomskinligt
  (`opacity:.82`, `mix-blend:screen` döljer loggans svarta bakgrund).
- **Diskret silhuett-bakgrund** i hero (`bg-silhouette.jpg`, mor & barn) som tonas upp
  vid hover (invert+screen). Optimerad till 162 KB JPEG.
- **Stor klick-länk till chippo.dev** (`.portal-link`) där nyckel/dörr-bilden
  (`portfolio-key.png`) visas diskret vid hover; hela ytan klickbar till portfolion.
- Kvar som kort: GitHub + Kontakt. **Borttaget tidigare:** matrix-regn, terminal,
  ram/portal, nyckel-profilbild i hero (hör till chippo.dev).
- `index.html`, `style.css`, `script.js`, `404.html`. Vanilla, ingen CDN, reduced-motion
  täckt, en h1, alt-text, fokusringar. Inget Chrome-/browser-verktyg fanns för visuell matchning.
- **OBS domänroll:** silhuetten har familjekaraktär (hör annars till angmans.se) – används
  medvetet på ägarens begäran som diskret atmosfär. Se SECURITY_NOTES.md.

**Designnotis:** Typsnitt är system-säkra (Georgia + system-sans) p.g.a. no-CDN-regeln.
Ett self-hostat display-typsnitt kan läggas i `assets/fonts/` senare utan att bryta regeln.

- Stödfiler: `404.html`, `robots.txt`, `sitemap.xml`, `.editorconfig`, `.gitignore`.
- `.claude/skills` (23) och `.claude/prompts` (11) installerade.
- Git initierat (branch `main`), inget remote.

## Files in flight

Inga halvfärdiga filer. Allt v2.0-arbete är klart men ocommittat (väntar på visuell granskning).

## Changed

Se `CHANGELOG.md` / `VERSION_LOG.md`. Senast: v2.0 elegant omarbetning + byte av hero-symbol.

## Failed attempts

Inga tekniska. Designriktningen har itererats: nyckel → "The Threshold" → ram+matrix-regn
→ (på ägarens begäran) tillbaka till en lugn, elegant guld-emblem-gateway utan hacker-element.

## Next Step

1. **Visuell granskning** i browser (desktop/mobil/reduced motion) – bekräfta att guld-emblemet
   ser bra ut med `mix-blend: screen` mot bakgrunden.
2. Bekräfta att `peter@chippo.se` är aktiv (annars fallback `chippo.angman@gmail.com` + CHANGELOG).
3. Skapa `og-image.png` (1200×630) och referera i `index.html`.
4. Kör `.claude/prompts/security-content-review/PROMPT.md`.
5. Commit + push till `ChipChop87/chippo.se`, deploya via Cloudflare Pages.
6. Dokumentera/återskapa e-post-DNS innan nameserver-byte (se `SECURITY_NOTES.md`).
