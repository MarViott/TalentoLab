import React from 'react';
import './App.css';
import './index.css';
import { CartProvider } from './contexts/CartContext.jsx';
import { MiBoton } from './components/MiBoton.jsx';
import Header from './components/header.jsx';
import Nav from './components/nav.jsx';
import Main from './components/Main.jsx';
import Gallery from './components/gallery.jsx';
import Footer from './components/footer.jsx';
import EquipoTalentoLab from './components/EquipoTalentoLab.jsx';
import TarjetaProyecto from './components/TarjetaProyecto.jsx';
import Contacto from './components/Contacto.jsx';
import Registrate from './components/Registrate.jsx';
import Empresas from './components/Empresas.jsx';
import Instituciones from './components/Instituciones.jsx';
import Cart from './components/Cart.jsx';

function App() {
  const equipo = [
    { 
      nombre: 'Ana',
      descripcion: 'Desarrolladora Frontend',
      imagen: 'https://picsum.photos/id/1011/200/200'
    },
    { 
      nombre: 'Luis',
      descripcion: 'Desarrollador Backend',
      imagen: 'https://picsum.photos/id/1012/200/200'
    },
    { 
      nombre: 'Marta',
      descripcion: 'Diseñadora UX/UI',
      imagen: 'https://picsum.photos/id/1013/200/200'
    },
    { 
      nombre: 'Carlos',
      descripcion: 'Project Manager',
      imagen: 'https://picsum.photos/id/1014/200/200'
    },
    { 
      nombre: 'Sofía',
      descripcion: 'Especialista en Marketing',
      imagen: 'https://picsum.photos/id/1015/200/200'
    },
    { 
      nombre: 'Javier',
      descripcion: 'DevOps',
      imagen: 'https://picsum.photos/id/1016/200/200'
    }
  ];


  const intereses = ['Tecnología', 'Deporte', 'Arte', 'Música', 'Lectura'];

  return (
    <CartProvider>
      <div className="app-container">
        <Cart />
        <header className="app-header">
        <ol style={{ listStyle: "none", display: "flex", justifyContent: "space-evenly", margin: 10 }}>  
                  <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Registrate</a></li>  
                  <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Contacto</a></li>  
                  <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Carrito</a></li>  
              </ol>         
        </header>
        
        <main className="app-main">
          <Header />
          <Nav />
          <Main />
          <Gallery />
          
          <section className="section-instituciones">
            <Instituciones />
          </section>
          
          <section className="section-equipo">
            
            <h2>Nuestro Equipo</h2>         
            <EquipoTalentoLab equipo={equipo} />
          </section>       

          <Empresas />
          
          <section className="section-proyectos">
            <h2>Proyectos</h2>
            <TarjetaProyecto 
              titulo="Proyecto Web Accesible" 
              descripcion="Desarrollamos una plataforma web accesible para personas con discapacidades." 
              botonTexto="Explorar" 
            />
          </section>
          
          <section className="section-acciones">
            <MiBoton 
              texto="Click me" 
              color="#007bff"
              onClick={() => alert('¡Botón clickeado!')} 
            />
          </section>
          <section className="section-registro">
            <h2>Regístrate</h2>
            <Registrate />
          </section>
          <section className="section-contacto">
            <h2>Contacto</h2>
            <Contacto />
          </section>
         
            
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

