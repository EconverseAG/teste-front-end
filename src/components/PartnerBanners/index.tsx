import bannerPartner from "../../assets/BannerPartner.svg";
import "./style.scss";

interface PartnerCardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const PartnerCard = ({
  title,
  description,
  buttonText,
  image,
}: PartnerCardProps) => {
  const cardStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%), url(${image})`,
  };

  return (
    <div className="partner-banners__card" style={cardStyle}>
      <div className="partner-banners__content">
        <h2 className="partner-banners__title">{title}</h2>
        <p className="partner-banners_text">{description}</p>
        <button className="partner-banners__button">{buttonText}</button>
      </div>
    </div>
  );
};

export const PartnerBanners = () => {
  const partners = [
    {
      id: 1,
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
      image: bannerPartner,
    },
    {
      id: 2,
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
      image: bannerPartner,
    },
  ];

  return (
    <section className="partner-banners">
      <div className="partner-banners__container">
        {partners.map((partner) => (
          <PartnerCard
            key={partner.id}
            title={partner.title}
            description={partner.description}
            buttonText={partner.buttonText}
            image={partner.image}
          />
        ))}
      </div>
    </section>
  );
};
