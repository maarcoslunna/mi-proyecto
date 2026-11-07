import logo from './logo.svg';
import './App.css';

// Componente principal de la aplicación
function App() {
  return (
    <div className="App">
      {/* Cabecera principal con el logo animado */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Mensaje personalizado para el proyecto */}
        <h1>Proyecto Módulo 6</h1>
        <p>
          Despliegue continuo configurado correctamente.
        </p>
        
        {/* Enlace de prueba */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

export default App;
