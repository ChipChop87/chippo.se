# Version Log

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
