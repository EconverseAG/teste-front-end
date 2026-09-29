import type { CSSProperties } from 'react';
import { PARTNERS } from '../../data/content';
import './PartnersSection.scss';

type PartnerStyle = CSSProperties & { '--partner-image': string };

export default function PartnersSection({ gap = false }: { gap?: boolean }) {
  return (
    <section
      className={`container partners-section${gap ? ' partners-section--gap' : ''}`}
      aria-label="Parceiros"
    >
      {PARTNERS.map((parceiro, index) => {
        const style: PartnerStyle = { '--partner-image': `url(${parceiro.image})` };

        return (
          <article className="partner-card" key={`${parceiro.title}-${index}`} style={style}>
            <h2>{parceiro.title}</h2>
            <p>{parceiro.description}</p>
            <a className="confira-btn" href="#vitrine-1">
              Confira
            </a>
          </article>
        );
      })}
    </section>
  );
}
