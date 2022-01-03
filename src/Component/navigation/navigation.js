import React from "react";

const Navigation = ({ changeView }) => {
  const handleView = (view) => {
    changeView(view);
  };
  return (
    <div>
      <h4 className="display-6">Project Overview</h4>
      <hr />
      <div className="d-flex flex-column">
        <button
          onClick={() => handleView("counter")}
          className="btn btn-info mb-3"
        >
          Counter
        </button>
        <button
          onClick={() => handleView("product")}
          className="btn btn-info mb-3"
        >
          ProductList
        </button>
        <button onClick={() => handleView("user")} className="btn btn-info">
          Users
        </button>
      </div>
    </div>
  );
};

export default Navigation;
