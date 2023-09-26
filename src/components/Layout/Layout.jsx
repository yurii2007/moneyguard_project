import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayOutBox } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <header>header</header>
      <LayOutBox>
        <Suspense fallback={<p>Loading ... </p>}>
          <Outlet />
        </Suspense>
      </LayOutBox>
    </div>
  );
};

export default Layout;
