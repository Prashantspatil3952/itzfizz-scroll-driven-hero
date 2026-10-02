const { createRoot } = ReactDOM;
const e = React.createElement;
const { useEffect, useRef } = React;

const metrics = [
  ['58%', 'Increase in pick-up point use'],
  ['23%', 'Decrease in customer phone calls'],
  ['27%', 'Increase in first-attempt delivery'],
  ['40%', 'Decrease in support friction'],
];

function CarArtwork() {
  return e(
    'svg',
    { className: 'car-svg', viewBox: '0 0 860 360', 'aria-hidden': true },
    e('defs', null,
      e('linearGradient', { id: 'carBody', x1: '0', y1: '0', x2: '1', y2: '1' },
        e('stop', { offset: '0%', stopColor: '#d4ff57' }),
        e('stop', { offset: '55%', stopColor: '#baf23b' }),
        e('stop', { offset: '100%', stopColor: '#90cf22' })
      ),
      e('linearGradient', { id: 'glass', x1: '0', y1: '0', x2: '1', y2: '1' },
        e('stop', { offset: '0%', stopColor: '#364044' }),
        e('stop', { offset: '100%', stopColor: '#101416' })
      )
    ),
    e('ellipse', { cx: '425', cy: '308', rx: '300', ry: '26', fill: 'rgba(11,13,15,.20)' }),
    e('path', { d: 'M128 246 C150 188 205 146 300 138 L472 125 C525 122 570 138 621 181 L710 205 C753 216 776 236 785 254 L786 273 L113 273 C110 261 115 252 128 246 Z', fill: 'url(#carBody)' }),
    e('path', { d: 'M293 145 L471 134 C510 132 548 147 583 176 L612 198 L265 196 C271 176 281 157 293 145 Z', fill: 'url(#glass)' }),
    e('path', { d: 'M470 135 L583 176 L612 198 L470 196 Z', fill: '#1b2427', opacity: '.94' }),
    e('path', { d: 'M258 198 L611 198', stroke: '#7ca914', strokeWidth: '6', strokeLinecap: 'round' }),
    e('path', { d: 'M141 241 C180 219 230 207 260 205 L644 205 C687 211 731 225 764 244', fill: 'none', stroke: '#efffd0', strokeWidth: '9', strokeLinecap: 'round', opacity: '.58' }),
    e('path', { d: 'M114 255 L790 255', stroke: '#1a2115', strokeWidth: '5', strokeLinecap: 'round', opacity: '.32' }),
    e('rect', { x: '700', y: '224', width: '51', height: '22', rx: '9', fill: '#e9ffd3', opacity: '.82' }),
    e('rect', { x: '155', y: '223', width: '32', height: '18', rx: '7', fill: '#f5f5ef', opacity: '.75' }),
    e('g', { className: 'wheel wheel-left' },
      e('circle', { cx: '248', cy: '276', r: '54', fill: '#151819' }),
      e('circle', { cx: '248', cy: '276', r: '27', fill: '#d9ddd6' }),
      e('circle', { cx: '248', cy: '276', r: '12', fill: '#151819' })
    ),
    e('g', { className: 'wheel wheel-right' },
      e('circle', { cx: '661', cy: '276', r: '54', fill: '#151819' }),
      e('circle', { cx: '661', cy: '276', r: '27', fill: '#d9ddd6' }),
      e('circle', { cx: '661', cy: '276', r: '12', fill: '#151819' })
    ),
    e('path', { d: 'M182 198 L240 158', stroke: '#f8ffea', strokeWidth: '5', opacity: '.55', strokeLinecap: 'round' }),
    e('circle', { cx: '775', cy: '249', r: '5', fill: '#fff8d6' }),
    e('circle', { cx: '122', cy: '249', r: '5', fill: '#fff8d6' }),
    e('rect', { x: '363', y: '230', width: '128', height: '20', rx: '10', fill: '#85b51e', opacity: '.52' }),
    e('text', { x: '390', y: '244', fill: '#f6ffd8', fontSize: '12', fontWeight: '700', letterSpacing: '3' }, 'ITZFIZZ')
  );
}

function App() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const metricsRef = useRef([]);
  const carRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const letters = headlineRef.current.querySelectorAll('.headline-letter');
      const metricEls = metricsRef.current.filter(Boolean);

      gsap.set(letters, { autoAlpha: 0, y: 28 });
      gsap.set(metricEls, { autoAlpha: 0, y: 20 });

      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .to(letters, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.045 })
        .to(metricEls, { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.12 }, '-=0.28');

      if (reducedMotion) {
        intro.progress(1);
        return;
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=1100',
          scrub: 1.15,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
        .to(carRef.current, { x: '24vw', y: '-5vh', rotate: -3.5, scale: 0.84, ease: 'none' }, 0)
        .to(glowRef.current, { scaleX: 1, x: '26vw', ease: 'none' }, 0)
        .to('.sun', { x: '-8vw', y: '-6vh', scale: 0.85, ease: 'none' }, 0)
        .to('.grid-floor', { y: '7vh', scale: 1.16, ease: 'none' }, 0)
        .to('.track', { y: '8vh', ease: 'none' }, 0)
        .to('.hero-copy', { y: '-7vh', ease: 'none' }, 0)
        .to('.hero-scroll-copy', { autoAlpha: 0, y: 24, ease: 'none' }, 0.36)
        .to('.wheel', { rotation: 650, ease: 'none' }, 0)
        .to(letters, { color: '#6f861f', ease: 'none', stagger: { each: 0.035, from: 'start' } }, 0.15);

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener('resize', refresh, { passive: true });
      return () => window.removeEventListener('resize', refresh);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = Array.from('WELCOME ITZFIZZ');

  return e('main', { className: 'font-sans' },
    e('section', { className: 'hero-shell', ref: heroRef },
      e('div', { className: 'noise', 'aria-hidden': true }),
      e('div', { className: 'hero-copy' },
        e('div', { className: 'eyebrow' }, 'Scroll-driven delivery experience'),
        e('div', { className: 'headline-wrap' },
          e('h1', { className: 'headline', ref: headlineRef, 'aria-label': 'WELCOME ITZFIZZ' },
            headline.map((char, index) => char === ' '
              ? e('span', { key: `space-${index}`, className: 'headline-gap', 'aria-hidden': true }, '\u00A0')
              : e('span', { key: `letter-${index}`, className: 'headline-letter' }, char)
            )
          ),
          e('div', { className: 'metric-row' },
            metrics.map(([value, label], index) => e('article', {
              className: 'metric',
              key: value,
              ref: (el) => { metricsRef.current[index] = el; },
            },
              e('span', { className: 'metric-value' }, value),
              e('span', { className: 'metric-label' }, label)
            ))
          )
        )
      ),
      e('div', { className: 'hero-stage', 'aria-hidden': true },
        e('div', { className: 'sun' }),
        e('div', { className: 'grid-floor' }),
        e('div', { className: 'track' }),
        e('div', { className: 'road-glow', ref: glowRef }),
        e('div', { className: 'car-wrap', ref: carRef }, e(CarArtwork))
      ),
      e('div', { className: 'hero-scroll-copy' },
        e('div', { className: 'scroll-note' }, 'Scroll to drive the scene'),
        e('div', { className: 'scroll-line' })
      )
    ),
    e('section', { className: 'spacer' },
      e('div', { className: 'spacer-inner' },
        e('div', { className: 'spacer-kicker' }, 'Motion principle'),
        e('h2', null, 'Scroll progress controls the movement.'),
        e('p', null, 'The main visual is scrubbed directly by scroll position using GSAP ScrollTrigger. The pinned hero uses transform-based motion for the car, wheels, road and background, avoiding a heavy manual scroll loop.')
      )
    )
  );
}

createRoot(document.getElementById('root')).render(e(App));
