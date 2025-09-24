import React from 'react';  
function Header() {  
    return ( 
        <header style={{
            backgroundColor: "#764ba2",
            padding: "10px", 
            textAlign: "center", 
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",            
            height: "100px",
            alignItems: "center",
         }}>  
            <h1>Talento Lab</h1>
            <p>Un laboratorio de ideas y talentos tecnológicos</p>
                  
        </header>  
    );  
}  
export default Header;