# PRD — nymarketinggroups Landing Page

## Original Problem Statement
Build a landing page based on a reference image (Mark.Media style) for a digital marketing agency — the best digital marketing agency in Jaipur. Mobile-first responsiveness, good animations. User choices: agency name "nymarketinggroups"; full landing page (hero + services + stats + testimonials + contact/footer); buttons only, no contact form.

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
