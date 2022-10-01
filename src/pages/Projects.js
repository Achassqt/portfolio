// import Contact from "../components/Contact";
import reservia from "../assets/reservia.svg";
import reserviaGreen from "../assets/reservia-green.svg";
import ohmyfood from "../assets/ohmyfood.svg";
import ohmyfoodGreen from "../assets/ohmyfood-green.svg";
import agence from "../assets/la_chouette_agence.svg";
import agenceGreen from "../assets/la_chouette_agence-green.svg";
import kanap from "../assets/kanap.svg";
import kanapGreen from "../assets/kanap-green.svg";
import piiquante from "../assets/piiquante.svg";
import piiquanteGreen from "../assets/piiquante-green.svg";
import groupomania from "../assets/groupomania.svg";
import groupomaniaGreen from "../assets/groupomania-green.svg";

import { IoChevronDown } from "react-icons/io5";

import { useState } from "react";

function Projects() {
  const [toggleFormation, setToggleFormation] = useState(false);
  // const [togglePerso, setTogglePerso] = useState(false);
  const [animation, setAnimation] = useState(false);

  const [showMore, setShowMore] = useState(false);

  const projectsArray = [
    {
      srcImg: reserviaGreen,
      srcImgHover: reservia,
      description: (
        <p>
          Nom du projet : <strong id="project-title-0">Reservia</strong> <br />{" "}
          Objectif : Transformer une maquette en site web avec HTML & CSS <br />{" "}
          Compétences obtenues : <br /> - Implémenter une interface responsive{" "}
          <br /> - Intégrer du contenu conformément à une maquette <br />
        </p>
      ),
      linkLive: "https://achassqt.github.io/SachaSouquet_2_10032021/",
      linkGithub: "https://github.com/Achassqt/SachaSouquet_2_10032021",
      color: "#0065FC",
    },
    {
      srcImg: ohmyfoodGreen,
      srcImgHover: ohmyfood,
      description: (
        <p>
          Nom du projet : <strong id="project-title-1">ohmyfood</strong> <br />
          Objectif : Dynamiser une page web avec des animations CSS <br />
          Compétences obtenues : <br />
          - Mettre en œuvre des effets CSS graphiques avancés <br />
          - Assurer la cohérence graphique d'un site web <br />
          - Mettre en place une structure de navigation pour un site web <br />
          - Mettre en place son environnement Front-End <br />- Utiliser un
          système de gestion de versions pour le suivi du projet et son
          hébergement
        </p>
      ),
      linkLive: "https://achassqt.github.io/SachaSouquet_3_10052021/",
      linkGithub: "https://github.com/Achassqt/SachaSouquet_3_10052021",
      color: "#9356DC",
    },
    {
      srcImg: agenceGreen,
      srcImgHover: agence,
      description: (
        <p>
          Nom du projet :{" "}
          <strong id="project-title-2">La chouette agence</strong> <br />
          Objectif : Optimiser un site web existant <br />
          Compétences obtenues : <br />
          - Opitmiser la taille et la vitesse d'un site web <br />
          - Assurer l'accessibilité d'un site web <br />
          - Écrire un code HTML et CSS maintenable <br />
          - Optimiser le référencement d'un site web <br />
        </p>
      ),
      linkLive: "https://achassqt.github.io/SachaSouquet_4_13102021/",
      linkGithub: "https://github.com/Achassqt/SachaSouquet_4_13102021",
      color: "#C27956",
    },
    {
      srcImg: kanapGreen,
      srcImgHover: kanap,
      description: (
        <p>
          Nom du projet : <strong id="project-title-3">Kanap</strong> <br />
          Objectif : Construire un site e-commerce en JavaScript <br />
          Compétences obtenues : <br />
          - Gérer des événements JavaScript <br />
          - Intéragir avec un web service avec JavaScript <br />
          - Valider des données issues de sources externes <br />- Créer un plan
          de test pour une application
        </p>
      ),
      linkLive: false,
      linkGithub: "https://github.com/Achassqt/SachaSouquet_5_12012022",
      color: "#0A3B4D",
    },
    {
      srcImg: piiquanteGreen,
      srcImgHover: piiquante,
      description: (
        <p>
          Nom du projet : <strong id="project-title-4">Hot Takes</strong> <br />
          Objectif : Construire une API sécurisée pour une application d'avis
          gastronomiques <br />
          Compétences obtenues : <br />
          - Implémenter un modèle logique de données conformément à la
          réglementation <br />
          - Mettre en œvre des opérations CRUD de manière sécurisée <br />-
          Stocker des données de manière sécurisée
        </p>
      ),
      linkLive: false,
      linkGithub: "https://github.com/Achassqt/SachaSouquet_6_01042022",
      color: "#6d071a",
    },
    {
      srcImg: groupomaniaGreen,
      srcImgHover: groupomania,
      description: (
        <p>
          Nom du projet : <strong id="project-title-5">Groupomania</strong>{" "}
          Objectif : Créer un réseau social d'entreprise <br />
          Compétences obtenues : <br />
          - Authentifier un utilisateur et maintenir sa session <br />-
          Développer l'interface d'un site web grâce à un framework front-end{" "}
          <br />
          - Implémenter un stockage de données sécurisé en utilisant une base de
          données
          <br />
        </p>
      ),
      linkLive: false,
      linkGithub: "https://github.com/Achassqt/SachaSouquet_7_29062022",
      color: "#FD2D01",
    },
  ];

  // const projectsPersoArray = [
  //   {
  //     srcImg: groupomaniaGreen,
  //     srcImgHover: groupomania,
  //     linkLive: "#",
  //     linkGithub: "https://github.com/Achassqt/SachaSouquet_7_29062022",
  //     color: "#FD2D01",
  //   },
  // ];

  return (
    <main className="container">
      <div
        onClick={() => {
          setToggleFormation(!toggleFormation);
          if (toggleFormation) setAnimation(true);
        }}
        className="title"
      >
        <h2>Projets formation (Openclassrooms)</h2>
        <IoChevronDown
          style={{
            animation: toggleFormation
              ? "rotate 500ms both"
              : animation && "rotate2 500ms both",
          }}
        />
      </div>
      {toggleFormation && (
        <div className="projects-container">
          {projectsArray.map((project, index) => (
            <div className="project">
              <figure
                onMouseEnter={() => {
                  const logo = document.getElementById(`image-${index}`);
                  logo.src = project.srcImgHover;
                }}
                onMouseLeave={() => {
                  const logo = document.getElementById(`image-${index}`);
                  logo.src = project.srcImg;
                }}
                // onClick={() => {
                //   const logo = document.getElementById(`image-${index}`);
                //   logo.style.animation = "initial-top 500ms both";
                //   const description = document.getElementById(
                //     `description-${index}`
                //   );
                //   description.style.display = "block";
                //   description.style.animation = "bottom-initial 500ms";
                //   setShowMore(true);
                // }}
                className="project__img-container"
              >
                <img
                  src={project.srcImg}
                  alt="project illustration"
                  onClick={(e) => {
                    e.target.style.animation = "initial-top 500ms both";
                    const description = document.getElementById(
                      `description-${index}`
                    );
                    description.style.display = "block";
                    description.style.animation = "bottom-initial 500ms";
                    setShowMore(true);
                  }}
                  id={`image-${index}`}
                  className="project__img"
                />
                <span>
                  {showMore
                    ? "Cliquez pour voir le logo"
                    : "Cliquez pour en savoir plus"}
                </span>
                <figcaption
                  id={`description-${index}`}
                  onClick={(e) => {
                    // e.target.style.display = "none";
                    e.target.style.animation = "initial-bottom 500ms both";
                    const logo = document.getElementById(`image-${index}`);
                    // logo.style.display = "block";
                    logo.style.animation = "top-initial 500ms both";
                    setShowMore(false);
                  }}
                >
                  {project.description}
                </figcaption>
                {/* <object
              id={`image-${index}`}
              type="image/svg+xml"
              data={project.srcImg}
              onMouseEnter={(e) => {
                e.target.data = project.srcImgHover;
              }}
              onMouseLeave={(e) => {
                e.target.data = project.srcImg;
              }}
            ></object> */}
              </figure>
              <div className="project__links">
                {project.linkLive && (
                  <a
                    href={project.linkLive}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = `${project.color}`;
                      e.target.style.backgroundColor = `${project.color}`;

                      const imgSrc = document.getElementById(`image-${index}`);
                      imgSrc.src = project.srcImgHover;

                      const projectTitle = document.getElementById(
                        `project-title-${index}`
                      );
                      projectTitle.style.color = `${project.color}`;
                      // console.log(imgSrc.src);
                      // const svg = document.getElementById(`image-${index}`);
                      // console.log(
                      //   svg
                      //     .getSVGDocument()
                      //     .getElementById("svgInternalId")
                      //     .setAttribute("fill", "yellow")
                      // );
                      // document
                      //   .querySelector(".svgClass")
                      //   .getSVGDocument()
                      //   .getElementById("svgInternalId")
                      //   .setAttribute("fill", "blue");
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "";
                      e.target.style.backgroundColor = "";

                      const imgSrc = document.getElementById(`image-${index}`);
                      imgSrc.src = project.srcImg;

                      const projectTitle = document.getElementById(
                        `project-title-${index}`
                      );
                      projectTitle.style.color = `white`;
                    }}
                  >
                    Site live
                  </a>
                )}
                <a
                  href={project.linkGithub}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: project.linkLive === false && "100%" }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = `${project.color}`;
                    e.target.style.backgroundColor = `${project.color}`;

                    const imgSrc = document.getElementById(`image-${index}`);
                    imgSrc.src = project.srcImgHover;

                    const projectTitle = document.getElementById(
                      `project-title-${index}`
                    );
                    projectTitle.style.color = `${project.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "";
                    e.target.style.backgroundColor = "";

                    const imgSrc = document.getElementById(`image-${index}`);
                    imgSrc.src = project.srcImg;

                    const projectTitle = document.getElementById(
                      `project-title-${index}`
                    );
                    projectTitle.style.color = `white`;
                  }}
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <div
        onClick={() => {
          setTogglePerso(!togglePerso);
          if (togglePerso) setAnimation(true);
        }}
        className="title"
      >
        <h2>Projets personnels</h2>
        <IoChevronDown
          style={{
            animation: togglePerso
              ? "rotate 500ms both"
              : animation && "rotate2 500ms both",
          }}
        />
      </div>
      {togglePerso && (
        <div className="projects-container">
          {projectsPersoArray.map((project, index) => (
            <div className="project">
              <div className="project__img-container">
                <img
                  src={project.srcImg}
                  onMouseEnter={(e) => {
                    e.target.src = project.srcImgHover;
                  }}
                  onMouseLeave={(e) => {
                    e.target.src = project.srcImg;
                  }}
                  alt="project illustration"
                  id={`image-${index}`}
                  className="project__img"
                />
              </div>
              <div className="project__links">
                <a
                  href={project.linkLive}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = `${project.color}`;
                    e.target.style.backgroundColor = `${project.color}`;

                    const imgSrc = document.getElementById(`image-${index}`);
                    imgSrc.src = project.srcImgHover;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "";
                    e.target.style.backgroundColor = "";

                    const imgSrc = document.getElementById(`image-${index}`);
                    imgSrc.src = project.srcImg;
                  }}
                >
                  Site live
                </a>
                <a
                  href={project.linkGithub}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = `${project.color}`;
                    e.target.style.backgroundColor = `${project.color}`;

                    const imgSrc = document.getElementById(`image-${index}`);
                    imgSrc.src = project.srcImgHover;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "";
                    e.target.style.backgroundColor = "";

                    const imgSrc = document.getElementById(`image-${index}`);
                    imgSrc.src = project.srcImg;
                  }}
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </main>
  );
}

export default Projects;
