import menuData from '../database/menuData';
import React from 'react';

export default function MenuRow({kind, text}){
  
  function increment(event, index){
    event.stopPropagation();
    const updatedAmounts = [...amounts];
    updatedAmounts[index]++;
    setAmounts(updatedAmounts);
  }

  function decrement(event, index){
    event.stopPropagation();
    const updatedAmounts = [...amounts];
    updatedAmounts[index]--;
    setAmounts(updatedAmounts);
  }

  function JSXifyMenuItem({item:{imgsrc, imgalt, name, description, price, key}, index}){
    return (
      <article  onClick={(e)=>handleItemClick(e)} key={key} className="menu-item">
        <div className="item-wrapper">
          <img src={imgsrc} alt={imgalt} />
          <h3>{name}</h3>
          <p className="unit-description">{description}</p>
        </div>
        <div className="price-wrapper">
          <p className="unit-price">{price}</p>
          <div className="order-controls">
            <button className="downButton" onClick={(event)=>decrement(event, index)}>-</button>
            <span className="count">{amounts[index]}</span>
            <button className="upButton" onClick={(event)=>increment(event, index)}>+</button>
          </div>        
        </div>
      </article>
    );
  }

  const [amounts, setAmounts] = React.useState((new Array(menuData[kind].length)).fill(0));

  return (
    <section id={kind}>
      <h2>{text}</h2>
      <div className='menu'>
        {menuData[kind].map((item, index) => JSXifyMenuItem({item, index}))}
      </div>
    </section>
  );
}

function handleItemClick(e){
  let currentArticle = e.target;
  while (currentArticle.tagName !== 'ARTICLE'){
    currentArticle = currentArticle.parentNode;
  }

  let currentSection = currentArticle;
  while (currentSection.tagName !== 'SECTION'){
    currentSection = currentSection.parentNode;
  }

  const allArticles = currentSection.querySelectorAll('ARTICLE');
  allArticles.forEach(article => article.classList.remove('current'));

  currentArticle.classList.add('current');
  
  const strCount = currentArticle.querySelector('.count').textContent;
  const upButton = currentArticle.querySelector('.upButton'); 
  if (strCount === '0'){
    upButton.click();
  }
}

