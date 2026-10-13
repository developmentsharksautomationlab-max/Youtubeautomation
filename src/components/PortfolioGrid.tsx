import Image from "next/image";
import { CASES, NICHES } from "@/lib/content";

const capitalize = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

// Live client channels first, then the other niches we produce in.
const RINGS = [
  ...CASES.map((c) => ({
    label: capitalize(c.niche),
    image: c.image.includes("/stock/") ? c.image : "/images/stock/niche-finance.jpg",
  })),
  ...NICHES.map((n) => ({ label: n.name, image: n.image })),
];

// Repeat so one half of the track is always wider than the viewport, then
// duplicate that half so the marquee can loop seamlessly at -50%.
const HALF = [...RINGS, ...RINGS];

export default function PortfolioGrid() {
  return (
    <div className="x-rings" aria-label="Client niches">
      <div className="x-rings-track">
        {[...HALF, ...HALF].map((r, i) => (
          <div key={i} className="x-ring" aria-hidden={i >= RINGS.length ? true : undefined}>
            <div className="x-ring-img">
              <div className="x-ring-pic">
                <Image src={r.image} alt="" fill sizes="88px" />
              </div>
            </div>
            <span>{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
