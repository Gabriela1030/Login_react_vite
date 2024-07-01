import React from 'react';
import Encabezado from './componentes/Encabezado';
import PagWeb from './componentes/PagWeb';
import LoginForm from './componentes/LoginForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Encabezado /> {/* Encabezado primero */}
      <PagWeb /> {/* Contenido de la página después del encabezado */}
      <LoginForm /> {/* Formulario de inicio de sesión al final */}
    </div>
  );
};

export default App;
