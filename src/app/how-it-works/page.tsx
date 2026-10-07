import type { Metadata } from "next";
import Link from "next/link";
import StepTabs from "@/components/StepTabs";
import Faq from "@/components/Faq";
import ContactSection from "@/components/sections/ContactSection";
import StudioProof from "@/components/sections/StudioProof";

export const metadata: Metadata = {
  title: "How It Works — YouTube Automation Lab",
};

export default function HowItWorksPage() {
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
              <span className="c223">HOW IT WORKS</span>
            </span>
            <h1 className="c224">The 6-step content machine.</h1>
            <p className="c225">
              A repeatable system that turns research into published, optimized videos — every week, without you on
              camera.
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
      <section className="c110" id="how">
        <StepTabs />
      </section>
      <section className="c84">
        <div className="c59">
          <div className="c54">
            <span className="c85">Your timeline</span>
            <h2 className="c86">What happens after you sign up.</h2>
          </div>
          <div className="c242">
            <div className="c243">
              <span className="c244">WEEK 1</span>
              <div className="c245">
                <h3 className="c246">Onboarding call</h3>
                <p className="c247">We learn your goals, budget and interests, then set up or audit your channel.</p>
              </div>
            </div>
            <div className="c243">
              <span className="c244">WEEK 1–2</span>
              <div className="c245">
                <h3 className="c246">Niche &amp; strategy</h3>
                <p className="c247">
                  Niche research, competitor breakdown and a 30-day content plan for your approval.
                </p>
              </div>
            </div>
            <div className="c243">
              <span className="c244">WEEK 3–4</span>
              <div className="c245">
                <h3 className="c246">First videos</h3>
                <p className="c247">
                  Scripts, voice, edits and thumbnails produced. You approve before anything goes live.
                </p>
              </div>
            </div>
            <div className="c243">
              <span className="c244">MONTH 2+</span>
              <div className="c245">
                <h3 className="c246">Publish &amp; grow</h3>
                <p className="c247">Consistent uploads, monthly analytics reports and strategy adjustments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="c73">
        <div className="c59">
          <div className="c94">
            <span className="c61">Who does what</span>
            <h2 className="c62">Your part takes minutes. Ours takes the rest.</h2>
          </div>
          <div className="c248">
            <div className="c249">
              <span className="c250">YOU</span>
              <h3 className="c251">About 1 hour a month</h3>
              <ul className="c252">
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#52525B"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Join a 30-minute onboarding call</span>
                </li>
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#52525B"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Approve your niche and content plan</span>
                </li>
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#52525B"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Review videos before they go live (optional)</span>
                </li>
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#52525B"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Read your monthly report</span>
                </li>
              </ul>
            </div>
            <div className="c254">
              <span className="c255">YOUTUBE AUTOMATION LAB</span>
              <h3 className="c251">Everything else</h3>
              <ul className="c252">
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Niche, keyword and competitor research</span>
                </li>
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Scripts, voiceover and editing</span>
                </li>
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Thumbnails, titles and SEO</span>
                </li>
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Uploading, scheduling and analytics</span>
                </li>
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Monthly strategy adjustments</span>
                </li>
                <li className="c253">
                  <svg
                    className="c127"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Ongoing channel management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <StudioProof />
      <section className="c110" id="faq">
        <Faq />
      </section>
      <ContactSection />
    </>
  );
}
