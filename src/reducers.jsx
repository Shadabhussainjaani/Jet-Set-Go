import { combineReducers } from 'redux';
import findFlights from './modules/findflights/reducer';
/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  flights: findFlights,
});

export default rootReducers;
