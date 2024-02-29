import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './componentes/Login';
import Home from './componentes/Home';
import Wods from './componentes/Wods';
import Categorias from "./componentes/Categorias"
import Leardoard from "./componentes/Leardoard"
import Registro from './componentes/Registro';
const App = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Wods" element={<Wods />} />
        <Route path='/Categorias' element={<Categorias/>}/>
        <Route path='/Leardoard' element = {<Leardoard/>}/>
        <Route path='/Registro' element ={<Registro/>}/>
      </Routes>
    </Router>
  );
};

export default App;