'use client';

import { FormEvent, useState } from 'react';

type RFQFormProps = {
  recipients: readonly string[];
};

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function RFQForm({ recipients }: RFQFormProps) {
  const [state, setState] = useState<FormState>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    setMessage('Sending your RFQ…');

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setState('sent');
        setMessage('Thank you. Your RFQ has been submitted successfully.');
        form.reset();
        return;
      }

      setState('error');
      setMessage(
        result?.error ||
          `We could not submit your RFQ right now. Please contact ${recipients.join(' or ')}.`,
      );
    } catch {
      setState('error');
      setMessage(`We could not submit your RFQ right now. Please contact ${recipients.join(' or ')}.`);
    }
  }

  return (
    <form className="form contact-form-main" onSubmit={handleSubmit}>
      <p className="eyebrow">Send Enquiry</p>
      <h2>Send Your RFQ</h2>
      <p className="lead-copy compact-copy">
        Use this form for mild steel, stainless steel, galvanized steel and aluminium products and custom project enquiries.
      </p>
      <input name="name" placeholder="Your Name" autoComplete="name" required />
      <input name="company" placeholder="Company Name" autoComplete="organization" />
      <input name="email" type="email" placeholder="Email Address" autoComplete="email" required />
      <input name="phone" placeholder="Phone / WhatsApp Number" autoComplete="tel" required />
      <select name="category" defaultValue="" required>
        <option value="" disabled>Select Product Category</option>
        <option>Mild Steel Products</option>
        <option>Z & C Purlin Systems</option>
        <option>GI Metal Decking Sheets</option>
        <option>Stainless Steel Products</option>
        <option>Strut Channel Systems</option>
        <option>Dry Wall Partition Systems</option>
        <option>Aluminium Products</option>
        <option>Other / Custom Requirement</option>
      </select>
      <textarea name="details" placeholder="Tell us product name, grade, size, thickness, finish, quantity, drawing/BOQ reference and delivery location..." required />
      <input className="rfq-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" className="btn" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send RFQ'}
      </button>
      <p className={`rfq-form-status ${state}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
