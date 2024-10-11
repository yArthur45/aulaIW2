import './App.css';
import {useState}from "react";

function App() {

  const[vetor, setVetor] = useState(["Arthur", "Mathias" , "victor"]);
  const[aluno, setAluno] = useState("");

  function adicionar()
  {
      setVetor([...vetor, aluno]);
      setAluno("");
  }
  
return (
  <div>
    <h1>Aula 04- Estudos de Vetores</h1>

    <div className='conteudo'>

      <h3>Entrada de Dados</h3>
      <form>
        <p>
          digite o nome do Aluno <br />
          <input type='text' value={aluno} onChange={ (e) =>  setAluno(e.target.value)}/>
        </p>

        <p>
          <button type='button' onClick={adicionar}>adicionar o nome na lista</button>
        </p>
      </form>
    </div>

  <div className='conteudo'>
    <h2>Lista de Alunos</h2>

    <ul>

      {vetor.map( nome => (<li>{nome}</li>))}


    </ul>
  </div>

  </div>
);
}
export default App;
