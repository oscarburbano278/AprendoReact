import React, { useState } from "react";
import './App.css';

const FormValidation = () => {
  // Estado para los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Estado para los errores del formulario
  const [errors, setErrors] = useState({});

  // Manejar el cambio en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado del formulario
    setFormData({ ...formData, [name]: value });

    // Limpiar errores mientras escribe
    setErrors({ ...errors, [name]: "" });
  };

  // Validar los campos del formulario
  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!formData.email) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo no es válido.";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    return newErrors;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      // Actualizar los errores si hay problemas
      setErrors(validationErrors);
    } else {
      // Aquí se puede enviar el formulario
      console.log("Formulario enviado con éxito:", formData);
      alert("Formulario enviado con éxito");
    }
  };

  return (
    <div className="App">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default FormValidation;
