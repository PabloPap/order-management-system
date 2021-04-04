import * as types from '../actions/actionTypes';

export default function statusReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_STATUS_SUCCESS:
      return action.statusAll;
    default:
      return state;
  }
}
