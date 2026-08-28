import { HeroSection } from "./styles";

const Hero = () => (
    <HeroSection>
        <div className="container">
            <div className="content">
                <h1>Venha conhecer nossas promoções</h1>
                <p><span>50% Off</span> nos produtos</p>
                <button className="cta-button">Ver produto</button>
            </div>
        </div>
    </HeroSection>
);

export default Hero;
