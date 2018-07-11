import {addCartItem, clearCart} from "../../actions/cart";
import cartReducer from "../../reducers/cart";


it("returns current cart state if action is unknown", () => {
  const initialState = {itemsCount: 3};
  const unknownAction = {};
  const state = cartReducer(initialState, unknownAction);
  expect(state).toEqual(initialState);
});

it("increases cart item count", () => {
  const initialState = {itemsCount: 0};
  const actualState = cartReducer(initialState, addCartItem());
  expect(actualState).toHaveProperty("itemsCount", 1);
});

it("clear cart item count", () => {
  const initialState = {itemsCount: 5};
  const actualState = cartReducer(initialState, clearCart());
  expect(actualState).toHaveProperty("itemsCount", 0);
});