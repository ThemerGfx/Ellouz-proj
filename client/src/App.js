import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Content from "./components/common-components/Content";
class App extends Component {
  constructor() {
    super();
    this.state = {
      navbarOpen: false,
    };
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
  render() {
    return (
      <Router>
        <Navbar
          handleNavbar={this.handleNavbar}
          navbarState={this.state.navbarOpen}
        />
        <Content />
        {/* <GlobalStyle /> */}

        {/* <main style={{ fontSize: "180%" }}>
          <PrintToPdf style={{ marginTop: "100px" }} />
          <SignUp />
          <ContactUs />
          <JoinUs />
        </main> */}
        <Footer />
      </Router>
    );
  }
}

export default App;
