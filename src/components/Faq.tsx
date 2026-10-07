"use client";

import { useState } from "react";
import { FAQ } from "@/lib/content";

export default function Faq() {
  const [cat, setCat] = useState(0);
  const [open, setOpen] = useState(0);

  return (
    <div className="c166">
      <div className="c94">
        <span className="c61">FAQ</span>
        <h2 className="c62">Everything you want to know.</h2>
      </div>
      <div className="c167" role="tablist" aria-label="FAQ topics">
        {FAQ.map((c, i) => (
          <button
            key={c.label}
            className={i === cat ? "c114" : "c116"}
            type="button"
            role="tab"
            aria-selected={i === cat}
            onClick={() => {
              setCat(i);
              setOpen(0);
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="c168">
        {FAQ[cat].items.map((f, i) => {
          const isOpen = i === open;
          return (
            <div key={f.q} className="c169">
              <button className="c170" type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                {f.q}
                {isOpen ? <span className="c171">−</span> : <span className="c172">+</span>}
              </button>
              {isOpen && <p className="c173">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
