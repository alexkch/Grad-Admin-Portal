import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

export const postReq = () => {
  return {
    type: actionTypes.AUTH_USER
  };
};

export const validSession = () => {
  return dispatch => {

  };
};

export const authSuccess = (resData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId: resData.userId,
    name: resData.name,
    token: resData.token,
    usertype: resData.usertype,
    isAdmin: resData.isAdmin
  };
};

export const authFail = (errorMsg) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: 'true',
    errorMsg : errorMsg
  };
};

export const logout = () => {
  localStorage.removeItem('session');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (email, password) => {
  return async dispatch => {
    try {
      dispatch(postReq());
      const authData = {
        email: email,
        password: password
      }
      const res = await axios.post('/auth', authData);
      localStorage.setItem('session', res.data);
      dispatch(authSuccess(res.data));

      } catch (error) {
      dispatch(authFail(error.message));
    };
  };
};
