import Image from "next/image";
import Link from "next/link";
import { CASES } from "@/lib/content";

const arrow = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
);

// Case study cards plus a closing call-to-action card.
export default function CaseGrid() {
  return (
    <div className="c128">
      {CASES.map((c) => (
        <div key={c.name} className="c129">
          <div className={c.image.includes("/stock/") ? "x-thumb" : "x-thumb x-thumb-top"}>
            <Image src={c.image} alt={c.alt} fill sizes="(max-width: 720px) 100vw, 400px" />
          </div>
          <div className="c131">
            <span className="c132">{c.niche}</span>
            <h3 className="c133">{c.name}</h3>
            <div className="c134">
              <span className="c135">{c.result}</span>
              <span className="c136">{c.metric}</span>
            </div>
            <p className="c137">{c.summary}</p>
            {c.name === "Casual Finance" && (
              <Link className="c138" href="/case-studies#casual-finance">
                Read case study
                {arrow}
              </Link>
            )}
          </div>
        </div>
      ))}
      <Link className="x-cta-card" href="/contact">
        <span className="x-port-tag">YOUR CHANNEL</span>
        <div>
          <h3>Your channel could be next.</h3>
          <p>Tell us your niche and goals. We’ll map out topics, publishing pace and a realistic growth plan on a free call.</p>
        </div>
        <span className="x-cta-link">
          Start your channel
          {arrow}
        </span>
      </Link>
    </div>
  );
}
