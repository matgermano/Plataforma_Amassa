import React, { Component } from "react";
import "./Cards.css";
import Botao from "../Botao/Botao";
import axios from "axios";

class Cards extends Component {
  render() {
    return (
      <>
        {this.props.pratosPrincipais.map((prato) => {
          return (
            <div className="all">
              <div className="all">
                <div className="card">
                  <div className="card-body">
                    <div className="card-titulo">{prato.nome}</div>
                    <div className="card-descricao">{prato.ingredientes}</div>
                    <div className="card-flex">
                      <div className="card-preco">{prato.preco}</div>
                      <Botao />
                      <button
                        className="card-btn"
                        onClick={() => {
                          axios
                            .delete(
                              `http://localhost:3000/pratos-principais/${prato.id}`
                            )
                            .then((response) => {
                              console.log(response);
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#FFFFFF"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Cards;
