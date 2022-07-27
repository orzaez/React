import React from "react";
import "../steelsheet/pantalla.css"

const Pantalla = ({input}) => (//aqui estoy definiendo un componente como una constante, esto se hace para componentes mas sencillos sin mucha logica 

    <div className="input">
        {input}
    </div>

);
export default Pantalla;