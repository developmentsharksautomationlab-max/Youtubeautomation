import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/sections/ContactSection";
import Reviews from "@/components/sections/Reviews";

import CaseGrid from "@/components/CaseGrid";
export const metadata: Metadata = {
  title: "Case Studies — YouTube Automation Lab",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="c218">
        <div className="c219">
          <div className="c220">
            <span className="c221">
              <Link className="c222" href="/">
                HOME
              </Link>
              <span>/</span>
              <span className="c223">CASE STUDIES</span>
            </span>
            <h1 className="c224">Real channels. Real numbers.</h1>
            <p className="c225">
              Subscriber, view and revenue growth from channels we build and run — straight from YouTube Studio.
            </p>
            <div className="c21">
              <Link className="c22" href="/contact">
                Get Started
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
              <a className="c23" href="https://calendly.com/">
                Book Strategy Call
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
                  <rect x="3" y="4" width="18" height="17" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="c226">
            <div className="c78">
              <span className="c79">500+</span>
              <span className="c80">Channels managed</span>
            </div>
            <div className="c227">
              <span className="c79">250M+</span>
              <span className="c228">Total views</span>
            </div>
            <div className="c227">
              <span className="c79">$10M+</span>
              <span className="c228">Revenue generated</span>
            </div>
            <div className="c227">
              <span className="c79">0 hrs</span>
              <span className="c228">On camera</span>
            </div>
          </div>
        </div>
      </section>
      <section className="c84" id="casual-finance">
        <div className="c59">
          <div className="c60">
            <div className="c54">
              <span className="c85">Featured · Finance</span>
              <h2 className="c86">Casual Finance</h2>
            </div>
            <p className="c277">
              An illustrated faceless finance channel — 385K subscribers and 200 videos — produced on a weekly schedule.
            </p>
          </div>
          <div className="c104">
            <div className="c105">
              <span className="c106"></span>
              <span className="c107"></span>
              <span className="c108"></span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="c109"
              src="/images/95e05a3d4587675e2606106e54fc019f.png"
              alt="YouTube Studio: 3,363,737 views, 192K watch hours, +14,481 subscribers, $259,603.04 estimated revenue in the last 365 days"
            />
          </div>
          <div className="c278">
            <div className="c78">
              <span className="c79">$259,603</span>
              <span className="c80">Est. revenue · 12 months</span>
            </div>
            <div className="c227">
              <span className="c79">3.36M</span>
              <span className="c228">Views · 12 months</span>
            </div>
            <div className="c227">
              <span className="c79">192K</span>
              <span className="c228">Watch hours</span>
            </div>
            <div className="c227">
              <span className="c79">+14,481</span>
              <span className="c228">New subscribers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="c73">
        <div className="c59">
          <div className="c54">
            <span className="c61">All case studies</span>
            <h2 className="c62">Real growth, verified in YouTube Studio.</h2>
          </div>
          <CaseGrid />
          <p className="c279">
            Figures from clients’ YouTube Studio. Results vary by niche, content and time; past results don’t guarantee
            future earnings.
          </p>
        </div>
      </section>
      <Reviews />
      <ContactSection />
    </>
  );
}
