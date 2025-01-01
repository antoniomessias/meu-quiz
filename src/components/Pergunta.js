import React from 'react';

/*Carrega as perguntas */
const Pergunta = ({ pergunta, indice, selecionarResposta, respostaSelecionada }) => {
  return (
    <div>
      <h3>{pergunta.question}</h3>
      {pergunta.answers.map((resposta, i) => (
        <div key={i} className={`resposta ${respostaSelecionada === i ? 'selecionada' : ''}`}>
          <input
            type="radio"
            id={`resposta-${indice}-${i}`}
            name={`pergunta-${indice}`}
            onClick={() => selecionarResposta(indice, i)}
            checked={respostaSelecionada === i} // Deixa a opção selecionada marcada
          />
          <label htmlFor={`resposta-${indice}-${i}`}>
            {['a', 'b', 'c', 'd', 'e'][i]}) {resposta.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Pergunta;
