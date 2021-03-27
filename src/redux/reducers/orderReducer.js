export default function orderReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_ORDER':
      return [...state, { ...action.order }];
    default:
      return state;
  }
}
