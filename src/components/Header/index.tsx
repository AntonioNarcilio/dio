/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import HeaderContainer from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src="/netflix-name.png" alt="logo" />
        <nav>
          <Link href="#"><a>Início</a></Link>
          <Link href="#"><a>Séries</a></Link>
          <Link href="#"><a>Filmes</a></Link>
          <Link href="#"><a>Documentários</a></Link>
        </nav>
      </div>
    </HeaderContainer>
  );
}
