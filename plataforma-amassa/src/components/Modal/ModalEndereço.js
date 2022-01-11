import React from "react";
import "./ModalEndereço.css";
import "./delete.svg"

function ModalEndereço({setIsModalVisible}) {
  return (
    <>
      <div  id="dvmodal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
          <img className="LogoNavbar" src="./logo.png" onClick={()=> setIsModalVisible(false)} />
          <img src="./delete.svg"/>
          </div>
          <div className="modal-body">
            <div><p>
              Onde Você deseja receber seu pedido?
            </p>
            </div>
            <div><p>
              <input className="input" type="text" name="nome" id="nome" placeholder="CEP"/>
            </p>
            </div>
            <div><p>
              <input className="input" type="text" name="nome" id="nome" placeholder="Bairro"/>
            </p>
            </div>
            <div><p>
              <input className="input" type="text" name="nome" id="nome" placeholder="Rua"/>
            </p>
            </div>
            <div><p>
              <input className="input" type="text" name="nome" id="nome" placeholder="Número"/>
            </p>
            </div>
            <div><p>
              <input className="input" type="text" name="nome" id="nome" placeholder="Complemento"/>
            </p>
            </div>
            <div>
            <button className="btn" onClick={()=> setIsModalVisible(false)}>Salvar</button>
            </div>
          </div>
          <div className="modal-footer"></div>
          
        </div>
      </div>
    </>
  );
}

export default ModalEndereço;
