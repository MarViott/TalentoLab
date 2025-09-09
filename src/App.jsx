import './App.css'
import { MiBoton } from './components/MiBoton.jsx'

function App() {  

  return (
    <>
    <h1 className="titulo"> 
    Clobrand</h1>
    <h2>Clothes and Accessories for your soul</h2>
    <MiBoton text='New in' color='blue'/>
    <MiBoton text='Shop' color='yellow'/>
    <MiBoton text='Coleccions' color='green'/>
    <hr />
    <h2>Productos</h2>
    <ListaProductos />
        <div>
         <Tarjeta
          titulo="Abrigos"
          descripcion="Abrigos de lana para el invierno"
          imagenUrl="https://example.com/abrigo.jpg"
          botonTexto="Comprar"
          />

          <Tarjeta
          titulo="Remeras"
          descripcion="Remeras de algodón orgánicos"
          imagenUrl="https://example.com/remera.jpg"
          botonTexto="Comprar"
          />

          <Tarjeta
          titulo="Chaqueta"
          descripcion="Chaqueta impermeable para todas las estaciones"
          imagenUrl="https://example.com/chaqueta.jpg"
          botonTexto="Comprar"
          />
          
          <Tarjeta
          titulo="Accesorios"
          descripcion="Accesorios de moda para complementar tu look"
          imagenUrl="https://example.com/accesorios.jpg"
          botonTexto="Comprar"
          />

     </div>
        
    </>
  )
  }
export default App

function Subtitulo() {
  return (
    <div>by LA CLO</div>
  )
}
export {Subtitulo}

function Boton () {
  return (
    <button onCkick={() => alert('Suscripcion realizada') }>Suscribirse</button>
  )   
} export {Boton}

