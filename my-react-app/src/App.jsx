import React, { useState } from "react";
import "./App.css";

const App = () =>{
  
  const[firstName, setFirstName] = useState("");
  

  const handleChange = (e) => {
    setFirstName(e.target.value)
    
  };

    
    return (
      <div className='App'>
        <h3>digita un enunciado en el campo de texto, para que por medio del 
          evento onChange y el uso de hooks 'useState' se muestre automaticamente 
        </h3>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={handleChange}
        />
        <h1>{firstName}</h1>
      </div>
    );  
}

export default App;