import styled from 'styled-components';

export const UpdateWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 61.38px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  z-index: 1000;
  background: var(--transparency-10);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
`;