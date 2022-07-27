import React from "react";
import "../steelsheet/botonClear.css"

const BotonClear = (props) => (
    <div className="boton-clear" 
    onClick={() => props.manejarClear(props.children)}>
        {props.children}
    </div>
//la funcion
);
export default BotonClear;