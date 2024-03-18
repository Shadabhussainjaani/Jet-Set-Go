import { fromJS } from 'immutable';
import * as Actions from './constants';

const initState = fromJS({
  isLogin: false,
  apiLoad: false,
  flightDetails: [],
});
export default function flightsReducer(state = initState, action = {}) {
  switch (action.type) {
    case Actions.GET_ALL_FLIGHTS_DETAILS:
      return {
        ...state,
        apiLoad: true,
      };

    case Actions.GET_ALL_FLIGHTS_DETAILS_SUCCESS:
      return {
        ...state,
        apiLoad: false,
        flightDetails: action.payload,
      };

    default:
      return state;
  }
}
