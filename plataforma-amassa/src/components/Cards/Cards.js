import React, { Component } from "react";
import "./Cards.css";
import Botao from "../Botao/Botao"

class Cards extends Component {
  render() {
    return (
     
        <div className="card">
          <div className="card-body">
            <div className="card-titulo">Nome do prato </div>
            <div className="card-descricao">
              descrição do prato
            </div>
            <div className="card-flex">
            <div className="card-preco">R$00,00</div>
            <Botao/>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Cards;
