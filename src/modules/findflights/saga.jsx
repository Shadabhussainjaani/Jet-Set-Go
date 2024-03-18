import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as Actions from './constants';
import NavigationService from '../../utils/navigation';
import { getAllFlightsDetailsApi } from './service';

function* signOutSuccess() {
  yield call(AsyncStorage.removeItem);
}

function* getAllFlightsDetailsSaga({ payload }) {
  try {
    const { data } = yield call(getAllFlightsDetailsApi);
    yield put({
      type: Actions.GET_ALL_FLIGHTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(
      '🚀 ~ file: saga.jsx:64 ~ function*getAllFlightsDetailsSaga ~ error:',
      error,
    );
  }
}

export default function* findFlights() {
  yield takeEvery(Actions.GET_ALL_FLIGHTS_DETAILS, getAllFlightsDetailsSaga);
}
