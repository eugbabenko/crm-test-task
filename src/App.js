import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import ErrorComponent from './pages/Error.jsx';
import AllTabs from './components/AllTabs.jsx';
import data from './data/tabs.json';

export const App = () => {
  const defaultTab = data.sort((a, b) => a.order - b.order)[0].id;
  return (
    <>
      <AllTabs />
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path='/' element={<Navigate to={`/${defaultTab}`} />} />
          {data.map((route) => {
            const RenderComponent = lazy(() => import(`./components/${route.path}`));
            return <Route key={route.id} path={`/${route.id}`} element={<RenderComponent />} />;
          })}
          <Route path='*' element={<ErrorComponent />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
