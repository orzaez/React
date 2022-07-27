import './App.css';
import logo from "./imagenes/fotomiguel.jpeg"
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import {useState} from "react";//IMPORTAMOS EL HOOK


function App() {

  const [input, setInput] = useState('');//

  const agregarInput= val => {
    setInput(input+ val);
  }


  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          src={logo}
          className="logo"
          alt="logo"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
      
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className="fila">
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className="fila">
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className="fila">
        <Boton>=</Boton>
        <Boton>0</Boton>
        <Boton>.</Boton>
        <Boton>/</Boton>
        </div>

        <div className="fila">
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          {/* Este componente recibe la funcion manejarClear que esta llamando a la funcion anonima () => SetInput
          
  
        */}
        </div>

      </div>
    </div>
  );
}

export default App;
