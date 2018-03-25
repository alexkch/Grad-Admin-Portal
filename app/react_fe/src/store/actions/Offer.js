import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';

export const setOffers = (offers) => {
  return {
    type: actionTypes.SET_OFFERS,
    offers: offers
  };
};

export const setOffersFail = (errorMsg) => {
  return {
    type: actionTypes.SET_OFFERS_FAIL,
    errorMsg: errorMsg
  };
};

export const getOffers = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/offers');
      dispatch(setOffers(res.data));

    } catch (error) {
      dispatch(setOffersFail(error.message));
    };
  };
};


export const createOffer = (token, session, form) => {
  return async dispatch => {
    try {
      //dispatch(postOffer());
      const postData = {
        created_by_id: session.userId,
        created_by: session.name,
        fields : form
      }
      const res = await axios.post('/offers', postData);
      //dispatch(postSuccess(res.data));
      } catch (error) {
      //dispatch(postFail(error.message));
    };
  };
};
