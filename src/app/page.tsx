import type { Metadata } from "next";
import Link from "next/link";
import StepTabs from "@/components/StepTabs";
import Faq from "@/components/Faq";
import ContactSection from "@/components/sections/ContactSection";
import Plans from "@/components/sections/Plans";
import Reviews from "@/components/sections/Reviews";
import StudioProof from "@/components/sections/StudioProof";
import WhyUs from "@/components/sections/WhyUs";

import CaseGrid from "@/components/CaseGrid";
import PortfolioGrid from "@/components/PortfolioGrid";
export const metadata: Metadata = {
  title: "YouTube Automation Lab — Launch Your Automated YouTube Channel",
};

export default function Home() {
  return (
    <>
      <section className="c12">
        <div className="c13">
          <div className="c14">
            <div className="c15">
              <span className="c16">
                <span className="c17">500+</span>channels managed · done for you
              </span>
              <h1 className="c18">
                Launch your <span className="c19">automated</span> YouTube channel.
              </h1>
              <p className="c20">
                Research, scripts, voiceover, editing, thumbnails and publishing — handled end-to-end by our team. You
                own the channel. We build the engine.
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
              <div className="c24">
                <span className="c25">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF5A5A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  0 hours on camera
                </span>
                <span className="c25">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF5A5A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Month-to-month
                </span>
                <span className="c25">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF5A5A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  You own 100%
                </span>
              </div>
            </div>
            <div className="c26">
              <div className="c27">
                <div className="c28">
                  <span className="c29">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5.5v13l11-6.5z" fill="#FFFFFF"></path>
                    </svg>
                  </span>
                  <span className="c30">
                    <span className="c31">Client channel analytics</span>
                    <span className="c32">Finance niche · Last 365 days</span>
                  </span>
                </div>
                <span className="c33">
                  <span className="c34"></span>Studio verified
                </span>
              </div>
              <div className="c35">
                <div className="c36">
                  <span className="c32">Estimated revenue</span>
                  <span className="c37">$259,603</span>
                  <span className="c38">YouTube Studio</span>
                </div>
                <div className="c36">
                  <span className="c32">Views</span>
                  <span className="c37">3.36M</span>
                  <span className="c38">12 months</span>
                </div>
                <div className="c36">
                  <span className="c32">Subscribers gained</span>
                  <span className="c37">+14,481</span>
                  <span className="c38">12 months</span>
                </div>
                <div className="c36">
                  <span className="c32">Watch time (hrs)</span>
                  <span className="c37">192K</span>
                  <span className="c38">12 months</span>
                </div>
              </div>
              <div className="c39">
                <div className="c40">
                  <span>Monthly views</span>
                  <span>Illustrative trend</span>
                </div>
                <div className="c41">
                  <div className="c42"></div>
                  <div className="c43"></div>
                  <div className="c44"></div>
                  <div className="c45"></div>
                  <div className="c46"></div>
                  <div className="c47"></div>
                  <div className="c48"></div>
                  <div className="c49"></div>
                  <div className="c50"></div>
                  <div className="c51"></div>
                  <div className="c52"></div>
                  <div className="c53"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="c54">
            <span className="c55">NICHES WE BUILD IN</span>
            <div className="c56">
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M15 9.5a3 2.5 0 0 0-3-1.5c-1.7 0-3 .9-3 2s1.3 1.8 3 2 3 .9 3 2-1.3 2-3 2a3 2.5 0 0 1-3-1.5"></path>
                  <path d="M12 6v1.5"></path>
                  <path d="M12 16.5V18"></path>
                </svg>
                Finance
              </span>
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
                History
              </span>
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m7 15 4-4 3 3 6-6"></path>
                </svg>
                Business
              </span>
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"></path>
                  <path d="M3 21v-5h5"></path>
                </svg>
                Self-Improvement
              </span>
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v4"></path>
                  <path d="M12 17v4"></path>
                  <path d="M3 12h4"></path>
                  <path d="M17 12h4"></path>
                  <path d="m6 6 2.5 2.5"></path>
                  <path d="m15.5 15.5 2.5 2.5"></path>
                  <path d="m18 6-2.5 2.5"></path>
                  <path d="m8.5 15.5-2.5 2.5"></path>
                </svg>
                Tech &amp; AI
              </span>
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <circle cx="12" cy="12" r="5"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
                Gaming
              </span>
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                Health
              </span>
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m12 3 9 5-9 5-9-5z"></path>
                  <path d="m3 13 9 5 9-5"></path>
                </svg>
                Food
              </span>
              <span className="c57">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5A5A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                  <path d="M7 4v16"></path>
                  <path d="M17 4v16"></path>
                  <path d="M3 9h4"></path>
                  <path d="M3 15h4"></path>
                  <path d="M17 9h4"></path>
                  <path d="M17 15h4"></path>
                </svg>
                Explainers
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="c58">
        <div className="c59">
          <div className="c60">
            <div className="c54">
              <span className="c61">Portfolio</span>
              <h2 className="c62">Channels we’ve built and run.</h2>
            </div>
            <Link className="c63" href="/case-studies">
              View Case Studies
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
          </div>
          <PortfolioGrid />
        </div>
      </section>
      <section className="c73">
        <div className="c59">
          <div className="c74">
            <div className="c75">
              <div className="c54">
                <span className="c61">Who we are</span>
                <h2 className="c62">A full YouTube production team — without the hiring.</h2>
              </div>
              <p className="c76">
                YouTube Automation Lab builds and runs faceless channels for business owners and investors. One team
                handles strategy, production and growth, and you get a monthly report on what’s working.
              </p>
              <div>
                <Link className="c11" href="/contact">
                  Book a Call
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
              </div>
            </div>
            <div className="c77">
              <div className="c78">
                <span className="c79">500+</span>
                <span className="c80">Channels managed</span>
              </div>
              <div className="c81">
                <span className="c82">100%</span>
                <span className="c83">Channel ownership</span>
              </div>
              <div className="c81">
                <span className="c82">$10M+</span>
                <span className="c83">Revenue generated</span>
              </div>
              <div className="c81">
                <span className="c82">250M+</span>
                <span className="c83">Total views</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="c84" id="services">
        <div className="c59">
          <div className="c54">
            <span className="c85">What we do</span>
            <h2 className="c86">Six services. One channel machine.</h2>
            <p className="c87">Everything a successful channel needs, produced by one coordinated team.</p>
          </div>
          <div className="c88">
            <div className="c89">
              <div className="c66">
                <span className="c90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-3.5-3.5"></path>
                  </svg>
                </span>
                <span className="c91">01</span>
              </div>
              <h3 className="c92">SEO &amp; Niche Research</h3>
              <p className="c93">
                Data-backed niche, keyword and competitor research so every video targets real demand.
              </p>
            </div>
            <div className="c89">
              <div className="c66">
                <span className="c90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m12 3 9 5-9 5-9-5z"></path>
                    <path d="m3 13 9 5 9-5"></path>
                  </svg>
                </span>
                <span className="c91">02</span>
              </div>
              <h3 className="c92">Script Writing</h3>
              <p className="c93">Hook-first, retention-focused scripts written by niche specialists.</p>
            </div>
            <div className="c89">
              <div className="c66">
                <span className="c90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                    <path d="M5 11a7 7 0 0 0 14 0"></path>
                    <path d="M12 18v3"></path>
                  </svg>
                </span>
                <span className="c91">03</span>
              </div>
              <h3 className="c92">Voiceover</h3>
              <p className="c93">Natural human or premium AI voice, matched to your channel’s style.</p>
            </div>
            <div className="c89">
              <div className="c66">
                <span className="c90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <path d="M7 4v16"></path>
                    <path d="M17 4v16"></path>
                    <path d="M3 9h4"></path>
                    <path d="M3 15h4"></path>
                    <path d="M17 9h4"></path>
                    <path d="M17 15h4"></path>
                  </svg>
                </span>
                <span className="c91">04</span>
              </div>
              <h3 className="c92">Video Editing</h3>
              <p className="c93">Pacing, visuals, motion graphics and captions built to keep people watching.</p>
            </div>
            <div className="c89">
              <div className="c66">
                <span className="c90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <circle cx="9" cy="10" r="2"></circle>
                    <path d="m21 16-5-5-9 9"></path>
                  </svg>
                </span>
                <span className="c91">05</span>
              </div>
              <h3 className="c92">Thumbnail Design</h3>
              <p className="c93">Click-worthy thumbnails with consistent branding and A/B testing where available.</p>
            </div>
            <div className="c89">
              <div className="c66">
                <span className="c90">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m7 15 4-4 3 3 6-6"></path>
                  </svg>
                </span>
                <span className="c91">06</span>
              </div>
              <h3 className="c92">Delivery &amp; Channel Growth</h3>
              <p className="c93">Optimized uploads, scheduling, analytics and monthly strategy reviews.</p>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <StudioProof />
      <section className="c110" id="how">
        <StepTabs />
      </section>
      <section className="c73" id="cases">
        <div className="c59">
          <div className="c60">
            <div className="c54">
              <span className="c61">Case studies</span>
              <h2 className="c62">Featured channels.</h2>
            </div>
            <Link className="c63" href="/case-studies">
              All Case Studies
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
          </div>
          <CaseGrid />
        </div>
      </section>
      <Plans />
      <Reviews />
      <section className="c110" id="faq">
        <Faq />
      </section>
      <ContactSection />
    </>
  );
}
