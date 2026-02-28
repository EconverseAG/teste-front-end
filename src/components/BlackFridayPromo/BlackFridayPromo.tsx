import "./BlackFridayPromo.scss";

interface BlackFridayPromoProps {
    imageSrc: string;
    altText?: string;
}

export default function BlackFridayPromo({
    imageSrc,
    altText = "Promoção Black Friday",
}: BlackFridayPromoProps) {

    return (
        <>
            <section className="containerBlackFridayPromo">
                <img src={imageSrc} alt={altText} />
                <div className="containerOverlay">
                    <h2>Venha conhecer nossas <br /> promoções</h2>
                    <p><strong>50% Off</strong> nos produtos</p>
                    <button type="button">Ver produto</button>
                </div>
            </section>
        </>
    );
}