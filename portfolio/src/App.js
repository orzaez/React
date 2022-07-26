import './App.css';//importamos el archivo css
import Portfolio from './componentes/portofolio.js';//importamos portfolio


function App() {//Componente principal llamado App que esta renderizando a Portfolio x ejemplo
  return (
    <div className="App">
      <div className='contenedor-inicio'>
      <Portfolio 
      nombre="Miguel Orzáez Pintor."
      cargo="Administrador de Sistemas y Estudiante de Ingeniera Informatica."
      descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      imagen="fotomiguel"
      nombreimagen="Miguel"
      /> 
      <Portfolio 
      nombre="Miguel Orzáez Pintor."
      cargo="Administrador de Sistemas y Estudiante de Ingeniera Informatica."
      descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      imagen="fotomiguel"
      nombreimagen="Pedro"
      /> 
      <Portfolio 
      nombre="Miguel Orzáez Pintor."
      cargo="Administrador de Sistemas y Estudiante de Ingeniera Informatica."
      descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      imagen="fotomiguel"
      /> 
      </div>
    </div>
  );
}

export default App;//mostramos aplicacion
