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
  // const [responsivePixelCount, setResponsivePixelCount] = useState(0);

  useEffect(() => {
    if (next) {
      if (window.innerWidth > 1439) {
        setPixelCount(pixelCount - 409);
        setForwardTranslate(true);
        setBackTranslate(false);
      } else {
        setPixelCount(pixelCount - 295);
        setForwardTranslate(true);
        setBackTranslate(false);
      }
    }
    if (previous) {
      if (window.innerWidth > 1439) {
        setPixelCount(pixelCount + 409);
        setBackTranslate(true);
        setForwardTranslate(false);
      } else {
        setPixelCount(pixelCount + 295);
        setBackTranslate(true);
        setForwardTranslate(false);
      }
    }

    setNext(false);
    setPrevious(false);
  }, [next, previous]);

  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      const cardsContainer = document.querySelector(".cards-container");
      if (window.innerWidth > 1023) {
        const maxScrollLeft =
          cardsContainer.clientWidth - cardsContainer.scrollWidth;
        cardsContainer.scrollLeft = maxScrollLeft;
      }
      if (window.innerWidth < 1024) {
        setPixelCount(0);
      } else {
        if (
          window.innerWidth > 1439 &&
          (pixelCount === -295 || pixelCount === -590)
        ) {
          setPixelCount(0);
        } else {
          if (
            window.innerWidth < 1440 &&
            (pixelCount === -409 || pixelCount === -818)
          ) {
            setPixelCount(0);
          }
        }
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <section className="skills-container">
      <h2>Mes compétences</h2>
      <div className="carousel">
        <div
          onClick={() => setPrevious(true)}
          style={{
            display: pixelCount === 0 || pixelCount === 0 ? "none" : "block",
          }}
          className="chevron chevron--left"
        >
          <IoChevronBack />
        </div>
        <div
          onClick={() => setNext(true)}
          style={{
            display:
              pixelCount === -590 || pixelCount === -818 ? "none" : "block",
          }}
          className="chevron chevron--right"
        >
          <IoChevronForward />
        </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
