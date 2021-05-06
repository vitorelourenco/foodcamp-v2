import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ status }) {
  const readyMessage = <>Fechar Pedido</>;
  const waitingMessage = (
    <>
      Selecione os 3 itens
      <br />
      para fechar o pedido
    </>
  );
  const classList = status === true ? "bg-green pointer" : "bg-grey";
  const message = status === true ? readyMessage : waitingMessage;
  const goHead = () => {
    return;
  };
  const holdOn = (e) => e.preventDefault();
  const managedClick = status === true ? goHead : holdOn;
  return (
    <footer>
      <Link to="/revisar" onClick={managedClick}>
        <button className={classList}>
          <p className="goto-checkout-text">{message}</p>
        </button>
      </Link>
    </footer>
  );
}
