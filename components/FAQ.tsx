'use client';

import { useState, useId } from 'react';

export type FaqItem = { q: string; a: string };

export default function FAQ({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        const qId = `${base}-q-${i}`;
        const aId = `${base}-a-${i}`;
        return (
          <div className="faq__item" key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="faq__q"
                id={qId}
                aria-expanded={isOpen}
                aria-controls={aId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div className="faq__a" id={aId} role="region" aria-labelledby={qId} hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
