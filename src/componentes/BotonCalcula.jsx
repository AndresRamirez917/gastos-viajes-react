import React, { useState } from 'react'
//import calcula from "../funciones/Calcular";

const calcula = (e) => {
    e.preventDefault()

     if((input.num1 == "") || (input.num2 == "")){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se permiten letras ni signos",
            showConfirmButton: false,
            timer: 2000,
          });
          alert("madre")
    }else{
       alert("madre")
    }
  };


const BotonCalcula = () => {
    const [input, setInput] = useState({
    num1:"",
    mum2:""
})
  return (
    <div className='boton'>
          <button  className="boton" onClick={calcula}>Nuevo </button>
    </div>
  )
}

export default BotonCalcula