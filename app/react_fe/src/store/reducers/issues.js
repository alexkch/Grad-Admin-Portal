import * as actionTypes from '../utils/actionTypes';

const initialState = {
    issues: [],
    error: false,
    errorMsg: 'Something went wrong'
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ISSUES:
            return {
                ...state,
                error: false,
                issues: action.issues
            };
        case actionTypes.SET_ISSUES_FAILED:
            return {
                ...state,
                error: true,
                errorMsg: action.errorMsg
            };
        default:
            return state;
    }
};

export default reducer;
