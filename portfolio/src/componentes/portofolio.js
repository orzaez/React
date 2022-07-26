import React from "react";
import "../stylesheet/inicio.css" ;

function Portfolio(props){//props son las propiedas del portfolio que nos permiten hacer las partes del mismo de forma dinamica
  return(
    <div className="contenedor-foto">
      <img className="foto" 
      src={require(`../imagenes/${props.imagen}.jpeg`)}//con llaves y require tambien se puede importar imagenen
      alt={`${props.nombreimagen}`} 
      />
      <div className="contenedor-nombre-descripcion">
        <p className="nombre">
          <strong>{props.nombre}</strong>
          </p>
        <p className="estudios">
          {props.cargo}
          </p>
        <p className="descripcion">
          {props.descripcion}
          </p> 
      </div>
    
    </div>
  );
}
export default Portfolio;//Exporto Portfolio a App.js -> ESTA IMPORTADO EN LA CABECERA DE APP.js