'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Stagger delay in ms — use for sibling cards. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-triggered reveal. Motion tone: CONFIDENT (22px / 550ms).
 * Falls back to visible immediately when IntersectionObserver is unavailable
 * or the user prefers reduced motion, so content is never trapped invisible.
 */
export default function Reveal({ children, delay = 0, as, className = '' }: Props) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (!node || reduced || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      setDone(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
            // Release the compositing layer once the transition has finished.
            window.setTimeout(() => setDone(true), 900 + delay);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? ' is-in' : ''}${done ? ' is-done' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
