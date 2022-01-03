import { SET_USER } from "../Action/actiontype.const";
import { DEFAULT_USER_STATE } from "../Store/state";

const userReducer = (state = DEFAULT_USER_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userList: action.userlist,
      };
    default:
      return state;
  }
};

export default userReducer;
