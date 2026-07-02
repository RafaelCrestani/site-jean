import { links } from '../data/site';
import Eyebrow from './Eyebrow';
import BeforeAfterSlider from './BeforeAfterSlider';
import { WhatsAppIcon, ArrowUpRight } from './icons';
import heroTecnico from '../assets/hero-tecnico.webp';
import heroRender from '../assets/hero-render.webp';
import './Hero.css';

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container">
        <div className="hero__top reveal" data-reveal>
          <Eyebrow dash={30}>Arquitetura &amp; Urbanismo</Eyebrow>
          <div className="hero__meta">
            <span>Residencial</span>
            <span className="hero__meta-dot" />
            <span>Comercial</span>
          </div>
        </div>

        <div className="hero__grid">
          <div className="hero__col">
            <h1 className="hero__title reveal" data-reveal data-delay="80">
              Projetos que nascem do{' '}
              <span className="hero__title-accent">seu jeito de viver</span>.
            </h1>

            <p className="hero__lead reveal" data-reveal data-delay="140">
              Residenciais e comerciais, do briefing ao 3D. Plantas, cortes, vistas e imagens
              realistas — pra você enxergar cada detalhe da obra antes do primeiro tijolo.
            </p>

            <div className="hero__actions reveal" data-reveal data-delay="200">
              <a className="btn-wa" href={links.waLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} />
                Falar no WhatsApp
              </a>
              <a className="link-arrow" href="#projetos">
                Ver projetos
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="hero__note reveal" data-reveal data-delay="240">
              <span className="hero__note-dash" />
              <span className="hero__note-text">Atendimento direto com o arquiteto</span>
            </div>
          </div>

          <div className="hero__figure reveal" data-reveal data-delay="160">
            <BeforeAfterSlider
              beforeSrc={heroTecnico}
              afterSrc={heroRender}
              beforeAlt="Desenho técnico da fachada do projeto"
              afterAlt="Render 3D realista da fachada do projeto"
              beforeLabel="Técnico"
              afterLabel="3D"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
