import React from "react";
import {connect} from "react-redux";
import {addCartItem} from "../actions/cart";
import Button, {ButtonTheme} from "../components/Button";


const CartAddItemButton = ({children, onClick}) => (
  <Button theme={ButtonTheme.submit} onClick={onClick}>
    {children}
  </Button>
);

CartAddItemButton.defaultProps = {
  children: "Добавить в корзину"
};


const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(addCartItem());
  }
});

export default connect(null, mapDispatchToProps)(CartAddItemButton);