# Ads Fast-Track Line — design notes

Fifth fork of the shared transit-map engine.
Lineage: LLM Mastery Line (midnight navy) → Marketing Mastery Line (olive)
→ Business AI Conduit Line (ink violet, palette pending) → Ads Mastery Line
(espresso + mustard leather) → **this line (espresso + mustard inherited,
palette pick pending)**.

## Why this line exists

Sprint companion to the Ads Mastery marathon: 40 stations, ~45 minutes
each, default pace 6 a day — never-run-an-ad to first client campaign
live, tracked and reported, in one working week. Prompted by client
demand (Sept 2026): website + SEO clients asking Coralstone for the
traffic engine too. The Mastery line stays the depth rail; this one gets
to billable first, then hands over at station 40.

## Engine deltas vs Ads Mastery

- localStorage key `ads_fasttrack_v1` (all five lines coexist); backup
  filename `adsfast-backup-*.json`.
- **Sprint-pace scheduler**: `settings.perDay` stations per active day
  (default 6; chips 2/4/6/8 in Service). `buildAssignments` buckets
  pending stations N per day; `byDate` now maps dateISO → array.
  Default `activeDays` is all 7 days for the sprint week.
- `MIN_PER_STATION = 45` drives the "Hours left" board cell (the Mastery
  line assumes 60-minute sessions).
- Seven lines, not nine: p1 Scarlet … p7 Teal (violet and orange
  dropped). Map labels: Depart "never run an ad" → Terminus "client
  campaigns live". Favicon roundel core scarlet on espresso.
- Map-label fixes inherited from the Mastery fork (Depart label below
  its dot, Terminus right of its dot).
- Term dividers "The sprint" / "After the sprint"; legend shows "~N d"
  at current pace instead of "~N wk".

## Palette

**Spectrum Express** (his call, 2026-09-15, with a colorful-infographic
reference image: "make this a multicolored this time"). The floating
palette bar served its purpose and was stripped — the winner is baked.
Neutral ink ground (#131418 dark / paper #f4f2ed light) so seven hues
pop, and the phase line inks ARE the identity instead of a single
accent: `--spectrum` gradient (phase order scarlet → cobalt → amber →
green → magenta → sky → teal) under the header and above the footer, in
the journey progress bar, the brand-name text, the roundel ring, the
active tab underline and the favicon. Per-phase color does contextual
work: the Now boarding route card washes in the current phase ink and
its primary button takes that ink (dark scrim + porcelain text keeps
contrast on every hue), All-stations phase groups carry a colored left
edge, the six board cells get colored top rules and labels, and the
seven weekday chips light up in seven inks. `--mustard` survives as a
legacy var slot only. Dark and light both run the full spectrum.

## Curriculum shape

40 stations, ~45 minutes each, 7 lines. The sprint (p1–p6, 36 stations):
money model → Google account & first campaign → tracking before spend →
launch & optimize → Meta ads → sell it as a service. After the sprint
(p7, 4 stations): target bidding, Performance Max, remarketing, and the
hand-off into the Ads Mastery Line. Free first; exactly one paid-flagged
station (the optional Meta 100-101 exam, USD 99–150 at checkout). Every
station carries a Deliverable line; the practice business is the pilot
client. Day tags live in the phase goals. 2026-specific anchors: AI Max
defaults ON for new Search campaigns (the opt-out is taught explicitly),
Meta's unified Advantage+ flow, Conversions API treated as required,
GA4-only measurement, tracking stations written for Next.js on Vercel.

Station counts: p1 5, p2 7, p3 5, p4 6, p5 7, p6 6, p7 4.
