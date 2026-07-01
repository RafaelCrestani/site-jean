/**
 * Small uppercase gold label preceded by a dash — used to head every section.
 * `dash` sets the leading rule width (prototype uses 26–30px).
 * `double` adds a trailing rule for the centered contact eyebrow.
 * Extra props (e.g. data-reveal, data-delay) are forwarded to the root.
 */
export default function Eyebrow({ children, dash = 28, double = false, className = '', ...rest }) {
  return (
    <div className={`eyebrow ${className}`} {...rest}>
      <span className="eyebrow__dash" style={{ width: dash }} />
      <span className="eyebrow__text">{children}</span>
      {double && <span className="eyebrow__dash" style={{ width: dash }} />}
    </div>
  );
}
