import pp from "../../assets/3700_5_03.png";
// import moi from "../../assets/IMG_2492.JPG";
// import moi from "../../assets/792FDC72-C8EB-4573-932E-F9CC9588586C.jpg";
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
            <a href="test.docx" download="Mon_CV">
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
        <a id="about" />
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
