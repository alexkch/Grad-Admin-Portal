import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

export const initUser = () => {
  return {
    type: actionTypes.INIT_USER
  };
};

export const initSuccess = (resData) => {
  return {
    type: actionTypes.INIT_USER_SUCCESS,
    resData: resData
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
      console.log(res);
      } catch (error) {
      console.log(error.message);
      dispatch(initFail(error.message));
    };
  };
};

/*
email: {
  type: String,
  required: true,
  minlength: 5,
  maxlength: 255,
  trim: true,
  unique: true
},
password: {
  type: String,
  required: true,
  minlength: 5,
  maxlength: 1024
},
name: {
  type: String,
  required: true,
  minlength: 1,
  maxlength: 50,
  trim: true
},
usertype: {
  type: String,
  required: true,
  enum: ['faculty', 'budget_office', 'grad_office'],
  lowercase: true,
  trim: true
},
isAdmin: {
*/
