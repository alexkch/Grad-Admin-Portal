import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';

export const setOffers = (offers) => {
  return {
    type: actionTypes.SET_OFFERS,
    error: false,
    offers: offers
  };
};

export const setOffersFail = (errorMsg) => {
  return {
    type: actionTypes.SET_OFFERS_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getOffers = (token) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/offers', header);
      dispatch(setOffers(res.data));

    } catch (error) {
      dispatch(setOffersFail(error.message));
    };
  };
};

export const postOffer = (offers) => {
  return {
    type: actionTypes.POST_OFFER
  };
};

export const postSuccess = (errorMsg) => {
  return {
    type: actionTypes.POST_OFFER_SUCCESS,
    error: false
  };
};

export const postFail = (errorMsg) => {
  return {
    type: actionTypes.POST_OFFER_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const createOffer = (token, session, form) => {
  return async dispatch => {
    try {
      dispatch(postOffer());
      const postData = {
        // DATA FOR POST
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.post('/offers', postData, header);
      dispatch(postSuccess());
      dispatch(getOffers(token));
      } catch (error) {
      dispatch(postFail(error.message));
    };
  };
};


export const removeOffer = (offers) => {
  return {
    type: actionTypes.DELETE_OFFER
  };
};

export const removeSuccess = (errorMsg) => {
  return {
    type: actionTypes.DELETE_OFFER_SUCCESS,
    error: false
  };
};

export const removeFail = (errorMsg) => {
  return {
    type: actionTypes.DELETE_OFFER_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const deleteOffer = (token, id) => {
  return async dispatch => {
    try {
      dispatch(removeOffer());
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.delete('/offers/' + id, header);
      dispatch(removeSuccess());
      dispatch(getOffers(token));
      } catch (error) {
      dispatch(removeFail(error.message));
    };
  };
};

export const updateOffer = (offers) => {
  return {
    type: actionTypes.UPDATE_OFFER
  };
};

export const updateSuccess = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_OFFER_SUCCESS,
    error: false
  };
};

export const updateFail = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_OFFER_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const editOffer = (token, id, session, form) => {
  return async dispatch => {
    try {
      dispatch(updateOffer());
      const putData = {
        // data for put
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.put('/offers/' + id, putData, header);
      dispatch(updateSuccess());
      dispatch(getOffers(token));
      } catch (error) {
      dispatch(updateFail(error.message));
    };
  };
};
