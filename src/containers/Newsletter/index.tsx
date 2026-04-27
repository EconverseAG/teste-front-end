import './style.scss'

function Newsletter(){
    return(
        <section className='NewsletterContainer'>
            <div className='DetailsNewsletter'>
                <h2>Inscreva-se na nossa newsletter</h2>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br /> da Econverse.</p>
            </div>

            <div  className='SendNewsletter'>
                <div>
                    <input type="text" placeholder='Digite seu nome' />
                    <input type="email" placeholder='Digite seu e-mail' />
                    <button type='submit'>Inscrever</button>
                </div>
                <input type="checkbox" />
                <label >Aceito os termos e condições</label>
            </div>
    </section>
    )
}

export default Newsletter