import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSpring, animated } from "react-spring";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <li>
            <Link to={"/clubs"}> CLUBS</Link>
          </li>
          <li>
            <Link to={"/studios"}> STUDIOS</Link>
          </li>
          <li>
            <Link to={"/coachs"}> COACHS</Link>
          </li>
          <li>
            <Link className="aqua-spa" to={"/aqua-spa"}>
              AQUA & SPA
            </Link>
          </li>
          <li>
            <Link className="event" to={"/event"}>
              EVENT
            </Link>
          </li>

          <li>
            <a href="/" onClick={props.handleNavbar}>
              REJOIGNEZ-NOUS
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #000000d1;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 5000ms linear 5s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
    }
  }
`;
