import React from 'react';
import './App.css';
import './index.css';
import { MiBoton } from './components/MiBoton.jsx';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ListaEquipo from './components/ListaEquipo.jsx';
import ListaUsuario from './components/ListaUsuarios.jsx';
import GaleriaIntereses from './components/GaleriaIntereses.jsx';
import TarjetaEquipo from './components/TarjetaEquipo.jsx';
import EquipoTalentoLab from './components/EquipoTalentoLab.jsx';
import TarjetaProyecto from './components/TarjetaProyecto.jsx';

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
    }
  ];

  const usuarios = [
    { id: 1, nombre: 'Juan', descripcion: 'Usuario activo' },
    { id: 2, nombre: 'Maria', descripcion: 'Usuario inactivo' },
    { id: 3, nombre: 'Pedro', descripcion: 'Usuario premium' }
  ];

  const intereses = ['Tecnología', 'Deporte', 'Arte', 'Música', 'Lectura'];

  return (
    <div className="app-container">
      <header className="app-header">      
      </header>
      
      <main className="app-main">
        <Header />
        <Nav />
        <Main />
        <Gallery />
        
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
            titulo="Proyecto 1" 
            descripcion="Descripción del proyecto" 
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
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

