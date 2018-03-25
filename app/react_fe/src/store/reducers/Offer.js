import * as actionTypes from '../../utils/actionTypes';
import update from '../../utils/update';

const initialState = {
    offers: [],
    rerender: false,
    error: false,
    errorMsg: ''
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_OFFERS:
            return update(state, {
              error : false,
              offers : action.offers});

        case actionTypes.SET_OFFERS_FAIL:
            return update(state, {
              error : true,
              offers : action.errorMsg});

        case actionTypes.POST_OFFER:
            return state;

        case actionTypes.POST_OFFER_SUCCESS:
            return update(state, {error : false} );

        case actionTypes.POST_OFFER_FAIL:
            return update(state, {error : true} );

        default:
            return state;
    }
};

export default reducer;