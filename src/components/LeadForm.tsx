"use client";

import type { FormEvent, ReactNode } from "react";

// No backend yet: connect handleSubmit to your own endpoint (Formspree, an API route, ...).
export default function LeadForm({ className, children }: { className?: string; children: ReactNode }) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const btn = e.currentTarget.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (btn) btn.textContent = "Thanks - we will be in touch!";
    e.currentTarget.reset();
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
