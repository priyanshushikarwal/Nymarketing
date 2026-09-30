# PRD — NY Marketing Landing Page

## Original Problem Statement
Build a landing page based on a reference image (Mark.Media style) for a digital marketing agency in Jaipur. Mobile-first, good animations. REPOSITIONED (2026-07): user asked to keep the premium design but reposition from AI-product feel to a premium modern digital marketing & growth agency — "NY Marketing". Strategy + Creative + Performance + Branding + AI (AI as advantage, not identity). Green (#16A34A) replaced orange/pink accents. No fake stats, testimonials, logos or social proof.

## Architecture
- Frontend-only React SPA (no backend endpoints; CTAs are mailto/anchor based)
- Stack: React 19, Tailwind CSS v3, framer-motion 11, lenis smooth scroll, lucide-react
- Fonts: Bricolage Grotesque (display), Plus Jakarta Sans (body), JetBrains Mono (eyebrows)
- Components in `/app/frontend/src/components/landing/`: Nav, Hero, Orb (green parallax orb = "The NY Method"), Trust, Services (6 cards), WhyNY (4 cards), Process (5 steps), Work (placeholder case cards, "Your Brand Could Be Next."), Stats (results: Reach/Leads/Conversions/Revenue — no fake numbers), Testimonials (fallback "Great partnerships start with great conversations."), About (+ AI edge card), Footer (final CTA + link columns)
- Section order: Hero → Trust → Services → Why NY → Process → Work → Results → Testimonials → About → Footer CTA

## Content Rules (user-mandated)
- No fake statistics, testimonials, client logos, "5k users", "4.9/5" etc.
- No generic agency clichés ("we are passionate", "next level", "best agency")
- AI positioned as a capability ("AI-Powered Marketing" service + Our edge card), never the core identity

## Implemented (2026-07)
- Full repositioning: new navbar (Services/Work/About/Process/Contact + "Get a Free Strategy Call"), hero "We Turn Attention Into Real Business." with green accent + Start Growing / View Our Work CTAs, right rail = Strategy/Creative/Performance pillars, orb recolored emerald, trust strip, 6 service cards, Why NY, 5-step process, Work placeholders, Results without fake metrics, testimonial fallback, About with AI edge card, footer with Services/Company/Connect columns

## Backlog
- P1: Real email/phone/WhatsApp/social links (currently placeholders: hello@NyMarketingGroups.com)
- P1: Real client logos for trust strip, real testimonials, real metrics, real case studies
- P2: OG meta + page title + favicon, case study detail pages

## Mascot (2026-07, client request via Priyanshu)
- Client feedback (WhatsApp voice note, Hindi): site is good/informative but needs character/sticker-style visuals to be more attractive
- Generated 3 brand mascots with Gemini Nano Banana (emergentintegrations, EMERGENT_LLM_KEY in backend/.env): charcoal capsule character with emerald lightning badge — /app/frontend/public/assets/mascot.png (megaphone, on hero orb card corner), mascot-light.png (jumping, on Why NY heading), mascot-rocket.png (rocket, on footer CTA)
- Generator script: /app/backend/gen_mascots.py (rerun to regenerate)
- .animate-bob keyframes in index.css give all mascots a gentle float

## Creature Set + Loader (2026-07, Priyanshu)
- User uploaded reference images (hyperreal octopus / dolphin / turtle-warrior on white bg) and asked for mascots in that style
- Generated 6 hyperreal creature mascots (charcoal + emerald, white bg) via /app/backend/gen_creatures.py: octopus (Social Media + Trust section), dolphin (Performance + Work heading), turtle warrior (AI service + Process heading), chameleon (Branding), parrot with camera (Content & Reels), owl with laptop (Websites)
- Each of the 6 service cards now shows its creature (top-right, hover tilt/zoom, mix-blend-multiply to blend white bg)
- Loader.jsx: full-screen cameo on page load — waving mascot badge + "NY Marketing." wiggle, slides up after ~1.6s (App.js state)
- Hero creature moment: turtle warrior springs in beside the headline (Hero.jsx, motion.div spring entrance + animate-bob)
- ScrollChase.jsx: parrot peeks from right screen edge (x 110%→15%), climbs up the edge as user scrolls (72vh→22vh), hides again before the dark footer; hidden on <md

## Mascots Removed (2026-07, user request)
- "remove all mascots" — all mascot/creature/loader/scroll-chase visuals removed from Hero, Orb wrapper, Trust, WhyNY, Process, Work, Services (cards back to arrow-circle design), About AI card, Footer, App.js
- Loader.jsx and ScrollChase.jsx deleted; generated PNGs still in /app/frontend/public/assets/ (unused, kept for possible reuse); gen scripts kept in /app/backend/

## Hero Redesign to Client Mockup (2026-07, user uploaded mockup image)
- Hero rebuilt to match client's mockup exactly: 4-line masked headline (We Turn / Attention / Into Real / Business. in green), green gradient square icon for "Growth, Not Guesswork.", Start Growing / View Our Work CTAs
- Center: Dashboard.jsx — dark emerald "REAL CLIENT RESULTS" card: ₹12.4M revenue, +287%/6mo, SVG line chart (Jan–Jun) with gradient fill + dots, 3 stat tiles (+320% traffic, 4.8K leads, +178% conversion), brand wordmarks (boAt/blinkit/TATA/zomato/OYO), "Trusted by fast-growing brands across India." — NOTE: these metrics/logos came from the client's own mockup; they are PLACEHOLDER display data until the client confirms real numbers
- Turtle warrior mascot back per mockup: NOW USING THE CLIENT'S OWN UPLOADED IMAGE (already bg-removed): /app/frontend/public/assets/turtle-ny.png (source: user upload "ChatGPT_Image...removebg-preview.png"). Sized to mockup ratios (h 108% of card, head just above card top, hand draped over card's top-left corner, feet at card bottom), no flip needed (arm already points right); desktop-only lg:block, mobile gets smaller centered turtle under the card. Card header label inset (lg:pl-[84px], 9px mono) so the draping hand never covers it; +287% pill sits beside the revenue figure per mockup
- Left column is relative z-30 so headline/CTAs always paint above the turtle; hero support paragraphs narrowed (340px/270px) so no text tucks under the turtle

## Hero Art-Directed Rebuild v2 (2026-07, detailed spec from user)
- Goal: reference-matched spacious composition; mascot must NEVER cover headline; mascot overlaps CARD only at its top-left corner (arm drape)
- Layout: hero + nav container widened to max-w-[88rem]; grid lg:grid-cols-[25%_50.5%_21%] gap-[1.75%]; headline lg:text-[2.9rem] xl:text-[3.5rem] 2xl:text-[3.9rem]
- Center zone: relative container; turtle h-full aspect-[3/5] object-fill, absolute bottom-0 -left-[6%] (slight squish matches reference); card in-flow at ml-auto mt-[16%] w-[64%] — container height = card + 16% so turtle head rises above card top like the reference
- Dashboard: revenue block lg:pl-16, chart lg:pl-10, header label lg:pl-[140px] so the draping hand never covers text
- Mobile order per spec: headline → copy → CTAs → mascot (h-64, in-flow above card) → full-width results card → service card
- Verified via 4 screenshot iterations; sections below hero untouched
- Orb.jsx no longer used by Hero (kept unused)
- FIXED: Google Fonts @import had been pushed below @keyframes (invalid CSS) — moved back to line 1; added Caveat font (.font-script) for "Real Brands. Real Growth." script text

## Architecture
- Frontend-only React SPA (no backend endpoints used; buttons are mailto/anchor based)
- Stack: React 19, Tailwind CSS v3, framer-motion 11, lenis (smooth momentum scrolling), lucide-react icons
- Fonts: Syne (display), Plus Jakarta Sans (body), JetBrains Mono (eyebrow labels)
- Components in `/app/frontend/src/components/landing/`: Nav, Hero, Orb (parallax glow orb card), Marquee, Services, Stats (count-up), Testimonials (carousel), Footer, motion-primitives (MaskedLine, FadeUp)

## User Personas
- Jaipur/Rajasthan business owners & D2C founders evaluating a growth agency
- CMOs comparing agencies on proof (ROAS, revenue) and craft

## Core Requirements (static)
- Match reference art direction: alabaster editorial canvas, huge Syne display type, central dark card with glowing orb, right info rail, pill CTAs, trusted-by strip
- Mobile-first responsive
- Premium motion: masked line-by-line hero reveal, scroll reveals, marquee, count-up stats, lenis smooth scroll, mouse parallax on orb

## Implemented (2026-07)
- Kinetic hero with masked line reveal, mouse-parallax glowing CSS orb with orbiting rings, floating 4.8x ROAS chip, expert avatars + 4.9/5 badge, "More than 5k users" cluster
- Sticky nav with scroll blur, mobile hamburger overlay menu, Schedule a Demo pill
- Infinite client wordmark marquee (pause on hover, edge fade mask)
- Numbered manifesto services section (01–04) with hover accent
- Dark stats section with animated count-up (₹45 Cr+, 4.8x, 98.2%, 140+)
- Testimonial carousel (3 stories) with prev/next + counter
- Dark footer CTA with masked headline, mailto demo button, socials
- Visual edit applied: removed "EST. Jaipur" tag from orb card

## Verification
- Screenshot-verified desktop: hero, marquee, services, stats, testimonials, footer
- Click-tested: testimonial next button, hero Get started smooth-scroll
- Mobile menu/stacking: code-level mobile-first classes (screenshot tool locked to 1920px viewport, could not capture true mobile render)

## Backlog
- P1: Real brand logos in marquee; real client photos; OG meta tags + favicon + page title
- P2: Case studies section, blog/insights, WhatsApp CTA, real phone/email
- P2: Contact/enquiry form with backend if user changes mind

## Next Tasks
- Update public/index.html title/meta
- Add case-study chapter (05) with imagery
