# Goal

Bygga och underhålla `chippo.se` som en statisk, Hermes-inspirerad personlig
gateway för Peter "Chippo" Ångman, som leder besökaren vidare till `chippo.dev`,
GitHub och kontakt. Inte den fullständiga portfolion.

## Current state

**v2.3 (senaste): full-bleed foto-hero.** Hero bytt till en filmisk bakgrundsbild
(Phishing-Man, bukt/solnedgång): `assets/images/hero-bay.jpg` (desktop) +
`hero-bay-mobile.jpg` (mobil). Mörk vänster-scrim + text vänster; **stort, sol-likt
glödande guld-emblem uppe till höger** (fungerar som sol/måne i solnedgången).
Header transparent över fotot (bakgrund vid scroll).
Verifierat med Playwright (desktop/mobil, nav ryms till 360px, inga console errors,
svenska tecken OK). Tog bort oanvända `bg-silhouette.jpg`. Citattecknen runt "Chippo"
borttagna i synliga sajten (title + footer); docs behåller kanonisk form. OG-bilden
(`og-image.png`, guld-emblem-kort) behölls.

**Status v2.3:** committad (`3aefc07 Refine chippo.se v2.3 hero design`), **pushad till GitHub**,
och **Cloudflare Pages-preview live & verifierad** (https://chippo-se.pages.dev — alla resurser 200,
hero-bilder live, inga citattecken i synlig text, inga console errors, svenska tecken OK).
**Codex second-pass QA genomförd**; konkreta småfynd åtgärdade: 404-knapp → `.btn-outline`,
README `script.js`-beskrivning uppdaterad, denna handoff uppdaterad.

### ✅ PUBLICERAD – chippo.se v2.3 LIVE (2026-06-04)

chippo.se är nu publicerad på sin egen domän via Cloudflare Pages:
- **https://chippo.se** → HTTP 200, HTTPS OK (verifierat read-only).
- **https://www.chippo.se** → HTTP 200, HTTPS OK (båda serverar; www gör 200, ingen apex-redirect konfigurerad).
- **Hosting:** Cloudflare Pages (projekt `chippo-se`, Git-kopplat till `ChipChop87/chippo.se`, branch `main`).
- **Custom domain:** `chippo.se` + `www.chippo.se` kopplade i Pages.
- **DNS verifierad.** MX pekar nu på `mail.chippo.se`. `mail/smtp/pop` är **DNS Only** (ägar-bekräftat
  i Cloudflare-dashboarden). Inga mailposter proxas.
- **E-post `peter@chippo.se` fungerar** för både sändning och mottagning (ägar-testat).
- **Kontaktlänken fungerar.** Obs: på proxydomänen skriver Cloudflare **Email Address Obfuscation**
  om `mailto:` till `/cdn-cgi/l/email-protection#…` + avkodningsskript — funktionellt för besökare,
  dolt för skräppost-skördare (en fördel, ej bugg). På `pages.dev` syns 4 vanliga `mailto:`.

Detta motsvarar **publiceringen av chippo.se v2.3**. Se `docs/RELEASE_NOTES.md`.

### 🔄 UPPDATERING – publik kontaktadress → kontakt@chippo.se (2026-06-15)

Den **publika kontaktadressen** på chippo.se har bytts från `peter@chippo.se` till
`kontakt@chippo.se` (verifierad och fungerande, fungerar även på chippo.dev-spåret).
Ändrat i `index.html`: alla fyra `mailto:`-länkar (header, hero-CTA, kontaktkort, footer)
+ den synliga adresstexten i kontaktkortet. Aktuell dokumentation uppdaterad.
`peter@chippo.se`-brevlådan finns kvar men visas inte längre publikt.
**Inga** design-, DNS-, Cloudflare-, custom domain- eller e-postkonto-ändringar.

**Verifierat av mig (read-only):** apex + www 200/HTTPS, titel/`Ångman`-rendering, kontaktlänkar
närvarande (CF-obfuskerade), MX-värde. **Ägar-bekräftat (kunde ej testas av mig):** proxy-status
DNS Only i dashboarden, e-post skicka/ta emot.

**Git:** publikt repo `ChipChop87/chippo.se`, branch `main`, pushad. Senaste pushade commit: `4bf8b7e`.

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

**GitHub:** publikt repo `ChipChop87/chippo.se`, branch `main`, pushad
(commit `8f17e2e`). https://github.com/ChipChop87/chippo.se

**Cloudflare Pages preview – LIVE & VERIFIERAD (2026-06-02):**
- URL: https://chippo-se.pages.dev (projekt `chippo-se`, Git-kopplat till repot, branch `main`,
  preset None, tomt build-kommando, output `/`).
- Verifierat mot live-URL: sidan 200, `style.css`/`script.js`/`og-image.png`/`favicon.svg`/
  `robots.txt`/`sitemap.xml` alla 200, custom 404 ("Sidan hittades inte") OK, svenska tecken OK,
  GitHub/chippo.dev/mailto-länkar finns, **inga console errors**.
- chippo.dev-länken korrekt men måldomänen ej live ännu.
- **Ingen custom domain, ingen nameserver-ändring, ingen DNS/e-poständring gjord.**

## Files in flight

Inga halvfärdiga filer. Designen är klar och committad; visuell QA godkänd.

## Changed

Se `CHANGELOG.md` / `VERSION_LOG.md`. Senast committat: `53d3e18` (redesign) + `ec2a24e`
(tooling-notis). Denna handoff-uppdatering: "Update handoff after visual QA".

**2026-06-15:** Publik kontaktadress bytt till `kontakt@chippo.se` (se CHANGELOG `2.3.1`
/ VERSION_LOG `v1.1`). Ej committad/pushad ännu – väntar på godkännande.

## Failed attempts

Inga tekniska. Designriktningen har itererats: nyckel → "The Threshold" → ram+matrix-regn
→ (på ägarens begäran) tillbaka till en lugn, elegant guld-emblem-gateway utan hacker-element.

## Next Step

**chippo.se är klar och publicerad (v2.3 live).** Fokus flyttas till **chippo.dev** i en ny session.

Valfria/öppna småpunkter på chippo.se (ej blockerande, kan tas senare):
- Överväg `www → apex`-redirect (idag svarar båda 200) för en enda kanonisk URL.
- Överväg `rua=` i DMARC för rapporter; verifiera DKIM-selektor om e-post ska signeras.
- Uppdatera `og-image.png` till foto-tema om så önskas (nuvarande guld-emblem-kort fungerar).

Nästa stora spår (ny session): **bygg chippo.dev** (Huly-inspirerad cyber security-portfolio,
case studies, liten Cyber Lab). Separat repo `ChipChop87/chippo.dev`. Använd
`.claude/prompts/project-start-context-intake` + `chippo-dev-build`.
