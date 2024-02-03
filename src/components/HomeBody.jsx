import React, { useState } from "react";
import Header from "./Header";
import HomeContainer from "./HomeContainer";

export default function SearchBody() {
  const [searchQuery, setSearchQuery] = useState(""); // État de la recherche

  // Fonction de recherche qui sera passée à PhotoContainer
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="globalContainer">
      <div className="Ads-space">BannerSpace1</div>
      <div className="searchContainer">
        <Header onSearch={handleSearch} />{" "}
        {/* Passer la fonction de recherche */}
        <HomeContainer searchQuery={searchQuery} />{" "}
        {/* Passer l'état de la recherche */}
      </div>
      <div className="Ads-space">BannerSpace2</div>
    </div>
  );
}
