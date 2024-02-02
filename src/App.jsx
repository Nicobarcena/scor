import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Home from './componentes/Home';
import Hola from "./componentes/Hola"
const App = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='./Hola' element={<Hola/>} />
      </Routes>
    </Router>
  );
};

export default App;