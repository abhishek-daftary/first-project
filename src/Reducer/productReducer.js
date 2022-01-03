import { ADD_CART, SET_PRODUCTS } from "../Action/actiontype.const";
import { DEFAULT_PRODUCT_STATE } from "../Store/state";

const productReducer = (state = DEFAULT_PRODUCT_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productsList: action.productsList,
      };
    case ADD_CART:
      return {
        ...state,
        cart: state.cart.concat(action.item),
      };
    default:
      return state;
  }
};

export default productReducer;
