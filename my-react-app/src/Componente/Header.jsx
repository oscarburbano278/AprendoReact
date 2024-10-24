import '../Estilos/Header.css';

const Header = ({titulo}) =>{
    
    return(
        <div className='contenedorEncabezado'>
            <h1>{titulo}</h1>             
        </div>
    )
}

export default Header;