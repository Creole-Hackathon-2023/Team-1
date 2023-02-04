import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import { authActionTypes } from './authTypes';

export function* loginUser() {
  yield takeEvery(authActionTypes.GET_LOGIN_REQUEST, function* (payload) {
    try {
      const result = yield call();
      if (result.data) {
      } else {
      }
    } catch (err) {}
  });
}
export function* registerUser() {
  yield takeEvery(authActionTypes.GET_REGISTER_REQUEST, function* (payload) {
    try {
      const result = yield call();
      if (result.data) {
        // localStorage.setItem('isAdmin', result.data.signIn.is_admin);
      } else {
      }
    } catch (err) {}
  });
}

export default function* authSaga() {
  yield all([fork(loginUser), fork(registerUser)]);
}
