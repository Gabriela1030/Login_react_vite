import React from 'react';
import '../../estilos/RegisterForm.css';
import logo from '../../img/logologo.png';

const RegisterForm = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <img src={logo} alt="ACCOEFI LOGO" className="nav-brand" />
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
