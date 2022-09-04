import pp from "../../assets/3700_5_03.png";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

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
            <button>Télécharger CV</button>
            <button>En savoir plus</button>
          </div>
        </article>
        <div className="about-top__right">
          <img src={pp} alt="profile-pic" />
        </div>
      </div>
      <article className="about-bottom">
        <div
          onClick={() => {
            setToggleText(!toggleText);
            if (toggleText) setAnimation(true);
          }}
          className="about-bottom__header"
        >
          <h2>A propos</h2>
          <IoChevronDown
            // onClick={() => {
            //   setToggleText(!toggleText);
            //   if (toggleText) setAnimation(true);
            // }}
            style={{
              animation: toggleText
                ? "rotate 500ms both"
                : animation && "rotate2 500ms both",
            }}
          />
          {/* <IoChevronUp /> */}
        </div>
        <p style={{ display: toggleText ? "inline-block" : "none" }}>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte.
        </p>
      </article>
    </section>
  );
}

export default About;
