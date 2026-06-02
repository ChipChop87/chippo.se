# Instruktioner – chippo.se

## Köra lokalt
```bash
python -m http.server 8000
```
Öppna <http://localhost:8000>. Tryck `Ctrl + C` för att stoppa servern.

## Ändra text
All synlig text finns i `index.html`. Sök efter rätt sektion:
- Hero-rubrik: `<h1 id="hero-title">`
- Undertitel: `<p class="subtitle">`
- Introtext: `<p class="lead">`
- Korttexter: under `<section class="gateway">`
Spara alltid filen som **UTF-8** så att `å ä ö` bevaras.

## Byta bilder
Alla bilder ligger i `assets/images/`:
- **Emblem (hero, höger):** `chippo-logo-gold.png` – nu med **äkta transparent bakgrund**
  (inbakad), visas via `<img class="emblem-img">`. Ingen blend/ram behövs.
  Storlek: `.emblem-img { height }`, genomskinlighet: `.emblem-img { opacity }`, halo: `.emblem-halo`.
- **Diskret hero-bakgrund:** `bg-silhouette.jpg`, sätts i `.hero-bg` (CSS `background`).
  Den tonas upp vid hover via `.hero:hover .hero-bg { opacity }`. Vita bakgrunder döljs
  med `invert(1)` + `screen`; använd en mörk/transparent bild om du slipper det.
- **Nyckel bakom .dev-länken:** `portfolio-key.png`, sätts i `.key-bg`. Visas vid hover
  via `.portal-link:hover .key-bg { opacity }`. Position: `background-position` i `.key-bg`.
- Vill du byta någon: lägg ny fil i `assets/images/`, uppdatera sökväg/alt och ev. storlek.
- Favicon: `assets/favicon/favicon.svg`.

## Stora .dev-länken
Den stora klickbara rubriken till portfolion är `<a class="portal-link" href="https://chippo.dev">`
i `index.html`. Texten ändras i `.pl-eyebrow/.pl-title/.pl-sub/.pl-go`.

## Ändra länkar
Länkarna finns på flera ställen (header, hero-CTA, kort, footer). Ändra konsekvent:
- Portfolio → `https://chippo.dev`
- GitHub → `https://github.com/ChipChop87`
- Kontakt → `mailto:peter@chippo.se`
Om e-postadressen ändras: uppdatera **alla** förekomster och notera det i
`CHANGELOG.md` och `handoff.md`.

## Testa sidan
- Desktop (1440px / 1280px), tablet (768px), mobil (390px).
- Kontrollera länkar, mailto, tangentbordsnavigering (Tab), fokusramar.
- Kontrollera konsolen (F12) – inga fel.
- Kontrollera att `å ä ö` visas korrekt.
- Aktivera "reduce motion" i OS och verifiera att animationer dämpas.

## Pusha till GitHub
```bash
git add .
git commit -m "chippo.se v1.0 – statisk gateway"
git branch -M main
git remote add origin https://github.com/ChipChop87/chippo.se.git
git push -u origin main
```

## Deploy via Cloudflare Pages
1. Skapa ett Pages-projekt och koppla repot `ChipChop87/chippo.se`.
2. Inställningar för statisk sida:
   ```text
   Framework preset: None
   Build command: (tomt)
   Build output directory: /
   Production branch: main
   ```
3. Deploya till `*.pages.dev`-förhandsvisningen och verifiera.

## Koppla domän via Inleed och Cloudflare
1. Lägg till `chippo.se` som zon i Cloudflare (Free).
2. Kopiera de två Cloudflare-nameservrarna.
3. Logga in på Inleed → öppna `chippo.se` → byt nameservers → spara.
4. Vänta tills Cloudflare visar zonen som **Active**.
5. Lägg till custom domains `chippo.se` och `www.chippo.se` i Pages-projektet.
6. Verifiera HTTPS. Sätt redirect `www.chippo.se → chippo.se` om önskat.

> **VARNING:** Om `peter@chippo.se` eller annan domän-e-post är aktiv – dokumentera
> och återskapa MX, SPF, DKIM och DMARC i Cloudflare **innan** du byter nameservers.
> Se `SECURITY_NOTES.md`.

## Felsökning
- **Svenska tecken blir konstiga:** filen är inte sparad som UTF-8, eller
  `<meta charset="UTF-8">` saknas.
- **Floating-effekt rör sig inte:** förväntat om "reduce motion" är på.
- **Bild laddas inte:** kontrollera sökväg under `assets/` och filnamn.
- **404 vid lokal navigering:** servera från projektroten (kör kommandot i
  `chippo.se/`).
