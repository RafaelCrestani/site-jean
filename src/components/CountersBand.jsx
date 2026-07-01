import './CountersBand.css';

const STATS = [
  { num: '2026', target: 2026, label: ['Fundada para', 'fazer diferente'] },
  { num: '100%', target: 100, suffix: '%', label: ['Projetos', 'personalizados'] },
  { num: '04', target: 4, pad: 2, label: ['Entregas por projeto', 'plantas · cortes · vistas · 3D'] },
  { num: '1:1', gold: true, label: ['Atendimento direto', 'com o arquiteto'] },
];

export default function CountersBand() {
  return (
    <section className="counters reveal" data-reveal>
      <div className="counters__grid container">
        {STATS.map((s, i) => (
          <div className="counters__cell" key={i}>
            <div className={`counters__num ${s.gold ? 'counters__num--gold' : ''}`}>
              {s.target != null ? (
                <span
                  data-counter
                  data-target={s.target}
                  {...(s.pad ? { 'data-pad': s.pad } : {})}
                  {...(s.suffix ? { 'data-suffix': s.suffix } : {})}
                >
                  {s.num}
                </span>
              ) : (
                <span>{s.num}</span>
              )}
            </div>
            <div className="counters__label">
              {s.label[0]}
              <br />
              {s.label[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
