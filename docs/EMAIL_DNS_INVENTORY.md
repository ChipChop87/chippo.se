# E-post-DNS inventering – chippo.se

**Datum:** 2026-06-02
**Metod:** Read-only uppslag mot publik DNS (auktoritativt via domänens nameservers).
**Status:** Endast inventering. **Inga** DNS-, nameserver-, e-post- eller custom domain-ändringar har gjorts.

> Syfte: kartlägga nuläget för e-post-relaterad DNS innan eventuella ändringar/custom domain.
> Publik DNS visar vilka poster som publiceras och deras värden, men **inte** proxy-status
> (orange/grey cloud) – det måste bekräftas i Cloudflare-dashboarden.

---

## Viktigaste upptäckten

`chippo.se` ligger **redan på Cloudflares nameservers**:

```text
dakota.ns.cloudflare.com
celine.ns.cloudflare.com
```

Det finns alltså **inget kommande nameserver-byte** att utföra eller vara rädd för – DNS hanteras
redan av Cloudflare, och e-postposterna ligger redan i Cloudflare-zonen. Den ursprungliga planen
("dokumentera innan nameserver-byte till Cloudflare") är därmed inte längre den relevanta risken;
fokus blir istället att granska/städa befintliga poster.

---

## Nuläge (publik DNS)

### MX
```text
chippo.se.  MX  10  _dc-mx.8ea1fb6cf74f.chippo.se
_dc-mx.8ea1fb6cf74f.chippo.se -> A 188.66.60.10 / AAAA 2a0d:5f47:fffb:cafe:115::1
```
- Pekar på **188.66.60.10**, samma IP som anges i SPF → Inleeds mailserver.
- Posten är **DNS-only** (ej proxad). ✅ Mottagning av e-post pekar rätt.

### SPF (TXT på root)
```text
v=spf1 a mx include:spf.inleed.se ip4:188.66.60.10 -all
```
- Konsekvent med Inleed-mail. Hård `-all`. ✅

### DMARC (_dmarc.chippo.se)
```text
v=DMARC1; p=none; sp=none;
```
- Finns. Policy `p=none` (säker/monitorerande). **Ingen `rua=`** (ingen rapportmottagare). ✅/ℹ️

### DKIM
- **Ingen DKIM-post hittad** på vanliga selektorer:
  `default, mail, dkim, selector1, selector2, google, k1, s1, s2, inleed, smtp` (`._domainkey`).
- ⚠️ **Måste verifieras** i Inleed/Cloudflare – Inleed kan använda en egen selektor som inte
  går att gissa publikt. Viktigt om e-post ska signeras/skickas från domänen.

### Mail-relaterade subdomäner (A/AAAA)
```text
mail.chippo.se   -> 188.114.96.1 / 188.114.97.1 / 2a06:98c1:312x::1   (Cloudflare anycast = proxad)
smtp.chippo.se   -> 188.114.96.1 / 188.114.97.1 / 2a06:98c1:312x::1   (Cloudflare anycast = proxad)
pop.chippo.se    -> 188.114.96.1 / 188.114.97.1 / 2a06:98c1:312x::1   (Cloudflare anycast = proxad)
webmail.chippo.se      -> finns inte
imap.chippo.se         -> finns inte
autodiscover.chippo.se -> finns inte
autoconfig.chippo.se   -> finns inte
```
- ⚠️ `mail`, `smtp`, `pop` returnerar **Cloudflares anycast-IP** (188.114.96.0/22) → de verkar
  **proxade (orange cloud)**. Om en mailklient använder `mail/smtp/pop.chippo.se` som serveradress
  fungerar det inte genom Cloudflare-proxyn (proxyn hanterar bara HTTP/S, inte IMAP/SMTP/POP).
  Använder klienten istället Inleeds egna värdnamn (`*.inleed.se`) spelar det mindre roll.
- **Måste kontrolleras i Cloudflare-dashboarden** (proxy on/off) och troligen sättas till DNS-only.

### Apex / www
```text
chippo.se      -> 188.114.96.1 / 188.114.97.1   (Cloudflare-proxad)
www.chippo.se  -> 188.114.96.1 / 188.114.97.1 / 2a06:98c1:312x::1   (Cloudflare-proxad)
```
- Webben pekar redan "någonstans" via Cloudflare. **Ingen Pages custom domain är kopplad än** –
  detta är troligen en äldre/placeholder-post som bör ses över när Pages kopplas.

---

## Måste verifieras (kan inte avgöras från publik DNS)

- [ ] Finns brevlådan `peter@chippo.se`? **Testa skicka och ta emot** e-post.
- [ ] DKIM-selektor hos Inleed (om e-post signeras/skickas från domänen).
- [ ] Proxy-status (orange/grey) per post i Cloudflare-zonen.
- [ ] Vad apex/`www` faktiskt pekar på och om de ska ersättas av Pages custom domain.
- [ ] Vilken e-postleverantör som är aktiv (Inleed mail bekräftat via MX/SPF, men brevlådestatus okänd).

---

## Vad som INTE har ändrats

- Inga DNS-poster ändrade/tillagda/borttagna.
- Ingen nameserver-ändring (redan Cloudflare sedan tidigare).
- Ingen custom domain kopplad till Cloudflare Pages.
- Inga e-post-/mailbox-inställningar ändrade.
- Endast publik DNS-läsning + denna dokumentation.

---

## Rekommenderade nästa steg

1. **Hämta full DNS-export** från Cloudflare-zonen för `chippo.se` (alla poster + proxy-status),
   särskilt: `MX, TXT, CNAME, A, AAAA, mail, smtp, pop, imap, webmail, autodiscover, autoconfig,
   _dmarc, *_domainkey`.
2. **Testa `peter@chippo.se`** (skicka + ta emot) och notera resultat.
3. Med exporten + testet: besluta exakt vad som ska städas **innan** custom domain.
4. **Mail-hygien (efter uttryckligt OK):** sätt `mail/smtp/pop` till DNS-only om de är proxade,
   verifiera/lägg till DKIM, överväg `rua=` i DMARC. Inga mailposter ska orange-cloud-proxas.
5. **Custom domain (efter beslut):** lägg `chippo.se` + `www` som custom domain i Pages-projektet
   `chippo-se` (zonen finns redan i Cloudflare).

## Gör INTE ännu

- Lägg **inte** till custom domain.
- Ändra **inte** apex/`www`.
- Ändra **inte** proxy-status för `mail/smtp/pop`.
- Ändra **inte** MX/SPF/DKIM/DMARC.

Ordning: **dokumentation → full DNS-export → beslut → (efter OK) ändringar.**
