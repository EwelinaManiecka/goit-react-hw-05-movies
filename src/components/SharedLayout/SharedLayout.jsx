import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import style from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className={style.link} to="/">
            Home
          </NavLink>
          <NavLink className={style.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
