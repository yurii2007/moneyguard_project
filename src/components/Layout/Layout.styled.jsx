import { breakpoints } from 'components/Container/Container.styled';
import styled from 'styled-components';
import bgMob from '../../images/bg-img/MobileBg.jpg';
import bgTab from '../../images/bg-img/TabletBg.jpg';
import bgDes from '../../images/bg-img/DesctopBg.jpg';

export const LayOutBox = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${bgMob});
  background-repeat: no-repeat;
  background-size: cover;
  @media sreen and ${breakpoints.tablet} {
    background-image: url(${bgTab});
  }
  @media sreen and ${breakpoints.desktop} {
    background-image: url(${bgDes});
  }
`;
