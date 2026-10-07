import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — YouTube Automation Lab",
};

export default function ContactPage() {
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
              <span className="c223">CONTACT</span>
            </span>
            <h1 className="c224">Let’s talk about your channel.</h1>
            <p className="c225">
              Send your details or book a free 30-minute strategy call. We reply within one business day.
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
      <ContactSection />
      <section className="c110" id="faq">
        <Faq />
      </section>
    </>
  );
}
