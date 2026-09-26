# RFQ Single Success Message Fix — 2026-09-03

- Removed the static helper text: “Successful RFQ submissions are delivered to both SRK Steel sales inboxes.”
- After a real successful RFQ submission, the form shows only:
  “Thank you. Your RFQ has been submitted successfully.”
- No mailto fallback is used.
- RFQ delivery recipients remain sales@srksteel.com and Sales@srkmetals.com.
