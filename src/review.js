import {
  Link
} from "react-router-dom";

export default function Review({orderState}){

  function preProcessOrder(rawOrder){
    let preProcessedOrder = [];
    rawOrder.forEach(category => {
      category.forEach(item =>{
        const {name, price, amount, kind} = item;
        const numberPrice = Number(price.match(/[\d,]+/)[0].replace(',','.'));
        const total = numberPrice*amount;
        if (amount > 0) preProcessedOrder.push({name, kind, numberPrice, amount, total});
      });
    });
    return preProcessedOrder;
  }

  function JSXifyOrder({name, amount, total}){
    const leftSide = amount > 1 ? `${name} (${amount}x)` : name;
    const rightSide = total.toFixed(2).replace('.',',');

    return (
      <li class="order-line">
        <p>{leftSide}</p>
        <p>{rightSide}</p>
      </li>
    )
  }

  function getTotal(preProcessedOrder){
    return preProcessedOrder.reduce((acc, orderLine)=>acc+orderLine.total, 0).toFixed(2).replace('.',',');
  }

  function placeOrder(preProcessedOrder){
    console.log(preProcessedOrder);
    let message = `Ola, gostaria de fazer o pedido:\n`

    preProcessedOrder.forEach(item=>{
      const multiplier = item.amount > 1 ? ` (${item.amount}x)` : '';
      message += ` - ${item.kind}: ${item.name}${multiplier}\n`;
    })

    message += `Total: R$ ${getTotal(preProcessedOrder)}`;
    const encodedOrder = encodeURIComponent(message);
    const fullUrl = "https://wa.me/5521971275567?text=" + encodedOrder;
    window.open(fullUrl);
  }

  const preProcessedOrder = preProcessOrder(orderState);

  return (
    <main>
      <section class="checkout-section">
        <h2>Revise seu pedido</h2>
        <div class="checkout">
          <ul class="order">
            {preProcessedOrder.map(orderLine => JSXifyOrder(orderLine))}
            <li class="order-line">
              <p class="fw-bold">Total</p>
              <p class="fw-bold">R$ {getTotal(preProcessedOrder)}</p>
            </li>
          </ul>
        </div>
        <button class="confirm" onClick={()=>placeOrder(preProcessedOrder)}>Tudo certo, pode pedir!</button>
        <Link className="cancel-a-link" to="/">
          <button class="cancel">Cancelar</button>
        </Link>
      </section>
    </main>
  );
}
