import React, { useState } from "react";
import { IconBase, icons } from "react-icons";
import Cart from "../cart/cart";
import Counter from "../counter/counter";
import Navigation from "../navigation/navigation";
import Product from "../product/product";
import User from "../user";
import "./home.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Home = () => {
  const [dashboardView, setdashboardView] = useState("counter");
  const [isOpen, setisOpen] = useState(false);
  const changeView = (view) => {
    setdashboardView(view);
  };
  const handleCartView = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="d-flex flex-row">
      <div className="col-sm-2">
        <Navigation changeView={changeView} />
      </div>
      <div className="col-sm-10">
        {dashboardView === "counter" && <Counter />}
        {dashboardView === "product" && <Product />}
        {dashboardView === "user" && <User />}
      </div>

      <div className="d-flex flex-row cartView overflow-hidden position-absolute">
        <button onClick={handleCartView} className="cartIcon">
          <AiOutlineShoppingCart />
        </button>
        <div
          className={`bg-white cartContent ${
            isOpen ? "openCart" : "closeCart"
          }`}
        >
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Home;
