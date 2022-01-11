import { call, put, takeLatest } from "redux-saga/effects";
import { signUpWithEmailPasswordFirebase } from "../../firebase";
import { setUser, setUserError } from "./actions";
import * as constants from "./constants";

function* createNewUserSaga(action) {
  try {
    const user = yield call(
      signUpWithEmailPasswordFirebase,
      action.data.email,
      action.data.password
    );
    if (user?.accessToken) {
      yield put(setUserError(""));
      yield put(setUser(user));
    } else {
      yield put(setUserError("creating user was not succeessful!"));
    }
  } catch (error) {
    yield put(setUserError(true));
  }
}

function* userSaga() {
  yield takeLatest(constants.CREATE_NEW_USER, createNewUserSaga);
}

export default userSaga;
