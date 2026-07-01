import Eyebrow from './Eyebrow';
import ImageSlot from './ImageSlot';
import { CheckIcon } from './icons';
import jeanRetrato from '../assets/jean-maciel-retrato.webp';
import './About.css';

const FEATURES = [
  { title: 'Atendimento próximo', desc: 'Você fala direto comigo, sempre.' },
  { title: 'Qualidade no detalhe', desc: 'Cada desenho, pensado com cuidado.' },
  { title: 'Confiança', desc: 'Uma relação transparente, dos dois lados.' },
  { title: 'Comprometimento', desc: 'Do começo à entrega das chaves.' },
];

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about__grid">
          <div className="about__figure reveal" data-reveal>
            <div className="about__parallax" data-parallax="0.04">
              <ImageSlot
                id="sobre-retrato"
                src={jeanRetrato}
                alt="Jean Maciel, arquiteto e urbanista"
                placeholder="Foto do arquiteto"
              />
            </div>
          </div>

          <div>
            <Eyebrow className="reveal about__eyebrow" data-reveal>
              O arquiteto
            </Eyebrow>
            <h2 className="about__name reveal" data-reveal data-delay="60">
              Jean Maciel
            </h2>
            <p className="about__role reveal" data-reveal data-delay="90">
              Arquiteto e Urbanista
            </p>
            <p className="about__text reveal" data-reveal data-delay="130">
              Fundei a JM Arquitetura com uma convicção simples: um bom projeto começa pela
              confiança. Trabalho lado a lado com cada cliente — ouço a sua rotina, entendo o seu
              terreno e o seu orçamento, e transformo tudo isso em um projeto sob medida.
            </p>
            <p className="about__text reveal" data-reveal data-delay="160">
              Do primeiro traço à entrega final, o compromisso é sempre o mesmo: qualidade em cada
              desenho e transparência do começo ao fim.
            </p>

            <div className="about__features reveal" data-reveal data-delay="190">
              {FEATURES.map((f) => (
                <div className="about__feature" key={f.title}>
                  <CheckIcon size={17} className="about__check" />
                  <div>
                    <div className="about__feature-title">{f.title}</div>
                    <div className="about__feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
