import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [redirectToRegistro, setRedirectToRegistro] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setRedirectToHome(true);
    } else {
      setErrorMessage('Por favor complete todos los datos');
    }
  };

  if (redirectToHome) {
    return <Navigate to="/home" />;
  }
  if (redirectToRegistro) {
    return <Navigate to="/Registro" />;
  }

  return (
    <div class="login-container">
      <h2 class="login-title">Inicio de sesion</h2>
      <form class="login-form">
        {errorMessage && <p class="error-message">{errorMessage}</p>}
        <div class="form-group">
          <label class="form-label" htmlFor="username">Usuario:</label>
          <input type="text" id="username" class="form-input" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div class="form-group">
          <label class="form-label" htmlFor="password">Contraseña:</label>
          <input type="password" id="password" class="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="button-group">
          <button type="button" class="login-button" onClick={handleLogin}>
            Iniciar
          </button>
          <button type="button" class="register-button" onClick={() => setRedirectToRegistro(true)}>
            Registarte
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;