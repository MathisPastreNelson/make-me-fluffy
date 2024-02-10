import React, { useState } from "react";
import Header from "./Header";
import ResultContainer from "./ResultContainer";

import banner1 from "../assets/Icons/Pub1.png";
import banner2 from "../assets/Icons/Pub2.png";

import arrowRight from "../assets/Icons/arrowLeft.png";
import arrowLeft from "../assets/Icons/arrowRight.png";

export default function ResultBody() {
  const [searchQuery, setSearchQuery] = useState(""); // État de la recherche

  // Fonction de recherche qui sera passée à PhotoContainer
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="globalContainer">
      <img className="Ads-space" src={banner1} alt="" srcset="" />
      <div className="content">
        <Header onSearch={handleSearch} />{" "}
        {/* Passer la fonction de recherche */}
        <ResultContainer searchQuery={searchQuery} />{" "}
        {/* Passer l'état de la recherche */}
        <div className="arrow_Container">
          <img className="arrow" src={arrowLeft} alt="" />
          <img className="arrow" src={arrowLeft} alt="" />
          <img className="arrow" src={arrowRight} alt="" />
          <img className="arrow" src={arrowRight} alt="" />
        </div>
      </div>
      <img className="Ads-space" src={banner2} alt="" srcset="" />
    </div>
  );
}
