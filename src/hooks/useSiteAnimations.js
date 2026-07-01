import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, CustomEase);

// The prototype's house ease: cubic-bezier(0.16, 1, 0.3, 1).
CustomEase.create('jmHouse', 'M0,0 C0.16,1 0.3,1 1,1');

/**
 * Wires up all scroll-driven motion GSAP-style, replacing the prototype's
 * manual scroll listener:
 *   • [data-reveal]   — fade + rise in when scrolled into view (staggered by data-delay)
 *   • [data-parallax] — subtle scrubbed vertical parallax on images
 *   • [data-counter]  — count-up numbers when the stats band enters view
 *
 * `scopeRef` is the root element the selectors are queried within.
 */
export function useSiteAnimations(scopeRef) {
  useLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root) return undefined;

    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // ----- Reveal on scroll ------------------------------------------------
      const revealEls = gsap.utils.toArray('[data-reveal]');
      revealEls.forEach((el) => {
        const delay = (parseFloat(el.getAttribute('data-delay')) || 0) / 1000;
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'jmHouse',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        });
      });

      // ----- Parallax on images ---------------------------------------------
      // Each [data-parallax] layer is inset by -8%/-9% inside its frame, giving
      // ~7% of overflow per side. Move in yPercent (relative to the layer's own
      // height) so the crop stays covered at any responsive height.
      if (!reduce) {
        gsap.utils.toArray('[data-parallax]').forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0.05;
          const range = Math.min(6.5, speed * 130); // ~6.5% @0.05, ~5.2% @0.04
          gsap.fromTo(
            el,
            { yPercent: -range },
            {
              yPercent: range,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        });
      }

      // ----- Count-up counters ----------------------------------------------
      gsap.utils.toArray('[data-counter]').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-target')) || 0;
        const pad = parseInt(el.getAttribute('data-pad') || '0', 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const render = (v) => {
          let s = String(Math.round(v));
          if (pad) s = s.padStart(pad, '0');
          el.textContent = s + suffix;
        };

        if (reduce) {
          render(target);
          return;
        }

        const obj = { v: 0 };
        render(0);
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              v: target,
              duration: 1.5,
              ease: 'power3.out',
              onUpdate: () => render(obj.v),
            });
          },
        });
      });
    }, root);

    // Fonts / images can shift layout after first paint — recompute positions.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh).catch(() => {});
    }
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, [scopeRef]);
}
