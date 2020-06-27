import React from "react";
import "./Home.scss";
import ProspectForm from "../common-components/ProspectForm";
import google from "../../styles/google.png";
import apple from "../../styles/appel.png";
import Slider from "./Slider";
import dosFemme from "../../styles/dosfemme.png";
import backFemme from "../../styles/IMG-6614.JPG";
import { Link } from "react-router-dom";
const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      <section className="first-section">
        <img src="https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=800%2C600&ssl=1%20800w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1000%2C750&ssl=1%201000w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1200%2C900&ssl=1%201200w,%20https://i1.wp.com/www.thirdspace.london/media/Landscape_January_TS2019-1.jpg?resize=1600%2C1200&ssl=1%201600w"></img>
        <div>
          <h1>VIVEZ LA HAUTE EXPERIENCE</h1>
          <button> découvrir nos activités</button>
        </div>
      </section>
      <section className="introduction">
        <p className="text">
          Quand votre journée commence dès le matin. votre entrainement peut
          faire qu'elle devienne agréable ou insupportable.
          <br />
          Everest est un lieu réservé à des membres qui partagent une
          philosophie commune et qui pourront s'adonner à leur passion dans des
          espaces de remises en forme exceptionnels et luxueux
        </p>

        <button onClick={handleOpen}> Réservez votre expérience</button>
        <ProspectForm open={open} handleClose={handleClose} />
      </section>
      <section className="mobile-app">
        <img className="fond" src={backFemme}></img>

        <div>
          <h2>EVEREST APP </h2>
          <p>
            améliorez ou continuez votre entraînement consultez le calendrier
            d'entraînement proposé dans notre club, enregistrez vos favoris et
            resservez. Vous êtes votre propre acteur du programme
            d'entràinement, vous ne manquez jamais gràce à des rappels de
            réservation.
            <br />
            <span>Téléchargez l'application dès à présent.</span>
          </p>

          <a>
            <img className="download" src={google} />
          </a>
          <a>
            <img className="download" src={apple} />
          </a>
        </div>
      </section>
      <section className="clubs">
        <img
          className="fond"
          src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
        ></img>
        <div className="description">
          <h2>Incroyables clubs de santé de luxe, </h2>
          <p>
            Plus qu'une salle de sport notre club de Besançon redéfinit le
            fitness (haut de gamme, luxe, dans le raffinement)
          </p>
        </div>
        <Link to="/clubs" className="link">
          <button>Tous les clubs</button>
        </Link>
        <div className="links">
          <ul>
            <Link to="/besancon" className="link-besancon">
              <li>Besançon</li>
            </Link>
            <img
              className="fond-besancon"
              src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
            ></img>
            <Link to="/besancon" className="link-dole">
              <li>Dole</li>
            </Link>

            <img id="lyon" className="fond-dole" src={backFemme}></img>
          </ul>
        </div>
      </section>
      <section className="studios">
        <img
          className="fond dole"
          src="https://i.pinimg.com/originals/e5/a6/06/e5a60682df253641c4e49b9feebef3be.jpg
          "
        ></img>
        <img
          className="fond paris"
          src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
        ></img>{" "}
        <img
          className="fond lyon"
          src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
        ></img>
        <div className="description">
          <h2>LES STUDIOS</h2>
          <p>
            Club novateur et qui a su s'entourer des meilleurs coachs et qui
            proposent un vacte choix de programmes d'entrainement pour rendre le
            fitness ludique et différent{" "}
          </p>
        </div>
        <button>Decouvrir les activites</button>
        <div className="links">
          <ul>
            <li className="dole">Pilate</li>
            <li className="paris">Ride</li>
            <li className="lyon">Boxe</li>
            <li className="lyon">Rameurs</li>
          </ul>
        </div>
      </section>
      <section className="coaching-personnel">
        <img className="fond lyon" src={dosFemme}></img>
        <div className="description">
          <h3>COACHING PERSONNEL</h3>
          <p>Maximisez vos entrainement et obtenez des resultats rapidement </p>
          <button>Decouvrir</button>
        </div>
      </section>
      <Slider />
      <section className="last-section">
        <img
          className="fond lyon"
          src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
        ></img>
        <div className="description">
          <h2>Commences aujourd'hui n'attends pas demain</h2>
          <button onClick={handleOpen}>Start now</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
