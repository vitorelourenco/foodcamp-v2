import getHead from '../general/getHead';
import React from 'react';

export default function JSXifyMenuItem({item, itemIndex, catIndex, setOrderState, orderState}){
  const {imgsrc, imgalt, name, description, price, key} = item;
  
  function deepCopy(object){
    return JSON.parse(JSON.stringify(object))
  }

  function handleItemClick(event){
    const currentArticle = getHead(event.target, 'ARTICLE')
    currentArticle.classList.add('selected');

    const strCount = currentArticle.querySelector('.count').textContent;
    const upButton = currentArticle.querySelector('.upButton');
    if (strCount === '0'){
      //the click will run setSelectedItem 
      upButton.click();
    }
  }

  function hide(event){
    const currentArticle = getHead(event.target, 'ARTICLE');
    currentArticle.classList.remove('selected');
  }

  function increment(event){
    event.stopPropagation();
    const newState = deepCopy(orderState);
    newState[catIndex][itemIndex].amount = amount+1;
    setOrderState(newState);
    setAmount(amount+1);
  }

  function decrement(event){
    event.stopPropagation();
    const newState = deepCopy(orderState);
    newState[catIndex][itemIndex].amount = amount-1;
    setOrderState(newState);
    setAmount(amount-1);
    if (amount === 1) hide(event);
  }

  const [amount,setAmount] = React.useState(0);

  return (
    <article  onClick={(event)=>handleItemClick(event)} key={key} className="menu-item">
      <div className="item-wrapper">
        <img src={imgsrc} alt={imgalt} />
        <h3>{name}</h3>
        <p className="unit-description">{description}</p>
      </div>
      <div className="price-wrapper">
        <p className="unit-price">{price}</p>
        <div className="order-controls">
          <button className="downButton" onClick={(event)=>decrement(event)}>-</button>
          <span className="count">{amount}</span>
          <button className="upButton" onClick={(event)=>increment(event)}>+</button>
        </div>        
      </div>
    </article>
  );
}

