import './style.scss'
function Banner(){
    return (
        <section className="banner">
            <div className='banner-content'>
                <p>
                    Venha conhecer nossas <br /> promoções
                </p>
                <p>
                    <span>50% Off</span>&nbsp; nos produtos
                </p>
                <div className='banner-button'>
                    <button>Ver produto</button>
                </div>
            </div>
        </section>
    )
}
export default Banner;