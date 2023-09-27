import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayOutBox } from './Layout.styled';
import { Navigation } from 'components/Navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <header>header</header>
      <Navigation />
      <LayOutBox>
        <Suspense fallback={<p>Loading ... </p>}>
          <Outlet />
        </Suspense>
      </LayOutBox>
    </div>
  );
};

export default Layout;
