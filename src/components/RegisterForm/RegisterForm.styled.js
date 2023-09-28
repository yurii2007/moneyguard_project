import styled from 'styled-components';
import backRegisterTablet from '../../images/png/dollar-tablet.png';
import backRegisterDesktop from '../../images/png/dollar-desktop.png';

export const Card = styled.div`
  background: radial-gradient(
    circle at center center,
    rgba(47, 21, 176, 0.73),
    rgba(48, 46, 142, 1)
  );

  @media screen and (min-width: 768px) {
    background-color: #101010;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    background-image: url(${backRegisterTablet});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 1280px) {
      background-image: url(${backRegisterDesktop});
    }
  }
`;

export const TitleRegisters = styled.h2`
  font-family: Poppins;
  color: var(--white-color);
  line-height: 1.5;
  font-size: 19px;

  font-weight: 400;

  text-align: center;

  margin: 0px auto 52px;

  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`;

export const FormRegister = styled.form`
  padding-top: 23px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 23px;

  .button-wrapper > button {
    margin-bottom: 20px;
    position: relative;
  }

  .button-wrapper > button:hover,
  .button-wrapper > button:focus {
    background: transparent !important;
    box-shadow: none;
    color: #ffc727 !important;
  }

  .button-wrapper > button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: transparent;
    transition: width 0.5s ease-in-out;
  }

  .button-wrapper > button:hover::before,
  .button-wrapper > button:focus::before {
    width: 100%;

    border-bottom: 1px solid #ffc727;
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-left: 62px;
    padding-right: 62px;
    padding-bottom: 40px;

    width: 533px;
    margin: 0 auto;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);

    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo-register {
    width: 26px;
  }

  @media screen and (min-width: 768px) {
    .logo-register {
      width: 35px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const InputRegister = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: var(--transparency-60);
  padding: 0px 45px;
  margin: 0px;
  position: relative;
  outline: none;

  transition: border-color 0.3s, border-radius 0.3s, border-bottom 0.3s;

  &:focus {
    outline: none;
    border-bottom: solid 1px #ffc727;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 24px;
  margin-left: 10px;
`;

export const ErrorRegister = styled.div`
  margin-top: 5px;
  color: #ffc727;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 400;
`;
