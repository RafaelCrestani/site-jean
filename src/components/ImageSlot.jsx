import './ImageSlot.css';

/**
 * Image placeholder that mirrors the prototype's <image-slot>.
 *
 * In the design tool these were user-fillable drop zones; here they render an
 * elegant empty state until a real render is supplied. Pass `src` (e.g. an
 * imported asset or a /public URL) to show the actual image — layout, aspect
 * ratio and hover-zoom all stay identical.
 */
export default function ImageSlot({
  src,
  alt = '',
  placeholder = 'Imagem do projeto',
  imgClassName = '',
  className = '',
}) {
  return (
    <div className={`image-slot ${className}`}>
      {src ? (
        <img className={`image-slot__img ${imgClassName}`} src={src} alt={alt} loading="lazy" />
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
