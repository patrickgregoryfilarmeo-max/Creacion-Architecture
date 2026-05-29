# Creacion Architecture Cloudflare Pages Deployment

This folder is a static Cloudflare Pages site. It does not require a build step.

## Cloudflare Pages Settings

- Project source: `cloudflare-site`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`

If uploading directly through Cloudflare Pages, upload the contents of this folder.

## Contact Form

The contact form in `contact.html` posts to the existing Google Apps Script endpoint:

```text
https://script.google.com/macros/s/AKfycbzxtsuHlVzdJK-3X7Rrq7QrMnL5SIsgNsgnTYwZ82gu6DmEl-n_PJod_OwVtp8dYkarJA/exec
```

The field names are preserved from the Google Sites form: `name`, `email`, `contact`, `project`, `floors`, `total`, `lot`, `site`, and `bare`.

## DNS Cutover

1. Deploy and test the Cloudflare Pages preview URL.
2. Confirm `/home`, `/about`, `/services`, `/projects`, and `/contact` work.
3. Submit a test contact form and confirm the Google Sheet receives it.
4. Add `creacionarchitecture.com` and `www.creacionarchitecture.com` as custom domains in Cloudflare Pages.
5. Switch DNS only after the preview site and form are verified.
