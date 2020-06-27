import React from "react";
import "./Besancon.scss";
import direction from "../../styles/direction.png";
import piscine from "../../styles/piscine.jpg";

const activtiesInfo = [
  {
    id: "0",
    name: "PISCINE",
    image: piscine,
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
  },
  {
    id: "0",
    name: "TRAINING",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
  },
  {
    id: "0",
    name: "VESTIAIRES",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
  },
  {
    id: "0",
    name: "BIKE",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
  },
  {
    id: "0",
    name: "YOGA",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
  },
  {
    id: "0",
    name: "BOXE",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
  },
  {
    id: "0",
    name: "BOOT CAMP",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
  },
  {
    id: "0",
    name: "FREE STYLE",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    description:
      "226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon 226 C rue de Dole 25000 Besancon",
  },
];

const ClubBesancon = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      <div className="navbar-besancon">
        <span>besancon</span>
      </div>
      <section className="first-section-besancon">
        <img src="https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=800%2C600&ssl=1%20800w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1000%2C750&ssl=1%201000w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1200%2C900&ssl=1%201200w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1600%2C1200&ssl=1%201600w"></img>
        <div>
          <h2>
            EVEREST <span>BESANCON</span> CLUB
          </h2>
        </div>
      </section>
      <section className="besancon-info">
        <div className="top-part">
          <div>
            <h4>ADRESSE</h4>
            <h6>266 C rue de Dole 25000 Besancon 03 00 00 00 00</h6>
            <h5>Google map</h5>
          </div>
          <div>
            <h4>HORAIRES</h4>
            <h6 className="time">
              6h -> 23h <br /> 7j/7
            </h6>
          </div>
          <div>
            <h4>ACTIVITIES</h4>
            <h6>
              pole cardio musculation libre musculation guidée studios club aqua
              beauté spa LPG
            </h6>
            <h5>détails</h5>
          </div>
        </div>
        <div className="description bottom-part">
          <p>
            Meme la vue sur la rivière donne un sentiment de débuts épiques.
            Everest est une pure inspiration de fitness à double hauteur, à une
            piscine avec des zones chaudes en bois de genévrier, des studios
            chauffés dédiés à des cours de haute qualité,classe d'exercices de
            groupe inspirantes à une conception d'éclairage interactive sur
            mesure.
          </p>
          <h3>RESERVEZ VOTRE SEANCE</h3>
          <button>VIDEO DU CLUB</button>
        </div>
      </section>
      {activtiesInfo.map((el, index) => (
        <section key={index} className="activity">
          <img src={el.image}></img>
          <h2>{el.name} </h2>

          <div className="description">
            <p>{el.description}</p>
            <span>VOIR PLUS</span>
            <a href="#0">
              <img className="direction" src={direction}></img>
            </a>
          </div>
        </section>
      ))}

      <section className="coaching-personnel">
        <img
          className="fond lyon"
          src="https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=800%2C600&ssl=1%20800w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1000%2C750&ssl=1%201000w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1200%2C900&ssl=1%201200w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1600%2C1200&ssl=1%201600w"
        ></img>
        <div className="description">
          <h3>COACHING PERSONNEL</h3>
          <p>Maximisez vos entrainement et obtenez des resultats rapidement </p>
          <button>Decouvrir</button>
        </div>
      </section>
      <section className="last-section">
        <img
          className="fond lyon"
          src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
        />
        <div className="description bes-desc">
          <h3>NOS ACTIVITIES</h3>
          <p>Exiger du choix, de la qualité... </p>
          <p>Sans jamais vous ennuyer </p>
        </div>
        <button className="bes-btn">Button</button>
      </section>
    </main>
  );
};

export default ClubBesancon;
