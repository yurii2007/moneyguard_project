import styled from 'styled-components';

export const FormStyles = styled.form`
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 40px 72px;
    background: var(--background-modal);
    box-shadow: var(--modal-box-shadow);
    border-radius: 8px;
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

  margin-bottom: 60px;
  color: var(--transparency-60, rgba(255, 255, 255, 0.6));
  font-size: 16px;
  line-height: 1.5;

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
`;

export const WrapperInputEditor = styled.div`
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

export const WrapperTablet = styled.div`
  margin-block: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
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
  align-items: center;
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

  &:hover,
  &:focus {
    background: transparent;
    color: #ffc727;
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

  &:hover,
  &:focus {
    background: transparent;
    color: #ffc727;
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
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  & svg {
    color: #fbfbfb;
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
