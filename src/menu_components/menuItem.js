import React from "react";
import deepCopy from "../general_functions/deepCopy";

export default function MenuItem(props) {
  const {
    item,
    itemIndex,
    catIndex,
    setOrderState,
    orderState,
  } = props.objConfig;
  const { imgsrc, imgalt, name, description, price } = item;

  function handleItemClick() {
    if (stateItem.amount === 0) {
      const newState = deepCopy(orderState);
      newState[catIndex][itemIndex].amount = 1;
      setOrderState(newState);
    }
  }

  function increment(event) {
    event.stopPropagation();
    const newState = deepCopy(orderState);
    newState[catIndex][itemIndex].amount = stateItem.amount + 1;
    setOrderState(newState);
  }

  function decrement(event) {
    event.stopPropagation();
    const newState = deepCopy(orderState);
    newState[catIndex][itemIndex].amount = stateItem.amount - 1;
    setOrderState(newState);
  }

  const stateItem = orderState[catIndex][itemIndex];

  const articleClasses =
    stateItem.amount > 0 ? "menu-item selected" : "menu-item";

  return (
    <article onClick={() => handleItemClick()} className={articleClasses}>
      <div className="item-wrapper">
        <img src={imgsrc} alt={imgalt} />
        <h3>{name}</h3>
        <p className="unit-description">{description}</p>
      </div>
      <div className="price-wrapper">
        <p className="unit-price">{price}</p>
        <div className="order-controls">
          <button className="downButton" onClick={(event) => decrement(event)}>
            -
          </button>
          <span className="count">{stateItem.amount}</span>
          <button className="upButton" onClick={(event) => increment(event)}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}
