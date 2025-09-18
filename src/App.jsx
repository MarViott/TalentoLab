import React from 'react';
import './App.css';
import './index.css';
import { MiBoton } from './components/MiBoton.jsx';
import Header from './components/header.jsx';
import Nav from './components/nav.jsx';
import Main from './components/Main.jsx';
import Gallery from './components/gallery.jsx';
import Footer from './components/footer.jsx';
import ListaEquipo from './components/ListaEquipo.jsx';
import ListaUsuario from './components/ListaUsuarios.jsx';
import GaleriaIntereses from './components/GaleriaIntereses.jsx';
import TarjetaEquipo from './components/TarjetaEquipo.jsx';
import EquipoTalentoLab from './components/EquipoTalentoLab.jsx';
import TarjetaProyecto from './components/TarjetaProyecto.jsx';
import Formulario from './components/pages/Registrate.jsx';
import Contacto from './components/pages/Contacto.jsx';
import Registrate from './components/pages/Registrate.jsx';
import Empresas from './components/pages/Empresas.jsx';
import Instituciones from './components/pages/Instituciones.jsx';

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
    <div className="app-container">
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
        
        <Empresas />
        <Instituciones /> 
        
        <section className="section-equipo">
          
          <h2>Nuestro Equipo</h2>         
          <EquipoTalentoLab equipo={equipo} />
        </section>       

              
        
        <section className="section-intereses">
          <h2>Intereses</h2>
          <GaleriaIntereses intereses={intereses} />
        </section>
        
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
  );
}

export default App;

