import React, { useEffect, useRef, useState } from "react";
import '../../src/App.css'
import Boton from "./Boton";
import Footer from "./Footer";
import BotonCalcula from "./BotonCalcula";

//import backimage from "../../public/mapa-parques-de-santander-pyej1zploo0n09itfjpdc54l4xwkflmal0rws6u96o.jpg"


const Form = () => {
  // Declaración de constantes y variables
  const [input, setInput] = React.useState({
    num1: "",
    num2: ""
  });

  const [resultado, setResultado] = useState();
  const [peajes, setPeajes] = useState();
  let inputKilometros = ((input.num1))
  let totalpeajes=(((inputKilometros)/84).toFixed(2))
  const inputRef = useRef(null);
  const regexp =/^[0-9]+$/

  let precioKm = (((((input.num2)*13.2)/4)/10)/10)
  console.log("precio kms " + precioKm)
  let totalGasolina = (parseInt(input.num1)*precioKm)*2;

  // Declaración de funciones
  useEffect(()=>{
    let valPeaje = 12000;
     let inputKilometros = ((input.num1))
     let totalpeajes=Math.round(((inputKilometros*100)/100)/84).toFixed(2)
     console.table(totalpeajes, totalpeajes)
     let totpeajes = totalpeajes
     console.log("número total de peajes " + totpeajes)
     setPeajes(Math.round((totalpeajes*100)/100)*valPeaje)
 console.log("precio " + peajes)
  })

  const converDivisa = function(valor){
    return new Intl.NumberFormat("es-CO").format(valor)
    }

  const calcular = (e) => {
    e.preventDefault()
    if(input.num1 == 0 || input.num2 == 0){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se permiten campos vacíos, ni operaciones con 0",
        showConfirmButton: false,
        timer: 2000,
      });
      setResultado("") 
    }else{
      setResultado((+precioKm) + (+totalGasolina)+(peajes))
        input.num1 = "";
        focus()
        resetField(input.num2);
        inputRef.current.focus() 
        setFocus()
    }
  };

  const handleInput = function (e) {
  if(!e.target.value.match(regexp)){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se permiten letras ni signos",
      showConfirmButton: false,
      timer: 2000,
    });
  }else{
    setInput({
      ...input,
      [e.target.name]: e.target.value     
    });
  }
 }

  const focus = () =>{
    //inputRef es una variable declarada al inicio del código
    {inputRef.current.focus()}
  }

  return (
    <>
    <div className="backgrd">
      <div className="containe">
        <img id="carro2" src="kisspng-car-clip-art-audi-q3-car-5a74c1dadf5c36.7852431415176012429149 (1).png" alt=""></img>
        <div className="caja"> 
        <h1 className="titulo">Cálculo gastos gasolina y peajes</h1>       
        <form>
            <div> 
                      
            <label htmlFor="kilo">Ingrese el número de kilómetros</label>
            </div>
            <div>
            <a class="mensaje" id="mensaje" target="_blank" href="https://www.google.com/maps/dir/Fresno,+Tolima//@5.1520983,-75.0713318,13z/data=!4m9!4m8!1m5!1m1!1s0x8e474bbfe89f4c4f:0xb67f73a83b215206!2m2!1d-75.036312!2d5.1520138!1m0!3e0">Ir a Google maps</a>
            </div>
            <div className="aviso">
              {input.num1 === ""
              ?<div>El campo está vacio</div>
              :input.num1==0?
              <div>El campo no puede ser cero</div>
              :null
              }
               
              </div>
            <div>
        <input autoFocus ref={inputRef} id="kilo" name="num1" value ={input.num1} type="text" className="inpt"  onChange={handleInput} required:true 
        placeholder = "Kilómetros"   
       />           
        </div>
        
        <div>
        <label htmlFor="gas">Ingrese el valor de la gasolina</label>
        </div>
        <div className="aviso">
             {input.num2 === ""
              ?<div>El campo está vacío</div>
              :input.num2==0?
              <div>El campo no puede ser cero</div>
              :null
              }
        </div>
        <div>
      <input id="gas" className="inpt" name="num2" value ={input.num2} type="text" onChange={handleInput} placeholder = "Precio gasolina"  
     />

      </div>
      <button  className="boton" onClick={calcular}>Nuevo viaje</button>
      {/* <BotonCalcula/> */}
     
      <div className="caja-text">
      {input.num1>0 && input.num2!=="" && input.num2>0?
        <div>El costo de la gasolina ida y vuela tiene un valor aproximado de ${converDivisa(((+precioKm) + (+totalGasolina)).toFixed(0))} pesos</div>
        :console.log("")
      }  

{totalpeajes>1 && input.num2!=="" && input.num2>0?
      <div>Número de peajes calculado {Number(((inputKilometros)/84).toFixed(0))*2}, su costo es de ${converDivisa(peajes*2)} pesos, para un total de ${converDivisa(Number(((+precioKm) + (+totalGasolina)).toFixed(0)) + (Number(peajes*2)))} pesos</div>
      :console.log("")
      }

      </div>
       </form> 
        </div>
        <Footer/>
      </div>
      </div>
    </>
  );
};

export default Form;

