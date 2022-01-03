import React from "react";
import { GetUser } from "../../Selector/userSelector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../Action/userAction";
import { useEffect } from "react";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector(GetUser);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <h4>User List</h4>
      {users.map((item) => (
        <div>{item.username}</div>
      ))}
    </div>
  );
};

export default User;
