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

Ships on the parent's espresso + mustard while the floating palette
switcher (ported from the Conduit palette-preview branch, ~70
self-contained lines in index.html) decides the identity: espresso
(current), teal+cyan, forest+lime, charcoal+copper, graphite+scarlet,
plum+rose, ivory+ink light. Choice persists under
`adsfast_palette_choice` (line-scoped, deliberately not the Conduit
key). Once the pick lands, bake the winner into styles.css and strip the
bar — same recipe as the Conduit apply-winner plan.

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
