import React from "react";
import "./animacao.css";

function Animacao() {
  return (
    <div className="body-animacao">
      <div className="flex-animacao">
        <div className="gradient-animacao">
          <div className="back-animacao">
            <img className="img-animacao" src="./logo.png" alt="" />
            <div className="shade-animacao"></div>
            <div className="logo-flex-animacao"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animacao;
