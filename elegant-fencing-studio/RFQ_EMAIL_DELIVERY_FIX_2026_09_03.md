# SRK Steel RFQ Email Delivery Fix — 2026-09-03

## Fixed behaviour
- Removed automatic `mailto:` fallback after RFQ form submission.
- The visitor's email application will no longer be opened automatically.
- A success message is shown only after `/api/rfq` confirms server-side email delivery.
- If server-side email delivery is not configured or the provider fails, the form shows an error instead of pretending the RFQ was sent.

## Recipients
Every successfully delivered RFQ is sent to both:
- sales@srksteel.com
- Sales@srkmetals.com

## Required Vercel environment variables
For automatic website delivery, configure:
- `RESEND_API_KEY`
- `RFQ_FROM_EMAIL` (must use a sender/domain verified in the Resend account; recommended example: `SRK Steel Website <rfq@srksteel.com>`)

Redeploy after setting/changing environment variables.
