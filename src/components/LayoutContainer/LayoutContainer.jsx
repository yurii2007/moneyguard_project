import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navbar/Navbar';
import SideBar from 'components/SideBar/SideBar';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import { DashboardPage } from './LayoutContainer.styled';

export const LayoutContainer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });

  return (
    <>
      <Header />
      <DashboardPage>
        <Navigation />
        <SideBar />
      </DashboardPage>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
