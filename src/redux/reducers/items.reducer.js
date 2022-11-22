const itemsReducer = (state = {recentItems: []}, action) => {
  switch (action.type) {
    case 'SET_RECENT_ITEMS':
      return {...state, recentItems: action.payload};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default itemsReducer;