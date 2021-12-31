import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    navigate("/home");
  };
  return (
    <div className="d-flex flex-row justify-content-center align-items-center py-5">
      <div className="my-5 p-3 loginContainer">
        <h2 className="mb-4">Please login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
          <button type="button" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
