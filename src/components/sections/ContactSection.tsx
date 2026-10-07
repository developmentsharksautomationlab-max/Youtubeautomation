import { SITE } from "@/lib/content";
import LeadForm from "@/components/LeadForm";

export default function ContactSection() {
  return (
    <section className="c174" id="contact">
      <div className="c175">
        <div className="c176">
          <span className="c177">CONTACT</span>
          <h2 className="c178">Let’s grow your channel together.</h2>
          <p className="c179">Send your details or book a free strategy call. We reply within one business day.</p>
          <div className="c180">
            <a className="c181" href={SITE.whatsapp}>
              <span className="c182">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E00000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path>
                </svg>
              </span>
              <span className="c183">
                <span className="c184">WHATSAPP / PHONE</span>
                <span className="c185">{SITE.phone}</span>
              </span>
            </a>
            <a className="c181" href={`mailto:${SITE.email}`}>
              <span className="c182">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E00000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="m3 7 9 6 9-6"></path>
                </svg>
              </span>
              <span className="c183">
                <span className="c184">EMAIL</span>
                <span className="c185">{SITE.email}</span>
              </span>
            </a>
            <a className="c181" href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
              <span className="c182">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E00000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
              </span>
              <span className="c183">
                <span className="c184">OFFICE</span>
                <span className="c185">
                  8930 Gross Point Rd, Ste LL200B
                  <br />
                  Skokie, IL 60077
                </span>
              </span>
            </a>
            <div className="c181">
              <span className="c182">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E00000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
              </span>
              <span className="c183">
                <span className="c184">HOURS</span>
                <span className="c185">{SITE.hours}</span>
              </span>
            </div>
          </div>
          <a className="c186" href={SITE.booking}>
            Book on Calendly
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
              <path d="M7 17 17 7"></path>
              <path d="M8 7h9v9"></path>
            </svg>
          </a>
        </div>
        <LeadForm className="c187">
          <h3 className="c144">Get your custom quote</h3>
          <div className="c188">
            <label className="c189">
              First name
              <input className="c190" type="text" name="firstName" autoComplete="given-name" placeholder="First name" required />
            </label>
            <label className="c189">
              Last name
              <input className="c190" type="text" name="lastName" autoComplete="family-name" placeholder="Last name" />
            </label>
            <label className="c189">
              Email
              <input className="c190" type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
            </label>
            <label className="c189">
              Phone / WhatsApp
              <input className="c190" type="tel" name="phone" autoComplete="tel" placeholder="+1 555 000 0000" />
            </label>
          </div>
          <label className="c189">
            Channel name (if you have one)
            <input className="c190" type="text" name="channel" placeholder="@yourchannel" />
          </label>
          <label className="c189">
            Message
            <textarea name="message"
              className="c191"
              rows={4}
              placeholder="Your niche, goals and how many videos you want per month"
            ></textarea>
          </label>
          <button className="c192" type="submit">
            Send Message
          </button>
        </LeadForm>
      </div>
    </section>
  );
}
