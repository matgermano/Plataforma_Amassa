import React, { Component } from "react";
import "./Cards.css";
import Botao from "../Botao/Botao"
import axios from "axios";

class Cards extends Component {
  render() {
    
    return (
         <>

        {this.props.pratosPrincipais.map((prato)=>{
          return (
            <div className="all">
            <div className="all">
            <div className="card">
            <div className="card-body">
              <div className="card-titulo">{prato.nome}</div>
              <div className="card-descricao">
                {prato.ingredientes}
              </div>
              <div className="card-flex">
              <div className="card-preco">{prato.preco}</div>
              <Botao/>
              <button className="card-btn" onClick={()=>{
                axios
                .delete(`http://localhost:3000/pratos-principais/${prato.id}`)
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
              }}>deletar</button>
              </div>
            </div>
          </div>
          </div>
          </div>
          )
        })}
        </>
    );
  }
}

export default Cards;
