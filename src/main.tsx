import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-dvh flex flex-col gap-4 p-8 pt-6 bg-gray-100">
      <App />
    </div>
  </React.StrictMode>
);
