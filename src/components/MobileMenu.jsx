import './MobileMenu.css';

export default function MobileMenu({ open, navLinks, waLink, onClose }) {
  return (
    <div className={`mobilemenu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      {navLinks.map((l) => (
        <a key={l.href} href={l.href} className="mobilemenu__link" onClick={onClose}>
          {l.label}
        </a>
      ))}
      <a
        className="mobilemenu__cta"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}
