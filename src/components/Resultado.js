import React from 'react';

/*Resultado peganto todas as respostas do usuario para gerar um feedback */
const Resultado = ({ perguntas, respostasUsuario, pontuacao, total, reiniciar }) => {
  return (
    <div>
      <h3>Resultado Final</h3>
      <p> Você acertou {pontuacao} de {total} questões. </p>
      <div className="resultado-detalhado">
        {perguntas.map((pergunta, index) => {
          const respostaEscolhida = respostasUsuario[index]; /*Coletar a resposta do usuario*/
          const acertou = pergunta.answers[respostaEscolhida]?.correct; /*Comparando a resposta*/
          return (
            <div
              key={index}
              className={`resultado-pergunta ${acertou ? 'correto' : 'errado'}`} /*Comparando a resposta if ternario*/
            >
              <h4>
                {pergunta.question} 
              </h4>
              {pergunta.answers.map((resposta, i) => (
                <p
                  key={i}
                  className={
                    i === respostaEscolhida
                      ? acertou
                        ? 'resposta correta'
                        : 'resposta errada' 
                      : ''
                  }
                >
                  {['a', 'b', 'c', 'd', 'e'][i]}) {resposta.text}
                </p>
              ))}  
              
            </div>
            /* Caso queira mostrar as respostas corretas ao          |
            final no Feedbac, colocar na linha 36 o codigo a baixo   V
             {!acertou && (
                <p className="correta">
                  Resposta correta: {respostaCorreta && respostaCorreta.text}
                </p>
                
              )} */
          );
        })}
      </div>
      <button onClick={reiniciar} className="reiniciar">
        Reiniciar
      </button>
    </div>
  );
};

export default Resultado;
