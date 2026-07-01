import { links } from '../data/site';
import { WhatsAppIcon } from './icons';
import './WhatsAppFab.css';

export default function WhatsAppFab() {
  return (
    <a
      className="fab"
      href={links.waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={27} />
    </a>
  );
}
