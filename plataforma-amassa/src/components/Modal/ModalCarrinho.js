import React from "react";
import "./ModalCarrinho.css";

function ModalCarrinho({ setIsModalVisible2 }) {
  return (
    <div id="dvmodal" className="modalEnd">
    <div id="dvmodal" className="modalCar">
      <div class="principal">
        <h1 class="titulo_carrinho"> Carrinho : </h1>

        <h3 class="itens"> Lasanha</h3>
        <p class="preco"> R$ 50,00</p>
        <p class="remover"> Remover</p>

        <h3 class="itens"> Pizza 4 queijos</h3>
        <p class="preco"> R$ 70,00</p>
        <p class="remover"> Remover</p>

        <h3 class="itens"> Pepsi</h3>
        <p class="preco"> R$ 6,00</p>
        <p class="remover"> Remover</p>

        <div class="total">
          <h3 class="itens2">Total</h3>
          <p class="preco-total"> R$ 126,00</p>
        </div>
        <h3 class="forma-pagamento">Forma de Pagamento:</h3>
        <br />
        <br />
        <br />
        <div class="opcoes-pagamento">
          <button class="btn-pagamentos" type="radius">
            Pix
          </button>
          <button class="btn-pagamentos" type="radius">
            Cartão
          </button>
          <button type="radius">Dinheiro</button>
        </div>
        <br />
        <div class="class-enviar">
          <button
            class="btn-enviar"
            type="submit"
            onClick={() => setIsModalVisible2(false)}
          >
            {" "}
            Finalizar
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ModalCarrinho;
