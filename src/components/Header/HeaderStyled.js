import styled from 'styled-components';

export const HeaderStyled = styled.header`
  min-width: 320px;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-container {
    margin-left: 20px;
    margin-right: auto;
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    .logo-container {
      margin-left: 16px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }

  .logo-header {
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 768px) {
    .logo-header {
      width: 24px;
      height: 23px;
    }
  }

  .logo-text {
    width: 86.672px;
    height: 19.387px;
    font-size: 12.84px;
    color: white;
  }
  @media screen and (min-width: 768px) {
    .logo-text {
      width: 116px;
      height: 26px;
      font-size: 17.097px;
    }
  }

  .exit-container {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .exit-container {
      margin-top: 28px;
      margin-bottom: 28px;
      margin-right: 32px;
      display: flex;
      align-items: center;
    }
  }

  .user-name {
    margin-right: 8px;
    color: rgba(255, 255, 255, 0.6);
  }

  @media screen and (min-width: 768px) {
    .user-name {
      margin-right: 12px;
      font-size: 17.097px;
    }
  }

  @media screen and (min-width: 768px) {
    .divider {
      margin-right: 12px;
      height: 30px;
      border: 1px solid rgba(255, 255, 255, 0.6);
    }
  }

  .exit-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: transparent;
    border: transparent;
  }

  .exit-button-svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }
  .text-exit {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .text-exit {
      display: contents;
      color: rgba(255, 255, 255, 0.6);
      width: 31px;
      height: 28px;
      font-size: 16px;
    }
  }
`;
