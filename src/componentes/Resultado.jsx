import React from 'react'

const Resultado = (props) => {
  return (
    
    <>
{props.kms>0 && props.gas!=="" && props.gas>0?
        <div>El costo de la gasolina ida y vuela tiene un valor aproximado de ${props.converDivisa(((+props.precioKm) + (+props.totalGasolina)).toFixed(0))} pesos</div>
        :console.log("")
      }  

{props.totalpeajes>1 && props.gas!=="" && props.gas>0?
      <div>Número de peajes calculado {Number(((props.inputKilometros)/84).toFixed(0))*2}, su costo es de ${props.converDivisa(props.peajes*2)} pesos, para un total de ${props.converDivisa(Number(((+props.precioKm) + (+props.totalGasolina)).toFixed(0)) + (Number(props.peajes*2)))} pesos</div>
      :console.log("")
      }
    </>
  )
}



export default Resultado