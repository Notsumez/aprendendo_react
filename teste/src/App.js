// A parte superior do arquivo sempre é usada para importações de dependencias ou arquivos
import './App.css';


// todo o conteúdo é escrito dentro da função
function App() {

  const name = 'Matheus'
  const NewName = name.toUpperCase()

  // Podemos criar funções dentro de outras funções
  function Sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

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
    </div>
  )
} 

// também é usada para a exportação
export default App;
