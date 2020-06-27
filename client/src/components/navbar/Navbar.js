import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import logo from "../../styles/logo.png";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import "./Navbar.scss";
import { Link, withRouter } from "react-router-dom";
import Login from "./Login";
import history from "../common-components/history";
const Navbar = (props) => {
  // const userData = localStorage.getItem("usertoken");
  // const user = JSON.parse(userData);
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 2800,
    config: config.wobbly,
  });
  const logOut = () => {
    console.log("history");
    localStorage.removeItem("usertoken");
    history.push("/");
  };
  const userLink = (
    <ul>
      <li>
        <Link to="/profile">User</Link>
      </li>
      <li>
        <Link onClick={logOut}>log Out</Link>
      </li>
    </ul>
  );
  return (
    <nav
      className="nav-menu"
      style={{ fontSize: "62.5%", zIndex: "1000", width: "100%" }}
    >
      <NavBar
        style={{ zIndex: "1000" }}
        className="nav-menu"
        style={barAnimation}
      >
        <section className="top-nav">
          <div className="left">
            <img style={{ width: "40px", margin: "auto 15px" }} src={logo} />
            <span>Vivez la haute experience</span>
          </div>
          <div className="right">
            <ul>
              <li>FORMATION</li>
              <li>LPG & BEAUTE</li>
              <li>VOYAGE</li>
              <li>ESCAPE GAME</li>
            </ul>
          </div>
        </section>
        <FlexContainer className="bottom-nav">
          <div className="bottom-left">
            <span style={{ color: "white", fontSize: "18px" }}>
              <i className="far fa-calendar-alt"></i>
            </span>

            <Link to="/" className="everest-icon">
              <Brand />
            </Link>
            {localStorage.usertoken ? userLink : ""}
            <BurgerWrapper>
              <BurgerMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
              />
            </BurgerWrapper>
          </div>
          <div className="bottom-right">
            <NavLinks style={(linkAnimation, { display: "flex" })}>
              <div className="clubs-link">
                <Link to={"/clubs"}>CLUBS</Link>
                <div className="sub-menu">
                  <ul>
                    <li>DOLE</li>
                    <Link className="link" to={"/besancon"}>
                      <li>BESANCON</li>
                    </Link>

                    <li>DOLE</li>
                  </ul>
                </div>
              </div>
              <Link to={"/studios"}> STUDIOS</Link>
              <Link to={"/coachs"}> COACHS</Link>
              <Link className="aqua-spa" to={"/aqua-spa"}>
                AQUA & SPA
              </Link>
              <Link className="event" to={"/event"}>
                EVENT
              </Link>
              <div className="rejoignez-nous">
                <a href="/">REJOIGNEZ-NOUS</a>
                <Login />
              </div>
            </NavLinks>

            <button
              className="reservez-button"
              style={{ background: "none", color: " white" }}
            >
              RESERVEZ UNE SEANCE
            </button>
          </div>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </nav>
  );
};

export default withRouter(Navbar);

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: black;
  z-index: 1000;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const FlexContainer = styled.div`
  padding: 0 2rem 0 2rem;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  .bottom-left {
    display: flex;
    align-items: center;
    @media (max-width: 949px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
  }
  .bottom-right {
    display: flex;
  }
  .everest-icon {
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 1150px) {
      margin: auto 0;
    }
  }
  button {
    margin: auto auto auto 20px;
    @media (max-width: 949px) {
      display: none;
    }
  }

  & .far {
    font-size: 25px;
    @media (min-width: 950px) {
      display: none;
    }
  }
  @media (max-width: 949px) {
    display: flex;
    flex-direction: column;
    align-items: cents;
  }
`;

const NavLinks = styled(animated.ul)`
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 1000ms linear 0s;
    text-decoration: none;
    .far {
      color: white;
    }
    &:hover {
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
    }

    @media (max-width: 949px) {
      display: none;
      margin: auto 0;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 950px) {
    display: none;
  }
`;
