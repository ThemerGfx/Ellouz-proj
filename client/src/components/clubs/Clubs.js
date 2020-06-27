import React from "react";
import "./Clubs.scss";
import direction from "../../styles/direction.png";
import SimpleMap from "../map/SimpleMap";
import { Link } from "react-router-dom";
import clubsBesancon from "../../styles/clubs-besancon.jpg";

const clubsInfo = [
  {
    id: "0",
    name: "BESANCON",
    image: clubsBesancon,
    adresse: "226 C rue de Dole 25000 Besancon",
    phone: "0300000000",
  },
  {
    name: "BESANCON",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    adresse: "226 C rue de Dole 25000 Besancon",
    phone: "0300000000",
  },
  {
    name: "BESANCON",
    image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
    adresse: "226 C rue de Dole 25000 Besancon",
    phone: "0300000000",
  },
];
const Clubs = () => {
  return (
    <section className="clubs-page">
      <section className="clubs">
        <img
          className="fond"
          src="https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"
        ></img>{" "}
        <div className="description">
          <h2>LES CLUBS</h2>
          <p>
            Incroyables clubs de remise en forme, bien plus que des salle de
            sport ... Nos clubs redéfinissent le fitness haut de gamme
          </p>
          <button>VISITEZ NOS CLUBS</button>
        </div>
        <a href="#0">
          <img className="direction" src={direction}></img>
        </a>
      </section>

      {clubsInfo.map((el, index) => (
        <div id={el.id} key={index} className="club">
          <img src={el.image}></img>
          <h2>{el.name}</h2>
          <h3>{el.adresse}</h3>
          <h5>{el.phone}</h5>
          <Link to={"/" + el.name.toLocaleLowerCase()} className="nav-button">
            <button>VISITEZ {el.name}</button>
          </Link>
        </div>
      ))}
      <SimpleMap />
    </section>
  );
};

export default Clubs;
