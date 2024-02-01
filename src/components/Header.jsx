import React from "react";

export default function Header() {
  return (
    <div className="header_content">
      {" "}
      <div className="newletter_Container">
        <p>Newsletter :</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Adress"
        />
      </div>
      <div className="searchBar_Container">
        <input
          className="searchbar"
          type="text"
          name="search"
          id="search"
          placeholder="Search for..."
        />
      </div>
    </div>
  );
}
