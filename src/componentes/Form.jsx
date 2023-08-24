import React, { useContext, useEffect, useRef, useState } from "react";
import '../../src/App.css'
import '../../src/mobile.css'
import Footer from "./Footer";
import BotonCalcula from "./BotonCalcula";
import Resultado from "./Resultado";
import { Contexto } from "../contexto/Contexto";
import BotonPrecioPeaje from "./BotonPrecioPeaje";
import Navbar from "./Navbar";
import UseWeather from "../hooks/UseWeather";

const Form = () => {
  // Declaración de constantes y variables
  const [input, setInput] = React.useState({
    num1: "",
    num2: ""
  });

  const [resultado, setResultado] = useState();
  const [peajes, setPeajes] = useState();
  const [valPeaje, setValorPeaje] = useState(12300);
  let inputKilometros = ((input.num1))
  let totalpeajes=(((inputKilometros)/84).toFixed(2))
  const inputRef = useRef(null);
  const regexp =/^[0-9/s]+$/g
  const [data, loading, error] = UseWeather("Fresno")



  let precioKm = (((((input.num2)*13.2)/4)/10)/10)
  //console.log("precio kms " + precioKm)
  let totalGasolina = (parseInt(input.num1)*precioKm)*2;

  // Declaración de funciones
  useEffect(()=>{
    //let valPeaje = 12000;
     let inputKilometros = ((input.num1))
     let totalpeajes=Math.round(((inputKilometros*100)/100)/84).toFixed(2)
     //console.table(totalpeajes, totalpeajes)
     let totpeajes = totalpeajes
     //console.log("número total de peajes " + totpeajes)
     setPeajes(Math.round((totalpeajes*100)/100)*valPeaje)
 //console.log("precio " + peajes)
  })

  const converDivisa = function(valor){
    return new Intl.NumberFormat("es-CO").format(valor)
    }

    const nombre = "lok"

    //código 1

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

  function  irGoogle (){
    return(Swal.fire({
      icon: "info",
      title: "Atención",
      text: "Será redirigido a Google Maps",
      showConfirmButton: false,
      timer: 2000,
    }))
    
  }
//color que usará el valor de setColor desde BotonCalcula
const {color} = useContext(Contexto)

  return (
    
    <>

    {/* <div className="backgrd" > */}
      <div className="container">
        <div className="wrapper">
        <img id="carro2" src="kisspng-car-clip-art-audi-q3-car-5a74c1dadf5c36.7852431415176012429149 (1).png" alt=""></img>
        
        <div className="caja" style={{backgroundColor:color}}> 
        <h1 className="titulo">Cálculo gastos gasolina y peajes</h1>   

            {console.log(data)}
        {data && (
        <div className="infoFresno">
          <p>Temperatura en {data.city}: {data.temp}º</p>
          <p className="clima">Cielo: {(data.estado==="overcast clouds"
          ?"Nublado"
          :data.estado==="broken clouds"
          ?"Nubes Dispersas"
          :null)}</p> 
          {console.log(data.estado)}
          {/* <p>Temperatura: {data.temp}º</p> */}
          {/* <p>Temp mínima: {data.temp_min}º</p>
          <p>Temp máxima: {data.temp_max}º</p>
          <p>humedad: {data.humedad}%</p> */}
        </div>
      )}    
     
        <div>
            <a onClick={irGoogle} class="mensaje" id="mensaje" href="https://www.google.com/maps/dir/Fresno,+Tolima//@5.1520983,-75.0713318,13z/data=!4m9!4m8!1m5!1m1!1s0x8e474bbfe89f4c4f:0xb67f73a83b215206!2m2!1d-75.036312!2d5.1520138!1m0!3e0">Ir a Google maps</a>
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
            <div> 
                      
                      <label htmlFor="kilo">Ingrese el número de kilómetros</label>
                      </div>
        <input autoFocus ref={inputRef} id="kilo" name="num1" value ={input.num1} type="text" className="inpt"  onChange={handleInput} required:true 
        placeholder = "Kilómetros"   
       />           
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
        <div>
        <label htmlFor="gas">Ingrese el valor de la gasolina</label>
        </div>
      <input id="gas" className="inpt" name="num2" value ={input.num2} type="text" onChange={handleInput} placeholder = "Precio gasolina"  
     />

      </div>
      {/* <button  className="boton" onClick={calcular}>Nuevo viaje</button> */}
      <div>
       <BotonCalcula kms={input.num1} gas={input.num2} refe={inputRef} setData={setInput}/>
       <BotonPrecioPeaje vPeaje={valPeaje} sVPeaje={setValorPeaje}/>
       </div>
     
      <div className="caja-text">
     {/* código 2 */}
      { <Resultado kms={input.num1} gas={input.num2} totalpeajes={totalpeajes} peajes={peajes} precioKm={precioKm} totalGasolina={totalGasolina} converDivisa={converDivisa} inputKilometros={inputKilometros}/>}
      </div>
       
        </div>
        <Footer/>
        </div>
      </div>
      {/* </div> */}

    </>
    
  );
};

export default Form;
 //código 1

 // const calcular = (e) => {
  //   e.preventDefault()
  //   if(input.num1 == 0 || input.num2 == 0){
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "No se permiten campos vacíos, ni operaciones con 0",
  //       showConfirmButton: false,
  //       timer: 2000,
  //     });
  //     setResultado("") 
  //   }else{
  //     setResultado((+precioKm) + (+totalGasolina)+(peajes))
  //       input.num1 = "";
  //       focus()
  //       resetField(input.num2);
  //       inputRef.current.focus() 
  //       setFocus()
  //   }
  // };






//código 2
 {/* {input.num1>0 && input.num2!=="" && input.num2>0?
        <div>El costo de la gasolina ida y vuela tiene un valor aproximado de ${converDivisa(((+precioKm) + (+totalGasolina)).toFixed(0))} pesos</div>
        :console.log("")
      }  

{totalpeajes>1 && input.num2!=="" && input.num2>0?
      <div>Número de peajes calculado {Number(((inputKilometros)/84).toFixed(0))*2}, su costo es de ${converDivisa(peajes*2)} pesos, para un total de ${converDivisa(Number(((+precioKm) + (+totalGasolina)).toFixed(0)) + (Number(peajes*2)))} pesos</div>
      :console.log("")
      } */}