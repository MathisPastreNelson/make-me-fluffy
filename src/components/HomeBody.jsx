import React from "react";
import { useState } from "react";

import Header from "../components/Header";
import PhotoContainer from "../components/PhotoContainer";

export default function HomeBody() {
  const [count, setCount] = useState(0);
  return (
    // Contenu principal ici
    <div className="globalContainer">
      <div className="Ads-space">Banner1</div>
      <div className="content">
        <Header />
        <PhotoContainer />
      </div>
      <div className="Ads-space">Banner2</div>
    </div>
  );
}
