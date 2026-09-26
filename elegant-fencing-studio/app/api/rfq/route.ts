import { NextResponse } from 'next/server';
import { company } from '@/lib/data';

export const runtime = 'nodejs';

function clean(value: unknown, max = 4000) {
  return String(value ?? '').trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: silently accept obvious bot submissions without sending email.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 160);
  const companyName = clean(body.company, 200);
  const email = clean(body.email, 240);
  const phone = clean(body.phone, 120);
  const category = clean(body.category, 200);
  const details = clean(body.details, 6000);

  if (!name || !email || !phone || !category || !details) {
    return NextResponse.json({ error: 'Please complete all required RFQ fields.' }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RFQ_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      { error: 'RFQ email delivery is not configured on the website yet. Please contact the SRK Steel sales team directly.' },
      { status: 503 },
    );
  }

  const subjectCompany = companyName || name;
  const subject = `SRK Steel RFQ - ${category} - ${subjectCompany}`;
  const safe = {
    name: escapeHtml(name),
    company: escapeHtml(companyName || 'Not provided'),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    category: escapeHtml(category),
    details: escapeHtml(details).replace(/\n/g, '<br />'),
  };

  const html = `
    <div style="font-family:Arial,sans-serif;color:#20242b;line-height:1.6">
      <h2 style="margin:0 0 18px">New SRK Steel RFQ / RFP</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px">
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${safe.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Company</strong></td><td style="padding:8px;border:1px solid #ddd">${safe.company}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${safe.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Phone / WhatsApp</strong></td><td style="padding:8px;border:1px solid #ddd">${safe.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd"><strong>Product Category</strong></td><td style="padding:8px;border:1px solid #ddd">${safe.category}</td></tr>
      </table>
      <h3 style="margin:22px 0 8px">RFQ / RFP Details</h3>
      <div style="padding:14px;border:1px solid #ddd;max-width:690px">${safe.details}</div>
      <p style="margin-top:22px;color:#666;font-size:13px">Submitted from srksteel.com website RFQ form.</p>
    </div>`;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [...company.rfqEmails],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const providerError = await resendResponse.text().catch(() => '');
    console.error('RFQ email provider error:', providerError);
    return NextResponse.json({ error: 'The RFQ could not be sent. Please try again or email the sales team directly.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
