import * as types from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusActions';

const baseUrl = 'http://localhost:3001/statusAll/';

export function loadStatusAllSuccess(statusAll) {
  return { type: types.LOAD_STATUS_SUCCESS, statusAll };
}

export function loadStatusAll() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return fetch(baseUrl)
      .then(async (response) => {
        if (response.ok) return response.json();
        if (response.status === 400) {
          const error = await response.text();
          throw new Error(error);
        }
        throw new Error('Network response was not ok.');
      })
      .then((statusAll) => {
        dispatch(loadStatusAllSuccess(statusAll));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
