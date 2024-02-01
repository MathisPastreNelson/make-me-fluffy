import React from "react";

export default function Header() {
  return (
    <div className="header_content">
      {" "}
      <div className="newletter_Container">
        <p className="newletter_Text">Newsletter :</p>
        <div className="email_box">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Adress"
          />
          <button className="emailButton" onClick={() => handleEmailSubmit()}>
            Send
          </button>
        </div>
      </div>
      <div className="searchBar_Container">
        <h1 className="title">Titre</h1>
        <input
          className="searchbar"
          type="text"
          name="search"
          id="search"
          placeholder="Search for..."
        />
        <button
          className="searchbar_Button"
          onClick={() => handleSearchSubmit()}>
          Go
        </button>
      </div>
    </div>
  );
}
