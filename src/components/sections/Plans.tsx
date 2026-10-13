import Link from "next/link";
import { SITE } from "@/lib/content";

type Plan = {
  name: string;
  desc: string;
  price: string;
  priceSub: string;
  features: string[];
  cta: string;
  hot?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Basic Plan",
    desc: "Perfect for building your first automated channel.",
    price: "Start",
    priceSub: "/ your journey",
    features: [
      "8 videos per month",
      "Niche & keyword research",
      "Scripts & voiceover",
      "Editing & thumbnails",
      "SEO-optimized uploads",
      "Monthly report",
    ],
    cta: "Contact Us to Begin",
  },
  {
    name: "Standard Plan",
    desc: "Better for faster growth and earlier monetization.",
    price: "Level Up",
    priceSub: "/ your channel",
    features: [
      "12 videos per month",
      "Everything in Basic",
      "Shorts repurposing",
      "Thumbnail A/B testing",
      "Monthly strategy call",
    ],
    cta: "Request Details",
    hot: true,
  },
  {
    name: "Premium Plan",
    desc: "For investors and operators building a multi-channel portfolio.",
    price: "Complete",
    priceSub: "/ solution",
    features: [
      "20 videos per month",
      "Everything in Standard",
      "Dedicated channel manager",
      "Multi-channel production",
    ],
    cta: "Get in Touch to Start",
  },
];

export default function Plans() {
  return (
    <section className="c58" id="plans">
      <div className="c59">
        <div className="c94">
          <span className="c61">Plans</span>
          <h2 className="c62">Pick your publishing pace.</h2>
          <p className="c112">
            Each plan is quoted around your niche and goals. Contact us for custom onboarding and pricing details.
          </p>
        </div>
        <div className="c141 x-plans">
          {PLANS.map((p) => (
            <article key={p.name} className={p.hot ? "x-plan x-plan-hot" : "x-plan"}>
              {p.hot && <span className="x-plan-flag">Best Seller</span>}
              <h3 className="x-plan-name">{p.name}</h3>
              <p className="x-plan-desc">{p.desc}</p>
              <div className="x-plan-price">
                {p.price}
                <small>{p.priceSub}</small>
              </div>
              <p className="x-plan-lbl">Included features</p>
              <ul className="x-plan-list">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="x-plan-cta">
                <Link className={p.hot ? "c11" : "c11 x-btn-black"} href="/contact">
                  {p.cta}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m13 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <p className="x-plan-note">
                  Or{" "}
                  <a href={SITE.booking} target="_blank" rel="noopener">
                    book a call
                  </a>{" "}
                  to discuss your goals
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
