import * as actionTypes from '../../utils/actionTypes';
import { auth } from './Auth';
import axios from 'axios';

const initUser = () => {
  return {
    type: actionTypes.INIT_USER
  };
};

const initSuccess = () => {
  return {
    type: actionTypes.INIT_USER_SUCCESS,
    error: 'false'
  };
};

const initFail = (errorMsg) => {
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
      await axios.post('/users', userData);
      dispatch(initSuccess());
      dispatch(auth(form.email.value, form.password.value));

      } catch (error) {
      dispatch(initFail(error.message));
    };
  };
};
