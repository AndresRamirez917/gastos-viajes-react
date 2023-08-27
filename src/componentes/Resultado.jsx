import React from 'react'

const Resultado = (props) => {
  let numPeajesCalculado = Number(Math.floor((props.inputKilometros)/84).toFixed(0))*2
  return (
    
    <>
{props.kms>0 && props.gas!=="" && props.gas>0?
        <div>El costo de la gasolina ida y vuelta tiene un valor aproximado de ${props.converDivisa(((+props.precioKm) + (+props.totalGasolina)).toFixed(0))} pesos</div>
        :null
      }  

{props.totalpeajes>1 && props.gas!=="" && props.gas>0?
      <div>Número de peajes calculado {Number(Math.floor((props.inputKilometros)/84).toFixed(0))*2}, su costo es de ${props.converDivisa(Number(props.peajes*numPeajesCalculado))} pesos, para un total de ${props.converDivisa(Number(((+props.precioKm) + (+props.totalGasolina)).toFixed(0)) + (Number(props.peajes*numPeajesCalculado)))} pesos</div>
      :null
      }
    </>
  )
}



export default Resultado