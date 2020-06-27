import React from "react";
import "./Footer.scss";
import ContactUs from "../common-components/ContactUs";
import { Link } from "react-router-dom";
const Footer = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <footer className="footer">
      <ul>
        <Link to="/mentions-legales" className="link">
          <li> MENTIONS LEGALES</li>
        </Link>
        <Link to="/politique-de-confidentialite" className="link">
          <li> POLITIQUE DE CONFIDENTIALITE</li>
        </Link>
        <Link to="/conditions-generale-de-vente" className="link">
          <li> CONDITIONS GENERALES DE VENTES</li>
        </Link>
        <Link to="/plan-de-site" className="link">
          <li> PLAN DU SITE</li>
        </Link>

        <li onClick={handleOpen}> CONTACT US</li>
      </ul>
      <div className="extern-links">
        <a href="https://www.google.com">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a>
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <ContactUs open={open} handleClose={handleClose} />
    </footer>
  );
};
export default Footer;
