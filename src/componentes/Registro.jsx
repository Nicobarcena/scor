import React from 'react'
import "./Registro.css"
const Registro = () => {
  return (
    <div>
        <h1>Hola Bienvenidos a <br />LeadrerBox</h1>
        <form>
            <label>
            Nombre
            <input type="text" name='nombre' placeholder='Nombre' />
            </label>
            <label>
                Apellido
                <input type="text" name="Apellido" placeholder='Apellido' />
            </label>
            <label>
                Correo Electronico
                <input type="email" name="CorreoElectronico" placeholder='ingrese su email'/>
            </label>
        </form>
    </div>
  )
}

export default Registro