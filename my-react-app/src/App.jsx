import './App.css';
import React, { useState, useEffect } from "react";

function SeasonalApp() {
  // Estado para manejar la estación actual
  const [season, setSeason] = useState("primavera");

  // Efecto para cambiar el fondo del cuerpo según la estación
  useEffect(() => {
    const body = document.body;

    // Aplicar clases de fondo según la estación
    body.className = ""; // Resetear clases anteriores
    body.classList.add(season);
  }, [season]); // Se ejecuta cada vez que `season` cambia

  // Función para cambiar la estación
  const changeSeason = (newSeason) => {
    setSeason(newSeason);
  };

  return (
    <div className="seasonal-app">
      <h1>Estaciones del Año</h1>
      <p>Estación actual: <strong>{season}</strong></p>
      <div className="buttons">
        <button onClick={() => changeSeason("primavera")}>Primavera</button>
        <button onClick={() => changeSeason("verano")}>Verano</button>
        <button onClick={() => changeSeason("otoño")}>Otoño</button>
        <button onClick={() => changeSeason("invierno")}>Invierno</button>
      </div>
    </div>
  );
}

export default SeasonalApp;
