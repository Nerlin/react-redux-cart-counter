import React from "react";
import {connect} from "react-redux";
import {clearCart} from "../actions/cart";
import Button from "../components/Button";


const CartClearButton = ({children, onClick}) => (
  <Button onClick={onClick}>
    {children}
  </Button>
);

CartClearButton.defaultProps = {
  children: "Очистить корзину"
};


const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(clearCart());
  }
});

export default connect(null, mapDispatchToProps)(CartClearButton);