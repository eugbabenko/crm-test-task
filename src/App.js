import { Suspense } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import { TableLazy, ChartLazy, ListLazy } from './routes/index.js';

import AllTabs from './components/AllTabs.jsx';
import ErrorComponent from './components/404.jsx';

export const App = () => {
  return (
    <>
      <div>
        <Suspense fallback={'Loading...'}>
          <HashRouter>
            <Routes>
              <Route path={'/dummyChart'} element={<ChartLazy />} />
              <Route path={'/dummyList'} element={<ListLazy />} />
              <Route path={'/dummyTable'} element={<TableLazy />} />
              <Route path={'*'} element={<ErrorComponent />} />
            </Routes>
          </HashRouter>
        </Suspense>
      </div>
    </>
  );
};

export default App;
