import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayOutBox } from './Layout.styled';
import { Header } from 'components/Header/Header';

const Layout = () => {
  return (
    <div>
      <Header>header</Header>
      <LayOutBox>
        <Suspense fallback={<p>Loading ... </p>}>
          <Outlet />
        </Suspense>
      </LayOutBox>
    </div>
  );
};

export default Layout;
