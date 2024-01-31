import Button from './Button';

function Evento () {

    function meuEvento () {
        console.log('Funcionando!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento