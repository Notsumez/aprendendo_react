function Form () {
    function cadastrarUsuario(e) {
        e.preventDefault() // Evita que a página atualize quando manda o submit
        console.log('Cadastrou!')
    }

    return (
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form