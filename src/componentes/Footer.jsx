import React, { useContext } from 'react'
import { Contexto } from '../contexto/Contexto'

const Footer = () => {
  const {color} = useContext(Contexto)
  const {setColor} = useContext(Contexto)
  return (
    <div className='footer' style={{backgroundColor:color}}>
        <h3>Desarrollado por Andrés Ramirez</h3>
      
            <p>Todos los derechos reservados</p>
        
    </div>
  )
}

export default Footer