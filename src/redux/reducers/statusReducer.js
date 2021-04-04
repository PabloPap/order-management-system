import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function statusReducer(state = initialState.statusAll, action) {
  switch (action.type) {
    case types.LOAD_STATUS_SUCCESS:
      return action.statusAll;
    default:
      return state;
  }
}
