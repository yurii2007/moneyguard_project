import styled from 'styled-components';

export const ModalLogoutStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;

  .active {
    opacity: 1;
  }

  .modal-content {
    width: 533px;
    height: 570px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    transition: 0.4s all;
  }

  .modal-content.active {
    transform: scale(0.5);
  }
`;
