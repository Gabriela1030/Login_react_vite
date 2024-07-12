import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../estilos/LoginForm.css';
import logo from '../../img/logologo.png';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    navigate('/interfaz');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <img src={logo} alt="ACCOEFI LOGO" className="nav-brand" />
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
        </div>
        <div className="forgot-password">¿Olvidó su contraseña?</div>
        <button type="submit">Iniciar Sesión</button>
        <div className="register-link">
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

