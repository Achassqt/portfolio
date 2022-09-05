import { useEffect, useState } from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const cards = [
  {
    logo: <IoLogoHtml5 className="card__logo logo1" />,
    title: "Html",
  },
  {
    logo: <IoLogoCss3 className="card__logo logo2" />,
    title: "Css",
  },
  {
    logo: <IoLogoJavascript className="card__logo logo3" />,
    title: "Javascript",
  },
  {
    logo: <IoLogoReact className="card__logo logo4" />,
    title: "React",
  },
  {
    logo: <SiMongodb className="card__logo logo5" />,
    title: "MongoDB",
  },
];

function Carousel() {
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [forwardTranslate, setForwardTranslate] = useState(false);
  const [backTranslate, setBackTranslate] = useState(false);
  const [pixelCount, setPixelCount] = useState(0);

  useEffect(() => {
    if (next) {
      setPixelCount(pixelCount - 310);
      setForwardTranslate(true);
      // setBackTranslate(false);
      setNext(false);
    }
    if (previous) {
      setPixelCount(pixelCount + 310);
      setBackTranslate(true);
      setForwardTranslate(false);
      setPrevious(false);
    }
  }, [next, previous]);

  return (
    <section className="skills-container">
      <h2>Mes compétences</h2>
      <div className="carousel">
        <IoChevronBack
          onClick={() => setPrevious(true)}
          style={{ display: pixelCount === 0 ? "none" : "block" }}
          className="carousel__chevron carousel__chevron--back"
        />
        <IoChevronForward
          onClick={() => setNext(true)}
          style={{ display: pixelCount === -1240 ? "none" : "block" }}
          className="carousel__chevron carousel__chevron--forward"
        />
        <div className="cards-container">
          {cards.map((card) => (
            <div
              style={{
                transform: forwardTranslate
                  ? `translate(${pixelCount}px)`
                  : backTranslate && `translate(${pixelCount}px)`,
              }}
              className="card"
            >
              {card.logo}
              <h3 className="card__title">{card.title}</h3>
              {/* <IoChevronBack className="card__chevron card__chevron--back" />
              <IoChevronForward className="card__chevron card__chevron--forward" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
