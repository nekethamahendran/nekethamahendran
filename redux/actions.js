// redux/actions.js
export const setRoute = (route) => ({
  type: 'SET_ROUTE',
  payload: route,
});

export const calculateToll = () => {
  return async (dispatch) => {
    try {
      // Call TollGuru API to calculate toll
      const calculatedRoute = await fetchTollFromAPI();
      
      // Dispatch setRoute action to update the Redux store
      dispatch(setRoute(calculatedRoute));
    } catch (error) {
      console.error('Error calculating toll:', error);
    }
  };
};
