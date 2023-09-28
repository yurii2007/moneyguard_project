import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Graphics, Line } from 'components/SideBar/SideBar.styled';
import SideCurrency from 'components/SideBar/SideCurrency/SideCurrency';

function Currency() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) navigate('/', { replace: true });
  });

  return (
    <>
      <SideCurrency />
      <Graphics />
      <Line />
    </>
  );
}

export default Currency;
