# SRK Steel RFQ / RFP Dual Email Delivery Update — 2026-09-03

## Recipients
Every successful website RFQ/RFP email is addressed to both:
- sales@srksteel.com
- Sales@srkmetals.com

## Implementation
- Added functional POST endpoint at `/api/rfq`.
- Contact form now submits to the endpoint instead of using a non-functional `type="button"`.
- Direct delivery uses the Resend HTTPS API without adding a package dependency.
- The visitor's email is used as `reply_to` so the sales team can reply directly.
- Basic validation, HTML escaping and a honeypot field are included.
- If direct email environment variables are not configured, the form opens a mailto fallback pre-addressed to both SRK sales inboxes so the enquiry is not lost.

## Vercel environment variables required for automatic server-side delivery
- `RESEND_API_KEY`
- `RFQ_FROM_EMAIL` — a sender on a domain verified in the Resend account, for example `SRK Steel Website <rfq@srksteel.com>`.

After adding/changing environment variables in Vercel, redeploy the project.
