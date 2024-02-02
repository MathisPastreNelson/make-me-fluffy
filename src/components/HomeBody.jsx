import React, { useState } from "react";
import Header from "../components/Header";
import PhotoContainer from "../components/PhotoContainer";

export default function HomeBody() {
  const [searchQuery, setSearchQuery] = useState(""); // État de la recherche

  // Fonction de recherche qui sera passée à PhotoContainer
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="globalContainer">
      <div className="Ads-space">BannerSpace1</div>
      <div className="content">
        <Header onSearch={handleSearch} />{" "}
        {/* Passer la fonction de recherche */}
        <PhotoContainer searchQuery={searchQuery} />{" "}
        {/* Passer l'état de la recherche */}
      </div>
      <div className="Ads-space">BannerSpace2</div>
    </div>
  );
}
