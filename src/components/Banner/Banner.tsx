import "./Banner.scss";
import banner from "../../assets/banner.webp";


const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${banner})`, }} >
            <div className="banner__content">
                <div>
                    <h1 className="banner__title">Venha conhecer nossas  <span>promoções</span></h1>
                    <p className="banner__subtitle"><span>50% Off</span> nos produtos </p>
                </div>
                <a href="#" className="btn--primary" title="Confira nossos produtos">Ver produto</a>
            </div>
            <div className="banner__overlay"></div>
        </div>
    );
};

export default Banner;
