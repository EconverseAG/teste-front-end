import './PartnerBanners.scss';

const partners = [
  { id: 'partner-one', title: 'Parceiros', description: 'Lorem ipsum dolor sit amet, consectetur' },
  { id: 'partner-two', title: 'Parceiros', description: 'Lorem ipsum dolor sit amet, consectetur' },
];

export function PartnerBanners() {
  return (
    <section className="partner-banners container" aria-label="Parceiros">
      <ul className="partner-banners__list">
        {partners.map(({ id, title, description }) => (
          <li key={id} className="partner-banners__card">
            <h2 className="partner-banners__title">{title}</h2>
            <p className="partner-banners__description">{description}</p>
            <a className="partner-banners__button" href="#parceiros">
              Confira
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
