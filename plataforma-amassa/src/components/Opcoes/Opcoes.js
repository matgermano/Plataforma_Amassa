import React, { Component } from "react";
import { ItensOpcoes } from "./ItensOpcoes";
import "./Opcoes.css";

class Opcoes extends Component {
  render() {
    return (
      <nav className="MenuOpcoes">
          <h1 clasName="TituloOpcoes"><i class="fas fa-utensils"></i>Nossas Opções:</h1>

        <div className="ItensOpcoes">
          <ul >
            {ItensOpcoes.map((item) => {
              return (
                <li>
                  <a className={item.cName}>
                     {item.title} 
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Opcoes;
