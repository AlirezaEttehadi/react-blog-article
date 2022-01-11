import * as constants from "./constants";

export const initialState = {
  user: {},
  userError : false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case constants.SET_USER:
      return {
        ...state,
        user: action.data,
      };
    case constants.SET_USER_ERROR:
      return {
        ...state,
        userError: action.data,
      };
    default:
      return state;
  }
}
