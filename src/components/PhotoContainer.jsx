import React, { useState } from "react";
import Arrow from "../assets/Icons/arrow.png";
import imageList from "../assets/images/images.json";

export default function PhotoContainer({ searchQuery }) {
  const [selectedImage, setSelectedImage] = useState(imageList[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Filtrer les images en fonction de la recherche
  const filteredImages = imageList.filter((image) =>
    image.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleClickImage = (image) => {
    setSelectedImage(image);
    setIsFullScreen(false);
  };

  const handleNext = () => {
    if (startIndex + 4 < filteredImages.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const handlePrevious = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    }
  };

  return (
    <div className="photo_container">
      {isFullScreen && selectedImage && (
        <div className="fullscreen_image_overlay" onClick={toggleFullScreen}>
          <img
            className="fullscreen_image"
            src={selectedImage.path}
            alt="Image en plein écran"
          />
        </div>
      )}
      <img
        className="selected_img"
        src={selectedImage ? selectedImage.path : null}
        alt="Image sélectionnée"
        onClick={toggleFullScreen}
      />
      <div className="photo_carrousel">
        <div className="arrow left-container">
          {startIndex > 0 && (
            <img
              className="arrow left"
              src={Arrow}
              alt="ArrowLeft"
              onClick={handlePrevious}
            />
          )}
        </div>
        {filteredImages
          .slice(startIndex, startIndex + 4)
          .map((image, index) => (
            <img
              key={index}
              className="imgSize"
              src={image.path}
              alt={image.description}
              onClick={() => handleClickImage(image)}
            />
          ))}
        <div className="arrow right-container">
          {startIndex + 4 < filteredImages.length && (
            <img
              className="arrow"
              src={Arrow}
              alt="ArrowRight"
              onClick={handleNext}
            />
          )}
        </div>
      </div>
    </div>
  );
}
