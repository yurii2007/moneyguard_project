import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navbar/Navbar';
import SideBar from 'components/SideBar/SideBar';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useLocation } from 'react-router-dom';
import { Background, Container, DashboardPage, NavBlockWrapper } from './LayoutContainer.styled';
import { Balance } from 'components/Balance/Balance';

export const LayoutContainer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const location = useLocation();
  const isShowBalance = location.pathname.includes('home');
  const resetPadding = location.pathname.includes('currency');
  const styles = resetPadding ? {paddingInline: 0} : {}

  return (
    <>
      <Header />
      <Background>
        <Container style={styles}>
          <DashboardPage>
            <NavBlockWrapper>
            <Navigation />
            {isMobile ? isShowBalance && <Balance /> : <Balance />}
            </NavBlockWrapper>
            <SideBar />
          </DashboardPage>
          <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </Container>
      </Background>
    </>
  );
};
