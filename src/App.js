import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Componente principal de la aplicación
function App() {
  // Mejora opcional: Uso de estado para una funcionalidad interactiva
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Proyecto Módulo 6 - Despliegue Vercel</h1>
        <p>Integración y despliegue continuo configurados correctamente.</p>
        
        {/* Mejora opcional: Tarjeta interactiva y estilos personalizados */}
        <div className="tarjeta-interactiva">
          <p>Has hecho clic {contador} veces</p>
          <button 
            className="boton-personalizado" 
            onClick={() => setContador(contador + 1)}
          >
            Sumar clic
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
