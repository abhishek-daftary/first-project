import { SET_COUNTER } from "../Action/actiontype.const";
import { DEFAULT_COUNTER_STATE } from "../Store/state";

const counterReducer = (state = DEFAULT_COUNTER_STATE, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
};

export default counterReducer;
