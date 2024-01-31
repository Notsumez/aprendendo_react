import { useState } from 'react'

function Form () {
    function cadastrarUsuario(e) {
        e.preventDefault() // Evita que a página atualize quando manda o submit
        console.log(name)
        console.log('Cadastrou!')
        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState('Matheus')
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form