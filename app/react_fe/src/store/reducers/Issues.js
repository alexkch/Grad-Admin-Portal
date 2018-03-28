import * as actionTypes from '../../utils/actionTypes';
import update from '../../utils/update';

const initialState = {
    issues: [],
    error: false,
    errorMsg: ''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ISSUES:
            return update(state, {
              error : action.error,
              issues : action.issues});

        case actionTypes.SET_ISSUES_FAIL:
            return update(state, {
              error : action.error,
              errorMsg : action.errorMsg});

        case actionTypes.POST_ISSUE:
            return state;

        case actionTypes.POST_ISSUE_SUCCESS:
            return update(state, {error : action.error} );

        case actionTypes.POST_ISSUE_FAIL:
            return update(state, {
              error : action.error,
              errorMsg: action.errorMsg});

        default:
            return state;
    }
};

export default reducer;
