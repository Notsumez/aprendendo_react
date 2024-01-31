import Item from "./Item"

function List () {
    return (
        <>
            <h2>Minha Lista</h2>
            <ul>
                <Item marca="Ferrai" lancamento={1985}/>
                <Item marca="Fiat" lancamento={1964}/>
            </ul>
        </>
    )
}

export default List