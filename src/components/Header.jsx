import React, { useState, useRef } from "react";

export default function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false); // État pour suivre si la barre de recherche a le focus
  const searchInputRef = useRef(null); // Référence pour le champ de recherche

  const handleSearchSubmit = () => {
    onSearch(searchValue); // Exécuter la fonction de recherche
  };

  const handleKeyPress = (e) => {
    if (isSearchFocused && e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true); // Mettre à jour l'état lorsque la barre de recherche obtient le focus
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false); // Mettre à jour l'état lorsque la barre de recherche perd le focus
  };

  const handleEmailSubmit = () => {
    // Ajouter la logique pour envoyer l'email
    // Après avoir envoyé l'email, garder le focus sur le champ de recherche
    searchInputRef.current.focus();
  };

  return (
    <div className="header_content">
      <div className="newletter_Container">
        <p className="newletter_Text">Newsletter :</p>
        <div className="email_box">
          <input
            className="emailbar"
            type="email"
            name="email"
            id="email"
            placeholder="Email Adress"
          />
          <button className="emailButton" onClick={handleEmailSubmit}>
            Send
          </button>
        </div>
      </div>
      <div className="searchBar_Container">
        <h1 className="title">Temporary Title</h1>
        <input
          className="searchbar"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleSearchFocus} // Gérer l'événement de focus de la barre de recherche
          onBlur={handleSearchBlur} // Gérer l'événement de blur de la barre de recherche
          placeholder="Search for..."
          ref={searchInputRef} // Attribuer la référence au champ de recherche
        />
        <button className="searchbar_Button" onClick={handleSearchSubmit}>
          Go
        </button>
      </div>
    </div>
  );
}
