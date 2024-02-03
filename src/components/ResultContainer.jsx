import React, { useState } from "react";
import Arrow from "../assets/Icons/arrow.png";
import imageList from "../assets/images/images.json";

export default function PhotoContainer({ searchQuery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Filtrer les images pour n'afficher qu'une seule image par description
  const uniqueImages = {};
  imageList.forEach((image) => {
    if (!uniqueImages[image.description]) {
      uniqueImages[image.description] = image;
    }
  });

  const filteredImages = Object.values(uniqueImages).filter((image) =>
    image.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClickImage = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="photo_container">
      {selectedImage && (
        <div
          className="fullscreen_image_overlay"
          onClick={() => setSelectedImage(null)}>
          <img
            className="fullscreen_image"
            src={selectedImage.path}
            alt="Image en plein écran"
          />
        </div>
      )}
    </div>
  );
}
