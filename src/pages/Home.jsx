import "../css/body.scss";
import "../css/footer.scss";
import "../css/header.scss";
import "../css/homeBody.scss";
import "../css/photoContainer.scss";

import HomeBody from "../components/HomeBody";

function Home() {
  return (
    <>
      <div className="Home_Container">
        <HomeBody />
      </div>
    </>
  );
}

export default Home;
