import React from "react";
import "./ModalEndereço.css";

function ModalEndereço({ setIsModalVisible }) {
  return (
    <>
      <div id="dvmodal" className="modalEnd">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            <div className="modal-form">
              <div className="modal-titulo">
                Onde deseja receber seu pedido?
              </div>
              <div className="form-flex">
                <div className="input-cep">
                  <input
                    className="input"
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="CEP"
                  />
                </div>
                <div className="input-bairro">
                  <input
                    className="input"
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Bairro"
                  />
                </div>
              </div>

              <div className="input-rua">
                <input
                  className="input"
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Rua"
                />
              </div>

              <div className="form-flex">
                <div className="input-numero">
                  <input
                    className="input"
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Número"
                  />
                </div>
                <div className="input-complemento">
                  <input
                    className="input"
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Complemento"
                  />
                </div>
              </div>
              <div className="form-flex">
                <button
                  className="btn"
                  onClick={() => setIsModalVisible(false)}
                >
                  Salvar
                </button>
                <button
                  className="btn-2"
                  onClick={() => setIsModalVisible(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </>
  );
}

export default ModalEndereço;
