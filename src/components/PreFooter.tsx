import LeadForm from "@/components/LeadForm";

export default function PreFooter() {
  return (
    <section className="c193">
      <div className="c194">
        <div className="c195">
          <span className="c196">
            <svg
              width="18"
              height="18"
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
            No long-term contracts
          </span>
          <span className="c196">
            <svg
              width="18"
              height="18"
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
            Cancel anytime
          </span>
          <span className="c196">
            <svg
              width="18"
              height="18"
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
            You own the channel
          </span>
        </div>
        <LeadForm className="c197">
          <label className="c198">
            Get YouTube growth insights
            <input className="c199" type="email" name="email" autoComplete="email" placeholder="Your email" required />
          </label>
          <button className="c200" type="submit">
            Subscribe
          </button>
        </LeadForm>
      </div>
    </section>
  );
}
