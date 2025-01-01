import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Estilos globais
import App from './components/App'; // Importa o componente App do diretório components

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>,
  document.getElementById('root') // O id 'root' é o ponto de montagem no HTML
);
