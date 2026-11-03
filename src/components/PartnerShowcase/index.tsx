import PartnerCardContent from './PartnerCardContent';
import './PartnerShowcase.scss';

type Partner = {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  href: string;
};

type PartnerShowcaseProps = {
  partners: Partner[];
};

function PartnerShowcase({ partners }: Readonly<PartnerShowcaseProps>) {
  return (
    <section className="partner-showcase">
      <ul className="partner-showcase__list">
        {partners.map((partner) => (
          <li className="partner-showcase__item" key={partner.id}>
            <img src={partner.imageUrl} alt={partner.alt} loading="lazy" />

            <PartnerCardContent
              title={partner.title}
              description={partner.description}
              href={partner.href}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PartnerShowcase;
