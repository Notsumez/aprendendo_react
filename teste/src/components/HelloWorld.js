// As importações não são exclusivas do APP.js, podemos facilmente importar componentes para outros componentes
import Frase from "./Frase"

function HelloWorld() {
    return (
        <div>
            <Frase/>
            <h1>Primeiro Componente</h1>
        </div>
    )
}

export default HelloWorld