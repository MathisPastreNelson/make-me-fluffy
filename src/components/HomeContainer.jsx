import React, { useState } from "react";
import { Link } from "react-router-dom";
import imageList from "../assets/images/images.json";

import arrowRight from "../assets/Icons/arrowLeft.png";
import arrowLeft from "../assets/Icons/arrowRight.png";
import arrowFRight from "../assets/Icons/arrowFullLeft.png";
import arrowFLeft from "../assets/Icons/arrowFullRight.png";

export default function HomeContainer({ searchQuery }) {
  const [startIndex, setStartIndex] = useState(0);

  const uniqueImages = {};
  imageList.forEach((image) => {
    if (!uniqueImages[image.description]) {
      uniqueImages[image.description] = image;
    }
  });

  const uniqueImagesArray = Object.values(uniqueImages);

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

  const handleFastForward = () => {
    const fastForwardIndex = startIndex + 60;
    if (fastForwardIndex < filteredImages.length) {
      setStartIndex(fastForwardIndex);
    }
  };

  const handleRewind = () => {
    const rewindIndex = startIndex - 60;
    if (rewindIndex >= 0) {
      setStartIndex(rewindIndex);
    }
  };

  const showPreviousArrow = startIndex >= 12 || filteredImages.length === 0;
  const showNextArrow =
    startIndex + 12 < filteredImages.length || filteredImages.length === 0;

  const fastRewindOpacity = startIndex >= 60 ? 1 : 0.5;
  const fastForwardOpacity = startIndex + 60 < filteredImages.length ? 1 : 0.5;

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
        <img
          className={`arrow`}
          src={arrowFRight}
          alt="fast-forward"
          onClick={handleFastForward}
          style={{ opacity: fastForwardOpacity }}
        />
        <img
          className={`arrow ${!showPreviousArrow && "arrow-hidden"}`}
          src={arrowLeft}
          alt="previous"
          onClick={handlePrevious}
        />
        <img
          className={`arrow ${!showNextArrow && "arrow-hidden"}`}
          src={arrowRight}
          alt="next"
          onClick={handleNext}
        />
        <img
          className={`arrow`}
          src={arrowFLeft}
          alt="fast-rewind"
          onClick={handleRewind}
          style={{ opacity: fastRewindOpacity }}
        />
      </div>
    </div>
  );
}
