import styled from 'styled-components';

export const Header = styled.header`
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      margin: 1rem;
      width: 10rem;
    }
  }

  nav a {
    text-decoration:none;
    color: ${(props) => props.theme.colors.grey};
    margin-right: 10px;
  
    &:hover{
    color: ${(props) => props.theme.colors.white};
    }
  }

`;

export const Main = styled.main`
  .filme-principal {
      font-size: 1rem;
      background: 
        linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%),  
        url('/img/capa-house.jpg');

      height: 40rem;
      background-size: cover;
  
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

    .container{
      width: 88%;
      height: 20%;
      margin-left: 20px;

      .titulo {
        margin-top: 15%;
        font-size: 2.5rem;
        font-family: 'Trebuchet MS', Arial, sans-serif;
      }

      .descricao {
        margin-top: 0.62rem;
        margin-bottom: 2.5rem;
      }

      .botoes {
        display: flex;
        flex-direction: row;

        button {
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: rgba(0,0,0,.50);
          border:none;
          color: white;

          padding: 0.94rem 1.87rem;
          margin-right: 0.94rem;
          font-size: 12px;

          cursor: pointer;
          transition: .3s ease all;

          &:hover {
            background-color:white;
            color: ${(props) => props.theme.colors.black};
          }
        }
      }
    }
    
  }
`;
