// redux/reducers.js
const initialState = {
  route: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROUTE':
      return {
        ...state,
        route: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
