import "../css/body.scss";
import "../css/home.scss";

import Header from "../components/Header";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* container principal Home */}
      <div className="Home_Container">
        <Header />
        {/* Pause de projet pour quelque chose de plus important */}
        <HomeBody />

        <Footer />
      </div>
    </>
  );
}

export default Home;
