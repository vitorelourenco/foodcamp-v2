import MenuRow from "./menuComponents/rows";
import Footer from "./footer";
import allCategories from "./database/menuData";
import React from "react";

export default function Home({ orderState, setOrderState }) {
  function handleOrderStatus() {
    const isReady = orderState.reduce((bol, row) => {
      let rowFlag = false;
      row.forEach((item) => {
        if (item.amount > 0) rowFlag = true;
      });
      return bol && rowFlag;
    }, true);

    if (isReady === true) {
      if (orderStatus === false) {
        setOrderStatus(true);
      }
    } else {
      if (orderStatus === true) {
        setOrderStatus(false);
      }
    }
  }

  const [orderStatus, setOrderStatus] = React.useState(false);

  handleOrderStatus();

  return (
    <>
      <main>
        {allCategories.map((category, catIndex) => (
          <MenuRow
            key={category.key}
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
