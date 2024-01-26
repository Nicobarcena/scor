import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./Login.css"
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);

    const handleLogin = () => {
    if (username && password) {
        setRedirectToHome(true);
    } else {
        alert('Por favor, complete todos los campos.');
    }
    };

    if (redirectToHome) {
    return <Navigate to="/home" />;
    }

    return (
        <div class="form-container">
        <h2>Iniciar sesión</h2>
        <form>
            <label>
            Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={handleLogin}>
            Ingresar
            </button>
        </form>
        </div>
        );
};

export default Login;

