import { useState } from "react";
import "../css/body.scss";
import "../css/home.scss";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* container principal Home */}
      <div className="Home_Container">
        {/* infos ici */}
        {/* Pause de projet pour quelque chose de plus important */}
        <h1>Introduction au nouveau projet</h1>
        <button
          className="button1"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default Home;
