import React from "react";
import "../stylesheet/inicio.css" ;

function Portfolio(){
  return(
    <div className="contenedor-foto">
      <img className="foto" 
      src={require("../imagenes/fotomiguel.jpeg")}//con llaves y require tambien se puede importar imagenen
      alt="Imagen mia"/>
      <div className=".contenedor-nombre-descripcion">
        <p className="nombre">Miguel Orzáez Pintor.</p>
        <p className="estudios">Administrador de Sistemas y estudiante de Ingeniera Informatica</p>
        <p className="descripcion">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p> 
      </div>
    
    </div>
  );
}
export default Portfolio;//Exporto Portfolio a App.js -> ESTA IMPORTADO EN LA CABECERA DE APP.js