import React from "react";
import { useState } from "react";

import "../css/homeBody.scss";

export default function HomeBody() {
  const [count, setCount] = useState(0);
  return (
    // Contenu principal ici
    <div className="homeContainer">
      {" "}
      <h1>Introduction au nouveau projet</h1>
      {/* example d'utilisation javascript dans react */}
      <button
        className="button1"
        // Lorsqu'un élément est cliqué, la fonction fléchée est exécutée.
        // Elle met à jour l'état 'count' en ajoutant 1 à sa valeur actuelle.
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {/* it will be good to start something!! */}
    </div>
  );
}
