import axios from "axios";
import { SET_PRODUCTS, ADD_CART } from "./actiontype.const";

export const SetProducts = (productsList) => ({
  type: SET_PRODUCTS,
  productsList,
});

export const FetchProducts = () => async (dispatch) => {
  const products = await axios.get("https://fakestoreapi.com/products");
  dispatch(SetProducts(products.data));
};

export const addcart = (item) => ({
  type: ADD_CART,
  item,
});
