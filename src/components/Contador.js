import React from "react";

/* Contador de tentativas */
const Contador = ({ tentativas }) => {
  return (
    <div id="contador">
      <p id="contador-tentativas">Tentativas: {tentativas}</p>
    </div>
  );
};

export default Contador;
