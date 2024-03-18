import queryString from 'query-string';
import request from '../../utils/fetch';

export const getAllFlightsDetailsApi = async () => {
  var data = await request.get(`378e02e8e732bb1ac55b`);
  return data;
};
