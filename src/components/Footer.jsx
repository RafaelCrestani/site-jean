import { links } from '../data/site';
import { useTheme } from '../hooks/useTheme';
import { WhatsAppGlyph, InstagramIcon, MailIcon, MapPinIcon } from './icons';
import logoLight from '../assets/jm-logo-light.png';
import logoDark from '../assets/jm-logo.png';
import './Footer.css';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Processo' },
  { href: '#projetos', label: 'Projetos' },
];

export default function Footer() {
  const { isDark } = useTheme();
  const logoSrc = isDark ? logoLight : logoDark;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img
              className="footer__logo"
              src={logoSrc}
              alt="JM Arquitetura e Urbanismo — Jean Maciel"
            />
            <p className="footer__blurb">
              Arquitetura e urbanismo com atendimento próximo, do primeiro traço à entrega das
              chaves.
            </p>
          </div>

          <div>
            <h4 className="footer__heading">Navegação</h4>
            <div className="footer__col">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="footer__link">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Contato</h4>
            <div className="footer__col">
              <a
                className="footer__link footer__contact"
                href={links.waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppGlyph size={15} className="footer__icon" />
                <span>{links.phoneLabel}</span>
              </a>
              <a
                className="footer__link footer__contact"
                href={links.igLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={15} strokeWidth={1.7} className="footer__icon" />
                <span>{links.igHandle}</span>
              </a>
              <a className="footer__link footer__contact" href={links.mailLink}>
                <MailIcon size={15} className="footer__icon" />
                <span>{links.email}</span>
              </a>
              <div className="footer__contact footer__contact--static">
                <MapPinIcon size={15} className="footer__icon" />
                <span>{links.city}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 JM Arquitetura e Urbanismo · Jean Maciel</span>
          <span>Arquiteto e Urbanista</span>
        </div>
      </div>
    </footer>
  );
}
