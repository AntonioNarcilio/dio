import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 1rem;
  padding-bottom: 2rem;

  a {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default Footer;
