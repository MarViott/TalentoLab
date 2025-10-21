import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import "./components/styles/Nav.css";
import { CartProvider } from "./contexts/CartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Inicio from "./components/Inicio.jsx";
import Login from "./components/login.jsx";
import { MiBoton } from "./components/MiBoton.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Gallery from "./components/gallery.jsx";
import Footer from "./components/footer.jsx";
import EquipoTalentoLab from "./components/EquipoTalentoLab.jsx";
import TarjetaProyecto from "./components/TarjetaProyecto.jsx";
import Contacto from "./components/Contacto.jsx";
import Registrate from "./components/Registrate.jsx";
import Empresas from "./components/Empresas.jsx";
import Instituciones from "./components/Instituciones.jsx";
import Cart from "./components/Cart.jsx";
import Pagar from "./components/Pagar.jsx";
import IniciarSesion from "./components/IniciarSesion.jsx";
import RutaProtegida from "./components/RutasProtegidas.jsx";

function App() {
  const equipo = [
    {
      nombre: "Ana",
      descripcion: "Desarrolladora Frontend",
      imagen: "./src/assets/img/female0.jpg",
    },
    {
      nombre: "Luis",
      descripcion: "Desarrollador Backend",
      imagen: "./src/assets/img/talents0.jpg",
    },
    {
      nombre: "Marta",
      descripcion: "Diseñadora UX/UI",
      imagen: "./src/assets/img/female2.jpg",
    },
    {
      nombre: "Carlos",
      descripcion: "Project Manager",
      imagen: "./src/assets/img/team3.jpg",
    },
    {
      nombre: "Sofía",
      descripcion: "Especialista en Marketing",
      imagen: "./src/assets/img/female3.jpg",
    },
    {
      nombre: "Javier",
      descripcion: "DevOps",
      imagen: "https://picsum.photos/id/1016/200/200",
    },
  ];

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <Header />
            <Nav />
            <Cart />

            <Routes>
              /* Rutas principales */
              <Route
                path="/"
                element={
                  <>
                    <Inicio />
                    <Main />
                    <Gallery />
                    <section className="section-equipo">
                      <h2 style={{ padding: "20px 280px" }}> Nuestro Equipo</h2>
                      <EquipoTalentoLab equipo={equipo} />
                    </section>
                    <section className="section-proyectos">
                      <h2 style={{ padding: "20px 280px" }}>Proyectos 2025</h2>
                      <TarjetaProyecto
                        titulo="Proyecto Web Accesible"
                        descripcion="Desarrollamos una plataforma web accesible para personas con discapacidades."
                        botonTexto="Explorar"
                        botonLink="https://github.com/MarViott/App-de-Accesibilidad"
                      />
                    </section>
                    <section className="section-acciones">
                      <MiBoton
                        texto="Conocer más"
                        color="#007bff"
                        onClick={() =>
                          window.open(
                            "https://github.com/MarViott/App-de-Accesibilidad",
                            "_blank"
                          )
                        }
                      />
                    </section>
                  </>
                }
              />
              {/* Rutas específicas */}
              <Route path="/empresas" element={<Empresas />} />
              <Route path="/instituciones" element={<Instituciones />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/registro" element={<Registrate />} />
              <Route path="/carrito" element={<Cart />} />
              <Route
                path="/pagar"
                element={
                  <RutaProtegida>
                    <Pagar />
                  </RutaProtegida>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/iniciarsesion" element={<IniciarSesion />} />
              {/* Rutas legacy para compatibilidad */}
              <Route path="/components/Inicio" element={<Inicio />} />
              <Route path="/components/Empresas" element={<Empresas />} />
              <Route
                path="/components/Instituciones"
                element={<Instituciones />}
              />
              <Route path="/components/Registrate" element={<Registrate />} />
              <Route path="/components/Contact" element={<Contacto />} />
              <Route path="/components/Carrito" element={<Cart />} />
              <Route
                path="/components/Pagar"
                element={
                  <RutaProtegida>
                    <Pagar />
                  </RutaProtegida>
                }
              />
              <Route
                path="/components/IniciarSesion"
                element={<IniciarSesion />}
              />
              <Route path="/components/login" element={<Login />} />
            </Routes>

            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
