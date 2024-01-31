import PropTypes from 'prop-types'

function Item ({marca, lancamento}) {
    return(
        <>
            <br></br>
            <li>{marca} - {lancamento}</li>
            <br></br>
            <hr></hr>
            
        </>
    )
}

// Definindo requerimento de tipos de propriedades
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

// Mensagem a ser exibida caso o requerimento do tipo de propriedade não seja a requerida
Item.defaultProps = {
    marca: 'Faltou a Marca',
    lancamento: 0,
}

export default Item