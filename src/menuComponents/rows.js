import menuData from '../database/menuData';
import React from 'react';

export default function MenuRow({kind, text, setSelectedItem}){
  function JSXifyMenuItem({item:{imgsrc, imgalt, name, description, price, key}, index}){

    function makeObjItem(index, amount){
      return {...menuData[kind][index], amount};
    }

    function hide(event){
      let currentArticle = event.target;
      while (currentArticle.tagName !== 'ARTICLE'){
        currentArticle = currentArticle.parentNode;
      }
      currentArticle.classList.remove('selected');
    }

    function increment(event, index){
      event.stopPropagation();
      setAmount(amount+1);
      setSelectedItem(makeObjItem(index,amount+1));
    }
  
    function decrement(event, index){
      event.stopPropagation();
      setAmount(amount-1);
      setSelectedItem(makeObjItem(index,amount-1));
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
            <button className="downButton" onClick={(event)=>decrement(event, index)}>-</button>
            <span className="count">{amount}</span>
            <button className="upButton" onClick={(event)=>increment(event, index)}>+</button>
          </div>        
        </div>
      </article>
    );
  }

  return (
    <section id={kind}>
      <h2>{text}</h2>
      <div className='menu'>
        {menuData[kind].map((item, index) => JSXifyMenuItem({item, index}))}
      </div>
    </section>
  );
}

function handleItemClick(event){
  let currentArticle = event.target;
  while (currentArticle.tagName !== 'ARTICLE'){
    currentArticle = currentArticle.parentNode;
  }

  let currentSection = currentArticle;
  while (currentSection.tagName !== 'SECTION'){
    currentSection = currentSection.parentNode;
  }

  const allArticles = currentSection.querySelectorAll('ARTICLE');
  allArticles.forEach(article => article.classList.remove('selected'));

  currentArticle.classList.add('selected');
  
  const strCount = currentArticle.querySelector('.count').textContent;
  const upButton = currentArticle.querySelector('.upButton'); 
  if (strCount === '0'){
    upButton.click();
  }
}

