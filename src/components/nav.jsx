import React, { useState } from 'react';  
import { Link } from 'react-router-dom';
import './styles/Nav.css';

function Nav() {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (  
        <nav className="nav-container">            
            <button 
                className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Inicio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        to="/empresas"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Empresas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        to="/instituciones"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Instituciones
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        to="/contacto"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contacto
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link cta-button" 
                        to="/registro"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Registrarse
                    </Link>
                </li>
            </ul>
        </nav>
    );  
}  


export default Nav;