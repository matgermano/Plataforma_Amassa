import React from "react";
import "./ModalCarrinho.css";

function ModalCarrinho({ setIsModalVisible2 }) {
  return (
    <div id="dvmodal" className="modalEnd">
    <div id="dvmodal" className="modalCar">
      <div class="principal">
        <h1 class="modal-carrinho"><i class="fas fa-tools"></i></h1>
        <h1>Em construção!</h1>
        <h4>Estamos construindo nosso site para que em breve você possa pedir nossos deliciosos pratos no conforto de sua casa. Enquanto isso, que tal dar uma olhada em nosso cardápio?</h4>
        <button
                  className="btn-2"
                  onClick={() => setIsModalVisible2(false)}
                >
                  Cancelar
                </button>

      </div>
    </div>
    </div>
  );
}

export default ModalCarrinho;
