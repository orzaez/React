import './App.css';//importamos el archivo css
import Portfolio from './componentes/portofolio.js';//importamos portfolio


function App() {//Componente principal llamado App que esta renderizando a Portfolio x ejemplo
  return (
    <div className="App">
      <div className='contenedor-inicio'>
      <Portfolio /> 
      </div>
    </div>
  );
}

export default App;//mostramos aplicacion
