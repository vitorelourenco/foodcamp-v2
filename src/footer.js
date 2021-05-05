export default function Footer({order, status}){
  const readyMessage = (<>Fechar Pedido</>);
  const waitingMessage = (<>Selecione os 3 itens<br />para fechar o pedido</>);
  const classList = status === true ? 'bg-green pointer' : 'bg-grey';
  const message = status === true ? readyMessage : waitingMessage;
  return(
    <footer>
      <button onClick={()=>checkout(order, status)} className={classList}>
        <p className="goto-checkout-text">{message}</p>
      </button>
    </footer>
  );
}

function checkout(order, isReady){
  if (!isReady) return;
  console.log(order);
}