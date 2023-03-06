import React from 'react';
import ReactDOM from 'react-dom/client';
import Views from "./views";
import './styles/index.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Views />
  </React.StrictMode>,
);
