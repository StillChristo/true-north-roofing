'use client';

import { useId, useState, type FormEvent } from 'react';
import { site } from '@/lib/site';

type Status = 'idle' | 'sending' | 'ok' | 'error';
type Errors = Partial<Record<'name' | 'phone' | 'address' | 'service', string>>;

const SERVICES = [
  'Roof replacement',
  'Roof repair / active leak',
  'Metal roofing',
  'Seamless gutters',
  'Gutter cleaning',
  'Free roof inspection',
  'Commercial / low-slope',
  'Something else',
];

const URGENCY = [
  'Water is coming in right now',
  'Within the next month',
  'Next 2–6 months',
  'Just gathering information',
];

/** Accepts (828) 507-0778, 828-507-0778, 8285070778, +1 828 507 0778 … */
function validPhone(v: string) {
  const digits = v.replace(/\D/g, '');
  return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
}

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  // The form renders more than once per page (hero + final CTA). Namespaced
  // ids keep every label/control pair unique and correctly associated.
  const uid = useId();
  const fid = (n: string) => `${uid}-${n}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot — bots fill hidden fields. Roofing is one of the most
    // bot-attacked verticals in paid search, so this matters.
    if (data.company) {
      setStatus('ok');
      form.reset();
      return;
    }

    const next: Errors = {};
    if (!data.name?.trim()) next.name = 'Please tell us your name.';
    if (!validPhone(data.phone ?? '')) next.phone = 'Please enter a valid 10-digit phone number.';
    if (!data.address?.trim()) next.address = 'We need the property address to check the roof.';
    if (!data.service) next.service = 'Pick the closest match.';

    setErrors(next);
    if (Object.keys(next).length) {
      const firstKey = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus('sending');

    const payload = {
      ...data,
      _subject: `New roof inspection request — ${data.name}`,
      source: typeof window !== 'undefined' ? window.location.pathname : '',
      submittedAt: new Date().toISOString(),
    };
    delete (payload as Record<string, unknown>).company;

    // No endpoint configured yet → hand off to email so a lead is never lost.
    if (!site.formEndpoint) {
      const body = Object.entries(payload)
        .filter(([k]) => !k.startsWith('_'))
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
        `Roof inspection request — ${data.name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus('ok');
      form.reset();
      return;
    }

    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));

      setStatus('ok');
      form.reset();

      // Fire a GA4 / GTM conversion event if a dataLayer is present.
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer?.push({ event: 'generate_lead', form_name: 'roof_health_report' });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="form__status form__status--ok" role="status">
        <strong>Request received.</strong>
        <p style={{ marginTop: 6, fontSize: '0.95rem' }}>
          We will call you back to schedule the inspection — usually the same business day. If water
          is actively coming in, call us now at <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — visually hidden, never shown to humans */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor={fid("company")}>Company (leave blank)</label>
        <input id={fid("company")} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`field${errors.name ? ' field--error' : ''}`}>
        <label htmlFor={fid("name")}>Your name *</label>
        <input
          id={fid("name")}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-describedby={errors.name ? fid("err-name") : undefined}
        />
        {errors.name && (
          <span className="field__error" id={fid("err-name")}>
            {errors.name}
          </span>
        )}
      </div>

      <div className="field-row">
        <div className={`field${errors.phone ? ' field--error' : ''}`}>
          <label htmlFor={fid("phone")}>Phone *</label>
          <input
            id={fid("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(828) 555-0100"
            required
            aria-describedby={errors.phone ? fid("err-phone") : undefined}
          />
          {errors.phone && (
            <span className="field__error" id={fid("err-phone")}>
              {errors.phone}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor={fid("email")}>Email</label>
          <input id={fid("email")} name="email" type="email" autoComplete="email" />
        </div>
      </div>

      <div className={`field${errors.address ? ' field--error' : ''}`}>
        <label htmlFor={fid("address")}>Property address or town *</label>
        <input
          id={fid("address")}
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="e.g. 12 Ridge Rd, Hendersonville"
          required
          aria-describedby={errors.address ? fid("err-address") : undefined}
        />
        {errors.address && (
          <span className="field__error" id={fid("err-address")}>
            {errors.address}
          </span>
        )}
      </div>

      <div className="field-row">
        <div className={`field${errors.service ? ' field--error' : ''}`}>
          <label htmlFor={fid("service")}>What do you need? *</label>
          <select id={fid("service")} name="service" required defaultValue="">
            <option value="" disabled>
              Choose one…
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="field__error" id={fid("err-service")}>
              {errors.service}
            </span>
          )}
        </div>
        <div className="field">
          <label htmlFor={fid("urgency")}>Timeline</label>
          <select id={fid("urgency")} name="urgency" defaultValue={URGENCY[3]}>
            {URGENCY.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div className="field">
          <label htmlFor={fid("notes")}>Anything we should know?</label>
          <textarea
            id={fid("notes")}
            name="notes"
            rows={3}
            placeholder="Roof age, where you have seen water, how long you plan to be in the home…"
          />
        </div>
      )}

      {status === 'error' && (
        <div className="form__status form__status--err" role="alert">
          Something went wrong sending that. Please call us at{' '}
          <a href={site.phoneHref}>{site.phone}</a> and we will get you on the schedule.
        </div>
      )}

      <button type="submit" className="btn btn--primary btn--block btn--lg" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get My Free Roof Health Report'}
      </button>

      <p className="form__note">
        Free, no obligation, and the photo report is yours to keep. We will not sell your
        information or add you to a list you cannot get off.
      </p>
    </form>
  );
}
