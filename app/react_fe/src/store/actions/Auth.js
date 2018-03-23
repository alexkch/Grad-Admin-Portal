import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

export const validate = () => {
  return {
    type: actionTypes.AUTH_USER
  };
};

export const authSuccess = (resData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: resData
  };
};

export const authFail = (errorMsg) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: 'true',
    errorMsg : errorMsg
  };
};

export const auth = (email, password) => {
  return async dispatch => {
    try {
      dispatch(validate());
      const authData = {
        email: email,
        password: password
      }
      const res = await axios.post('/auth', authData);
      dispatch(authSuccess(res.data));
      console.log(res);
      } catch (error) {
      dispatch(authFail(error.message));
    };
  };
};
