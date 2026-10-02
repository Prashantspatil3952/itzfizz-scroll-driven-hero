#live link https://prashantspatil3952.github.io/itzfizz-scroll-driven-hero/

# ITZFIZZ — Scroll-Driven Hero Section Animation

GitHub Pages-ready assignment submission inspired by the supplied ITZFIZZ car scroll reference.

## Tech stack

- HTML
- CSS
- JavaScript
- React 18 (browser CDN)
- Tailwind CSS (browser CDN)
- GSAP + ScrollTrigger

## Requirements covered

### Hero section
- First-screen / above-the-fold hero layout
- Letter-spaced `W E L C O M E I T Z F I Z Z` headline
- Four percentage metrics with short descriptions

### Initial load
- Headline letters fade in with slight upward movement and stagger
- Metrics reveal one by one with a subtle delay
- Premium easing via GSAP

### Scroll-driven animation
- Hero pins while the user scrolls
- Car position, scale and rotation are controlled by scroll progress
- Wheels, trail, track, background and headline styling respond to the same scrubbed timeline
- `scrub: 1.15` provides smooth interpolation rather than time-based autoplay

### Performance
- GSAP ScrollTrigger handles scroll synchronization
- No manual per-scroll animation loop
- Motion is primarily transform/opacity based
- `prefers-reduced-motion` support is included
