import React from 'react';  
function Header() {  
    return ( 
        <header style={{
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#764ba2",
            padding: "10px",          
            textAlign: "center", 
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",            
            height: "150px",
            alignItems: "center",
            textAlign: "center",
         }}>  
            <h1>Talento Lab</h1>
            <p style={{ 
                fontSize: "1.2rem",
                color: "white" }}>
                    Laboratorio de ideas y talentos tecnológicos para tu organización</p>
                  
        </header>  
    );  
}  
export default Header;