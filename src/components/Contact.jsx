import { links } from '../data/site';
import Eyebrow from './Eyebrow';
import { WhatsAppIcon, InstagramIcon } from './icons';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__inner">
        <Eyebrow className="contact__eyebrow reveal" dash={26} double data-reveal>
          Vamos conversar
        </Eyebrow>

        <h2 className="contact__title reveal" data-reveal data-delay="70">
          Vamos tirar o seu projeto do <span className="contact__accent">papel</span>?
        </h2>

        <p className="contact__lead reveal" data-reveal data-delay="120">
          Me chama no WhatsApp e conta a sua ideia. A primeira conversa é sem compromisso — e é onde
          tudo começa.
        </p>

        <div className="contact__actions reveal" data-reveal data-delay="170">
          <a
            className="btn-wa btn-wa--lg"
            href={links.waLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={19} />
            Falar no WhatsApp
          </a>
          <a
            className="link-arrow"
            href={links.igLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={17} />
            {links.igHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
