import * as constants from "./constants";

const initialState = {
  user: {},
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case constants.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
