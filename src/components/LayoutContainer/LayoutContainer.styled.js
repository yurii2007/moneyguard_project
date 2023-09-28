import styled from 'styled-components';
import bgMob from '../../images/bg-img/MobileBg.jpg';
import bgTab from '../../images/bg-img/TabletBg.jpg';
import bgDes from '../../images/bg-img/DesctopBg.jpg';

export const DashboardPage = styled.aside`
  background: url(${bgMob});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    background: url(${bgTab});
    padding-inline: 32px;
  }
  @media screen and (min-width: 1280px) {
    position: fixed;
    left: 0;
    background: url(${bgDes});
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`;
