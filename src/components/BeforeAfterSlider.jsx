import { useCallback, useEffect, useRef, useState } from 'react';
import './BeforeAfterSlider.css';

/**
 * Before/after comparison slider.
 *
 * `beforeSrc` is the layer shown on the LEFT by default (here: the technical
 * drawing); dragging the divider left progressively reveals `afterSrc` (the 3D
 * render) underneath. Works with mouse, touch and keyboard (arrow keys on the
 * focused handle). Both images must share the same aspect ratio / framing so
 * the two halves line up across the divider.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = '',
  afterAlt = '',
  beforeLabel,
  afterLabel,
  start = 50,
}) {
  const rootRef = useRef(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(start);

  const setFromClientX = useCallback((clientX) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  // Track pointer globally while dragging so the divider keeps following even
  // if the cursor leaves the image mid-drag.
  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, [setFromClientX]);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    setFromClientX(e.clientX);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPos((p) => Math.max(0, p - 2));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPos((p) => Math.min(100, p + 2));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <div
      ref={rootRef}
      className="ba"
      onPointerDown={onPointerDown}
      role="group"
      aria-label="Comparação antes e depois: desenho técnico e projeto 3D"
    >
      {/* Base layer: the 3D render, revealed as the divider moves left. */}
      <img className="ba__img" src={afterSrc} alt={afterAlt} draggable="false" />

      {/* Top layer: the technical drawing, clipped from the left to the divider. */}
      <img
        className="ba__img ba__img--top"
        src={beforeSrc}
        alt={beforeAlt}
        draggable="false"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {beforeLabel && <span className="ba__tag ba__tag--left">{beforeLabel}</span>}
      {afterLabel && <span className="ba__tag ba__tag--right">{afterLabel}</span>}

      {/* Divider line + draggable handle. */}
      <div className="ba__divider" style={{ left: `${pos}%` }} aria-hidden="true" />
      <button
        type="button"
        className="ba__handle"
        style={{ left: `${pos}%` }}
        onKeyDown={onKeyDown}
        role="slider"
        aria-label="Arraste para comparar desenho técnico e 3D"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
        </svg>
      </button>
    </div>
  );
}
