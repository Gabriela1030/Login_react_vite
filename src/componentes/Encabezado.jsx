import React from 'react';
import '../estilos/Encabezado.css'; // Asegúrate de que la ruta sea correcta

const Encabezado = () => {
  return (
    <header>
      <nav className="nav-main">
        <img src="../img/logologo.png" alt="ACCOEFI LOGO" className="nav-brand" /> {/* Ajusta la ruta según la estructura de tu proyecto */}
        <ul className="nav-menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Planes y precios</a></li>
          <li><a href="#">Funcionalidades</a></li>
          <li><a href="#">Contáctanos</a></li>
          <li><a href="#">Inicio de sesión</a></li>
        </ul>
        <ul className="nav-menu">
          <li><a href="#"><i className="fas fa-search"></i></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Encabezado;

