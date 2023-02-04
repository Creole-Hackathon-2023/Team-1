import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import { serviceHandler } from '../../services/AxiosService';
import { venuesActionTypes } from './venuesTypes';

export function* venuesListEffect() {
  yield takeEvery(venuesActionTypes.GET_VENUE_LIST_REQUEST, function* () {
    try {
      const result = yield call(serviceHandler.get());
      console.log(result);
    } catch (err) {}
  });
}
export default function* venuesSaga() {
  yield all([fork(venuesListEffect)]);
}
