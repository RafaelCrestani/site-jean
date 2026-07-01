import Eyebrow from './Eyebrow';
import './Audience.css';

const AUDIENCE = [
  { n: '01', label: 'Residencial', delay: 0 },
  { n: '02', label: 'Comercial', delay: 60 },
  { n: '03', label: 'Construtoras', delay: 120 },
  { n: '04', label: 'Alto padrão', delay: 180 },
];

export default function Audience() {
  return (
    <section className="aud">
      <div className="container">
        <div className="aud__head reveal" data-reveal>
          <Eyebrow className="aud__eyebrow">Pra quem eu projeto</Eyebrow>
          <h2 className="aud__title">
            De casas de família a empreendimentos de alto padrão — cada projeto recebe o mesmo
            cuidado.
          </h2>
        </div>

        <div className="aud__grid">
          {AUDIENCE.map((a) => (
            <div className="aud__item reveal" data-reveal data-delay={a.delay} key={a.n}>
              <span className="aud__num">{a.n}</span>
              <span className="aud__label">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
