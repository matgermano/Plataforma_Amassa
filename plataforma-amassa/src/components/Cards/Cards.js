import React, { Component } from "react";
import "./Cards.css";
import Botao from "../Botao/Botao"
import axios from "axios";

class Cards extends Component {
  render() {
    
    return (
         <>

        {this.props.entradas.map((entrada)=>{
          return (
            <div className="card">
            <div className="card-body">
              <div className="card-titulo">{entrada.nome}</div>
              <div className="card-descricao">
                {entrada.ingredientes}
              </div>
              <div className="card-flex">
              <div className="card-preco">R$ {entrada.preco},00 </div>
              <Botao/>
              <button onClick={()=>{
                axios
                .delete(`http://localhost:3000/pratos-principais/${entrada.id}`)
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
          )
        })}
        </>
    );
  }
}

export default Cards;
