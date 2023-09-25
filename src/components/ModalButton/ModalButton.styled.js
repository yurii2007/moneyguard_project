import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 300px;
  padding-block: 13px;
  @media screen and (max-width: 767.9px) {
    width: 280px;
  };
  border: none;
  border-radius: 20px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.20);
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
`;
