// Content for the interactive step tabs and FAQ, shared across pages.

export type Step = { num: string; label: string; title: string; desc: string; points: string[] };
export type FaqCategory = { label: string; items: { q: string; a: string }[] };

export const STEPS: Step[] = [
  {
    "num": "01",
    "label": "Research",
    "title": "SEO & Niche Research",
    "desc": "We analyze RPM, search demand and competitors to find topics your audience is already looking for — before a single script is written.",
    "points": [
      "Niche & RPM analysis",
      "Keyword and topic research",
      "Competitor breakdowns",
      "A 30-day content plan"
    ]
  },
  {
    "num": "02",
    "label": "Scripts",
    "title": "Script Writing",
    "desc": "Niche writers turn each topic into a hook-first script built for retention, with clear story structure and calls to action.",
    "points": [
      "Hook-first openings",
      "Retention-focused structure",
      "Fact-checked research",
      "Your approval before production"
    ]
  },
  {
    "num": "03",
    "label": "Voice",
    "title": "Voiceover",
    "desc": "A natural human voice or premium AI voice recorded to match your channel’s tone — consistent in every upload.",
    "points": [
      "Human or AI voice options",
      "Consistent channel voice",
      "Clean, mastered audio",
      "Fast turnaround"
    ]
  },
  {
    "num": "04",
    "label": "Edit",
    "title": "Video Editing",
    "desc": "Editors assemble visuals, motion graphics, captions and sound design, paced to keep viewers watching to the end.",
    "points": [
      "Motion graphics & b-roll",
      "Captions & sound design",
      "Retention-paced cuts",
      "Shorts cut-downs"
    ]
  },
  {
    "num": "05",
    "label": "Thumbs",
    "title": "Thumbnail Design",
    "desc": "Designers create click-worthy thumbnails and titles as a package, with a consistent visual identity across the channel.",
    "points": [
      "Multiple thumbnail concepts",
      "Title + thumbnail packaging",
      "A/B testing where available",
      "Consistent branding"
    ]
  },
  {
    "num": "06",
    "label": "Publish",
    "title": "Delivery & Channel Growth",
    "desc": "We upload, optimize and schedule every video, then review analytics monthly to decide what to repeat and what to cut.",
    "points": [
      "SEO-optimized uploads",
      "Scheduling & playlists",
      "Monthly analytics report",
      "Strategy adjustments"
    ]
  }
];

export const FAQ: FaqCategory[] = [
  {
    "label": "YouTube Automation",
    "items": [
      {
        "q": "What is YouTube automation?",
        "a": "A done-for-you model where a team researches, produces and publishes videos for a channel you own, usually in a faceless format — so it can grow without you on camera."
      },
      {
        "q": "Do I need to be on camera?",
        "a": "No. Every format we produce is faceless: voiceover with visuals, animation, documentary or AI avatar styles."
      },
      {
        "q": "Do I need any YouTube experience?",
        "a": "None. We guide you through setup and handle production, publishing and reporting."
      }
    ]
  },
  {
    "label": "Results & Growth",
    "items": [
      {
        "q": "How long does it take to see results?",
        "a": "It varies by niche and publishing volume. Most channels need several months of consistent uploads to build traction; we report progress every month."
      },
      {
        "q": "Do you guarantee views or income?",
        "a": "No. YouTube results depend on the niche, content and the platform. What we commit to is the work: a consistent, data-led production system and honest reporting."
      },
      {
        "q": "Do you work with all niches?",
        "a": "We focus on niches with strong demand and healthy RPMs — finance, business, history, self-improvement, tech and more. We’ll advise on fit during your call."
      }
    ]
  },
  {
    "label": "Process & Delivery",
    "items": [
      {
        "q": "How many videos do I get?",
        "a": "It depends on your plan — you choose the monthly volume. Book a call and we’ll recommend a pace for your goals."
      },
      {
        "q": "Do I approve content before it goes live?",
        "a": "Yes. You can review topics, scripts and final videos before publishing."
      },
      {
        "q": "How fast can we start?",
        "a": "Research starts right after onboarding, and first videos typically follow within the first few weeks."
      }
    ]
  },
  {
    "label": "Ownership",
    "items": [
      {
        "q": "Who owns the channel?",
        "a": "You do — 100%. The channel, the videos and all revenue belong to you."
      },
      {
        "q": "Can I cancel anytime?",
        "a": "Yes. Plans are month-to-month with no long-term contract."
      },
      {
        "q": "What happens to my content if I leave?",
        "a": "Everything we produced stays on your channel and remains yours."
      }
    ]
  }
];

// Business details used across the site. Email and hours are placeholders until confirmed.
export const SITE = {
  name: "YouTube Automation Lab",
  url: "https://youtubeautomationlab.com",
  email: "hello@youtubeautomationlab.com",
  phone: "+1 (347) 434-9315",
  whatsapp: "https://wa.me/13474349315",
  hours: "Mon–Fri · 9am–6pm CT",
  address: ["8930 Gross Point Rd, Ste LL200B", "Skokie, IL 60077"],
  mapsLink: "https://maps.google.com/?q=8930+Gross+Point+Rd+Skokie+IL+60077",
  booking: "https://calendly.com/",
};

export type CaseStudy = { niche: string; name: string; result: string; metric: string; summary: string; image: string; alt: string };

export const CASES: CaseStudy[] = [
  {
    niche: "FINANCE",
    name: "Casual Finance",
    result: "$259K",
    metric: "est. revenue / 12 mo",
    summary: "Illustrated faceless finance explainers on a weekly schedule.",
    image: "/images/56fa444d8bbf08d1e24557cdb754e23b.png",
    alt: "Casual Finance channel analytics",
  },
  {
    niche: "ENTERTAINMENT",
    name: "Yellow Dude",
    result: "250K+",
    metric: "subscribers",
    summary: "Grew from 100K to 250K+ in 12 months with 50M+ total views.",
    image: "/images/stock/niche-entertainment.jpg",
    alt: "Rows of red cinema seats",
  },
  {
    niche: "HISTORY",
    name: "History channel",
    result: "200K+",
    metric: "subscribers",
    summary: "From 50K to 200K+ in under 12 months with documentary storytelling.",
    image: "/images/stock/niche-history.jpg",
    alt: "The Colosseum in Rome at dusk",
  },
];

// Niches we produce in, shown on the home page portfolio next to the case studies.
export const NICHES = [
  { label: "BUSINESS", name: "Business", image: "/images/stock/niche-business.jpg", alt: "Office towers seen from below" },
  { label: "SELF-IMPROVEMENT", name: "Self-Improvement", image: "/images/stock/niche-self-improvement.jpg", alt: "Person meditating at sunrise" },
  { label: "TECH & AI", name: "Tech & AI", image: "/images/stock/niche-tech.jpg", alt: "3D AI lettering" },
  { label: "EXPLAINERS", name: "Explainers", image: "/images/stock/niche-explainers.jpg", alt: "Laboratory glassware" },
  { label: "HEALTH", name: "Health", image: "/images/stock/niche-health.jpg", alt: "Person working out on a mat" },
];

export type Guide = { category: string; tag: string; title: string; readTime: string; image: string; alt: string };

export const GUIDES: Guide[] = [
  { category: "Guides", tag: "GUIDE", title: "How to choose a profitable YouTube niche", readTime: "8 min read", image: "/images/stock/res-niche.jpg", alt: "Team planning at laptops" },
  { category: "Strategy", tag: "STRATEGY", title: "Faceless channels: formats that work", readTime: "6 min read", image: "/images/stock/res-faceless.jpg", alt: "YouTube play button icon" },
  { category: "Production", tag: "PACKAGING", title: "Thumbnails and titles that earn the click", readTime: "7 min read", image: "/images/stock/svc-thumbnail.jpg", alt: "Designer colour swatches and tablet sketches" },
  { category: "Monetization", tag: "MONETIZATION", title: "Getting into the YouTube Partner Program", readTime: "5 min read", image: "/images/stock/res-monetization.jpg", alt: "Plant growing from a pile of coins" },
  { category: "Production", tag: "PRODUCTION", title: "Human vs. AI voiceover: how to choose", readTime: "6 min read", image: "/images/stock/res-voice.jpg", alt: "Studio condenser microphone" },
  { category: "Growth", tag: "GROWTH", title: "Reading YouTube analytics without the confusion", readTime: "9 min read", image: "/images/stock/svc-research.jpg", alt: "Analytics dashboard on a laptop" },
];

export const GUIDE_FILTERS = ["All", "Guides", "Strategy", "Production", "Monetization", "Growth"];
