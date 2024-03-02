import React, { useState } from 'react'
import "./Registro.css"

const Registro = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correoElectronico, setCorreoElectronico] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)

  const handleRegistro = (e) => {
    e.preventDefault()
    if (!nombre || !apellido || !correoElectronico) {
      setErrorMessage('Por favor complete todos los datos')
      return
    }

    if (redirectToHome) {
      window.location.href = '/home'
    }
  }

  return (
    <div className='conteiner-r'>
      <h1 className='text-shadow'>Hola Bienvenidos a <br />LeadrerBox</h1>
      <form className='formulario' onSubmit={handleRegistro}>
        <label className='label'>
          Nombre
          <input
            type="text"
            name='nombre'
            placeholder='Nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label className='label'>
          Apellido
          <input
            type="text"
            name="apellido"
            placeholder='Apellido'
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </label>
        <label className='label'>
          Correo Electrónico
          <input
            type="email"
            name="correoElectronico"
            placeholder='ingrese su email'
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
          />
        </label>
        <button className='btn-registro' type="submit" onClick={() => setRedirectToHome(true)}>
          Registrarse
        </button>
      </form>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </div>
  )
}

export default Registro