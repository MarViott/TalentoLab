import React from 'react';  
function Header() {  
    return ( 
        <header style={{ 
            backgroundColor: "#569264", 
            padding: "10px", 
            textAlign: "center", 
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",            
            height: "100px",
            alignItems: "center",
         }}>  
            <h1>Bienvenidos a Mi Tienda</h1>            
        </header>  
    );  
}  
export default Header;