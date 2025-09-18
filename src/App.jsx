import React, { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/header.jsx';
import Nav from './components/nav.jsx';
import Footer from './components/footer.jsx';
import Home from './components/pages/Home.jsx';
import Empresas from './components/pages/Empresas.jsx';
import Instituciones from './components/pages/Instituciones.jsx';
import Contacto from './components/pages/Contacto.jsx';
import Registrate from './components/pages/Registrate.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'empresas':
        return <Empresas />;
      case 'instituciones':
        return <Instituciones />;
      case 'contacto':
        return <Contacto />;
      case 'registrate':
        return <Registrate />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <ol style={{ listStyle: "none", display: "flex", justifyContent: "space-evenly", margin: 10 }}>  
          <li><a href="#" onClick={() => setCurrentPage('registrate')} style={{ color: "black", textDecoration: "none" }}>Registrate</a></li>  
          <li><a href="#" onClick={() => setCurrentPage('contacto')} style={{ color: "black", textDecoration: "none" }}>Contacto</a></li>  
          <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Carrito</a></li>  
        </ol>         
      </header>
      
      <Header />
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="app-main">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

