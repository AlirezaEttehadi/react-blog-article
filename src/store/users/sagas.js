import { createUserWithEmailAndPassword } from "firebase/auth";
import { call, put, takeLatest } from "redux-saga/effects";
import { firebaseAuth } from "../../firebase";
import { setUser, setUserError } from "./actions";
import * as constants from "./constants";

function* createNewUserSaga(action) {
  try {
    const {
      user: {},
    } = yield call(
      createUserWithEmailAndPassword,
      firebaseAuth,
      action.data.email,
      action.data.password
    );
    console.log(user);
    if (user?.accessToken) {
      yield put(setUserError(""));
      yield put(setUser(user));
    } else {
      yield put(setUserError("creating user was not succeessful!"));
    }
  } catch (error) {
    console.log(error.message);
    yield put(setUserError(true));
  }
}

function* userSaga() {
  yield takeLatest(constants.CREATE_NEW_USER, createNewUserSaga);
}

export default userSaga;
