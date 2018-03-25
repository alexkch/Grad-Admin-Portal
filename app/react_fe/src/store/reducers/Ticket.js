import * as actionTypes from '../../utils/actionTypes';
import update from '../../utils/update';

const initialState = {
    tickets: [],
    rerender: false,
    error: false,
    errorMsg: ''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_TICKETS:
            return update(state, {
              error : false,
              tickets : action.tickets});

        case actionTypes.SET_TICKETS_FAIL:
            return update(state, {
              error : true,
              tickets : action.errorMsg});

        case actionTypes.POST_TICKET:
            return state;

        case actionTypes.POST_TICKET_SUCCESS:
            return update(state, {error : false} );

        case actionTypes.POST_TICKET_FAIL:
            return update(state, {error : true} );

        default:
            return state;
    }
};

export default reducer;