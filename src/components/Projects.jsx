import Eyebrow from './Eyebrow';
import Carousel from './Carousel';
import corte1 from '../assets/proj-corte-1.webp';
import corte2 from '../assets/proj-corte-2.webp';
import corte3 from '../assets/proj-corte-3.webp';
import corte4 from '../assets/proj-corte-4.webp';
import corte5 from '../assets/proj-corte-5.webp';
import corte6 from '../assets/proj-corte-6.webp';
import './Projects.css';

const CORTES = [
  { src: corte1, caption: 'Atendimento e escritório' },
  { src: corte2, caption: 'Sala de reunião e copa' },
  { src: corte3, caption: 'Escritórios e estrutura do telhado' },
  { src: corte4, caption: 'Cozinha e estrutura em madeira' },
  { src: corte5, caption: 'Escritório e banheiro acessível' },
  { src: corte6, caption: 'Cozinha e área de estoque' },
].map((c) => ({ ...c, alt: `Corte do projeto comercial — ${c.caption}` }));

export default function Projects() {
  return (
    <section id="projetos" className="section section--band">
      <div className="container">
        <div className="proj__head reveal" data-reveal>
          <div className="proj__head-main">
            <Eyebrow className="proj__eyebrow">Projeto em destaque</Eyebrow>
            <h2 className="section-title">Um projeto comercial, por dentro.</h2>
          </div>
          <p className="proj__note">
            Do corte ao acabamento — cada ambiente resolvido com estrutura, circulação e detalhe
            pensados de perto.
          </p>
        </div>

        <div className="proj__showcase reveal" data-reveal data-delay="80">
          <Carousel slides={CORTES} ariaLabel="Cortes do projeto comercial" />
          <div className="proj__meta">
            <span className="proj__meta-title">Projeto comercial</span>
            <span className="proj__meta-year">2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
