import './HeroBanner.scss';
import blackFridayBanner from '@/assets/images/bannerBlackFriday.webp';
import HeroContent from './HeroContent';

function HeroBanner() {
  return (
    <section className="hero-banner" aria-label="Ofertas de Black Friday">
      <img
        src={blackFridayBanner}
        alt="Ofertas especiais de Black Friday"
        fetchPriority="high"
      />
      <HeroContent />
    </section>
  );
}

export default HeroBanner;
