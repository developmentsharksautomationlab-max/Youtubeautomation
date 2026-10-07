import Image from "next/image";
import Link from "next/link";
import { CASES, NICHES } from "@/lib/content";

// Live client channels first, then the other niches we produce in.
export default function PortfolioGrid() {
  return (
    <div className="c64">
      {CASES.map((c) => (
        <Link key={c.name} className="x-port" href="/case-studies">
          <Image src={c.image.includes("/stock/") ? c.image : "/images/stock/niche-finance.jpg"} alt="" fill sizes="(max-width: 720px) 100vw, 320px" />
          <span className="x-port-tag x-live">{c.niche}</span>
          <span className="x-port-name">{c.name}</span>
          <span className="x-port-sub">
            {c.result} {c.metric}
          </span>
        </Link>
      ))}
      {NICHES.map((n) => (
        <Link key={n.name} className="x-port" href="/contact">
          <Image src={n.image} alt="" fill sizes="(max-width: 720px) 100vw, 320px" />
          <span className="x-port-tag">{n.label}</span>
          <span className="x-port-name">{n.name}</span>
          <span className="x-port-sub">Now onboarding new channels</span>
        </Link>
      ))}
    </div>
  );
}
