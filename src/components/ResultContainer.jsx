import React from "react";
import imageList from "../assets/images/images.json";
import imageTest from "../assets/images/5.jpg";

export default function PhotoContainer({ searchQuery }) {
  // Récupérer le nom de l'endpoint à partir de l'URL
  const endpoint = window.location.pathname.substring(1);

  // Filtrer les images pour n'afficher que celles ayant la même description que l'endpoint
  const imagesToShow = imageList.filter(
    (image) => image.description === endpoint
  );

  return (
    <div className="Home_container">
      {imagesToShow.map((image, index) => (
        <div className="Home_container_imagesBox" key={index}>
          <img className="home_Image" src={image.path} alt={image.name} />
        </div>
      ))}

      {/* A ajouter un visualizer ici  */}
    </div>
  );
}
