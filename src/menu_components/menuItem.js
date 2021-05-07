import React from "react";
import deepCopy from "../general_functions/deepCopy";

export default function MenuItem({ objConfig }) {
  const { item, itemIndex, catIndex, setOrderState, orderState } = objConfig;
  const { imgsrc, imgalt, name, description, price } = item;

  function addToItemState(num) {
    const newState = deepCopy(orderState);
    newState[catIndex][itemIndex].amount += num;
    setOrderState(newState);
  }

  const itemAmount = orderState[catIndex][itemIndex].amount;

  const itemClasses = itemAmount > 0 ? "menu-item selected" : "menu-item";

  const handleItemClick =
    itemAmount === 0 ? () => addToItemState(1) : () => null;

  return (
    <article onClick={handleItemClick} className={itemClasses}>
      <div className="item-wrapper">
        <img src={imgsrc} alt={imgalt} />
        <h3>{name}</h3>
        <p className="unit-description">{description}</p>
      </div>
      <div className="price-wrapper">
        <p className="unit-price">{price}</p>
        <div className="order-controls">
          <button className="downButton" onClick={() => addToItemState(-1)}>
            -
          </button>
          <span className="count">{itemAmount}</span>
          <button className="upButton" onClick={() => addToItemState(1)}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}
