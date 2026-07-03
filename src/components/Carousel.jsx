import { useCallback, useRef, useState } from 'react';
import './Carousel.css';

/**
 * Lightweight image carousel — one slide at a time, `object-fit: contain` so
 * mixed aspect ratios show in full. Navigable by arrows, dots, keyboard
 * (←/→) and horizontal swipe. `touch-action: pan-y` keeps vertical page
 * scrolling working; only horizontal swipes navigate.
 *
 * slides: [{ src, alt, caption }]
 */
export default function Carousel({ slides, ariaLabel = 'Galeria de imagens' }) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const startRef = useRef(null);

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((p) => (p + 1) % count), [count]);
  const prev = useCallback(() => setIndex((p) => (p - 1 + count) % count), [count]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  const onPointerDown = (e) => {
    startRef.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e) => {
    const s = startRef.current;
    startRef.current = null;
    if (!s) return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    // Only a clearly-horizontal swipe navigates (vertical is left to scroll).
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel__viewport"
        role="group"
        aria-roledescription="carrossel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div className="carousel__slide" key={s.src} aria-hidden={i !== index}>
              <img className="carousel__img" src={s.src} alt={s.alt} draggable="false" />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel__nav carousel__nav--prev"
          onClick={prev}
          aria-label="Imagem anterior"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="carousel__nav carousel__nav--next"
          onClick={next}
          aria-label="Próxima imagem"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="carousel__bar">
        <span className="carousel__caption">{slides[index].caption}</span>
        <div className="carousel__dots" role="tablist" aria-label="Selecionar imagem">
          {slides.map((s, i) => (
            <button
              type="button"
              key={s.src}
              className={`carousel__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Ir para imagem ${i + 1} de ${count}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
