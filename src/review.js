import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Review({orderState}){

  function preProcessOrder(rawOrder){
    let preProcessedOrder = [];
    rawOrder.forEach(cathegory => {
      cathegory.forEach(item =>{
        const {name, price, amount} = item;
        const numberPrice = Number(price.match(/[\d,]+/)[0].replace(',','.'));
        const total = numberPrice*amount;
        if (amount > 0) preProcessedOrder.push({name, numberPrice, amount, total});
      });
    });
    return preProcessedOrder;
  }

  function JSXifyOrder({name, numberPrice, amount, total}){
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
        <button class="confirm" onclick="placeOrder()">Tudo certo, pode pedir!</button>
        <Link className="cancel-a-link" to="/">
          <button class="cancel" onclick="dumpOrder()">Cancelar</button>
        </Link>
      </section>
    </main>
  );
}
