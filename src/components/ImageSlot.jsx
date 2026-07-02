import { useEffect, useRef } from 'react';
import './ImageSlot.css';

/**
 * Image (or video) placeholder that mirrors the prototype's <image-slot>.
 *
 * In the design tool these were user-fillable drop zones; here they render an
 * elegant empty state until a real render is supplied. Pass `src` (e.g. an
 * imported asset or a /public URL) to show the actual media — layout, aspect
 * ratio and hover-zoom all stay identical.
 *
 * Pass `video` to render a silent, looping background video instead of an
 * <img>. It only plays while actually scrolled into view — paused otherwise
 * — rather than autoplaying the instant the page loads.
 *
 * `fit` controls object-fit: 'cover' (default) fills the box and crops the
 * overflow; 'contain' shrinks the media to fit entirely inside the box
 * (letterboxed against the slot's background) with nothing cropped.
 */
export default function ImageSlot({
  src,
  video = false,
  fit = 'cover',
  alt = '',
  placeholder = 'Imagem do projeto',
  imgClassName = '',
  className = '',
}) {
  const videoRef = useRef(null);

  // Muted autoplay is allowed by every browser's autoplay policy, but the
  // element must actually be muted at the moment play() is attempted. React
  // doesn't always reflect the `muted` prop onto the DOM element, so we force
  // it here. Playback itself is gated on visibility: an IntersectionObserver
  // starts it once ~40% of the video is on screen and pauses it again once
  // it scrolls out, instead of the browser's native autoplay-on-load.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video) return undefined;
    el.muted = true;

    let visible = false;
    const tryPlay = () => {
      if (!visible) return;
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) tryPlay();
        else el.pause();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    el.addEventListener('canplay', tryPlay);

    return () => {
      observer.disconnect();
      el.removeEventListener('canplay', tryPlay);
    };
  }, [src, video]);

  const fitClass = fit === 'contain' ? 'image-slot__img--contain' : '';

  return (
    <div className={`image-slot ${className}`}>
      {src ? (
        video ? (
          <video
            ref={videoRef}
            className={`image-slot__img ${fitClass} ${imgClassName}`}
            src={src}
            loop
            muted
            playsInline
            preload="auto"
            aria-label={alt}
          />
        ) : (
          <img
            className={`image-slot__img ${fitClass} ${imgClassName}`}
            src={src}
            alt={alt}
            loading="lazy"
          />
        )
      ) : (
        <div className="image-slot__empty" role="img" aria-label={placeholder}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span className="image-slot__cap">{placeholder}</span>
        </div>
      )}
    </div>
  );
}
