import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='contenedor'>
      <h1>Bienvenidos</h1>
      <nav className='navbar'>
        <ul className='nav-items'>
          <Link className='links' hrefLang='/'>Inicio</Link>
          <Link className='links' hrefLang='/'>Leardoard</Link>
          <Link className='links' hrefLang='/'>Categorias</Link>
          <Link className='links' Navigate to="/Hola">Work Outs</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Home