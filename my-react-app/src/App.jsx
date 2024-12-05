import './App.css';
import Usuario from './components/Usuario';
import imgUsuario1 from './assets/oscar.jpeg';
import imgUsuario2 from './assets/images.png';


const App =() =>{

  

  return(
    <div className='App'>
      <Usuario
      Name='Oscar Burbano'
      userName= 'Nacano'
      imgUsuario ={imgUsuario1}
      />

      <Usuario
      Name='Felipe Benavides'
      userName= 'pip3'
      imgUsuario={imgUsuario2}
      />
    </div>
  )  

}

export default App;
