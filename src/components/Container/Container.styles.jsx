import styled from 'styled-components';

const size = {
  mobileS: '320px',
  tablet: '768px',
  desktop: '1280px',
};
const breakpoints = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const ContainerStyle = styled.div`
  width: ${size.mobileS};
  padding: ${props => props.padding};
  @media ${breakpoints.tablet} {
    max-width: ${size.tablet};
  }

  @media ${breakpoints.desktop} {
    max-width: ${size.desktop};
  }
`;
