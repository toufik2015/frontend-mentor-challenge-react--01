import React from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import { useState } from "react";
function App() {
  const [itemToAdd, setItemsToAdd] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const changeItemsNumberHandler = (e) => {
    const sign = e.target.id;
    console.log(sign);
    if (sign === "plus") setItemsToAdd((state) => state + 1);
    if (sign === "minus" && itemToAdd === 0) return;

    if (sign === "minus") setItemsToAdd((state) => state - 1);
  };

  const addToCartHandler = () => {
    setCartItems((state) => state + itemToAdd);
  };
  return (
    <div className="App">
      <NavBar cartItemsNumber={cartItems} />
      <ProductPage
        addToCart={addToCartHandler}
        itemsNumber={itemToAdd}
        addItems={changeItemsNumberHandler}
      />
    </div>
  );
}

export default App;
