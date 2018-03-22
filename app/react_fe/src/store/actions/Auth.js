import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

export const validate = () => {
  return {
    type: actionTypes.AUTH_USER
  };
};

export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: 'authData'
  };
};

export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: 'true'
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(validate());
  };
};
