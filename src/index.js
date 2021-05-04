import ReactDOM from 'react-dom';
import MenuRow from './menuComponents/rows';
import Header from './header';
import Footer from './footer';
import React from 'react';

const root = document.querySelector('.root');

function App(){
  const [orderStatus, setOrderStatus] = React.useState(false);
  return (
    <>
      <Header />
      <main>
        <MenuRow kind={'meals'} text={'Primeiro, seu prato'} setOrderStatus={setOrderStatus}/>
        <MenuRow kind={'drinks'} text={'Agora, sua bebida'} setOrderStatus={setOrderStatus}/>
        <MenuRow kind={'desserts'} text={'Por fim, sua sobremesa'} setOrderStatus={setOrderStatus}/>
      </main>
      <Footer status={orderStatus}/>
    </>
  );

}

ReactDOM.render(<App />, root);
