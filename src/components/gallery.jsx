import React from 'react';  


function Gallery() {  
    const images = [  
        "https://picsum.photos/seed/1/200/300",  
        "https://picsum.photos/seed/2/200/300",  
        "https://picsum.photos/seed/3/200/300",         
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