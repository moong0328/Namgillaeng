import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DrawerMenu from './components/DrawerMenu/DrawerMenu'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DrawerMenu />
    <App />
  </React.StrictMode>
);
