import * as actionTypes from '../actionTypes';

const initialState = {
    issues: null,
    error: false
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ISSUES:
            return {
                ...state,
                issues: action.issues,
                error: false
            };
        case actionTypes.SET_ISSUES_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;
