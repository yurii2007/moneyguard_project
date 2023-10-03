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

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    display: flex;
    align-items: center;

    position: absolute;
    top: -55%;
    left: 10%;

    width: 540px;
    min-height: 580px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    border-radius: 8px;

    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    min-height: 100vh;
    display: flex;
    align-items: center;

    position: absolute;
    top: 0;
    left: -20%;

    width: 540px;
    min-height: 580px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    border-radius: 8px;

    padding-top: 40px;
    padding-bottom: 40px;
  }

  textarea {
    resize: none;
    overflow-y: hidden;
    transition: height 0.2s;
    background-color: transparent;
    border: none;
    color: var(--white);
    padding-left: 20px;
    height: 24px;
  }

  textarea:focus {
    outline: none;
  }
`;

export const HeaderText = styled.h3`
  color: var(--white);
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: 1.5;
  font-weight: 400;
  line-height: 36px;

  margin-bottom: 32px;
`;

export const WrapperChanges = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  margin-bottom: 60px;

  &:focus {
    color: var(--dashboard-text, #ff868d);
  }
`;

export const WrapperCategories = styled.div`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  border: none;
  outline: none;

  select {
    background-color: transparent;
    color: var(--white, #fbfbfb);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    border: none;
    outline: none;
  }

  border-bottom: 1px solid var(--transparency-60);

  margin-bottom: 40px;
`;

export const WrapperInputEditor = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid var(--transparency-60);
`;

export const InputEditor = styled.input`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  padding-left: 20px;

  background-color: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: var(--white, #fbfbfb);
  }
`;

export const WrapperComment = styled.div`
  border-bottom: 1px solid var(--transparency-60);
  margin-bottom: 40px;

  textarea {
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    resize: none;
    overflow-y: hidden;
    transition: height 0.2s;
    background-color: transparent;
    border: none;
    color: var(--white);
    padding-left: 20px;
    height: 24px;
    &::placeholder {
      color: var(--white, #fbfbfb);
    }
  }

  textarea:focus {
    outline: none;
  }

  textarea {
    height: 52px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SaveButton = styled.button`
  width: 300px;
  padding-block: 13px;
  font-weight: 400;
  @media screen and (max-width: 767.9px) {
    width: 280px;
  }
  color: var(--white, #fbfbfb);
  border: none;
  border-radius: 20px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: var(--btn-gradient-color);

  margin-bottom: 20px;

  &:hover {
    background: transparent !important;
    color: #ffc727 !important;
    outline: 1px solid #ffc727;
  }

  &:focus {
    background: transparent !important;
    color: #ffc727 !important;
    outline: 1px solid #ffc727;
  }
`;

export const CancelButton = styled.button`
  width: 300px;
  padding-block: 13px;
  font-weight: 400;
  @media screen and (max-width: 767.9px) {
    width: 280px;
  }
  color: (--text-button, #623f8b);
  border: none;
  border-radius: 20px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: var(--white, #fbfbfb);

  &:hover {
    background: transparent !important;
    color: #ffc727 !important;
    outline: 1px solid #ffc727;
  }

  &:focus {
    background: transparent !important;
    color: #ffc727 !important;
    outline: 1px solid #ffc727;
  }
`;
export const ErrorText = styled.p`
  color: red;
`;
export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  & svg {
    color: #fbfbfb;
    width: 20px;
    height: 20px;
    position: relative;
  }

  :hover,
  :focus {
    outline: none;
    border: none;
  }
  @media (max-width: 767px) {
    & svg {
      display: none;
    }
  }
`;
