import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/sections/ContactSection";
import WhyUs from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  title: "About — YouTube Automation Lab",
};

export default function AboutPage() {
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
              <span className="c223">ABOUT</span>
            </span>
            <h1 className="c224">We build YouTube channels as businesses.</h1>
            <p className="c225">
              YouTube Automation Lab is a done-for-you production team for business owners, investors and busy
              professionals.
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
      <section className="c58">
        <div className="c59">
          <div className="x-story">
            <div className="x-mission">
              <span className="c177">OUR MISSION</span>
              <p className="c258">
                Make YouTube a real business asset for owners who don’t have time to become creators.
              </p>
              <div className="x-mission-foot">
                <span className="x-mission-stat">
                  <strong>500+</strong>channels managed
                </span>
                <span className="x-mission-stat">
                  <strong>100%</strong>client ownership
                </span>
              </div>
            </div>
            <div className="x-story-body">
              <span className="c61">Our story</span>
              <h2 className="x-story-title">From our own channels to a full production studio.</h2>
              <ol className="x-timeline">
                <li>
                  <span className="x-tl-step">01</span>
                  <div>
                    <h3>It started with our own channels</h3>
                    <p>
                      We ran a handful of faceless channels ourselves, tested niches, and rewrote scripts until
                      retention held. That is where we learned what the algorithm actually rewards.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="x-tl-step">02</span>
                  <div>
                    <h3>Our first client channel took off</h3>
                    <p>
                      Casual Finance went from zero to a steady AdSense income within its first year, using the same
                      system we had built for our own channels.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="x-tl-step">03</span>
                  <div>
                    <h3>The studio became an agency</h3>
                    <p>
                      Owners kept asking for the same result. A channel needs research, writing, voice, editing,
                      design and analytics working together every week, so we built that team.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <section className="c84">
        <div className="c59">
          <div className="c54">
            <span className="c85">Our team</span>
            <h2 className="c86">Every skill a channel needs, under one roof.</h2>
            <p className="c87">
              One coordinated team and one point of contact — instead of five freelancers who never talk to each other.
            </p>
          </div>
          <div className="c64">
            <div className="c261">
              <span className="c262">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <circle cx="12" cy="12" r="5"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </span>
              <span className="c263">Strategists</span>
            </div>
            <div className="c261">
              <span className="c262">
                <svg
                  width="22"
                  height="22"
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
              <span className="c263">Researchers</span>
            </div>
            <div className="c261">
              <span className="c262">
                <svg
                  width="22"
                  height="22"
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
              <span className="c263">Scriptwriters</span>
            </div>
            <div className="c261">
              <span className="c262">
                <svg
                  width="22"
                  height="22"
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
              <span className="c263">Voice artists</span>
            </div>
            <div className="c261">
              <span className="c262">
                <svg
                  width="22"
                  height="22"
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
              <span className="c263">Video editors</span>
            </div>
            <div className="c261">
              <span className="c262">
                <svg
                  width="22"
                  height="22"
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
              <span className="c263">Thumbnail designers</span>
            </div>
            <div className="c261">
              <span className="c262">
                <svg
                  width="22"
                  height="22"
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
              <span className="c263">Channel managers</span>
            </div>
            <div className="c261">
              <span className="c262">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
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
              </span>
              <span className="c263">Automation engineers</span>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
