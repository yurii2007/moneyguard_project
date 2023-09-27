const { default: styled } = require('styled-components');

export const SelectBox = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 16px;
  }
  @media (min-width: 1280px) {
    gap: 32px;
    width: 182px;
  }
`;
