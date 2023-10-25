import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
