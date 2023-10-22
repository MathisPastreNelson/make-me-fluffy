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
      <button
        className="button1"
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}
