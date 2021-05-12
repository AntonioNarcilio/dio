import styled from 'styled-components';

const Main = styled.main`
  .filme-principal {
    font-size: 1rem;

    background:
      linear-gradient(
        rgba(0,0,0,.50) 65%,
        rgb(20, 20, 20, 1) 95%),
      url('/img/capa-house.jpg');

    height: 40rem;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .container {
      width: 88%;
      height: 20%;
      margin-left: 1.25rem;

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


        button:nth-child(1) {
          background-color:white;
          color: ${(props) => props.theme.colors.black};
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;

          background-color: ${(props) => props.theme.colors.greyDark};
          border: none;
          color: ${(props) => props.theme.colors.white};

          border-radius: 4px;

          padding: 0.94rem 1.87rem;
          margin-right: 0.94rem;
          font-size: 0.9rem;
          font-weight: 600;

          cursor: pointer;
          transition: .3s ease all;

          &:hover {
            background-color:white;
            color: ${(props) => props.theme.colors.black};

            cursor: not-allowed;
          }
        }
      }
    }
  }
`;

export default Main;
