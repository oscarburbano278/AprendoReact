//import Boton from './Componente/Boton'

import Encabezado from './Componente/HeaderTitle';
import Article from './Componente/Article';
import './App.css'
import Boton from './Componente/Boton';

function App() {

  return (
    <div className="App">

      <div className="containerHeader">      
        <Encabezado
        titulo = 'SUSCRIBETE'
        parrafo = 'inscribete con tu dirección de email'
        />
      </div>
      

      <div className="contenedorCuerpo">
          <Article placehold='firsName'/>
          <Article placehold='lastName'/>
          <Article placehold='Email'/>
      </div>

      <div className="containerBoton">
        <Boton>
          Subscribirse
        </Boton>
        
      </div>

     

    </div> 
  );
  
}

export default App
