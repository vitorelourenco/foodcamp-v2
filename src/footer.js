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

function checkout(rawOrder, isReady){
  if (!isReady) return;
  const processedOrder = processOrder(rawOrder);
  console.log(processedOrder);
}

function processOrder(rawOrder){
  let processedOrder = [];
  rawOrder.forEach(cathegory => {
    cathegory.forEach(item =>{
      const {name, price, amount} = item;
      const numberPrice = Number(price.match(/[\d,]+/)[0].replace(',','.'));
      const total = numberPrice*amount;
      if (amount > 0) processedOrder.push({name, numberPrice, amount, total});
    });
  });
  return processedOrder;
}
