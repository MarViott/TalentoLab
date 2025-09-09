import './App.css'
import { MiBoton } from './MiBoton.jsx'

function App() {  

  return (
    <>
    <h1 className="titulo"> 
    Clobrand</h1>
    <h2>Clothes and Accessories for your soul</h2>
    <MiBoton text='New in' color='blue'/>
    <MiBoton text='Shop' color='yellow'/>
    <MiBoton text='Coleccions' color='green'/>
        <div>
         <Tarjeta
          titulo="Camiseta"
          descripcion="Camiseta de algodón 100% orgánico"
          imagenUrl="https://example.com/camiseta.jpg"
          botonTexto="Comprar"
          />

          <Tarjeta
          titulo="Pantalones"
          descripcion="Pantalones vaqueros de corte clásico"
          imagenUrl="https://example.com/pantalones.jpg"
          botonTexto="Comprar"
          />

          <Tarjeta
          titulo="Chaqueta"
          descripcion="Chaqueta impermeable para todas las estaciones"
          imagenUrl="https://example.com/chaqueta.jpg"
          botonTexto="Comprar"
          />
          
          <Tarjeta
          titulo="Zapatos"
          descripcion="Zapatos deportivos cómodos y elegantes"
          imagenUrl="https://example.com/zapatos.jpg"
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

