import { createUserWithEmailAndPassword } from "firebase/auth";
import { call, put, takeLatest } from "redux-saga/effects";
import { firebaseAuth } from "../../firebase";
import { setUser, setUserError } from "./actions";
import * as constants from "./constants";

function* createNewUserSaga(action) {
  try {
    const userObj = yield call(
      createUserWithEmailAndPassword,
      firebaseAuth,
      action.data.email,
      action.data.password
    );
    console.log(userObj?.user)
    if (userObj?.user?.accessToken) {
      yield put(setUserError(""));
      yield put(setUser(userObj?.user));
    } else {
      yield put(setUserError("creating user was not succeessful!"));
    }
  } catch (error) {
    console.log(error.message)
    yield put(setUserError(true));
  }
}

function* userSaga() {
  yield takeLatest(constants.CREATE_NEW_USER, createNewUserSaga);
}

export default userSaga;
