import React from 'react';
import Buttons from "./Buttons";
import Cart from "../containers/Cart";
import CartAddItemButton from "../containers/CartAddItemButton";
import CartClearButton from "../containers/CartClearButton";


const App = () => (
  <div className={"App"}>
    <Cart/>

    <Buttons>
      <CartAddItemButton/>
      <CartClearButton/>
    </Buttons>
  </div>
);
export default App;
