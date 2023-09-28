import styled from 'styled-components';
import bgMob from '../../images/bg-img/MobileBg.jpg';
import bgTab from '../../images/bg-img/TabletBg.jpg';
import bgDes from '../../images/bg-img/DesctopBg.jpg';

export const DashboardPage = styled.aside`
  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    width: 480px;
    height: calc(100vh - 86px);
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

export const Container = styled.div`
  max-width: 320px;
  padding-inline: 20px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-inline: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px 0 0;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    main {
      width: 100%;
    }
  }
`;

export const Background = styled.div`
  background: url(${bgMob});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vw;
  min-height: calc(100vh - 61.38px);
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 86px);
    background: url(${bgTab});
  }
  @media screen and (min-width: 1280px) {
    background: url(${bgDes});
  }
`;

export const NavBlockWrapper = styled.div`
`