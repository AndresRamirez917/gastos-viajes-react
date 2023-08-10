import React, { useContext } from 'react'

const PagEjeContext = () => {
    const {color} = useContext(Contexto)
  return (
    <div>
        <h1>{color}</h1>
    </div>
  )
}

export default PagEjeContext