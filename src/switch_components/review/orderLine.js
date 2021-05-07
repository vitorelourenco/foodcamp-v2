export default function OrderLine({objConfig}) {
  const { name, amount, total } = objConfig;
  const leftSide = amount > 1 ? `${name} (${amount}x)` : name;
  const rightSide = total.toFixed(2).replace(".", ",");

  return (
    <li className="order-line">
      <p>{leftSide}</p>
      <p>{rightSide}</p>
    </li>
  );
}
