import React, {createContext, useState} from "react";

export const Contexto = createContext();

export const Datos = ({ children }) =>{
    //constantes que se exportan para uso global de la aplicación
    const [color, setColor] = useState([])
    return(
        <Contexto.Provider value={{color,setColor}}>
            { children }
        </Contexto.Provider>
    )
}