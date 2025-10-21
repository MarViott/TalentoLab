import React from 'react';  
function Footer() {  
    return (
      <footer
        style={{
          backgroundColor: "#f1f1f1",
          padding: "10px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <p>
          &copy; 2025 - Desarrollado por  
       <a
            href="https://www.linkedin.com/in/marisa-viotti-74601036a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077b5", textDecoration: "none" }}
          >
            Marisa Viotti
          </a>
           </p>
      </footer>
    );  
}  

export default Footer;  