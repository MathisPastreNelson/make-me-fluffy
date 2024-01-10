import "../css/body.scss";
import "../css/home.scss";

// import Header from "../components/Header";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* container principal Home */}
      <div className="Home_Container">
        {/* je cache le header je ne suis pas sur d'en avoir besoin */}
        {/* <Header /> */}
        {/* Pause de projet pour quelque chose de plus important */}
        <HomeBody />

        <Footer />
      </div>
    </>
  );
}

export default Home;
