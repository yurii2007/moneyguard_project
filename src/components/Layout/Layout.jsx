import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LayOutBox } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <header>header <Link to='/'>GO TO HOME</Link></header>
      <LayOutBox>
        <Suspense fallback={<p>Loading ... </p>}>
          <Outlet />
        </Suspense>
      </LayOutBox>
    </div>
  );
};

export default Layout;
