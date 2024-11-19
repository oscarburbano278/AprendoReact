import React, { useState } from "react";

const App = () => {
  // Estado para almacenar todos los campos
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    title: "",
  });

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Obtén el nombre y el valor del input
    setFormData({ ...formData, [name]: value }); // Actualiza solo el campo correspondiente
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado de recargar la página
    console.log("Formulario enviado:", formData); // Aquí puedes procesar los datos
    alert(`Student added: ${formData.firstName} ${formData.lastName}, ${formData.country}, ${formData.title}`);
  };

  return (
    <div className="App">
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
