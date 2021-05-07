import { Link } from "react-router-dom";
import OrderLine from './orderLine';
import * as Order from '../../libs/orderLib';

export default function Review({ orderState }) {
  const preProcessedOrder = Order.preProcessOrder(orderState);

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
              <p className="fw-bold">R$ {Order.getTotal(preProcessedOrder)}</p>
            </li>
          </ul>
        </div>
        <button
          className="confirm"
          onClick={() => Order.placeOrder(preProcessedOrder)}
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
