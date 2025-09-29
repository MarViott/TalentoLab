import React from 'react';  


function Gallery() {  
    const images = [  
        "./src/assets/img/team0.jpg",  
        "./src/assets/img/team1.jpg",  
        "./src/assets/img/team3.jpg",         
    ];  


    return (  
        <section style={{ 
            display: "flex", 
            gap: "10px", 
            justifyContent: "center", 
            marginTop: "20px" }}>
                  
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`Imagen ${index + 1}`} style={{ width: "250px", height: "250px" }} />  
            ))}  
        </section>  
    );  
}  


export default Gallery;  