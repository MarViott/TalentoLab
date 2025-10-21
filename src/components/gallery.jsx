import React from "react";
import team0 from "../assets/img/team0.jpg";
import team1 from "../assets/img/team1.jpg";
import team3 from "../assets/img/team3.jpg";

function Gallery() {
  const images = [team0, team1, team3];

  return (
    <section
      className="section-gallery"
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "5px",
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagen ${index + 1}`}
          style={{ width: "250px", height: "250px" }}
        />
      ))}
    </section>
  );
}

export default Gallery;
