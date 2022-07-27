import React from 'react';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import logo from './imagenes/fotomiguel.jpeg';
import {useState} from "react"; // AQUI SE IMPORTAN LOS HOOKS ¡¡¡¡¡IMPORTANTE!!!!!

function App() {

  const [numClis,setNumClics] = useState(0);//este hook sirve para realizar el contador del clics,
  //lo asignamos a useState y se le pasa el valor incial 0
  
  const manejarClic = () =>{
    setNumClics(numClis+1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  
  return (
    <div className="App">
      <div className='imagen-logo-contenedor'>
        <img
          className='logo'
          src={logo}
          alt='Logo pagina'
        />
      </div>
      <div className='contenedor-contador'>
      <Contador
        numClis={numClis}/>

        <Boton //BOTON ES UN COMPONENTE DEFINIDO EN boton.js el cual recibe los 3 props definidos  en el js
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}//Estoy pasando la funcion como prop
          />

        <Boton
        texto="Reinciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}//Estoy pasando la funcion como prop
        />
        

      
      </div>
    </div>
  );
}

export default App;
