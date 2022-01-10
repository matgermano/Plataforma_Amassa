import React, { Component } from "react";
import { ItensMenu } from "./ItensMenu";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    return (
      <nav className="ItensNavbar">
        <img className="LogoNavbar" src="./logo.png" />
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {ItensMenu.map((item, i) => {
            return (
              <li key={i}>
                <a className={item.cName}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        
      </nav>
    );
  }
}

export default Navbar;
