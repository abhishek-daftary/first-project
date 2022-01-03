import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SetCounter } from "../../Action/counterAction";
import { GetCounter } from "../../Selector/counterSelector";
import "./counter.scss";

const Counter = () => {
  const count = useSelector(GetCounter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(SetCounter(count + 1));
  };
  const handleDecrement = () => {
    dispatch(SetCounter(count - 1));
  };
  return (
    <div className="p-4">
      <h4>Counter</h4>
      <div className="counter p-2">
        <div className="display-6 text-center mb-5">{count}</div>
        <div className="d-flex flex-row justify-content-around">
          <button className="btn btn-primary" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn btn-primary" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
