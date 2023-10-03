import styled from 'styled-components';

export const ModalLogoutStyle = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: rgba(34, 13, 91, 0.23);
  position: fixed;
  top: 61.38px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 320px;
    height: 100vh;
    background: var(--transparency-10);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    transition: 0.4s all;
  }
  @media screen and (max-width: 767.9px) {
    .modal-content {
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    backdrop-filter: blur(3.5px);
    top: 0;
    .modal-content {
      width: 533px;
      border-radius: 8px;
      height: 447px;
    }
  }

  .text-logout {
    width: 214px;
    color: var(--white-color);
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 27px;
  }

  .modal-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo-modal {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .logo-modal {
      width: 36px;
      height: 36px;
      display: block;
    }
  }
  .logo-text {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .logo-text {
      display: block;
      margin-bottom: 52px;
      font-size: 27px;
      line-height: 40px;
      letter-spacing: 0em;
      color: var(--white-color);
    }
  }
  .buttonlog {
    background: var(--main-font-color);
    color: var(--button-text-color);
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
