import SideCurrency from './SideCurrency/SideCurrency';
import { MainContainer, DownContainer, Graphics, Line } from './SideBar.styled';
import { useMediaQuery } from '@react-hook/media-query';

const SideBar = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

  return (
    <MainContainer>
      <DownContainer>
        {isSmallScreen === true ? (
          <></>
        ) : (
          <>
            <SideCurrency />
            <Graphics />
            <Line />
          </>
        )}
      </DownContainer>
    </MainContainer>
  );
};

export default SideBar;
