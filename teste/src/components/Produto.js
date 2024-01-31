function Produto ({preco, tipo, nome, quantidade}) {
    return(
        <div>
            <h1>Nome: {nome}</h1>
            <p>Tipo: {tipo}</p>
            <p>Quantidade: {quantidade}</p>
            <p>Preço: {preco}</p>
        </div>
     
    )
}

export default Produto