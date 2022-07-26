import React from 'react';//importo React
import ReactDOM from 'react-dom/client';
import './index.css';//importo estilo
import App from './App'; //importo la aplicacion de app.js


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

