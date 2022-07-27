import React from "react";
import "../stylesheet/contador.css";


function Contador ({numClis}){//Volvemos a usa la sintaxis de destructuracion para pasar el numero de clics al componente en lugar de como props
    return(
        <div className="contador">
            {numClis}
        </div>
    )
}

export default Contador;