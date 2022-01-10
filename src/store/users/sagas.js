import { takeLatest } from 'redux-saga/effects'
import * as constants from "./constants";

function* createNewUserSaga() {
   try {
    yield  console.log("!!!")
   } catch (error) {
      console.log(error)
   }
}

function* userSaga() {
   yield takeLatest(constants.CREATE_NEW_USER, createNewUserSaga);
}

export default userSaga;