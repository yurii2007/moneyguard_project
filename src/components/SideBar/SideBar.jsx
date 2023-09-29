import SideCurrency from './SideCurrency/SideCurrency';
import { MainContainer, DownContainer, Graphics, Line } from './SideBar.styled';
import { useMediaQuery } from 'react-responsive';

const SideBar = () => {
  const isSmallScreen = useMediaQuery({query: '(max-width: 767.9px)'});

  return (
    <MainContainer>
      <DownContainer>
        {isSmallScreen ? (
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
