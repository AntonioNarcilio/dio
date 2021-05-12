import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Main from '../styles/Index/styles';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <>
      <Header />

      <Main>
        <div className="filme-principal">
          <div className="container">
            <h3 className="titulo">HOUSE OF CARDS</h3>
            <p className="descricao">Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington. Assista agora a nova temporada de House of Cards que está imperdível.</p>
            <div className="botoes">
              <button type="button">
                <FaPlay size={14} style={{ marginRight: '8px' }} />
                Assistir
              </button>

              <button type="button">
                <FaInfoCircle size={14} style={{ marginRight: '8px' }} />
                Mais Informações
              </button>
            </div>
          </div>
        </div>
      </Main>

      <Slider />
    </>
  );
}
