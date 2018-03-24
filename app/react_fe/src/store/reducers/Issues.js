import * as actionTypes from '../utils/actionTypes';

const initialState = {
    issues: [],
    error: false,
    errorMsg: ''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ISSUES:
            return {
                ...state,
                error: false,
                issues: action.issues
            };
        case actionTypes.SET_ISSUES_FAIL:
            return {
                ...state,
                error: true,
                errorMsg: action.errorMsg
            };
        case actionTypes.POST_ISSUE:
            return {
                ...state,
                error: false,
                issues: action.issues
            };
        default:
            return state;
    }
};

export default reducer;
