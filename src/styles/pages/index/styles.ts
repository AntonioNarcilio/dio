import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  /* min-height: 100vh; */

`;

export const GameArea = styled(Container)`
  height: 95vh;
  width: 95vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;

  h1 {
    margin-bottom: 1rem;
    color: rgb(52, 165, 52);
  }

  canvas {
    border-radius: 8px;
  }

`;
