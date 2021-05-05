import JSXifyMenuItem from './jsxifyMenuItem';

export default function MenuRow({cathegory, catIndex, setOrderState, orderState}){
  const [id, text, key, arrItems] = cathegory;
  return (
    <section key={key} id={id}>
      <h2>{text}</h2>
      <div className='menu'>
        {arrItems.map((item, itemIndex) => JSXifyMenuItem({item, itemIndex, catIndex, setOrderState, orderState}))}
      </div>
    </section>
  );
}
