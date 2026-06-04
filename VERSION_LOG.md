# Version Log

## v1.0 – PUBLICERAD: chippo.se v2.3 LIVE

Date: 2026-06-04
Goal: Publicera chippo.se på egen domän via Cloudflare Pages.

What was done:
- **chippo.se** och **www.chippo.se** är live via Cloudflare Pages (custom domain på projekt `chippo-se`).
- HTTPS verifierat (apex + www svarar 200, read-only).
- DNS verifierad; MX → `mail.chippo.se`; `mail/smtp/pop` satta till **DNS Only** (ägar-bekräftat).
- E-post `peter@chippo.se` fungerar (sändning + mottagning, ägar-testat).
- Kontaktlänken fungerar (Cloudflare Email Obfuscation skriver om `mailto:` på proxydomänen –
  funktionellt för besökare, dolt för skördare).
- Motsvarar publiceringen av chippo.se v2.3 (kod = commit `4bf8b7e`).

What was not done:
- Inga DNS-/e-poständringar gjorda av mig i detta steg (endast read-only verifiering + dokumentation).
- `www → apex`-redirect ej satt (båda svarar 200).
- DKIM-selektor / DMARC `rua` ej åtgärdade (valfritt).

Known issues / öppet:
- chippo.dev ännu ej live (separat projekt, nästa session).

Next step:
- Flytta fokus till **chippo.dev** i ny session.

## v0.7 – Full-bleed foto-hero (Phishing-Man)

Date: 2026-06-02
Goal: Byta hero till en filmisk full-bleed bakgrundsbild (bukt/solnedgång, Phishing-Man)
med text vänster och en liten flytande guld-emblem uppe till höger (likt mockup).

What was done:
- Optimerade två bakgrunder: `hero-bay.jpg` (1600px) + `hero-bay-mobile.jpg` (800px porträtt).
- Byggde om hero: full-bleed foto, vänster-scrim, textblock, flytande emblem top-right.
- Transparent header över fotot (bakgrund vid scroll), text-shadow för läsbarhet.
- Mobilnav justerad (ryms ner till 360px). Tog bort `.hero-bg`-silhuetten och raderade
  oanvända `bg-silhouette.jpg`.
- Tog bort citattecken runt "Chippo" i synliga sajten (title + footer); docs behåller kanonisk form.
- Större, sol-likt emblem (fungerar som sol/måne i solnedgången).
- Verifierat med Playwright (desktop/mobil-skärmdumpar + console, inga fel).

What was not done:
- OG-bilden (`og-image.png`) behölls (guld-emblem-kort) – ej ändrad till foto-tema.
- Ingen deploy/push (gjord separat när du godkänner).

Known issues:
- Visuellt granskat via Playwright-skärmdumpar; finjustering av scrim/emblemstorlek möjlig.

Next step:
- Ditt godkännande → commit/push → (separat spår) e-post-DNS + custom domain.

## v0.6 – OG/Twitter-bild

Date: 2026-06-02
Goal: Skapa en social delningsbild (og-image) i sajtens stil och koppla in den.

What was done:
- Skapade `assets/og-image.png` (1200×630) med GDI+ från egna assets (guld-emblem,
  teal-gradient, cream/guld-text, "Peter Chippo Ångman", undertitel + chippo.se → chippo.dev).
- Lade till OG- och Twitter/X-metadata i `index.html` (absolut URL).
- Visuell QA gjord tidigare (Playwright). Verifierat: og-bilden serveras 200, svenska
  tecken OK, inga console-fel, inga secrets.

What was not done:
- Ingen deploy/push. Inget self-hostat typsnitt.

Known issues:
- chippo.dev-länken korrekt men måldomänen ej live ännu.

Next step:
- Bekräfta kontaktadress → security-content-review → GitHub remote + push → Cloudflare Pages.

## v0.5 – Emblem höger + diskreta bakgrundsbilder

Date: 2026-06-02
Goal: Placera emblemet snyggare (höger, större, genomskinligt), Huly-likt, samt
lägga till diskreta bakgrundsbilder och en stor klick-länk till chippo.dev.

What was done:
- Tvåkolumns-hero (text vänster, emblem höger), emblem större + `opacity:.82`.
- Diskret silhuett-bakgrund i hero (tonas upp vid hover), optimerad till 162 KB JPEG.
- Stor `.portal-link` till chippo.dev med nyckel/dörr-bild som reveal vid hover.
- GitHub/Kontakt kvar som kort. Uppdaterade dokumentation.
- Verifierat lokalt: alla resurser 200, 1 h1, 0 _blank utan noopener, screen-blends ok.

What was not done:
- `og-image.png` saknas (TODO). Inget self-hostat typsnitt. Ingen deploy/push.
- Inget Chrome-/browser-verktyg fanns aktiverat för visuell matchning mot huly.io.

Known issues:
- Visuell rendering ej ögongranskad i grafisk browser (kräver din kontroll).
- Silhuett-bakgrunden har familjekaraktär – medveten avvikelse från angmans.se-regeln
  (se SECURITY_NOTES.md).

Next step:
- Visuell granskning (desktop/mobil/reduced motion + hover-effekter), bekräfta e-post,
  og-image, security-content-review, sedan deploy.

## v0.4 – Elegant Hermes/Huly-omarbetning (guld-emblem)

Date: 2026-06-02
Goal: Gör chippo.se mindre "hacker" och mer elegant (Hermes/Huly), med ägarens
guldlogga som flytande centrum. Flytta tekniska/hacker-element till chippo.dev.

What was done:
- Bytte hero till guld-emblemloggan (`chippo-logo-gold.png`), flytande + guldhalo,
  `mix-blend: screen` för att dölja loggans svarta bakgrund.
- Tog bort matrix-regn, nyckel-/profilbild, terminal/transmission och ram/portal.
- Ny elegant layout: centrerad hero, gradient-rubrik, Huly-pill-CTA, rundade kort.
- Förenklade script.js; uppdaterade 404.html till nya knappstilar.
- Verifierat lokalt: alla resurser 200, JS-syntax OK, 1 h1, 0 _blank utan noopener,
  nyckelbild borttagen (404), inga matrix/terminal/portal-rester.

What was not done:
- `og-image.png` saknas (TODO).
- Self-hostat display-typsnitt.
- Ingen deploy/push.

Known issues:
- Visuell rendering ej ögongranskad i grafisk browser (kräver din kontroll).

Next step:
- Visuell granskning (desktop/mobil/reduced motion), bekräfta e-post, og-image,
  security-content-review, sedan deploy.

## v0.3 – "The Threshold" redesign

Date: 2026-06-02
Goal: Lyfta gatewayen från ren statisk sida till en distinkt, minnesvärd design
utan att bryta varumärkes-/teknikreglerna (mörk teal, vanilla, ingen CDN).

What was done:
- Ny atmosfär (aurora, grain, vignette, blueprint-grid), allt CSS/inline-SVG.
- Editorial hero med Georgia-display, portal-ring + glöd runt nyckeln.
- Staggrad reveal vid sidladdning; transmission-panel med scanline.
- Numrerade kort med cursor-spotlight; sticky header med scroll-state.
- script.js: load-reveal, header-scroll, parallax, kort-spotlight, terminal.
- Full reduced-motion-täckning; en h1, alt-text, fokusringar bevarade.
- Fixade `404.html` (variabelnamn `--display`).
- Verifierat lokalt: alla resurser 200, JS-syntax OK, 1 h1, 0 _blank utan noopener.

What was not done:
- `og-image.png` saknas (TODO).
- Distinkt self-hosted typsnitt (kräver licens + fontfil i assets/fonts/).
- Ingen deploy/push.

Known issues:
- Visuell rendering ej ögongranskad i grafisk browser (kräver din kontroll).

Next step:
- Visuell granskning i browser (desktop + mobil + reduced motion), ev. justeringar,
  bekräfta e-post, skapa og-image, sedan deploy.

## v0.2 – Egen hero-bild

Date: 2026-06-02
Goal: Använda ägarens egna handritade nyckel/dörr-illustration som flytande hero.

What was done:
- Kopierade in `assets/images/chippo-hero.png` (transparent PNG, 1200×2068).
- Ersatte SVG-hero/orbs med `<img class="hero-key">` + grön glöd, behöll
  floating-effekt och reduced-motion.
- Uppdaterade SAMMANFATTNING, INSTRUKTIONER, SECURITY_NOTES, CHANGELOG, handoff.
- Verifierade lokalt: bild + CSS + JS laddas (HTTP 200), inga orb-rester kvar.

What was not done:
- `og-image.png` saknas fortfarande (TODO).
- Ingen deploy/push.

Known issues:
- Visuell rendering ej ögongranskad i grafisk browser (kräver din kontroll).

Next step:
- Visuell kontroll i browser, bekräfta e-post, skapa og-image, sedan deploy.

## v0.1 – Foundation

Date: 2026-06-02
Goal: Skapa en statisk Hermes-inspirerad gateway för chippo.se som leder vidare
till chippo.dev, GitHub och kontakt.

What was done:
- Skapade repo-struktur och initierade git (branch `main`, UTF-8-config).
- Kopierade in agent-paketets dokument och hela `.claude/skills` + `.claude/prompts`.
- Byggde `index.html`, `style.css`, `script.js`.
- Lade till `404.html`, `robots.txt`, `sitemap.xml`, `.editorconfig`, `.gitignore`.
- Skapade egna SVG-tillgångar (logo + favicon).
- Skrev fullständig dokumentation (README, SAMMANFATTNING, INSTRUKTIONER,
  SECURITY_NOTES, CHANGELOG, handoff).
- QA lokalt: layout, länkar, tangentbord, konsol, UTF-8, reduced motion.

What was not done:
- Riktig hero-bild och `og-image.png` (TODO).
- Cloudflare Pages-deploy och DNS-/nameserver-koppling.
- GitHub-push (inget remote konfigurerat ännu).

Known issues:
- OG-förhandsbild saknas vid social delning.
- Kontaktadress `peter@chippo.se` ej bekräftad som aktiv.

Next step:
- Bekräfta kontaktadress, lägg in hero/og-bild, kör security-content-review,
  deploya via Cloudflare Pages.
