import { Link } from "react-router-dom";

export default function Review({ orderState }) {
  function preProcessOrder(rawOrder) {
    let preProcessedOrder = [];
    rawOrder.forEach((category) => {
      category.forEach((item) => {
        const { name, price, amount, kind } = item;
        const numberPrice = Number(price.match(/[\d,]+/)[0].replace(",", "."));
        const total = numberPrice * amount;
        if (amount > 0)
          preProcessedOrder.push({ name, kind, numberPrice, amount, total });
      });
    });
    return preProcessedOrder;
  }

  function OrderLine(props) {
    const { name, amount, total } = props.objConfig;
    const leftSide = amount > 1 ? `${name} (${amount}x)` : name;
    const rightSide = total.toFixed(2).replace(".", ",");

    return (
      <li className="order-line">
        <p>{leftSide}</p>
        <p>{rightSide}</p>
      </li>
    );
  }

  function getTotal(preProcessedOrder) {
    return preProcessedOrder
      .reduce((acc, orderLine) => acc + orderLine.total, 0)
      .toFixed(2)
      .replace(".", ",");
  }

  function placeOrder(preProcessedOrder) {
    let message = `Ola, gostaria de fazer o pedido:\n`;

    preProcessedOrder.forEach((item) => {
      const multiplier = item.amount > 1 ? ` (${item.amount}x)` : "";
      message += ` - ${item.kind}: ${item.name}${multiplier}\n`;
    });

    message += `Total: R$ ${getTotal(preProcessedOrder)}`;
    const encodedOrder = encodeURIComponent(message);
    const fullUrl = "https://wa.me/5521971275567?text=" + encodedOrder;
    window.open(fullUrl);
  }

  const preProcessedOrder = preProcessOrder(orderState);

  return (
    <main>
      <section className="checkout-section">
        <h2>Revise seu pedido</h2>
        <div className="checkout">
          <ul className="order">
            {preProcessedOrder.map((orderLine, i) => (
              <OrderLine key={i} objConfig={orderLine} />
            ))}
            <li className="order-line">
              <p className="fw-bold">Total</p>
              <p className="fw-bold">R$ {getTotal(preProcessedOrder)}</p>
            </li>
          </ul>
        </div>
        <button
          className="confirm"
          onClick={() => placeOrder(preProcessedOrder)}
        >
          Tudo certo, pode pedir!
        </button>
        <Link className="cancel-a-link" to="/">
          <button className="cancel">Cancelar</button>
        </Link>
      </section>
    </main>
  );
}
