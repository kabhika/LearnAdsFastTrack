// Curriculum data: phases and tasks. Ads Fast-Track Line.
// The sprint companion to the Ads Mastery Line: 40 stations, ~45 minutes
// each, built to take a working developer from "never run an ad" to
// "first client campaign live, tracked and reported" in one week.
// Sprint pace defaults to 6 stations a day (adjustable in Service).
// Free first. Exactly one paid-flagged station (the optional Meta exam).
// Thesis: clients who already buy websites and SEO are asking for the
// traffic engine too. Google captures demand, Meta creates it, tracking
// proves it. Learn the safe defaults first, delegate the grunt work to
// the AI copilot, and charge for the system, not the button-clicking.

const PHASES = [
  {
    id: "p1",
    name: "The Money Model",
    term: "short",
    goal: "Day 0. No platforms yet — the math that decides whether ads are worth running at all: how the two auctions work, what a lead is worth to a client, and the one-paragraph pitch you will give every one of them."
  },
  {
    id: "p2",
    name: "Google: Account & First Campaign",
    term: "short",
    goal: "Day 1. Manager account first, then a Search campaign built the safe way: guided flows skipped, AI Max off (it defaults on in 2026), networks off, phrase-match keywords, negatives from hour one."
  },
  {
    id: "p3",
    name: "Tracking Before Spend",
    term: "short",
    goal: "Day 2. The gate: nothing spends until a test lead shows up in Google Ads. Tag on your Next.js stack, GA4 link, three conversion actions, enhanced conversions."
  },
  {
    id: "p4",
    name: "Launch & Optimize",
    term: "short",
    goal: "Days 3–4. Live, then the rituals that separate operators from tourists: search-terms triage, quality diagnosis, the bidding ladder, geo tuning, and the first AI copilot drills."
  },
  {
    id: "p5",
    name: "Meta Ads",
    term: "short",
    goal: "Days 5–6. The second engine: Business Suite, Pixel + Conversions API on Next.js, the unified Advantage+ flow, audiences and creative for trades and SMBs, first lead campaign live."
  },
  {
    id: "p6",
    name: "Sell It As A Service",
    term: "short",
    goal: "Day 7+. Turn the skill into a Coralstone offer: packaging, onboarding, the weekly report, spend governance, the AI-copilot runbook, and the credibility certificates."
  },
  {
    id: "p7",
    name: "Keep Momentum",
    term: "long",
    goal: "The marathon after the sprint: target bidding, Performance Max, remarketing, and the hand-off into the Ads Mastery Line's deep rails."
  }
];

const TASKS = [
  // ---------- PHASE 1: The Money Model ----------
  { id: "t01", phase: "p1", type: "video", cost: "free",
    title: "How the Google Ads auction actually works",
    sub: "Ad Rank, not highest bid: what you pay depends on what the competitor below you bid, divided by your quality. This is why a better ad costs less for the same click. Deliverable: explain in three sentences why the top bidder does not always win, in words a client would repeat.",
    links: [{ label: "Watch: the auction explained", url: "https://www.youtube.com/results?search_query=how+the+google+ads+auction+works+ad+rank+quality+score" }] },

  { id: "t02", phase: "p1", type: "video", cost: "free",
    title: "Intent vs interruption: two engines, one budget",
    sub: "Search captures demand that already exists; social creates demand people did not know they had. Meta's auction ranks total value (bid + estimated action rates + quality), so creative does the job keywords do on Google. Deliverable: one notes page — what each engine rewards and punishes.",
    links: [
      { label: "Watch: Meta auction mechanics", url: "https://www.youtube.com/results?search_query=how+facebook+ads+auction+works+total+value" },
      { label: "Watch: Google Ads vs Facebook Ads", url: "https://www.youtube.com/results?search_query=ben+heath+google+ads+vs+facebook+ads+which+is+better" }
    ] },

  { id: "t03", phase: "p1", type: "docs", cost: "free",
    title: "Operator math: the glossary you bill on",
    sub: "CPC x CVR = CPA. Spend / conversions = CPA. Revenue / spend = ROAS. CTR and impression share diagnose reach; CVR diagnoses the landing page, not the ad. Deliverable: five worked examples solved by hand until they are reflexes.",
    links: [{ label: "Read: Google Ads metrics glossary", url: "https://support.google.com/google-ads/search?q=metrics+glossary+cpc+ctr+conversion+rate" }] },

  { id: "t04", phase: "p1", type: "project", cost: "free",
    title: "The client math worksheet",
    sub: "For one real client: average job value, close rate from lead, what one lead is worth, the max cost per lead that leaves margin, then budget = target leads per week x max CPL / 7. Unknown numbers stay unknown until the client confirms — never invent them. Deliverable: the worksheet filled for the pilot client.",
    links: [{ label: "Open: Keyword Planner (check real CPCs)", url: "https://support.google.com/google-ads/answer/7337243" }] },

  { id: "t05", phase: "p1", type: "practice", cost: "free",
    title: "The pitch: your restaurant-door analogy, written down",
    sub: "The site is the restaurant, SEO is the slow-built street presence, ads walk new people to the gate. Every client conversation about 'why isn't my site bringing customers' collapses into this. Deliverable: one paragraph in plain English, short sentences, no jargon — the Coralstone voice.",
    links: [{ label: "Watch: SEO vs Google Ads framing", url: "https://www.youtube.com/results?search_query=seo+vs+google+ads+for+small+business+explained" }] },

  // ---------- PHASE 2: Google: Account & First Campaign ----------
  { id: "t06", phase: "p2", type: "project", cost: "free",
    title: "Manager account first — you are an agency now",
    sub: "One manager (MCC) account holds every client account beneath it. Clients grant access from their side; nobody shares passwords, ever. This structure is also what lets you see all clients in one view later. Deliverable: manager account created, a test account linked under it.",
    links: [{ label: "Open: create a manager account", url: "https://support.google.com/google-ads/answer/7459399" }] },

  { id: "t07", phase: "p2", type: "video", cost: "free",
    title: "Ride along: a first Search campaign, end to end",
    sub: "The beginner tutorial you already watched — this time at the controls, on the pilot business: account without the guided flow, max clicks with a CPC cap, location radius, phrase keywords, three conversion actions, pause before launch. Deliverable: you reach the same pause point yourself.",
    links: [{ label: "Watch: first Search campaign, step by step", url: "https://www.youtube.com/results?search_query=google+ads+search+campaign+tutorial+step+by+step+for+beginners+2026" }] },

  { id: "t08", phase: "p2", type: "practice", cost: "free",
    title: "The 2026 corrections to that tutorial",
    sub: "Six things the video underplays for your situation: AI Max now defaults ON for new Search campaigns (deselect it at creation or toggle it off later — it expands queries, rewrites copy and sends clicks to pages you did not choose); Display network and search partners stay unticked; location option set to Presence only; manager account, not a lone account; your tag installs in the Next.js layout, not a WordPress plugin; and it stops at launch — optimization and reporting are where your fee lives. Deliverable: your one-page 'settings that protect money' card.",
    links: [
      { label: "Read: about AI Max", url: "https://support.google.com/google-ads/answer/15910366" },
      { label: "Read: AI Max setup and opt-out", url: "https://support.google.com/google-ads/answer/15909989" }
    ] },

  { id: "t09", phase: "p2", type: "project", cost: "free",
    title: "Build the campaign skeleton, paused",
    sub: "Campaign without guidance, type Search, website visits. Networks unticked, AI Max deselected, location as a radius around the real service area (not 'Sydney' the sprawl — check the map reach), Presence only, English. Daily budget set but the campaign stays paused until Phase 3 clears it. Deliverable: settings screenshot in the ops file.",
    links: [{ label: "Open: campaign settings (Help)", url: "https://support.google.com/google-ads/search?q=edit+campaign+settings+search+campaign" }] },

  { id: "t10", phase: "p2", type: "docs", cost: "free",
    title: "Keyword research: Planner plus SERP spy",
    sub: "One ad group per service. Seed from the client's service pages, spy the live ads for the same queries, then volume-check in Keyword Planner and download the sheet. Phrase match in quotes is the default; exact in brackets for the proven winners; broad stays off until you have data. Deliverable: two ad groups, 8–15 phrase keywords each.",
    links: [
      { label: "Open: Keyword Planner", url: "https://support.google.com/google-ads/answer/7337243" },
      { label: "Read: keyword match types", url: "https://support.google.com/google-ads/answer/7478529" }
    ] },

  { id: "t11", phase: "p2", type: "docs", cost: "free",
    title: "Negative keywords from hour zero",
    sub: "jobs, hiring, salary, career, DIY, how to, tutorial, free, course — the traffic that will never buy. Add them at ad-group level before launch, then grow the list from real search terms twice a week. Deliverable: the starter negative list applied to both ad groups.",
    links: [{ label: "Read: negative keywords (Help)", url: "https://support.google.com/google-ads/search?q=negative+keywords" }] },

  { id: "t12", phase: "p2", type: "project", cost: "free",
    title: "Write the ads: 15 headlines, 4 descriptions, assets",
    sub: "Headlines mirror the search, descriptions give the reason to click and the next step. Final URL is the exact service page — never the homepage. Sitelinks, callouts and a call asset on the AU number. Deliverable: the ad preview you would send the client for sign-off.",
    links: [{ label: "Read: responsive search ads (Help)", url: "https://support.google.com/google-ads/search?q=responsive+search+ads+headlines+descriptions" }] },

  // ---------- PHASE 3: Tracking Before Spend ----------
  { id: "t13", phase: "p3", type: "project", cost: "free",
    title: "Google Tag on your Next.js stack",
    sub: "Your sites are Next.js on Vercel — the tag goes in the root layout (or via your factory's analytics slot), site-wide, one deploy. No WordPress, no plugin. Deliverable: tag live on the pilot site, Tag Assistant sees it on every route.",
    links: [{ label: "Read: set up web conversions (Google tag)", url: "https://support.google.com/google-ads/answer/16560108" }] },

  { id: "t14", phase: "p3", type: "project", cost: "free",
    title: "Link GA4 and Google Ads",
    sub: "Data manager, connected products, both directions. GA4 gives you the free behavioral layer and unlocks enhanced conversions later. Deliverable: the link confirmed on both sides.",
    links: [
      { label: "Open: link from GA4", url: "https://support.google.com/analytics/answer/9379420" },
      { label: "Open: link from Google Ads", url: "https://support.google.com/google-ads/answer/7519537" }
    ] },

  { id: "t15", phase: "p3", type: "project", cost: "free",
    title: "Three conversion actions",
    sub: "Calls from ads (call asset), calls from the website (number on the site), and the form thank-you page as a page-load conversion with URL contains — the Coralstone sites already route to a thank-you after submit. These three cover how an SMB lead actually arrives. Deliverable: all three showing as recording.",
    links: [{ label: "Read: conversion actions (Help)", url: "https://support.google.com/google-ads/search?q=set+up+conversion+actions+calls+forms" }] },

  { id: "t16", phase: "p3", type: "docs", cost: "free",
    title: "Enhanced conversions for leads",
    sub: "Hashed first-party data stitched back to ad clicks — the difference between counting half your leads and counting them all in a consent-heavy, iOS-heavy world. Turn it on while the tag is fresh. Deliverable: enabled, with a test conversion carrying the enhanced parameters.",
    links: [
      { label: "Read: about enhanced conversions for leads", url: "https://support.google.com/google-ads/answer/15713840" },
      { label: "Read: Google tag configuration", url: "https://support.google.com/google-ads/answer/11021502" }
    ] },

  { id: "t17", phase: "p3", type: "practice", cost: "free",
    title: "The tracking gate",
    sub: "The rule that protects every client relationship: the campaign stays paused until a test submission appears as a conversion in Google Ads. Run Tag Assistant, submit the form, make the call paths testable, check within 24 hours. A consent banner is worth adding while you are in here — AU privacy law is tightening. Deliverable: test lead visible in the account; gate declared open.",
    links: [{ label: "Open: Tag Assistant", url: "https://tagassistant.google.com/" }] },

  // ---------- PHASE 4: Launch & Optimize ----------
  { id: "t18", phase: "p4", type: "project", cost: "free",
    title: "Go live",
    sub: "Enable campaign, ad groups, ads — in that order, checked one by one. Expect review time before delivery. Budget cap sanity check against the worksheet from t04; billing in AUD; your management fee carries GST. Deliverable: campaign eligible, first impressions within hours.",
    links: [{ label: "Open: Google Ads", url: "https://ads.google.com" }] },

  { id: "t19", phase: "p4", type: "practice", cost: "free",
    title: "The search-terms ritual",
    sub: "Twice a week, fifteen minutes: open the search terms report, keep what converts intent, negative what never will. This single habit saves more client money than any clever bidding strategy. Deliverable: first triage pass logged, negatives grown from real queries.",
    links: [{ label: "Read: search terms report (Help)", url: "https://support.google.com/google-ads/search?q=search+terms+report" }] },

  { id: "t20", phase: "p4", type: "docs", cost: "free",
    title: "Read the numbers: CTR, CPC, CVR by intent",
    sub: "Low CTR means the ad does not match the query; high CPC with low CVR means the wrong traffic or a weak landing page; Quality Score's three levers (expected CTR, ad relevance, landing page experience) tell you which. Deliverable: one underperformer diagnosed and one fix shipped.",
    links: [{ label: "Read: about Quality Score", url: "https://support.google.com/google-ads/search?q=quality+score" }] },

  { id: "t21", phase: "p4", type: "docs", cost: "free",
    title: "The bidding ladder",
    sub: "Max clicks with a CPC cap while data is thin; manual CPC to steer the winners; Max Conversions once volume arrives; target CPA only after roughly 15–30 conversions a month so the algorithm has something to learn from. AI Max presumes Smart Bidding — one more reason it waits. Deliverable: write the exit criteria from your current state to the next rung.",
    links: [{ label: "Read: automated bidding strategies", url: "https://support.google.com/google-ads/search?q=automated+bidding+strategies" }] },

  { id: "t22", phase: "p4", type: "practice", cost: "free",
    title: "Geo and schedule tuning for Greater Sydney",
    sub: "Radius discipline beats 'Sydney' the region; compare CPC and CVR by location and adjust bids where the jobs actually come from; daypart around call patterns, not guesses. Deliverable: location report reviewed, adjustments set with a note of why.",
    links: [{ label: "Read: location bid adjustments (Help)", url: "https://support.google.com/google-ads/search?q=location+bid+adjustments" }] },

  { id: "t23", phase: "p4", type: "practice", cost: "free",
    title: "AI copilot drills: your unfair advantage",
    sub: "Three prompts you will run weekly forever: paste the search-terms export, get a keep/kill table with reasons; paste a service page, get keyword and negative candidates; ask for 15 headline variants in the client's voice, you pick five. Deliverable: the prompt pack saved in your ops file, each tested once on real data.",
    links: [] },

  // ---------- PHASE 5: Meta Ads ----------
  { id: "t24", phase: "p5", type: "project", cost: "free",
    title: "Business Suite and Ads Manager, cleanly",
    sub: "The Business Manager is the container clients invite you into — partner access, two-factor on, no password sharing, same hygiene as the MCC. Add the Page, the Instagram professional account, and the ad account. Deliverable: practice container fully wired.",
    links: [
      { label: "Open: Business Suite", url: "https://business.facebook.com" },
      { label: "Open: Business Help Center", url: "https://www.facebook.com/business/help" }
    ] },

  { id: "t25", phase: "p5", type: "project", cost: "free",
    title: "Pixel plus Conversions API on Next.js",
    sub: "Browser pixel alone under-counts in 2026; the Conversions API sends the same events server-side and dedupes. Base code in the Next.js app, Lead event from the form route, ideally CAPI from a server function. Deliverable: Events Manager shows page views and a Lead from both browser and server.",
    links: [
      { label: "Read: set up and install the Meta Pixel", url: "https://www.facebook.com/business/help/952192354843755" },
      { label: "Read: Conversions API docs", url: "https://developers.facebook.com/documentation/ads-commerce/conversions-api" }
    ] },

  { id: "t26", phase: "p5", type: "docs", cost: "free",
    title: "The unified Advantage+ flow",
    sub: "Meta merged manual and Advantage+ into one creation flow with Advantage+ on by default for Leads. That is mostly good — but know exactly what you left automatic (budget placement, audience expansion) and what you kept manual (the exclusions that stop you paying for your own clients' customers). Deliverable: the automatic-vs-manual list, with reasons.",
    links: [{ label: "Read: Advantage+ leads campaigns", url: "https://www.facebook.com/business/ads/meta-advantage-plus/leads" }] },

  { id: "t27", phase: "p5", type: "project", cost: "free",
    title: "Audiences: radius, custom, lookalike",
    sub: "A local radius around the service area for cold reach; site visitors and page engagers as warm retargeting; lookalikes seeded from leads only after volume exists. Exclusions matter as much as inclusions. Deliverable: the audience stack built and named by convention.",
    links: [{ label: "Open: audiences (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t28", phase: "p5", type: "project", cost: "free",
    title: "Creative for trades and SMBs",
    sub: "Three angles beat three filters: the before/after, the trust signal (real reviews, real team), the offer. Phone-shot photo plus one clear hook line outperforms stock polish; test one variable at a time. Deliverable: three creatives built for the pilot client.",
    links: [{ label: "Open: ad specs (Help)", url: "https://www.facebook.com/business/help" }] },

  { id: "t29", phase: "p5", type: "docs", cost: "free",
    title: "Instant Forms vs website leads",
    sub: "Instant Forms fill themselves — volume up, intent down; website leads cost more per click but arrive pre-qualified on your landing page. For trades with capacity constraints, website leads usually win; forms suit top-of-funnel offers. Deliverable: the choice for the pilot client, in one written paragraph.",
    links: [
      { label: "Read: Lead Ads with Instant Forms", url: "https://www.facebook.com/business/help/761812391313386" },
      { label: "Read: lead generation objectives", url: "https://www.facebook.com/business/ads/ad-objectives/lead-generation/lead-ads-with-forms" }
    ] },

  { id: "t30", phase: "p5", type: "project", cost: "free",
    title: "Launch the lead campaign and verify",
    sub: "Modest budget, Advantage+ defaults kept honest, the audience stack applied, the Pixel test lead fired before spending a dollar — same gate rule as Google. Check daily for the first three days. Deliverable: campaign live and the test Lead event green in Events Manager.",
    links: [{ label: "Open: Ads Manager", url: "https://adsmanager.facebook.com" }] },

  // ---------- PHASE 6: Sell It As A Service ----------
  { id: "t31", phase: "p6", type: "article", cost: "free",
    title: "Packaging: setup plus management",
    sub: "The models: setup fee plus flat monthly, percentage of spend, or hybrid. Percent scales with client size; flat is simpler to sell. Your numbers are your call — charge for the system and the reporting, not the button-clicking. Deliverable: draft offer card with the numbers marked 'to decide'.",
    links: [{ label: "Watch: pricing PPC management", url: "https://www.youtube.com/results?search_query=how+to+price+ppc+management+fees+for+small+business" }] },

  { id: "t32", phase: "p6", type: "project", cost: "free",
    title: "Client onboarding checklist",
    sub: "Manager-account invite (never credentials), tracking audit before spend, asset collection, the offer and budget approved in writing, kill-switch rules agreed. Onboarding discipline is what lets you take client money without flinching. Deliverable: the checklist document, ready for the first real client.",
    links: [{ label: "Open: Google Ads manager accounts", url: "https://ads.google.com" }] },

  { id: "t33", phase: "p6", type: "project", cost: "free",
    title: "The weekly client report",
    sub: "Looker Studio: the native Google Ads connector is free; Meta needs a partner connector (Databloo's free tier works). Six numbers maximum, plain-English caption each, in the Coralstone voice — spend, leads, cost per lead, and what you did about it. Deliverable: the template with a week of demo data.",
    links: [{ label: "Open: Looker Studio", url: "https://lookerstudio.google.com/" }] },

  { id: "t34", phase: "p6", type: "docs", cost: "free",
    title: "Spend governance and policy landmines",
    sub: "Budget caps in the platform, change approvals in writing, a pause rule you can execute alone. Both platforms ban first and ask questions never: prohibited content, circumventing systems, personal-attribute callouts. Deliverable: the one-page agreement clauses for client spend and scope.",
    links: [
      { label: "Read: Google Ads policies", url: "https://support.google.com/adspolicy" },
      { label: "Read: Meta advertising standards", url: "https://www.facebook.com/policies/ads" }
    ] },

  { id: "t35", phase: "p6", type: "practice", cost: "free",
    title: "The AI copilot weekly ritual",
    sub: "Monday: search-terms triage with the keep/kill prompt. Wednesday: copy and creative variants in the client's voice. Friday: report draft generated, you verify every number before it leaves. Delegate the grunt work, never the budget changes and never the send button. Deliverable: the runbook in your ops file.",
    links: [] },

  { id: "t36", phase: "p6", type: "course", cost: "paid",
    title: "Credibility certificates",
    sub: "Google's are free on Skillshop: Search Certification and Measurement Certification, ~75 minutes each, 80% to pass, valid a year — worth doing this week while it is fresh. Meta's 100-101 Digital Marketing Associate exam is the only paid item on this line (USD 99–150 at checkout) — optional, only when a credential matters to a client proposal.",
    links: [
      { label: "Open: Google Skillshop", url: "https://skillshop.withgoogle.com" },
      { label: "Open: Meta Blueprint certifications", url: "https://certifications.facebookblueprint.com/" }
    ] },

  // ---------- PHASE 7: Keep Momentum ----------
  { id: "t37", phase: "p7", type: "docs", cost: "free",
    title: "Target CPA and target ROAS",
    sub: "Bidding with targets: powerful once conversion volume supports it, restrictive when set too tight — the algorithm gives up instead of learning. Read this after your first month of real data, not before.",
    links: [{ label: "Read: target CPA bidding (Help)", url: "https://support.google.com/google-ads/search?q=target+cpa+bidding" }] },

  { id: "t38", phase: "p7", type: "docs", cost: "free",
    title: "Performance Max for local services",
    sub: "Google's everything-surface campaign fed by assets and signals. For local SMBs it can work — after search is dialed, never instead of it. Know what it is before a client asks, because Google's reps will suggest it early.",
    links: [{ label: "Read: Performance Max (Help)", url: "https://support.google.com/google-ads/search?q=performance+max" }] },

  { id: "t39", phase: "p7", type: "docs", cost: "free",
    title: "Remarketing: the cheapest clicks you will ever buy",
    sub: "People who already visited convert at multiples of cold traffic. Audience lists applied to search, plus Meta retargeting of site visitors — with the privacy floor respected (AU reform is tightening this).",
    links: [{ label: "Read: remarketing (Help)", url: "https://support.google.com/google-ads/search?q=remarketing+audience+lists" }] },

  { id: "t40", phase: "p7", type: "article", cost: "free",
    title: "Cross over to the marathon line",
    sub: "This line made you dangerous in a week; the Ads Mastery Line makes you an operator — 101 stations of creative studio, audience science, measurement and agency operations. Board it where the pilot client's needs point, not from station one.",
    links: [{ label: "Open: Ads Mastery Line", url: "https://learn-ads-mastery.vercel.app/" }] }
];
