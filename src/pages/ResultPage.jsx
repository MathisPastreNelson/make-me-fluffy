// ResultPage.jsx
import React from "react";
import "../css/body.scss";
import "../css/footer.scss";
import "../css/header.scss";
import "../css/homeBody.scss";
import "../css/photoContainer.scss";

import ResultBody from "../components/ResultBody";

function ResultPageContent() {
  return (
    <>
      <div className="Home_Container">
        <ResultBody />
      </div>
    </>
  );
}

export default ResultPageContent;
