import menuData from '../database/menuData';

console.log(menuData);

export default function MenuRow({kind, text}){
  return (
    <section id={kind}>
      <h2>{text}</h2>
      <div className='menu'>
        {menuData[kind].map(item => JSXifyMenuItem({item}))}
      </div>
    </section>
  );
}

function JSXifyMenuItem({item:{imgsrc, imgalt, name, description, price}}){
  return (
    <article class="menu-item meal1" onclick="handleSelection('.meal1')">
      <div class="item-wrapper">
        <img src={imgsrc} alt={imgalt} />
        <h3>{name}</h3>
        <p class="unit-description">{description}</p>
      </div>
      <div class="price-wrapper">
        <p class="unit-price">{price}</p>
        <ion-icon class="checked d-none md hydrated" name="checkmark-circle" role="img" aria-label="checkmark circle"></ion-icon>
      </div>
    </article>
  );
}

