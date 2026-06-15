# Release Notes – chippo.se v2.3 (PUBLICERAD)

**Datum:** 2026-06-04
**Status:** LIVE
**Kod:** commit `4bf8b7e` (branch `main`, repo `ChipChop87/chippo.se`)

> **Uppdatering 2026-06-15:** Den **publika kontaktadressen** har bytts till `kontakt@chippo.se`
> (verifierad/fungerande). `peter@chippo.se`-brevlådan finns kvar men visas inte längre publikt.
> Innehållsändring i `index.html` + dokumentation – **inga** DNS-, Cloudflare-, custom domain-
> eller e-postkonto-ändringar. Se CHANGELOG `2.3.1` / VERSION_LOG `v1.1`.

## Sammanfattning
chippo.se v2.3 är publicerad på sin egen domän. Sidan är en statisk, elegant personlig
gateway (full-bleed foto-hero med flytande sol-likt guld-emblem) som leder vidare till
chippo.dev, GitHub och kontakt.

## Live-URL:er
- https://chippo.se — HTTP 200, HTTPS OK
- https://www.chippo.se — HTTP 200, HTTPS OK (båda serverar; ingen apex-redirect konfigurerad)
- Preview (kvar): https://chippo-se.pages.dev

## Hosting & DNS
- **Hosting:** Cloudflare Pages (projekt `chippo-se`, Git-kopplat, branch `main`, preset None,
  tomt build-kommando, output `/`).
- **Custom domain:** `chippo.se` + `www.chippo.se` kopplade i Pages.
- **DNS:** verifierad. MX → `mail.chippo.se`. `mail/smtp/pop` är **DNS Only** (ej proxade).
- **E-post:** `peter@chippo.se` fungerar för sändning och mottagning.
- **Kontaktlänk:** fungerar. Cloudflare Email Address Obfuscation skriver om `mailto:` på
  proxydomänen (`/cdn-cgi/l/email-protection`) — funktionellt för besökare, dolt för skördare.

## Verifiering
- Verifierat read-only av agenten: apex + www 200/HTTPS, titel/`Ångman`-rendering, kontaktlänkar
  närvarande (CF-obfuskerade), MX-värde, inga console errors på previewen.
- Ägar-bekräftat (kunde ej testas av agenten): proxy-status DNS Only i dashboarden, e-postflöde.

## Vad ingår i v2.3
- Full-bleed foto-hero (bukt/solnedgång, Phishing-Man-tema), mörk vänster-scrim, text vänster.
- Stort, sol-likt glödande guld-emblem uppe till höger (flytande).
- Transparent header (bakgrund vid scroll), gradient-rubrik, GitHub/Kontakt-CTA.
- Stor klick-länk till chippo.dev (nyckel/dörr-bild vid hover) + GitHub/Kontakt-kort.
- OG/Twitter-delningsbild, custom 404, robots.txt, sitemap.xml.
- Vanilla HTML/CSS/JS, ingen CDN, reduced-motion, en h1, alt-text, svensk UTF-8.

## Kända begränsningar / öppet
- chippo.dev ännu ej live (separat projekt, nästa session) — chippo.dev-länkarna pekar rätt
  men måldomänen är inte publicerad än.
- `www → apex`-redirect ej satt (båda svarar 200).
- DKIM-selektor / DMARC `rua` ej åtgärdade (valfritt; e-post fungerar).

## Nästa steg
Fokus flyttas till **chippo.dev** i en ny session.
