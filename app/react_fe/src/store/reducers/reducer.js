import * as actionTypes from '../actionTypes';

const initialState = {
  counter : 0
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION1:
      return {
          ...state,
          issues: {
            ...state.issues,
            [action.]
          }
      };
      default :
        return state;
  }
};

export default reducer;
