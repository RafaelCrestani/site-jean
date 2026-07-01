import Eyebrow from './Eyebrow';
import ImageSlot from './ImageSlot';
import './Projects.css';

const SMALL_PROJECTS = [
  { id: 'proj-2', title: 'Projeto comercial', tag: 'Loja', delay: 0 },
  { id: 'proj-3', title: 'Casa térrea', tag: 'Residencial', delay: 80 },
  { id: 'proj-4', title: 'Interiores', tag: '3D', delay: 160 },
];

export default function Projects() {
  return (
    <section id="projetos" className="section section--band">
      <div className="container">
        <div className="proj__head reveal" data-reveal>
          <div className="proj__head-main">
            <Eyebrow className="proj__eyebrow">Projetos</Eyebrow>
            <h2 className="section-title">Alguns traços do meu trabalho.</h2>
          </div>
          <p className="proj__note">Portfólio em construção — novos projetos chegando em breve.</p>
        </div>

        <div className="proj__list">
          {/* Featured project */}
          <figure className="proj__feature reveal" data-reveal>
            <div className="proj__feature-media">
              <ImageSlot
                id="proj-1"
                imgClassName="proj__img"
                placeholder="Projeto em destaque"
              />
              <span className="proj__badge">Destaque</span>
            </div>
            <figcaption className="proj__feature-cap">
              <div className="proj__feature-info">
                <span className="proj__feature-title">Residência unifamiliar</span>
                <span className="proj__feature-sub">
                  Projeto completo · plantas, cortes, vistas e 3D
                </span>
              </div>
              <span className="proj__year">2026</span>
            </figcaption>
          </figure>

          {/* Secondary grid */}
          <div className="proj__grid">
            {SMALL_PROJECTS.map((p) => (
              <figure className="proj__card reveal" data-reveal data-delay={p.delay} key={p.id}>
                <div className="proj__media">
                  <ImageSlot id={p.id} imgClassName="proj__img" placeholder="Render do projeto" />
                </div>
                <figcaption className="proj__card-cap">
                  <span className="proj__card-title">{p.title}</span>
                  <span className="proj__card-tag">{p.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
