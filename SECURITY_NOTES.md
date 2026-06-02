# Security Notes – chippo.se

## Inga hemligheter i repot
Repot innehåller inga lösenord, API-nycklar, tokens, hemligheter, privata
IP-adresser, subscription-ID:n, personnummer eller `.env`-filer. Sidan är helt
statisk och har ingen backend.

Sekretesskanning körd lokalt:
```bash
rg -i "password|secret|token|api_key|apikey|subscription|personnummer|private|\.env"
```
Endast träffar i dokumentation/regeltext (denna fil m.fl.) – inga riktiga värden.

## Inga tokens / API-nycklar
Ingen tredjepartsintegration, ingen analytics, ingen tracking, inga CDN-skript.

## Regler för externa länkar
Alla externa länkar med `target="_blank"` använder `rel="noopener noreferrer"`.
Externa mål: `chippo.dev`, `github.com/ChipChop87`. Kontakt via `mailto:`.

## Bild- och licensnoter
- Hero-märke och favicon är **egna** SVG:er – inga Hermes-/Huly-tillgångar.
- Inga hotlinkade externa bilder.
- Eventuell framtida hero-bild ska vara egenägd/licensierad och optimerad.

## E-post / DNS-varning
Innan nameservers byts till Cloudflare: dokumentera och återskapa befintliga
e-postposter så att `peter@chippo.se` inte slutar fungera:
```text
MX
SPF
DKIM
DMARC
mail-relaterade CNAME/TXT
```
Byt **inte** DNS/nameservers utan att först kontrollera e-postposter.

## Innehållsklassning
All publik text på sidan är klassad **PUBLIC** (namn, teknisk inriktning,
publika länkar). Inget **REQUEST_ONLY**- eller **PRIVATE**-material finns i repot.
`private-reference/` är blockerat i `.gitignore` om det skapas senare.

## Säkerhets-checklista (review)
- [x] Inga secrets/tokens/lösenord.
- [x] Inga privata IP-adresser eller personuppgifter.
- [x] Inga privata dokument, brev eller skärmdumpar.
- [x] Inga kopierade Hermes/Huly-loggor, texter, typsnitt eller tillgångar.
- [x] Terminalblocket är ofarligt och dekorativt (ingen falsk hacking).
- [x] Externa länkar använder `rel="noopener noreferrer"`.
- [ ] E-post/DNS-poster dokumenterade innan deploy (görs vid deployment).
