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
  z-index: 1000;
  .active {
    opacity: 1;
  }

  .modal-content {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    transition: 0.4s all;
  }

  .modal-content.active {
    transform: scale(0.5);
  }

  .text-logout {
    color: var(--white-color);
    text-align: center;
    margin-bottom: 40px;
    padding-left: 53px;
    padding-right: 53px;
    font-size: 18px;
    line-height: 27px;
  }

  .close-icon {
    width: 15px;
    height: 15px;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo-modal {
    width: 36px;
    height: 36px;
  }

  .logo-text {
    font-size: 27px;
    line-height: 40px;
    letter-spacing: 0em;
    color: var(--white-color);
  }

  .buttonlog {
    background: var(--main-font-color);
    color: #623f8b;
    width: 300px;
    padding-block: 13px;
    @media screen and (max-width: 767.9px) {
      width: 280px;
    }
    border: none;
    border-radius: 20px;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 18px;
    line-height: normal;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }
  .logout {
    background: var(--btn-gradient-color);
    color: var(--white-color);
    margin-bottom: 20px;
  }
`;
