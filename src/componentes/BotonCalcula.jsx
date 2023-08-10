import React, { useContext, useEffect, useRef, useState } from "react";
import calcula from "../funciones/Calcular";
import { Contexto } from "../contexto/Contexto";
import { Datos } from "../contexto/Contexto";


const BotonCalcula = (props) => {
  const {setColor} = useContext(Contexto)
  const calcul = (e) => {
const inputKilo = document.getElementById("kilo").value=""
const inputGas =  document.getElementById("gas").value="" 
    e.preventDefault();
   
    if (((props.kms === "") || (props.gas === "")) || ((props.kms === undefined) || (props.gas === undefined))) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los campos no pueden estar vacíos ",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (props.kms == 0 || props.gas == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se permiten operaciones con cero",
        showConfirmButton: false,
        timer: 2000,
      });
    }else{
      focus();  
      props.setData("") 
cambiaColor()
    }     
  };

  const cambiaColor = ()=>{
    //setColor que viene desde el contexto
    setColor("#4285f4")
  }

  const focus = () => {    
    props.refe.current.focus();
  };

  return (
    <>
      <button className="boton" onClick={calcul}>
        Nuevo viaje
      </button> 
      
      </>
  );
};

export default BotonCalcula;
