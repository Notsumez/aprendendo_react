// A parte superior do arquivo sempre é usada para importações de dependencias ou arquivos
import './App.css';
// Definindo o componente
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Produto from './components/Produto';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';


// todo o conteúdo é escrito dentro da função
function App() {

  const name = 'Matheus'
  const NewName = name.toUpperCase()

  // Podemos criar funções dentro de outras funções
  function Sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  const nome = "Clara"

  return (
    // No react(JSX), obrigatóriamente os elementos devem estar dentro de um elemento pai, eles não podem estar no mesmo nível
    // A maneira correta de declarar o atributo 'class' no JSX é através de 'ClassName'.
    <div className="App">
      <h1>Alterando Jsx</h1>
      <p>Olá, {NewName}</p>
      {/* é possível a utilização de estruturas condicionais */}
      <p>Soma: {2 + 2}</p>
      <p>Soma: {Sum(1, 2)}</p>
      {/* Podemos colocar dinâmicamente elementos no html */}
      <img src={url} alt="Minha Imagem"></img>
      {/* Chamando o componente */}
      <HelloWorld/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome="Maria"/>
      <SayMyName nome={nome}/>

      <Pessoa nome="Rodrigo" idade="17" profissao="Estudante" foto="https://www.svgrepo.com/show/512317/github-142.svg"/>
      <Produto nome="Picanha" tipo="Carne" quantidade="10" preco="R$ 20,00"/>

      <List/>

      <h1>EVENTOS REACT</h1>
      <Evento/>
      <Form/>

      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
  )
} 

// também é usada para a exportação
export default App;
