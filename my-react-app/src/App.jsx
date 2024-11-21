
import './App.css';

// Componente Padre
function ParentComponent() {
  const handleCustomEvent = (data) => {
    console.log('Evento personalizado disparado:', data);
  };

  return (
    <ChildComponent onCustomEvent={handleCustomEvent} />
  );
}

// Componente Hijo
function ChildComponent({ onCustomEvent }) {
  const handleClick = () => {
    onCustomEvent('Hola desde el componente hijo');
  };

  return (
    <button onClick={handleClick}>Disparar evento</button>
  );
}

export default ParentComponent;
