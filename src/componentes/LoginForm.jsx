import React from 'react';
import Encabezado from './Encabezado'; // Importa el componente de Encabezado
import '../estilos/LoginForm.css'; // Asegúrate de que la ruta sea correcta

const LoginForm = () => {
  return (
    <div>
      <Encabezado /> {/* Agrega el encabezado al inicio del formulario */}
      <div className="login-container">
        <form className="login-form">
          <img src="../img/logo2.jpeg" alt="ACCOEFI LOGO" className="nav-brand" /> {/* Ajusta la ruta según la estructura de tu proyecto */}
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
            ¿No tienes una cuenta? <a href="#">Regístrate</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

