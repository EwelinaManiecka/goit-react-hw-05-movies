import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}

export default App;
