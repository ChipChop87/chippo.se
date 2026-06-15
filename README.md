# chippo.se

**🟢 LIVE:** [https://chippo.se](https://chippo.se) (och [www.chippo.se](https://www.chippo.se)) — hostas på Cloudflare Pages. Publicerad v2.3, 2026-06-04.

Personlig **gateway / landing page** för Peter "Chippo" Ångman – cybersäkerhetsstudent och praktisk säkerhetsbyggare.

Sidan är en liten, snabb och statisk ingångssida vars enda jobb är att leda besökaren vidare till:

- **Cyberportfolion** → [chippo.dev](https://chippo.dev)
- **GitHub** → [github.com/ChipChop87](https://github.com/ChipChop87)
- **Kontakt** → [kontakt@chippo.se](mailto:kontakt@chippo.se)

`chippo.se` är **inte** den fullständiga portfolion. Case studies, labbar och Cyber Lab hör hemma på `chippo.dev`.

---

## Teknisk stack

Statisk MVP utan ramverk eller beroenden:

```text
HTML5
CSS3 (CSS-variabler, responsiv, prefers-reduced-motion)
Vanilla JavaScript (inga npm-paket, ingen CDN)
GitHub + Cloudflare Pages (hosting), Cloudflare DNS, Inleed (registrar)
```

## Köra lokalt

```bash
python -m http.server 8000
```

Öppna sedan: <http://localhost:8000>

## Filstruktur

```text
chippo.se/
├── index.html              # Gateway-sidan
├── style.css               # Stilar (dark teal, Hermes-inspirerad atmosfär)
├── script.js               # Reveal vid load, header-scroll, emblem-parallax, kort-spotlight (defensiv vanilla JS)
├── 404.html
├── robots.txt
├── sitemap.xml
├── .editorconfig
├── .gitignore
├── assets/
│   ├── og-image.png        # social delningsbild (1200×630)
│   ├── images/             # chippo-logo-gold.png, hero-bay.jpg, hero-bay-mobile.jpg, portfolio-key.png
│   ├── logos/chippo-logo.svg
│   └── favicon/favicon.svg
├── README.md
├── SAMMANFATTNING.md
├── INSTRUKTIONER_HOW_TO.md
├── SECURITY_NOTES.md
├── VERSION_LOG.md
├── CHANGELOG.md
├── handoff.md
├── AGENTS.md / CLAUDE.md / CHIPPO_SE_AGENT_MASTERPLAN.md / START_HERE_CHIPPO_DOMAINS.md
└── .claude/
    ├── skills/             # 23 projekt-skills
    └── prompts/            # 11 projekt-prompts
```

## Deployment (översikt)

Cloudflare Pages, statiska inställningar:

```text
Framework preset: None
Build command: (tomt)
Build output directory: /
Production branch: main
```

Detaljer finns i `INSTRUKTIONER_HOW_TO.md`. Domän/DNS hanteras separat – se även `SECURITY_NOTES.md` för e-post/DNS-varningen.

## Designdirektion

Elegant, lugn gateway: **Hermes-inspirerad** atmosfär (mörk, mystisk, varm) med
**Huly-inspirerad** struktur. Hero är en **full-bleed filmisk bakgrundsbild**
(bukt/solnedgång, Phishing-Man-tema) med text till vänster och ägarens **guldfärgade
emblemlogga som en stor, sol-likt glödande detalj uppe till höger** (smälter in i
solnedgången). Nedanför: rundade kort och en stor klick-länk till chippo.dev.

Avsiktligt **mindre teknisk/"hacker"** än tidigare versioner – terminal- och
matrix-element hör hemma på chippo.dev. Inga Hermes/Huly-loggor, texter, typsnitt
eller tillgångar kopieras. Typsnitt är system-säkra (no-CDN-regeln); ett self-hostat
display-typsnitt kan läggas i `assets/fonts/` senare.

## Encoding

UTF-8 överallt. Svenska tecken (`å ä ö Å Ä Ö`) ska alltid bevaras.
