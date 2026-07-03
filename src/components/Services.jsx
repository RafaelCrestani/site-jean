import Eyebrow from './Eyebrow';
import ImageSlot from './ImageSlot';
import servVideo from '../assets/servicos-corte-ao-3d.mp4';
import './Services.css';

const SERVICES = [
  {
    n: '01',
    title: 'Plantas',
    desc: 'Cada ambiente pensado no tamanho certo, com fluxo, função e conforto pra sua rotina.',
    delay: 0,
  },
  {
    n: '02',
    title: 'Cortes',
    desc: 'O projeto por dentro: pé-direito, níveis e estrutura, tudo detalhado pra obra.',
    delay: 70,
  },
  {
    n: '03',
    title: 'Vistas & fachadas',
    desc: 'A identidade da sua construção — proporção, materiais e presença na rua.',
    delay: 140,
  },
  {
    n: '04',
    title: 'Projeto 3D',
    desc: 'A sua obra antes de existir. Você vê o resultado final e decide com segurança.',
    delay: 210,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section section--band">
      <div className="container">
        <div className="serv__head reveal" data-reveal>
          <Eyebrow className="serv__eyebrow">O que eu entrego</Eyebrow>
          <h2 className="serv__title">Tudo o que você precisa pra construir com segurança.</h2>
        </div>

        <div className="serv__grid">
          <div className="serv__list">
            {SERVICES.map((s, i) => (
              <div
                className={`serv__row reveal ${i === SERVICES.length - 1 ? 'serv__row--last' : ''}`}
                data-reveal
                data-delay={s.delay}
                key={s.n}
              >
                <span className="serv__num">{s.n}</span>
                <div>
                  <h3 className="serv__name">{s.title}</h3>
                  <p className="serv__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="serv__figure reveal" data-reveal data-delay="120">
            <div className="serv__parallax serv__parallax--flush" data-parallax="0.04">
              <ImageSlot
                id="serv-visual"
                video
                fit="contain"
                src={servVideo}
                alt="Render 3D em crossfade do projeto"
                placeholder="Render ou prancha técnica"
              />
            </div>
            <div className="img-chip">
              <span className="img-chip__dot" />
              Do desenho técnico ao 3D
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
