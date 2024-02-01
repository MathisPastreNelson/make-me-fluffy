import React from "react";
import { useState } from "react";
import imgSrc from "../assets/IMG-20240103-WA0002.jpg";

export default function PhotoContainer() {
  return (
    <div className="photo_container">
      {" "}
      <img className="imgSize" src={imgSrc} alt="Description de l'image" />
      <img className="imgSize" src={imgSrc} alt="Description de l'image" />
      <img className="imgSize" src={imgSrc} alt="Description de l'image" />
      <img className="imgSize" src={imgSrc} alt="Description de l'image" />
    </div>
  );
}
