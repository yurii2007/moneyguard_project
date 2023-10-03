import styled from 'styled-components';

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding-inline: 20px;
  background: var(--background-gradient);
  backdrop-filter: blur(60px);
  z-index: 1000;
  @media screen and (min-width: 768px) {
    background: rgba(34, 13, 91, 0.23);
    backdrop-filter: blur(3.5px);
  }
`;
