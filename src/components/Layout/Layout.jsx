import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <main>
        <Suspense fallback={<p>Loading ... </p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
