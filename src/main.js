import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/iconfont/iconfont.css'; // font class 和unicode
import './assets/iconfont/iconfont.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
