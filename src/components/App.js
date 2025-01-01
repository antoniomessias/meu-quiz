import React, { useState, useEffect } from 'react';
import '../style/style.css';
import Resultado from './Resultado';

function App() {
  /*Constantes da função */
  const [perguntas, setPerguntas] = useState([]);
  const [respostasUsuario, setRespostasUsuario] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [tentativas, setTentativas] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  /*Carregar as perguntas no .json */
  useEffect(() => {
    fetch('/assets/perguntas.json')
      .then((response) => response.json())
      .then((data) => setPerguntas(data.questions))
      .catch((error) => console.error('Erro ao carregar as perguntas', error));
  }, []);

  /*Momento em que seleciona a pergunta, e guarda as respostas anteriores criando copias*/
  const selecionarResposta = (indiceResposta) => {
    const novasRespostas = [...respostasUsuario];
    novasRespostas[perguntaAtual] = indiceResposta;
    setRespostasUsuario(novasRespostas);
  };

  /*Botão confirmar para fluir nas perguntas*/
  const confirmarResposta = () => {
    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      setFinalizado(true);
    }
  };

  /*Botão reiniciar ao final de todas as respostas */
  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setRespostasUsuario([]);
    setFinalizado(false);
    setTentativas(tentativas + 1); //Contador de tentativas
  };

  /*Criação das parte visivel para a janela */
  return (
    <div className="App">
      <header>
        <h1>Quiz Web</h1>
      </header>
      <main id="container-questionario">
        {finalizado ? (
          <Resultado
            perguntas={perguntas}
            respostasUsuario={respostasUsuario}
            pontuacao={respostasUsuario.filter(
              (resposta, index) => perguntas[index]?.answers[resposta]?.correct
            ).length}
            total={perguntas.length}
            reiniciar={reiniciarQuiz}
          />
        ) : (
          perguntas.length > 0 && (
            <>
              <h3>{perguntas[perguntaAtual].question}</h3>
              {perguntas[perguntaAtual].answers.map((resposta, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    id={`resposta${perguntaAtual}${i}`}
                    name={`pergunta${perguntaAtual}`} 
                    onClick={() => selecionarResposta(i)}
                    checked={respostasUsuario[perguntaAtual] === i}
                  />
                  <label htmlFor={`resposta${perguntaAtual}${i}`}>
                    {['a', 'b', 'c', 'd', 'e'][i]}) {resposta.text}
                  </label>
                </div>
              ))}
              <button onClick={confirmarResposta} className="confirmar">
                Confirmar
              </button>
            </>
          )
        )}
      </main>
      <footer>
        <p id="contador-tentativas">Tentativas: {tentativas}</p>
      </footer>
    </div>
  );
}

export default App;