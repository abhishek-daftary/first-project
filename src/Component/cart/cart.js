import React from "react";
import { useSelector } from "react-redux";
import { GetCart } from "../../Selector/productSelector";
import "./cart.scss";

const Cart = () => {
  const products = useSelector(GetCart);
  return (
    <div>
      {products.map((item) => (
        <div className=" container cart">{item.title}</div>
      ))}
    </div>
  );
};

export default Cart;
