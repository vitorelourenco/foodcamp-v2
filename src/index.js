import ReactDOM from 'react-dom';
import MenuRow from './menuComponents/rows';
import Header from './header';
import Footer from './footer';
import React from 'react';
import allCathegories from './database/menuData';
import initialState from './database/initialState';

const root = document.querySelector('.root');

function App(){
  function handleOrderStatus(){

    const isReady = orderState.reduce((bol, row)=>{
      let rowFlag = false;
      row.forEach((item)=>{
        if (item.amount > 0) rowFlag = true; 
      });
      return bol && rowFlag;
    }, true);

    if (isReady === true){
      if (orderStatus === false){
        setOrderStatus(true);
      }
    } else {
      if (orderStatus === true){
        setOrderStatus(false);
      }
    }

  }

  const [orderStatus, setOrderStatus] = React.useState(false);
  const [orderState, setOrderState] = React.useState(initialState);

  handleOrderStatus();

  return (
    <>
      <Header />
      <main>
        {allCathegories.map((cathegory, catIndex) => 
          <MenuRow 
          key={cathegory.key} 
          cathegory={cathegory} 
          catIndex={catIndex} 
          orderState={orderState} 
          setOrderState={setOrderState}
          />
        )}
      </main>
      <Footer order={orderState} status={orderStatus}/>
    </>
  );

}

ReactDOM.render(<App />, root);
