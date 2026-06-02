# email-dns-safety-skill

## Purpose

Use this skill when planning, reviewing or changing DNS, nameservers, e-mail records or Cloudflare/Inleed settings for the Chippo domains.

This skill applies to:

- `chippo.se`
- `chippo.dev`
- future `angmans.se`
- Inleed registrar settings
- Cloudflare DNS
- Cloudflare Pages custom domains
- MX records
- SPF
- DKIM
- DMARC
- redirects involving mail-related domains

The goal is to avoid breaking e-mail while moving DNS/nameservers to Cloudflare.

---

## Core rule

Never change nameservers or DNS records without first checking whether the domain uses e-mail.

If e-mail exists, preserve or recreate all required e-mail DNS records in Cloudflare before or during the nameserver move.

---

## Domain roles

```text
Inleed
= registrar / domain ownership
= may also host e-mail if configured

Cloudflare
= DNS after nameserver switch
= Cloudflare Pages
= HTTPS/security/redirects

GitHub
= source code
= not e-mail hosting
```

Once nameservers point to Cloudflare, DNS changes in Inleed normally no longer control the live domain.

---

## Critical warning

Changing nameservers can break e-mail if DNS records are not copied.

Before switching nameservers to Cloudflare, document:

```text
MX records
SPF TXT records
DKIM TXT/CNAME records
DMARC TXT records
mail-related CNAME records
autodiscover/autoconfig records
verification records
```

If unsure, stop and ask the domain owner to confirm e-mail usage.

---

## E-mail addresses known in project context

Possible/known addresses:

```text
peter@chippo.se
chippo@angmans.se
chippo.angman@gmail.com
```

Preferred public contact for the web projects:

```text
peter@chippo.se
```

Do not assume `peter@chippo.dev` exists unless explicitly configured.

---

## Before changing nameservers

Use this checklist:

```text
[ ] Is the domain used for e-mail?
[ ] Which provider handles e-mail?
[ ] Are MX records documented?
[ ] Are SPF records documented?
[ ] Are DKIM records documented?
[ ] Is DMARC documented?
[ ] Are any verification TXT records needed?
[ ] Are current DNS records exported/screenshot/documented?
[ ] Is there a rollback plan?
```

If any answer is unknown, do not proceed automatically.

---

## Records to check

### MX

MX records tell the world where mail for the domain should be delivered.

Example pattern:

```text
Type: MX
Name: @
Value: mail.example-provider.tld
Priority: 10
```

### SPF

SPF is usually a TXT record.

Example pattern:

```text
Type: TXT
Name: @
Value: v=spf1 include:example-provider.tld ~all
```

### DKIM

DKIM may be TXT or CNAME depending on provider.

Example pattern:

```text
Type: TXT
Name: selector._domainkey
Value: v=DKIM1; k=rsa; p=...
```

or:

```text
Type: CNAME
Name: selector1._domainkey
Value: selector1-provider-domain.tld
```

### DMARC

DMARC is a TXT record.

Recommended starting policy:

```text
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@domain.tld
```

Do not set strict policies like `p=reject` unless mail flow is verified.

---

## Recommended first e-mail security posture

If the domain uses e-mail and records are being configured from scratch:

```text
SPF: provider-recommended value
DKIM: provider-recommended value
DMARC: p=none first
```

After verified mail flow:

```text
move gradually from p=none to quarantine/reject if appropriate
```

Do not create fake DKIM records. Use the e-mail provider’s exact values.

---

## Cloudflare proxy rule for mail records

Do not proxy mail-related DNS records.

Mail-related records should generally be DNS-only.

In Cloudflare:

```text
Proxy status: DNS only
```

for:

```text
MX targets
mail subdomains
autodiscover/autoconfig if required by provider
DKIM CNAMEs if provider requires DNS-only
```

Cloudflare orange-cloud proxy is for web traffic, not mail delivery.

---

## Cloudflare Pages and e-mail

Cloudflare Pages handles the website, not the mailbox.

Correct:

```text
chippo.se       -> Cloudflare Pages
www.chippo.se   -> Cloudflare Pages / redirect
MX/TXT/DKIM     -> e-mail provider
```

Incorrect:

```text
MX -> Cloudflare Pages
mail -> proxied web record without mail provider
```

---

## Nameserver migration process

Safe process:

```text
1. Add domain to Cloudflare.
2. Let Cloudflare scan existing DNS.
3. Compare scanned DNS with records in Inleed.
4. Manually add missing e-mail records in Cloudflare.
5. Document current DNS state.
6. Change nameservers at Inleed to Cloudflare.
7. Wait for propagation.
8. Verify website.
9. Verify e-mail sending.
10. Verify e-mail receiving.
```

---

## Inleed role after migration

After Cloudflare nameservers are active:

```text
Inleed = registrar/domain ownership
Cloudflare = active DNS
```

Do not keep editing DNS in Inleed expecting it to affect the live domain.

However, Inleed may still be the e-mail provider. In that case, Cloudflare DNS must point mail records to Inleed’s mail servers.

---

## Do not guess provider records

Never invent MX/SPF/DKIM values.

Use only:

```text
records shown in Inleed
records from the chosen mail provider
records already verified in existing DNS
official provider documentation
```

If records are unknown, document TODO and stop before switching production e-mail.

---

## DMARC caution

DMARC can reject legitimate mail if configured too strictly.

Start with:

```text
p=none
```

Only move to stricter policies after:

```text
SPF passes
DKIM passes
mail sending verified
mail receiving verified
reports monitored
```

Do not set:

```text
p=reject
```

as a first step unless the user explicitly understands and approves.

---

## Verification after migration

Check:

```text
[ ] Cloudflare zone status is Active.
[ ] Website loads over HTTPS.
[ ] www behavior works.
[ ] MX records exist in Cloudflare.
[ ] SPF exists.
[ ] DKIM exists if provider uses it.
[ ] DMARC exists or TODO is documented.
[ ] Test sending mail.
[ ] Test receiving mail.
[ ] No mail-related records are accidentally proxied.
```

---

## Documentation requirements

Any DNS/e-mail work must update:

```text
CLOUDFLARE_INLEED_DEPLOYMENT_GUIDE.md
README.md
INSTRUKTIONER_HOW_TO.md
SECURITY_NOTES.md
docs/handoff.md or handoff.md
VERSION_LOG.md
CHANGELOG.md
```

Record:

```text
- which domain was changed
- which provider handles e-mail
- which records were preserved
- what was verified
- what remains TODO
```

Do not write secret values or private account details into public documentation.

---

## Recommended DNS notes template

Use this template in private notes or deployment docs:

```md
# DNS/e-mail notes

## Domain
chippo.se

## Registrar
Inleed

## Active DNS
Cloudflare

## Website hosting
Cloudflare Pages

## E-mail provider
TODO / Inleed / Microsoft 365 / Google Workspace / other

## Records to preserve
- MX: TODO
- SPF: TODO
- DKIM: TODO
- DMARC: TODO

## Verification
- Website HTTPS: TODO
- Mail receive: TODO
- Mail send: TODO
```

If the document is public, avoid exposing unnecessary provider/account details.

---

## Common mistakes to avoid

```text
- switching nameservers before copying MX records
- assuming Cloudflare Pages handles e-mail
- proxying mail records through Cloudflare
- deleting TXT records that verify mail ownership
- creating fake SPF/DKIM values
- setting DMARC p=reject too early
- using chippo.dev e-mail before it exists
- editing DNS in Inleed after Cloudflare is authoritative
```

---

## Hard stop conditions

Stop before continuing if:

```text
- active e-mail usage is unknown
- MX records are missing after migration
- SPF/DKIM values are unknown
- user relies on domain e-mail for important communication
- strict DMARC is requested without verification
- Cloudflare scan did not import existing mail records
```

Document the issue and next step.

---

## Definition of done

DNS/e-mail safety work is done when:

```text
[ ] e-mail usage is known
[ ] existing mail records are documented
[ ] Cloudflare DNS has required mail records
[ ] mail records are DNS-only where appropriate
[ ] website DNS and mail DNS do not conflict
[ ] send/receive tests are documented or listed as TODO
[ ] handoff and deployment docs are updated
```

---

## Summary

This skill prevents domain e-mail from breaking during Cloudflare migration.

The most important rule:

```text
Before changing nameservers, preserve e-mail DNS records.
```
