import React from 'react';
//import Boton from './Componente/Boton'
import Header from './Componente/Header';
import Aside from './Componente/Aside';
import html5 from './assets/html5.png';
import css3 from './assets/css3.png';
import js from './assets/js.png';
import logoR from './assets/logoReact.png';
import './App.css'

function App() {

  return (
    <div className="contenedor">

      <div className="contenedorEncabezado">

        <Header titulo = 'Soy desarrollador Front end'/>
        
      </div>
      <div className="contenedorAside">
        <Aside imagen={html5} />
        <Aside imagen={css3} />
        <Aside imagen={js} />
        <Aside imagen={logoR} />
        
      </div>

    </div> 
  );
  
}

export default App
