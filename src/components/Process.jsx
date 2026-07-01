import Eyebrow from './Eyebrow';
import './Process.css';

const STEPS = [
  { n: '01', title: 'Briefing', desc: 'A gente conversa. Entendo o seu sonho, o terreno e o orçamento.', delay: 0 },
  { n: '02', title: 'Projeto', desc: 'Transformo as suas ideias em plantas, cortes e vistas técnicas.', delay: 90 },
  { n: '03', title: '3D', desc: 'Você visualiza cada ambiente em 3D e ajustamos o que precisar.', delay: 180 },
  { n: '04', title: 'Obra', desc: 'Você recebe o projeto completo, pronto pra construir.', delay: 270, feat: true },
];

export default function Process() {
  return (
    <section id="processo" className="section">
      <div className="container">
        <div className="proc__head reveal" data-reveal>
          <div>
            <Eyebrow className="proc__eyebrow">Como funciona</Eyebrow>
            <h2 className="section-title">Do papel à obra, em quatro passos.</h2>
          </div>
        </div>

        <div className="proc__grid">
          {STEPS.map((s) => (
            <div
              className={`proc__card reveal ${s.feat ? 'proc__card--feat' : ''}`}
              data-reveal
              data-delay={s.delay}
              key={s.n}
            >
              <div className="proc__card-top">
                <span className="proc__num">{s.n}</span>
                <span className={`proc__dot ${s.feat ? 'proc__dot--feat' : ''}`} />
              </div>
              <h3 className="proc__title">{s.title}</h3>
              <p className="proc__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
