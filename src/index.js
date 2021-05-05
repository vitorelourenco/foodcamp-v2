import ReactDOM from 'react-dom';
import MenuRow from './menuComponents/rows';
import Header from './header';
import Footer from './footer';
import React from 'react';

const root = document.querySelector('.root');

function App(){
  const [orderStatus, setOrderStatus] = React.useState(false);
  const [meal, setMeal] = React.useState({amount:0});
  const [drink, setDrink] = React.useState({amount:0});
  const [dessert, setDessert] = React.useState({amount:0});
  
  const isReady = meal.amount && drink.amount && dessert.amount;
  if (isReady){
    if(orderStatus === false){
      setOrderStatus(true);
    }
  } else {
    if(orderStatus === true){
      setOrderStatus(false);
    }
  }



  return (
    <>
      <Header />
      <main>
        <MenuRow kind={'meals'} text={'Primeiro, seu prato'} setSelectedItem={setMeal}/>
        <MenuRow kind={'drinks'} text={'Agora, sua bebida'} setSelectedItem={setDrink}/>
        <MenuRow kind={'desserts'} text={'Por fim, sua sobremesa'} setSelectedItem={setDessert}/>
      </main>
      <Footer order={{meal, drink, dessert}} status={orderStatus}/>
    </>
  );
}

ReactDOM.render(<App />, root);
