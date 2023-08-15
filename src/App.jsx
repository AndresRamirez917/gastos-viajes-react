import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './componentes/Boton'
import Form from './componentes/Form'
import Footer from './componentes/Footer'
//import backimage from "../public/mapa-parques-de-santander-pyej1zploo0n09itfjpdc54l4xwkflmal0rws6u96o.jpg"
import calcular from './funciones/Calcular'
import { Contexto } from './contexto/Contexto'
import { Datos } from './contexto/Contexto'
import BotonCalcula from './componentes/BotonCalcula'

function App() {
  const saludar = () =>{
    console.log("Saludo desde el segundo botón")
  }

  return (
    <>
    <div className='container'>
   <Datos>
    
   <Form />
   
    </Datos>
    </div>
    </>
  )
}

export default App
