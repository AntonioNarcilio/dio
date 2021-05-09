import Link from 'next/link';
import { FaPlayCircle, FaInfoCircle } from 'react-icons/fa';
import { Header, Main } from '../styles/Index/styles';
import Slider from '../components/Slider';


export default function Home() {
  return (
    <>
      <Header>
        <div className="container">
          <img src="/netflix-name.png" alt="logo"/>
          <nav>
            <Link href="#"><a>Início</a></Link>
            <Link href="#"><a>Séries</a></Link>
            <Link href="#"><a>Filmes</a></Link>
            <Link href="#"><a>Documentários</a></Link>
          </nav>
        </div>
      </Header>

      <Main>
        <div className="filme-principal">
          <div className="container">
            <h3 className="titulo">HOUSE OF CARDS</h3>
            <p className="descricao">Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington. Assista agora a nova temporada de House of Cards que está imperdível.</p>
            <div className="botoes">
              <button>
                <FaPlayCircle size={14} style={{ marginRight: '8px' }} />
                ASSISTIR AGORA
              </button>
              <button>
                <FaInfoCircle size={14} style={{ marginRight: '8px' }} />
                MAIS INFORMAÇÕES
              </button>
            </div>
          </div>
        </div>
      </Main>

      <Slider />
    </>
  );
}
