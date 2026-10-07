"use client";

import Link from "next/link";
import { useState } from "react";
import { STEPS } from "@/lib/content";

export default function StepTabs() {
  const [step, setStep] = useState(0);
  const cur = STEPS[step];

  return (
    <div className="c111">
      <div className="c54">
        <span className="c61">How it works</span>
        <h2 className="c62">The 6-step content machine.</h2>
        <p className="c112">Click through each stage to see exactly what happens behind every video.</p>
      </div>
      <div className="c113" role="tablist" aria-label="Process steps">
        {STEPS.map((s, i) => (
          <button
            key={s.num}
            className={i === step ? "c114" : "c116"}
            type="button"
            role="tab"
            aria-selected={i === step}
            onClick={() => setStep(i)}
          >
            <span className="c115">{s.num}</span>
            {s.label}
          </button>
        ))}
      </div>
      <div className="c117">
        <div className="c118">
          <span className="c119">{cur.num}</span>
          <h3 className="c120">{cur.title}</h3>
          <p className="c121">{cur.desc}</p>
          <div className="c122">
            <Link className="c11" href="/contact">
              Start With This Step
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
        <div className="c123">
          <span className="c124">WHAT YOU GET</span>
          <ul className="c125">
            {cur.points.map((p) => (
              <li key={p} className="c126">
                <svg className="c127" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5A5A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
