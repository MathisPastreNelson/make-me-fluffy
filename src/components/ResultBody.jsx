import React, { useState } from "react";
import Header from "./Header";
import ResultContainer from "./ResultContainer";

export default function ResultBody() {
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
        <ResultContainer searchQuery={searchQuery} />{" "}
        {/* Passer l'état de la recherche */}
      </div>
      <div className="Ads-space">BannerSpace2</div>
    </div>
  );
}
