import * as constants from "./constants";

export function createNewUser(data) {
  return { 
    type: constants.CREATE_NEW_USER,
    data
  }
}