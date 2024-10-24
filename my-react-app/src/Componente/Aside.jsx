import React from "react";
import '../Estilos/Aside.css';

const Aside = ({imagen}) =>{
    return(
        <div className="clearfix">
            <img
            src={imagen}            
            className="imgs"
            />
        </div>
    )
}

export default Aside;