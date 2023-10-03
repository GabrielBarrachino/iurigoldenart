export function Link(){
    return(
        <section className="container">
            <div className="linkContent">
                <ul>
                    <a href="https://www.instagram.com/iurigoldenarts/" target="_blank" title="Ver mais desenhos">
                        <li>
                            <i className='bx bxs-pencil'></i>
                            <span>Meu Portfólio</span>   
                        </li>
                    </a>
                    <a href="https://ig.me/m/iurigoldenarts" target="_blank" title="Pedir uma encomenda">
                        <li>
                            <i className='bx bxs-paper-plane'></i>
                            <span>Encomendar</span>   
                        </li>
                    </a>
                    <a href="https://iuridourado.mercadoshops.com.br" target="_blank" title="Comprar desenhos">
                        <li>
                            <i className='bx bxs-store-alt'></i>
                            <span>Loja de desenhos</span>   
                        </li>
                    </a>
                </ul>
            </div>
        </section>
    )
}