import styled from 'styled-components';

export const LogoutStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo-modal {
    display: none;
  }
  .logo-text {
    display: none;
  }
  .text-logout {
    max-width: 214px;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    margin-bottom: 40px;
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
    &:hover,
    &:focus {
      background: transparent;
      color: #ffc727;
      outline: 1px solid #ffc727;
    }
  }
  .logout {
    background: var(--btn-gradient-color);
    color: var(--white-color);
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 60px 115px;
    background: var(--background-modal);
    box-shadow: var(--modal-box-shadow);
    border-radius: 8px;
    .logo-modal {
      width: 36px;
      height: 36px;
      display: block;
    }
    .logo-text {
      display: block;
      margin-bottom: 52px;
      font-size: 27px;
      line-height: 40px;
      letter-spacing: 0em;
      color: var(--white-color);
    }
    .text-logout {
      width: 214px;
      color: var(--white-color);
      text-align: center;
      margin-bottom: 40px;
      font-size: 18px;
      line-height: 27px;
    }
  }
`;
