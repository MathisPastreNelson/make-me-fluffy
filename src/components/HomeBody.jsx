import React, { useState } from "react";
import Header from "./Header";
import HomeContainer from "./HomeContainer";

import banner1 from "../assets/Icons/Pub1.png";
import banner2 from "../assets/Icons/Pub2.png";

export default function SearchBody() {
  const [searchQuery, setSearchQuery] = useState(""); // État de la recherche

  // Fonction de recherche qui sera passée à PhotoContainer
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="globalContainer">
      <img className="Ads-space" src={banner1} alt="" />
      <div className="searchContainer">
        <Header onSearch={handleSearch} />{" "}
        {/* Passer la fonction de recherche */}
        <HomeContainer searchQuery={searchQuery} />{" "}
        {/* Passer l'état de la recherche */}
      </div>
      <img className="Ads-space" src={banner2} alt="" />
    </div>
  );
}
