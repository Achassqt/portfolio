// import pp from "../../assets/illustrationlaptop.png";
import pp from "../../assets/laptop-no-bg.png";
// import pp from "../../assets/laptop.png";
import { IoChevronDown } from "react-icons/io5";

import { useState } from "react";

function About() {
  const [toggleText, setToggleText] = useState(false);
  const [animation, setAnimation] = useState(false);

  return (
    <section className="about-container">
      <div className="about-top">
        <article className="about-top__left">
          <h1>Bonjour, Je suis Sacha</h1>
          <span>Développeur web junior</span>
          <div className="about-top__left__btn-container">
            <a href="cv.pdf" download="sacha-souquet_CV">
              <button>Télécharger CV</button>
            </a>
            <a href="#about" onClick={() => setToggleText(true)}>
              <button>En savoir plus</button>
            </a>
          </div>
        </article>
        <div className="about-top__right">
          <img src={pp} alt="profile-pic" />
        </div>
      </div>
      <article className="about-bottom">
        <span id="about"></span>
        <div
          onClick={() => {
            setToggleText(!toggleText);
            if (toggleText) setAnimation(true);
          }}
          className="about-bottom__header"
        >
          <h2>A propos</h2>
          <IoChevronDown
            id="test"
            style={{
              animation: toggleText
                ? "rotate 500ms both"
                : animation && "rotate2 500ms both",
            }}
          />
        </div>
        <p style={{ display: toggleText ? "inline-block" : "none" }}>
          Passionné d'informatique et de nouvelles technologies, j'ai décidé de
          me lancer dans le développement web. A force de rigueur et de volonté,
          j' ai obtenu un diplôme dans ce domaine tout en continuant de me
          former en autodidacte. Je souhaite acquérir encore plus d'expérience,
          en rejoignant une équipe de professionnels tout en apportant de mes
          compétences.
        </p>
      </article>
    </section>
  );
}

export default About;
