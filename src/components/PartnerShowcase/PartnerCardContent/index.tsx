import './PartnerCardContent.scss';

type PartnerCardContentProps = {
  title: string;
  description: string;
  href: string;
};

function PartnerCardContent({
  title,
  description,
  href,
}: Readonly<PartnerCardContentProps>) {
  return (
    <article className="partner-card-content">
      <h3 className="partner-card-content__title">{title}</h3>

      <p className="partner-card-content__description">{description}</p>

      <a
        className="partner-card-content__link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Confira ${title}`}
      >
        Confira
      </a>
    </article>
  );
}

export default PartnerCardContent;
