import About from "../components/About";
import Carousel from "../components/Carousel";
import malt from "../assets/malt.svg";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Home() {
  return (
    <main>
      <About />
      <section className="social-network">
        <article className="social-network__content">
          <div className="social-network__content__logo-container">
            <BsGithub />
          </div>
          <h3>Github</h3>
        </article>
        <article className="social-network__content">
          <div className="social-network__content__logo-container">
            <BsLinkedin />
          </div>
          <h3>Linkedin</h3>
        </article>
        <article className="social-network__content">
          <div className="social-network__content__logo-container">
            <BsTwitter />
          </div>
          <h3>Twitter</h3>
        </article>
        <article className="social-network__content">
          <div className="social-network__content__logo-container">
            <img src={malt} alt="Malt" />
          </div>
          <h3>Malt</h3>
        </article>
      </section>
      <Carousel />
    </main>
  );
}

export default Home;
