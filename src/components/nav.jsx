import React from 'react';  

function Nav({ currentPage, setCurrentPage }) {  
    const handleNavClick = (page, e) => {
        e.preventDefault();
        setCurrentPage(page);
    };

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
                <li>
                    <a 
                        href="#" 
                        onClick={(e) => handleNavClick('home', e)}
                        style={{ 
                            color: currentPage === 'home' ? "#569264" : "white", 
                            textDecoration: "none",
                            fontWeight: currentPage === 'home' ? "bold" : "normal"
                        }}
                    >
                        Inicio
                    </a>
                </li>  
                <li>
                    <a 
                        href="#" 
                        onClick={(e) => handleNavClick('empresas', e)}
                        style={{ 
                            color: currentPage === 'empresas' ? "#569264" : "white", 
                            textDecoration: "none",
                            fontWeight: currentPage === 'empresas' ? "bold" : "normal"
                        }}
                    >
                        Empresas
                    </a>
                </li>  
                <li>
                    <a 
                        href="#" 
                        onClick={(e) => handleNavClick('instituciones', e)}
                        style={{ 
                            color: currentPage === 'instituciones' ? "#569264" : "white", 
                            textDecoration: "none",
                            fontWeight: currentPage === 'instituciones' ? "bold" : "normal"
                        }}
                    >
                        Instituciones
                    </a>
                </li>  
            </ul>  
        </nav>  
        </>
    );  
}

export default Nav;