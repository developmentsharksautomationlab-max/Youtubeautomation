import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Resources — YouTube Automation Lab",
};

export default function ResourcesPage() {
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
              <span className="c223">RESOURCES</span>
            </span>
            <h1 className="c224">Learn how YouTube automation works.</h1>
            <p className="c225">
              Guides, breakdowns and tools from the team that builds and runs faceless channels every day.
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
        </div>
      </section>
      <section className="c58">
        <div className="c59">
          <div className="c117">
            <div className="c280">
              <span className="c177">FREE · CHANNEL AUDIT</span>
              <h2 className="c281">Get a free audit of your channel or niche idea.</h2>
              <p className="c282">
                Send your channel link or niche idea. We’ll review demand, competition and packaging and send back clear
                next steps.
              </p>
              <div>
                <Link className="c186" href="/contact">
                  Request My Free Audit
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
            <div className="c283">
              <span className="c284">NEWSLETTER</span>
              <h3 className="c144">YouTube growth insights, monthly.</h3>
              <LeadForm className="c39">
                <label className="c285">
                  Email address
                  <input className="c286" type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
                </label>
                <button className="c287" type="submit">
                  Subscribe
                </button>
              </LeadForm>
            </div>
          </div>
        </div>
      </section>
      <section className="c73">
        <div className="c59">
          <div className="c288">
            <div className="c54">
              <span className="c61">Library</span>
              <h2 className="c62">Guides from our production team.</h2>
            </div>
            <div className="c113">
              <span className="c289">All</span>
              <span className="c290">Guides</span>
              <span className="c290">Strategy</span>
              <span className="c290">Production</span>
              <span className="c290">Monetization</span>
              <span className="c290">Growth</span>
            </div>
          </div>
          <div className="c291">
            <a className="c292" href="#">
              <div className="c293">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M15 9.5a3 2.5 0 0 0-3-1.5c-1.7 0-3 .9-3 2s1.3 1.8 3 2 3 .9 3 2-1.3 2-3 2a3 2.5 0 0 1-3-1.5"></path>
                  <path d="M12 6v1.5"></path>
                  <path d="M12 16.5V18"></path>
                </svg>
              </div>
              <div className="c294">
                <span className="c295">GUIDE · 8 MIN READ</span>
                <h3 className="c296">How to choose a profitable YouTube niche</h3>
                <span className="c297">
                  Read article
                  <svg
                    width="16"
                    height="16"
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
                </span>
              </div>
            </a>
            <a className="c292" href="#">
              <div className="c298">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
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
              </div>
              <div className="c294">
                <span className="c295">STRATEGY · 6 MIN READ</span>
                <h3 className="c296">Faceless channels: formats that work</h3>
                <span className="c297">
                  Read article
                  <svg
                    width="16"
                    height="16"
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
                </span>
              </div>
            </a>
            <a className="c292" href="#">
              <div className="c299">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E00000"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                  <circle cx="9" cy="10" r="2"></circle>
                  <path d="m21 16-5-5-9 9"></path>
                </svg>
              </div>
              <div className="c294">
                <span className="c295">PACKAGING · 5 MIN READ</span>
                <h3 className="c296">Thumbnails and titles that earn the click</h3>
                <span className="c297">
                  Read article
                  <svg
                    width="16"
                    height="16"
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
                </span>
              </div>
            </a>
            <a className="c292" href="#">
              <div className="c293">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m7 15 4-4 3 3 6-6"></path>
                </svg>
              </div>
              <div className="c294">
                <span className="c295">MONETIZATION · 7 MIN READ</span>
                <h3 className="c296">Getting into the YouTube Partner Program</h3>
                <span className="c297">
                  Read article
                  <svg
                    width="16"
                    height="16"
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
                </span>
              </div>
            </a>
            <a className="c292" href="#">
              <div className="c298">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                  <path d="M5 11a7 7 0 0 0 14 0"></path>
                  <path d="M12 18v3"></path>
                </svg>
              </div>
              <div className="c294">
                <span className="c295">PRODUCTION · 6 MIN READ</span>
                <h3 className="c296">Human vs. AI voiceover: how to choose</h3>
                <span className="c297">
                  Read article
                  <svg
                    width="16"
                    height="16"
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
                </span>
              </div>
            </a>
            <a className="c292" href="#">
              <div className="c299">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E00000"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div className="c294">
                <span className="c295">GROWTH · 9 MIN READ</span>
                <h3 className="c296">Reading YouTube analytics without the confusion</h3>
                <span className="c297">
                  Read article
                  <svg
                    width="16"
                    height="16"
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
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="c110" id="faq">
        <Faq />
      </section>
      <ContactSection />
    </>
  );
}
