import * as Actions from './constants';

/**
 * Action Get Flights
 */
export function getAllFlightsDetails(payload) {
  return {
    type: Actions.GET_ALL_FLIGHTS_DETAILS,
    payload,
  };
}
