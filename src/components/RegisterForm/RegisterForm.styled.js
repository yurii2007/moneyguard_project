import styled from 'styled-components';
import backRegisterTablet from '../../images/png/dollar-tablet.png';
import backRegisterDesktop from '../../images/png/dollar-desktop.png';
import backRegisterTabletRetina from '../../images/png/dollar-tabletx2.png';
import backRegisterDesktopRetina from '../../images/png/dollar-desktopx2.png';

export const Card = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  background: radial-gradient(
    circle at center center,
    rgba(47, 21, 176, 0.73),
    rgba(48, 46, 142, 1)
  );

  @media screen and (min-width: 768px) {
    background-color: var(--background);

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    background-image: url(${backRegisterTablet});
    background-repeat: no-repeat;
    background-size: cover;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${backRegisterTabletRetina});
      background-size: cover;
      background-position: center;
    }

    @media screen and (min-width: 1280px) {
      background-image: url(${backRegisterDesktop});
      background-position: center;
      background-size: cover;

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background-image: url(${backRegisterDesktopRetina});
        background-size: cover;
        background-position: center;
      }
    }
  }
`;

export const TitleRegisters = styled.h2`
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
  padding: 23px 20px;

  .button-wrapper > button,
  .button-wrapper > button:hover,
  .button-wrapper > button:focus {
    transition: background 0.6s, color 0.6s, outline 0.6s;
  }

  .button-wrapper > button:hover,
  .button-wrapper > button:focus {
    background: transparent !important;
    color: #ffc727 !important;
    outline: 1px solid #ffc727;
  }

  .button-wrapper > a,
  .button-wrapper > a:hover,
  .button-wrapper > a:focus {
    transition: background 0.6s, color 0.6s, outline 0.6s;
  }

  .button-wrapper > a:hover,
  .button-wrapper > a:focus {
    background: transparent !important;
    color: #ffc727 !important;
    outline: 1px solid #ffc727;
  }

  .button-wrapper > a {
    display: block;
    width: 300px;
    padding-block: 13px;
    @media screen and (max-width: 767.9px) {
      width: 280px;
    }
    border: none;
    border-radius: 20px;
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
    background: var(--main-font-color);
    color: var(--button-text-color);
    text-align: center;
    font-size: 18px;
    line-height: normal;
    letter-spacing: 1.8px;
    text-transform: uppercase;
  }

  .button-wrapper > button {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px 62px;

    width: 533px;
    margin: 0 auto;
    border-radius: 8px;
    background-color: var(--transparency-10);

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
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  .icons-login {
    position: absolute;
    width: 24px;
    margin-left: 10px;
  }
`;

export const InputRegister = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--transparency-40);
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
  width: 22px;
  right: 0;
  margin-right: 10px;
  cursor: pointer;
`;

export const ErrorRegister = styled.div`
  margin-top: 5px;
  color: #ffc727;
  text-align: center;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 400;
`;
