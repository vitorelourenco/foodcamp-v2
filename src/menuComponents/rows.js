import JSXifyMenuItem from './jsxifyMenuItem';

export default function MenuRow({category, catIndex, setOrderState, orderState}){
  const {id, text, key, items} = category;
  return (
    <section key={key} id={id}>
      <h2>{text}</h2>
      <div className='menu'>
        {items.map((item, itemIndex) => JSXifyMenuItem({item, itemIndex, catIndex, setOrderState, orderState}))}
      </div>
    </section>
  );
}
