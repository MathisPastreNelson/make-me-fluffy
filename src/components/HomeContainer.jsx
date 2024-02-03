import React from "react";
import { Link } from "react-router-dom";
import imageList from "../assets/images/images.json";

export default function HomeContainer({ searchQuery }) {
  // Utiliser un objet pour stocker les images uniques par description
  const uniqueImages = {};
  imageList.forEach((image) => {
    // Vérifier si la description de l'image existe déjà dans l'objet
    if (!uniqueImages[image.description]) {
      // Si ce n'est pas le cas, ajouter l'image à l'objet
      uniqueImages[image.description] = image;
    }
  });

  // Convertir l'objet en tableau pour le mapper
  const uniqueImagesArray = Object.values(uniqueImages);

  // Filtrer les images en fonction de la recherche
  const filteredImages = uniqueImagesArray.filter((image) =>
    image.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Home_container">
      {filteredImages.map((image, index) => (
        <div className="Home_container_imagesBox" key={index}>
          <Link to={`/${image.description}`}>
            <img className="home_Image" src={image.path} alt={image.name} />
          </Link>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
}
