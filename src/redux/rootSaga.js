import { all } from 'redux-saga/effects';
import venuesSaga from './venus/venuesSaga';

export function* rootSaga() {
  yield all([venuesSaga()]);
}
