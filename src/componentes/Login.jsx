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
      setErrorMessage('Please fill in all fields.');
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
      <h2 class="login-title">Sign In</h2>
      <form class="login-form">
        {errorMessage && <p class="error-message">{errorMessage}</p>}
        <div class="form-group">
          <label class="form-label" htmlFor="username">Username:</label>
          <input type="text" id="username" class="form-input" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div class="form-group">
          <label class="form-label" htmlFor="password">Password:</label>
          <input type="password" id="password" class="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="button-group">
          <button type="button" class="login-button"n onClick={handleLogin}>
            Sign In
          </button>
          <button type="button" class="register-button" onClick={() => setRedirectToRegistro(true)}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;