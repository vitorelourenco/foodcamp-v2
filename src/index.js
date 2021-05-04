import ReactDOM from 'react-dom';
import MenuRow from './menuComponents/rows';

const root = document.querySelector('.root');

function App(){
  return (
    <>
      <header>
        <h1>FoodCamp</h1>
        <p>Sua comida em 6 minutos</p>
      </header>
      <main>
        <MenuRow kind={'meals'} text={'Primeiro, seu prato'}/>
        <MenuRow kind={'drinks'} text={'Agora, sua bebida'}/>
        <MenuRow kind={'desserts'} text={'Por fim, sua sobremesa'}/>
      </main>
      <footer>
        <button className="bg-grey" disabled="">
          <p className="goto-checkout-text">Selecione os 3 itens<br />para fechar o pedido</p>
        </button>
      </footer>
    </>
  );

}


ReactDOM.render(<App />, root);
