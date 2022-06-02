import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { default as AppScreenProvider } from './app/hooks';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppScreenProvider>
      <App />
    </AppScreenProvider>
  </React.StrictMode>
);
