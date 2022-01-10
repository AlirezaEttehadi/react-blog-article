import * as constants from "./constants";

export function createNewUser() {
  return { 
    type: constants.CREATE_NEW_USER,
  }
}