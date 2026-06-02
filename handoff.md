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

**Visuell QA – GODKÄND (via Playwright 1.60, lokalt på http://localhost:8088):**
- Desktop 1440×900: OK
- Mobil 390×844: OK
- Hover-states (silhuett-bakgrund tonas upp, nyckel/dörr-bild bakom .dev-länken): OK
- Console errors: inga
- Svenska tecken (å ä ö): OK
- chippo.dev-länken korrekt, men **måldomänen är inte live ännu**
- Skärmdumpar finns i `KomboVersion\qa-shots\` (utanför repot). Playwright-setupen och
  qa-shots ligger kvar i föräldermappen och **committas inte** i detta repo.

## Files in flight

Inga halvfärdiga filer. Designen är klar och committad; visuell QA godkänd.

## Changed

Se `CHANGELOG.md` / `VERSION_LOG.md`. Senast committat: `53d3e18` (redesign) + `ec2a24e`
(tooling-notis). Denna handoff-uppdatering: "Update handoff after visual QA".

## Failed attempts

Inga tekniska. Designriktningen har itererats: nyckel → "The Threshold" → ram+matrix-regn
→ (på ägarens begäran) tillbaka till en lugn, elegant guld-emblem-gateway utan hacker-element.

## Next Step

Visuell QA klar (godkänd). OG/Twitter-bild klar (`assets/og-image.png`, 1200×630, inkopplad
i metadata, serveras 200, svenska tecken OK, inga console-fel). Återstår, i ordning:
1. Bekräfta kontaktadress `peter@chippo.se` (annars fallback `chippo.angman@gmail.com` + notera i CHANGELOG).
2. Kör `.claude/prompts/security-content-review/PROMPT.md` igen.
3. Därefter: GitHub remote + push (`ChipChop87/chippo.se`) → Cloudflare Pages preview.
4. Dokumentera/återskapa e-post-DNS innan nameserver-byte (se `SECURITY_NOTES.md`).

Ingen push och ingen deploy är gjord ännu (medvetet).
