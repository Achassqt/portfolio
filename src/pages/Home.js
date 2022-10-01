import About from "../components/About";
import Carousel from "../components/Carousel";
import malt from "../assets/malt.svg";
import maltOriginalColor from "../assets/malt-original-color.svg";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useState } from "react";

function Home() {
  const [toggleMaltLogo, setToggleMaltLogo] = useState(false);

  return (
    <main className="home-container">
      <About />
      <section className="social-network">
        <a
          href="https://github.com/Achassqt"
          target="_blank"
          rel="noreferrer"
          className="social-network__content"
        >
          <div className="social-network__content__logo-container github">
            <BsGithub />
          </div>
          <h3 className="github">Github</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/sacha-souquet-7b15681b0/"
          target="_blank"
          rel="noreferrer"
          className="social-network__content"
        >
          <div className="social-network__content__logo-container linkedin">
            <BsLinkedin />
          </div>
          <h3 className="linkedin">Linkedin</h3>
        </a>
        <a
          href="https://twitter.com/SqtSacha"
          target="_blank"
          rel="noreferrer"
          className="social-network__content"
        >
          <div className="social-network__content__logo-container twitter">
            <BsTwitter />
          </div>
          <h3 className="twitter">Twitter</h3>
        </a>
        {/* <a
          href="#"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setToggleMaltLogo(true)}
          onMouseLeave={() => setToggleMaltLogo(false)}
          className="social-network__content malt"
        > */}
        <div
          onMouseEnter={() => {
            setToggleMaltLogo(true);
            document.getElementById("maltsoon").innerHTML = "Bientôt !";
          }}
          onMouseLeave={() => {
            setToggleMaltLogo(false);
            document.getElementById("maltsoon").innerHTML = "Malt";
          }}
          className="social-network__content malt"
        >
          <div className="social-network__content__logo-container">
            <img src={toggleMaltLogo ? maltOriginalColor : malt} alt="Malt" />
          </div>
          <h3 id="maltsoon" className="malt">
            Malt
          </h3>
        </div>
      </section>
      <Carousel />
    </main>
  );
}

export default Home;
