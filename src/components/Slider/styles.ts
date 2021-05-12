import styled from 'styled-components';

const SliderContainer = styled.div`
  padding: 0 1.25rem;
  padding-bottom: 2rem;

  p {
    padding: 2rem 0;
    font-family: 'Trebuchet MS', Arial, sans-serif;
    font-size: 1rem;
    font-weight: 600;
  }

  .keen-slider {
    border-radius: 4px;
  }

  .number-slide {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    img {
      width: 100%;
      border-radius: 4px;
    }
  }

`;

export default SliderContainer;
