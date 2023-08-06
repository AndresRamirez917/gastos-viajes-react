import React from 'react'

const Boton = () => {
    const nuevoViaje = () =>{
     alert("Nuevo Viaje")
    }
  return (
    <>
    <div className='boton'>
        <button className="botonMuestra" onClick={nuevoViaje}>Enviar</button>
    </div>
    </>
  )
}

export default Boton