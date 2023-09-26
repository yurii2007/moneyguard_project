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
  padding-inline: 20px;
  margin: 0 auto;
  @media ${breakpoints.tablet} {
    max-width: 704px;
    padding-inline: 32px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1248px;
    padding-inline: 16px;
  }
`;
