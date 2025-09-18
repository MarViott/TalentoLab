import React from 'react';  
function Nav() {  
    return (  
        <>
        <nav style={{ 
            backgroundColor: "#333", 
            color: "white", 
            padding: "5px",
            textAlign: "center"
         }}
            >  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a></li>  
                <li><a href="src\components\Empresas.jsx" style={{ color: "white", textDecoration: "none" }}>Empresas</a></li>  
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Instituciones</a></li>  
            </ul>  
        </nav>  
        </>
    );  
}  


export default Nav;