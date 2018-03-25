import * as actionTypes from '../../utils/actionTypes';
import { update } from '../../utils/update';

const initialState = {
    issues: [],
    rerender: false,
    error: false,
    errorMsg: ''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ISSUES:
            return update(state, {
              error : false,
              issues : action.issues});

        case actionTypes.SET_ISSUES_FAIL:
            return update(state, {
              error : true,
              issues : action.errorMsg});

        case actionTypes.POST_ISSUE:
            return state;

        case actionTypes.POST_ISSUE_SUCCESS:
            return update(state, {error : false} );

        case actionTypes.POST_ISSUE_FAIL:
            return update(state, {error : true} );

        default:
            return state;
    }
};

export default reducer;
