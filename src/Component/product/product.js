import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts, SetProducts } from "../../Action/productAction";
import { GetCart, GetProducts } from "../../Selector/productSelector";
import { useEffect } from "react";
import "./product.scss";
import { addcart } from "../../Action/productAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector(GetProducts);
  const cart = useSelector(GetCart);
  // const handlefetch = () => {
  //   dispatch(FetchProducts());
  // };
  useEffect(() => {
    dispatch(FetchProducts());
  }, []);
  const handlecart = (selectedProduct) => {
    const IsInCart = cart.filter((item) => item.id === selectedProduct.id);
    if (IsInCart.length === 0) {
      dispatch(addcart(selectedProduct));
    }
  };
  return (
    <div>
      <h1>details</h1>
      <div>
        <div>
          {/* <button onClick={handlefetch}>Fetch Products</button> */}
          <div className="d-flex flex-row flex-wrap m-2">
            {products.map((item) => (
              <div className=" products mx-2 my-3">
                {item.title}
                <div className="d-flex flex-row justify-content-between">
                  <span>Price - {item.price}$</span>

                  <button
                    className="btn btn-primary p-1 fs-6"
                    onClick={() => handlecart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
