import React from "react";
import "./ModalCarrinho.css";

function ModalCarrinho({ setIsModalVisible2 }) {
  return (
    <>
      <div id="dvmodal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <img className="LogoNavbar" src="./logo.png" />
            <svg
              onClick={() => setIsModalVisible2(false)}
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
          <div className="modal-body">
            <div>Onde Você deseja receber seu pedido?</div>
            <div>
              <input
                className="input"
                type="text"
                name="nome"
                id="nome"
                placeholder="CEP"
              />
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="nome"
                id="nome"
                placeholder="Bairro"
              />
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="nome"
                id="nome"
                placeholder="Rua"
              />
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="nome"
                id="nome"
                placeholder="Número"
              />
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="nome"
                id="nome"
                placeholder="Complemento"
              />
            </div>
            <div>
              <button className="btn" onClick={() => setIsModalVisible2(false)}>
                Salvar
              </button>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </>
  );
}

export default ModalCarrinho;
