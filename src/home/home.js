import MenuRow from "../menu_components/rows";
import Footer from "./footer";
import allCategories from "../database/menuData";
import React from "react";

export default function Home({ orderState, setOrderState }) {
  function handleOrderStatus() {

    //isReady is true if at least 1 item per category
    //has a property amount that is larger than zero
    const isReady = orderState.reduce((bol, row) => {
      let rowFlag = false;
      row.forEach((item) => {
        if (item.amount > 0) rowFlag = true;
      });
      return bol && rowFlag;
    }, true);

    //only setOrderStatus if orderStatus and isReady arent matching
    if (isReady !== orderStatus) setOrderStatus(isReady);

  }

  //orderStatus only job is to know wether or not the 'Fechar pedido'
  //button should be displayed. It has nothing to do with orderState
  //orderSate is a state of <App /> that keeps track of the users choices
  const [orderStatus, setOrderStatus] = React.useState(false);

  //Everytime orderState (state of <App />) is updated, the function Home
  //runs again, so i'm checking if i should display 'Fechar pedido' or not
  handleOrderStatus();

  return (
    <>
      <main>
        {allCategories.map((category, catIndex) => (
          <MenuRow
            key={catIndex}
            category={category}
            catIndex={catIndex}
            orderState={orderState}
            setOrderState={setOrderState}
          />
        ))}
      </main>
      <Footer order={orderState} status={orderStatus} />
    </>
  );
}
