import * as actionTypes from '../utils/actionTypes';
import { update } from '../utils/update';

const initialState = {
    userId: null,
    token: null,
    error: null,
    errorMsg: ''
};

const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case actionTypes.AUTH_USER:
            return update(state, {error: null});

        case actionTypes.AUTH_SUCCESS:
            return update(state, {
              token : action.token,
              userId : action.userId
              error : false});

        case actionTypes.AUTH_SUCCESS:
            return update(state, {
              error : true,
              errorMsg : action.errorMsg});

        default:
            return state;
    }
};

export default reducer;
