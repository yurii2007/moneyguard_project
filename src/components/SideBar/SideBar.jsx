import SideCurrency from './SideCurrency/SideCurrency';
import { MainContainer, DownContainer, Graphics, Line } from './SideBar.styled';
import { useMediaQuery } from 'react-responsive';

const SideBar = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767.9px)' });
  const values = JSON.parse(localStorage.getItem('currency'))?.map(el => el.buy) || [0,0];

  return (
    <MainContainer>
      <DownContainer>
        {isSmallScreen ? (
          <></>
        ) : (
          <>
            <SideCurrency />
            <Graphics>
              <span className='currency-value'>{values[0]}</span>
              <span className='currency-value'>{values[1]}</span>
            </Graphics>
            <Line />
          </>
        )}
      </DownContainer>
    </MainContainer>
  );
};

export default SideBar;
