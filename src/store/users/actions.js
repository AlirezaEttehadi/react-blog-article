import * as constants from "./constants";

export function createNewUser(data) {
  return { 
    type: constants.CREATE_NEW_USER,
    data
  }
}
export function setUser(data) {
  return { 
    type: constants.SET_USER,
    data
  }
}

export function setUserError(data) {
  return { 
    type: constants.SET_USER_ERROR,
    data
  }
}