import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='contenedor'>
      <h1>Bienvenidos</h1>
      <nav className='navbar'>
        <ul className='nav-items'>
          <Link className='links' to="/">Inicio</Link>
          <Link className='links' to="/leardoard">Leardoard</Link>
          <Link className='links' to="/Categorias">Categorias</Link>
          <Link className='links' to="/Wods">Work Outs</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Home