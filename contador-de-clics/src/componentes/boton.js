import React from "react";
import "../stylesheet/boton.css";

//BOTON ES UN COMPONENTE QUE SE LE PASA 3 PROPS
function Boton({texto, esBotonDeClic, manejarClic}){//antes se usaba los props pero ahora se usa la sintaxis de destructuracion
  //le estoy pasando como props un texto, una clase que nos dice que tipo de boton es y una funcion event listener del onclick
    return(
        <button
            className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}
export default Boton; //Exportamos el boton, esta exportacion es por defecto y solo se puede exportar 1 elementos de la funcion