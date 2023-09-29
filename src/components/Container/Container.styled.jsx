import styled from 'styled-components';

export const size = {
  mobile: '280px',
  tablet: '768px',
  desktop: '1280px',
};
export const breakpoints = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const ContainerStyle = styled.div`
  min-width: ${size.mobile};
  padding: 0 20px;
  margin: 0 auto;
  @media screen and ${breakpoints.tablet} {
    width: ${size.tablet};
    padding: 0 32px;
  }

  @media screen and ${breakpoints.desktop} {
    width: ${({ Size }) =>
      (Size === 'main' && '1280px') || (Size === 'statistics' && '800px')};
    padding: ${({ Size }) =>
      (Size === 'main' && '12 0 16px0px') ||
      (Size === 'statistics' && '32px 16px 0 70px')};
  }
`;

//
