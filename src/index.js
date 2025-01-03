import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/style.css'; // Adicione esta linha para garantir que o CSS seja importado
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
