import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-header {
    width: 18px;
    height: 18px;
  }
  .logo-text {
    width: 86.672px;
    height: 19.387px;
    font-size: 12.84px;
  }
  .exit-button {
    background-color: transparent;
    border: transparent;
  }

  .exit-button-svg {
    width: 18px;
    height: 18px;
  }
`;
