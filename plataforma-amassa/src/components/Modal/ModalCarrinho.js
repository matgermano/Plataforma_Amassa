import React from "react";
import "./ModalCarrinho.css";

function ModalCarrinho({setIsModalVisible2}) {
  return (
    <>
      <div onClick={()=> setIsModalVisible2(false)} id="dvmodal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h1>AMEM SENHOR</h1>
          </div>
          <div className="modal-body">
            <p>
              Maecenas tempus faucibus euismod. Nunc turpis est, scelerisque sed
              sodales sit amet, viverra ac ligula. Cras ut finibus ante. Morbi
              eu convallis nisi, quis tempus ante. Quisque eu ornare lacus,
              laoreet venenatis erat. Aenean diam justo, suscipit non sem eu,
              consequat condimentum justo. Curabitur mollis risus ut malesuada
              sodales. Donec eget fermentum magna. Nullam vel varius libero,
              eget congue magna. Nam in turpis pulvinar, volutpat arcu in,
              sollicitudin ante. Ut quis aliquam purus.
            </p>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </>
  );
}

export default ModalCarrinho;