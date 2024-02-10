import React, { useState } from "react";
import { Link } from "react-router-dom";
import imageList from "../assets/images/images.json";

import arrowRight from "../assets/Icons/arrowLeft.png";
import arrowLeft from "../assets/Icons/arrowRight.png";

export default function HomeContainer({ searchQuery }) {
  const [startIndex, setStartIndex] = useState(0);

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

  const handleNext = () => {
    const nextIndex = startIndex + 12;
    if (nextIndex < filteredImages.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    const previousIndex = startIndex - 12;
    if (previousIndex >= 0) {
      setStartIndex(previousIndex);
    }
  };

  return (
    <div>
      <div className="Home_container">
        {filteredImages
          .slice(startIndex, startIndex + 12)
          .map((image, index) => (
            <div className="Home_container_imagesBox" key={index}>
              <Link to={`/${image.description}`}>
                <img className="home_Image" src={image.path} alt={image.name} />
              </Link>
              <p>{image.description}</p>
            </div>
          ))}
      </div>
      <div className="arrow_Container">
        {startIndex >= 12 && (
          <img
            className="arrow"
            src={arrowLeft}
            alt="previous"
            onClick={handlePrevious}
          />
        )}
        {startIndex + 12 < filteredImages.length && (
          <img
            className="arrow"
            src={arrowRight}
            alt="next"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
}
