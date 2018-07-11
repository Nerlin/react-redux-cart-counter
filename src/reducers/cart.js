import {ADD_CART_ITEM, CLEAR_CART} from "../actions/cart";


const initialState = {
  itemsCount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {...state, itemsCount: state.itemsCount + 1};
    case CLEAR_CART:
      return {...state, itemsCount: 0};
    default:
      return state;
  }
};

export default cartReducer;