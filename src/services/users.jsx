import request from '../utils/request';

import qs from 'qs';
export async function query() {
  return request(`http://localhost:8080/commodity/getAllConmodity`);
};