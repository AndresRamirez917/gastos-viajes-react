import React from 'react'

const BotonPrecioPeaje = (props) => {
 
    const nuevoPrecio = (e) => {
        e.preventDefault();
        props.sVPeaje(15000)
    }

  return (
   <button onClick={nuevoPrecio} className='boton'>Precio peaje</button>
  )
}

export default BotonPrecioPeaje