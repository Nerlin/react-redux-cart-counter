import PropTypes from "prop-types";
import React from "react";

import "../styles/Cart.css";


const Cart = ({itemsCount}) => (
  <div className={"Cart"}>
    <div className={"Cart--Title"}>Корзина</div>
    <div className={"Cart--Items"}>
      Количество элементов в корзине: <span className={"Cart--ItemsCount"}>{itemsCount}</span>.
    </div>
  </div>
);

Cart.propTypes = {
  itemsCount: PropTypes.number
};

export default Cart;