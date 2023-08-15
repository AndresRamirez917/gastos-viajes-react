import React, { useContext, useEffect, useRef, useState } from "react";
import calcula from "../funciones/Calcular";
import { Contexto } from "../contexto/Contexto";
import { Datos } from "../contexto/Contexto";


const BotonCalcula = (props) => {
  const {setColor} = useContext(Contexto)
  let arrayColors = [ "#aaaaa0", "#238923", "#010203", "#4285f4", '#6264c0','#b37f4d','#116dcc','#a8ce4b','#7ea6f8','#a94f89','#83be23','#6c8052','#d87e04','#d107f2',"#C0C0C0","#808080","#800000","#808000","#008000","#008080","#800080",

 ]
  let randomColor = Math.floor(Math.random()*arrayColors.length)
  let randomize = arrayColors[randomColor]
 
  const calcul = (e) => {
const inputKilo = document.getElementById("kilo").value=""
const inputGas =  document.getElementById("gas").value="" 

props.setData("")
    e.preventDefault();
   
    if ((props.kms === "" || props.gas === "") || ((props.kms === undefined) || (props.gas === undefined))) {
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
      props.setData('')
   
//alert(arrayColors[randomColor])
cambiaColor()

    }     
  };

  const cambiaColor = ()=>{
    //setColor que viene desde el contexto
    setColor(`${randomize}`)
    alert(randomize)
    console.log(randomize)
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
