import capa from '../../assets/capa.jpeg';
import perfil from '../../assets/perfil.jpeg';

export function Header(){
    return(
        <header className="container">
            <div className="images">
                <div className="imgCapa">
                    <img src={capa} alt="Imagem de capa"/>
                </div>
                <div className="imgPerfil">
                    <img src={perfil} alt="Imagem de perfil"/>
                </div>
            </div>

            <div className="mainContent">
                <div className="texts">
                    <h2>Iuri <span>Golden</span> Arts</h2>
                    <p>Desenhos Realistas</p>
                </div>
                <nav className="redesSociais">
                    <ul>
                        <li title='Instagram'>
                            <a href="https://www.instagram.com/iurigoldenarts/" target='_blank' className='instagram'>
                                <i className='bx bxl-instagram-alt'></i>
                            </a>
                        </li>
                        <li title='Pinterest'>
                            <a href="https://br.pinterest.com/iuridouradoarts/" target='_blank' className='pinterest'>
                                <i className='bx bxl-pinterest' ></i>
                            </a>
                        </li>
                        <li title='Behance'>
                            <a href="https://www.behance.net/ggolden1" target='_blank' className='behance'>
                                <i className='bx bxl-behance' ></i>
                            </a>
                        </li>
                        <li title='Dribbble'>
                            <a href="https://dribbble.com/Iuri_Golden_Arts/about" target='_blank' className='dribbble'>
                                <i className='bx bxl-dribbble'></i>
                            </a>
                        </li>
                        <li title='TikTok'>
                            <a href="https://www.tiktok.com/@iurigoldenarts" target='_blank' className='tiktok'>
                                <i className='bx bxl-tiktok'></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}