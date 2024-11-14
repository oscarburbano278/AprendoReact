import '../Estilos/Aside.css'

const Aside = ({placehold,type}) =>{

    return(
        <div className="inputContainer">
            <input 
                className="inputt"
                type = {type}
                placeholder= {placehold}
            />
        </div>
    )
}

export default Aside;