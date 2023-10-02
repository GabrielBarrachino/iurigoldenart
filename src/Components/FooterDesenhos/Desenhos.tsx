import img1 from '../../assets/desenho-um.png'
import img2 from '../../assets/estatua.png'
import img3 from '../../assets/jorja.png'
import img4 from '../../assets/encomenda.jpeg'

export function Desenhos(){
    return(
        <>
            <section className="secDesenhos container">
                <div className="text">
                    <h1>Alguns dos meus desenhos recentes:</h1>
                </div>
                <div className="desenhosContent">
                    <img src={img1} alt="Desenho um"/>
                    <img src={img2} alt="Desenho dois"/>
                    <img src={img3} alt="Desenho três"/>
                    <div className="imgVerMais">
                        <img src={img4} alt="Desenho quatro"/>
                        <a href="https://www.instagram.com/iurigoldenarts/" target='_blank'><span>Ver mais</span></a>
                    </div>
                </div>
            </section>
            <footer className='footer container'>
                <p>© Iuri Golden Arts 2023. Todos os direitos reservados.</p>
            </footer>
        </>
    )
}