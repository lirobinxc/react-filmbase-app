const initialState = '';

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
};
export default errorReducer;
