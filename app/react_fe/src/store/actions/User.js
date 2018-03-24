import * as actionTypes from '../utils/actionTypes';
import { auth as Auth } from './Auth';
import axios from 'axios';

export const initUser = () => {
  return {
    type: actionTypes.INIT_USER
  };
};

export const initSuccess = () => {
  return {
    type: actionTypes.INIT_USER_SUCCESS,
    error: 'false'
  };
};

export const initFail = (errorMsg) => {
  return {
    type: actionTypes.INIT_USER_FAIL,
    error: 'true',
    errorMsg : errorMsg
  };
};

export const newUser = (form) => {
  return async dispatch => {
    try {
      dispatch(initUser());

      const userData = {
        name: form.name.value,
        password: form.password.value,
        email: form.email.value,
        usertype: form.usertype.value,
        isAdmin: "false"
      }
      const res = await axios.post('/users', userData);
      dispatch(initSuccess(res.data));
      dispatch(Auth.auth(res.data.username, res.data.password));

      } catch (error) {
      dispatch(initFail(error.message));
    };
  };
};
