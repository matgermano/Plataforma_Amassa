import React, { Component, useState } from "react";
import "./Navbar.css";

function Navbar({setIsOpen, setIsOpen2}) {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="ItensNavbar">
        <img className="LogoNavbar" src="./logo.png" />
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li onClick={() => setIsOpen(true)}>
            <a className="nav-links">
              <h1>
                <i class="fas fa-map-marker-alt"></i> Endereço de entrega
              </h1>
            </a>
          </li>

          <li onClick={() => setIsOpen2(true)}>
            <a className="nav-links">
              <h1>
                <i class="fas fa-shopping-bag"></i>Carrinho
              </h1>
            </a>
          </li>
        </ul>
      </nav>      
    </>
  );
}

export default Navbar;
