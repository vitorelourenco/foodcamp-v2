export function preProcessOrder(rawOrder) {
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

export function getTotal(preProcessedOrder) {
  return preProcessedOrder
    .reduce((acc, orderLine) => acc + orderLine.total, 0)
    .toFixed(2)
    .replace(".", ",");
}

export function placeOrder(preProcessedOrder) {
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
