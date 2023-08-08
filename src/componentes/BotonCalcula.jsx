import React, { useRef, useState } from "react";
import calcula from "../funciones/Calcular";

const BotonCalcula = (props) => {
  //const inputRef = useRef(null);
  const calcul = (e) => {

    const resetinputs = () =>{
      document.getElementById("kilo").value=""
      document.getElementById("gas").value=""
    } 
    e.preventDefault();

    if (props.kms == "" || props.gas == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "vacío",
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (props.kms == 0 || props.gas == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "cero",
        showConfirmButton: false,
        timer: 2000,
      });
    }else{
      focus();
      props.setData("")
      resetinputs()
    } 
     
  };

  const focus = () => {
    //inputRef es una variable declarada al inicio del código
    props.refe.current.focus();
  };

  return (
  
      <button className="boton" onClick={calcul}>
        Nuevo viaje
      </button>
    
  );
};

export default BotonCalcula;
