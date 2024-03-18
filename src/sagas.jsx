import { all } from 'redux-saga/effects';
import findFlights from './modules/findflights/saga';
/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([findFlights()]);
}
