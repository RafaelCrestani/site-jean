import { useEffect, useState } from 'react';
import { links } from '../data/site';
import { useTheme } from '../hooks/useTheme';
import { WhatsAppIcon, SunIcon, MoonIcon, MenuIcon } from './icons';
import MobileMenu from './MobileMenu';
import monogramLight from '../assets/jm-monogram-light.png';
import monogramDark from '../assets/jm-monogram.png';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#projetos', label: 'Projetos' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || window.pageYOffset || 0) > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoSrc = isDark ? monogramLight : monogramDark;

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav__bar">
        <a href="#topo" className="nav__brand" aria-label="JM — Jean Maciel, início">
          <img className="nav__logo" src={logoSrc} alt="JM — Jean Maciel" />
          <span className="nav__word">
            <span className="nav__name">JEAN MACIEL</span>
            <span className="nav__tag">Arquitetura &amp; Urbanismo</span>
          </span>
        </a>

        <div className="nav__right">
          <div className="nav__links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav__link">
                {l.label}
              </a>
            ))}
            <a
              className="nav__cta"
              href={links.waLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              Falar no WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="nav__icon-btn"
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
            title="Alternar tema"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="nav__icon-btn nav__toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      <MobileMenu
        open={menuOpen}
        navLinks={NAV_LINKS}
        waLink={links.waLink}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
