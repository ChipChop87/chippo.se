# Changelog

## 2.1.1 – Transparent emblem-bakgrund (2026-06-02)
- Tog bort den rektangulära "ramen" runt emblemet (`drop-shadow` på en ogenomskinlig PNG).
- Bakade in **äkta transparens** i `chippo-logo-gold.png` (luminanströskel: mörk
  bakgrund → alfa 0, guld bevarat med mjuka kanter) och tog bort `mix-blend: screen`
  på emblemet. Loggans bakgrund är nu helt borta.

## 2.1.0 – Emblem höger + diskreta bakgrundsbilder (2026-06-02)
- Flyttade guld-emblemet till höger i en tvåkolumns-hero (text vänster),
  gjorde det större och mer genomskinligt (`opacity: .82`) så att det smälter in.
- Lade till en **diskret silhuett-bakgrund** i hero (`bg-silhouette.jpg`, mor & barn)
  som tonas upp vid hover – Huly-likt. Vit bakgrund tas bort med `invert` + `screen`.
- Ny **stor klick-länk till chippo.dev** ("Öppna dörren till portfolion") där
  nyckel/dörr-bilden (`portfolio-key.png`) visas diskret i bakgrunden vid hover och
  hela ytan är klickbar till portfolion.
- Portfolio-kortet ersattes av den stora länken; kvar är GitHub- och Kontakt-kort.
- Optimerade silhuett-bakgrunden till JPEG (1,6 MB → 162 KB).
- Försökte använda Chrome-/browser-tillägg för visuell matchning mot huly.io men
  inget sådant verktyg fanns aktiverat i miljön.

## 2.0.0 – Elegant Hermes/Huly-omarbetning (2026-06-02)
- Bytte hero-symbol till ägarens **guldfärgade emblemlogga**
  (`assets/images/chippo-logo-gold.png`), flytande med guldhalo + `mix-blend: screen`.
- Tog bort matrix-/hackertyper-regnet, nyckel-/profilbilden, terminal/transmission-
  blocket och den ram/portal-konstruktion som hörde till nyckeln.
- Lade om designen till en lugn, elegant Hermes/Huly-gateway: centrerad hero,
  gradient-rubrik (cream → guld), Huly-stil glödande pill-CTA på halo, outline-pill,
  rundade kort med cursor-spotlight, mjuka guld/teal-glöd och vignette.
- Förenklade script.js (load-reveal, header-scroll, emblem-parallax, kort-spotlight).
- Uppdaterade `404.html` till de nya knappstilarna.
- En h1, alt-text, fokusringar och full `prefers-reduced-motion` bevarade.

## 1.3.0 – Ram + matrix-regn på hero (2026-06-02)
- Lade till en elegant Hermes-aktig **ram** runt nyckeln: tunn dubbelkant,
  fyra hörnmarkörer (växer vid hover) och en liten monospace-HUD-etikett.
- Ersatte den roterande portal-ringen med ramen (renare komposition).
- Ny **matrix-/hackertyper-"regn"-effekt** på en `<canvas>` inuti ramen:
  tänds vid hover, **startar precis under muspekaren** och följer den;
  ljus topp-glyf + dimmare svans, klassisk eftersläpning.
- Hover ökar nyckelns glöd. Allt vanilla, ofarligt och dekorativt.
- Regn/ram-animation avstängd vid `prefers-reduced-motion`.

## 1.2.0 – "The Threshold" redesign (2026-06-02)
- Höjde designnivån till en nattlig, editorial-teknisk gateway.
- Atmosfär: drivande aurora-glöd, fingrain-overlay (inline-SVG, ingen extern fil),
  vignette och mycket subtilt blueprint-rutnät.
- Hero: asymmetrisk layout, stort Georgia-display med kursiv accent på "Chippo",
  nyckeln i en roterande "portal"-ring med glöd och golvljus.
- Iscensatt sidladdning med staggrad reveal-animation.
- Terminal omgjord till "transmission"-panel med scanline.
- Numrerade gateway-kort (01–03) med cursor-styrd spotlight och hover-lyft.
- Sticky header med scroll-kant, monospace-navigation.
- All rörelse respekterar `prefers-reduced-motion`; en h1 bevarad, alt-text kvar.
- Typografi: system-säkra typsnitt (Georgia display + monospace) p.g.a. no-CDN-regeln
  i MVP. Self-hosted display-typsnitt kan läggas i `assets/fonts/` senare.

## 1.1.0 – Egen hero-bild (2026-06-02)
- Bytte ut det genererade SVG-hero-märket mot ägarens egen handritade
  nyckel/dörr-illustration (`assets/images/chippo-hero.png`, transparent PNG).
- Floating-effekten kopplad till den nya bilden; mjuk grön glöd bakom.
- Tog bort orb-/spin-stilar och inline-SVG:n i hero.
- Uppdaterade dokumentation (SAMMANFATTNING, INSTRUKTIONER, SECURITY_NOTES).

## 1.0.0 – Initial gateway (2026-06-02)
- Byggde statisk Hermes-inspirerad chippo.se landing page.
- Lade till hero med original SVG-märke och subtil floating/parallax-effekt.
- Lade till terminal/statusblock med dekorativ typewriter-animation.
- Lade till tre gateway-kort: Cyber Portfolio, GitHub och Kontakt.
- Länkar till chippo.dev, GitHub (ChipChop87) och mailto:peter@chippo.se.
- Lade till `404.html`, `robots.txt`, `sitemap.xml`, `.editorconfig`, `.gitignore`.
- Lade till egen favicon och logga (SVG).
- Responsiv layout, fokusramar, `prefers-reduced-motion`-stöd.
- Fullständig dokumentation och handoff.
