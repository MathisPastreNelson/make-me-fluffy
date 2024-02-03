import React from "react";
import imageList from "../assets/images/images.json";

export default function PhotoContainer({ searchQuery }) {
  // Récupérer le nom de l'endpoint à partir de l'URL
  const endpoint = window.location.pathname.substring(1);

  // Filtrer les images pour n'afficher que celles ayant la même description que l'endpoint
  const imagesToShow = imageList.filter(
    (image) => image.description === endpoint
  );

  return (
    <div className="result_container">
      {imagesToShow.map((image, index) => (
        <div className="Result_container_imagesBox" key={index}>
          <img className="result_images" src={image.path} alt={image.name} />
        </div>
      ))}
    </div>
  );
}
