import axios from "axios";
import { SET_USER } from "./actiontype.const";

const fetchuser = (userlist) => ({
  type: SET_USER,
  userlist,
});

export const fetchUser = () => async (dispatch) => {
  const users = await axios.get("https://fakestoreapi.com/users");
  dispatch(fetchuser(users.data));
};
