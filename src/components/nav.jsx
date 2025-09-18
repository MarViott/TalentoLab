import React from 'react';  
import { NavLink } from 'react-router-dom';


function Nav() {  
    return (  
        <>
    <nav style={{ 
        backgroundColor: "#333", 
        color: "white", 
        padding: "5px",
        textAlign: "center"
     }}>
        <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
            <li><NavLink to="/" className="nav-link">Inicio</NavLink></li>
            <li><NavLink to="/empresas" className="nav-link">Empresas</NavLink></li>
            <li><NavLink to="/instituciones" className="nav-link">Instituciones</NavLink></li>
        </ul>  
    </nav>  
        </>
    );  
}  


export default Nav;