import styled from 'styled-components';

const Header = styled.header`
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

    &:hover {
      color: ${(props) => props.theme.colors.white};
      cursor: not-allowed;
    }
  }

`;

export default Header;
