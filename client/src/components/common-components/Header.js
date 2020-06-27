import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import GlobalStyles from "../../styles/Global";

class Header extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
  render() {
    return <section>{/* <Navbar />
        <GlobalStyles /> */}</section>;
  }
}

export default Header;
