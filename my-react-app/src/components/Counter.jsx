import React, {useState} from "react";
import '../styles/Counter.css';

const Counter =() =>{
    const [count, setCounter] = useState(0);
    const [colorClass, setColorClass] = useState('black');

    const incremet = () =>{
        setCounter(count + 1);
        setColorClass('clsColorIncrement');
    };

    const decrease = () =>{
        if (count > 0) {
            setCounter(count - 1);
            setColorClass('clsColorDecrease');    
        }
    };

    const reset = () =>{
        setCounter(0);
        setColorClass('clsColorReset');
        
    };
    return(
        <div className="container">

            <h1>contador de clicks</h1>

            <div className="parrafo">
                <p className={colorClass}>hiciste click {count} veces</p>
            </div>

            <div className="ContainerBotones">
                <button onClick={incremet}>incrementar</button>
                <br/>
                <br/>
                <button onClick={decrease}>decrementar</button>
                <br />
                <br />
                <button onClick={reset}>reiniciar</button>
            </div>
        </div>
    );
}

export default Counter;