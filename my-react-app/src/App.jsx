//import Boton from './Componente/Boton'

import Header from './Componente/Header';
import Aside from './Componente/Aside';
import './App.css'
import Boton from './Componente/Boton';

function App() {

  return (
    <div className="App">

      <div className="containerHeader">      
        <Header 
        title = 'SUSCRIBETE'
        description='incribete con tu direccion de email'
        />
        
      </div>
      

      <div className="contenedorCuerpo">
          <Aside type='text' placehold='firsName'/>
          <Aside type='text' placehold='lastName'/>
          <Aside type='email' placehold='Email'/>
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
