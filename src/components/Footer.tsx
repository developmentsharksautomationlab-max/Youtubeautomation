import { SITE } from "@/lib/content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="c201">
      <div className="c59">
        <div className="c202">
          <div className="c203">
            <Link className="c204" href="/" aria-label="YouTube Automation Lab home">
              <span className="c5">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5z" fill="#FFFFFF"></path>
                </svg>
              </span>
              <span className="c6">
                <span className="c7">YouTube Automation</span>
                <span className="c205">LAB</span>
              </span>
            </Link>
            <p className="c206">
              Done-for-you YouTube automation. We build, produce and grow faceless channels you own.
            </p>
            <div className="c207">
              <span className="c208">
                <svg
                  className="c127"
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
                  <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
                <span>
                  8930 Gross Point Rd, Ste LL200B
                  <br />
                  Skokie, IL 60077
                </span>
              </span>
              <a className="c210" href={`mailto:${SITE.email}`}>
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
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="m3 7 9 6 9-6"></path>
                </svg>
                {SITE.email}
              </a>
            </div>
            <div className="c148">
              <a className="c211" href="https://www.youtube.com/" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.6-.46-5.33a2.78 2.78 0 0 0-1.95-1.96C18.88 4.25 12 4.25 12 4.25s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96C1 8.4 1 12 1 12s0 3.6.46 5.33a2.78 2.78 0 0 0 1.95 1.96c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96C23 15.6 23 12 23 12zM9.75 15.27V8.73L15.5 12l-5.75 3.27z" /></svg>
              </a>
              <a className="c211" href="https://www.facebook.com/" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3A22 22 0 0 0 14.6 2C12.2 2 10.6 3.5 10.6 6.1v2.4H8v3.6h2.6V22H14v-9.9h2.7l.4-3.6H14z" /></svg>
              </a>
            </div>
          </div>
          <div className="c212">
            <div className="c213">
              <span className="c214">Company</span>
              <Link className="c215" href="/">
                Home
              </Link>
              <Link className="c215" href="/services">
                Services
              </Link>
              <Link className="c215" href="/how-it-works">
                How It Works
              </Link>
              <Link className="c215" href="/about">
                About
              </Link>
              <Link className="c215" href="/case-studies">
                Case Studies
              </Link>
              <Link className="c215" href="/resources">
                Resources
              </Link>
              <Link className="c215" href="/#faq">
                FAQ
              </Link>
              <Link className="c215" href="/contact">
                Contact
              </Link>
            </div>
            <div className="c213">
              <span className="c214">Services</span>
              <Link className="c215" href="/services">
                SEO &amp; Niche Research
              </Link>
              <Link className="c215" href="/services">
                Script Writing
              </Link>
              <Link className="c215" href="/services">
                Voiceover
              </Link>
              <Link className="c215" href="/services">
                Video Editing
              </Link>
              <Link className="c215" href="/services">
                Thumbnail Design
              </Link>
              <Link className="c215" href="/services">
                Channel Growth
              </Link>
            </div>
            <div className="c213">
              <span className="c214">Legal</span>
              <a className="c215" href="#">
                Privacy Policy
              </a>
              <a className="c215" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        <div className="c216">
          <span>© 2026 YouTube Automation Lab. All rights reserved.</span>
          <span>youtubeautomationlab.com · Not affiliated with YouTube or Google.</span>
        </div>
      </div>
    </footer>
  );
}
