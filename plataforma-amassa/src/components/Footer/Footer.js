import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <img className="LogoFooter" src="./logo.png" />
        <h1>
          <a href="https://github.com/matgermano/Plataforma_Amassa"><i class="fab fa-github"></i></a>
        </h1>
      </footer>
    );
  }
}

export default Footer;
