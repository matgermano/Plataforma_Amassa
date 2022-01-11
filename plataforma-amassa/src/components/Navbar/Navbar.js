import React, { Component, useState } from "react";
import { ItensMenu } from "./ItensMenu";
import "./Navbar.css";
import Modal from "../Modal/Modal";

function Navbar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  console.log(isModalVisible);

  return (
    <>
      <nav className="ItensNavbar">
        <img className="LogoNavbar" src="./logo.png" />
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li onClick={() => setIsModalVisible(true)}>
            <a className="nav-links">
              <h1>
                <i class="fas fa-map-marker-alt"></i> Endereço de entrega
              </h1>
            </a>
          </li>

          <li onClick={() => setIsModalVisible(true)}>
            <a className="nav-links">
              <h1>
                <i class="fas fa-shopping-bag"></i>Carrinho
              </h1>
            </a>
          </li>
        </ul>
      </nav>
      {isModalVisible ? <Modal /> : null}
    </>
  );
}

export default Navbar;
