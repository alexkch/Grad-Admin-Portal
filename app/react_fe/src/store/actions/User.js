import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

export const createUser = () => {
  return {
    type: actionTypes.INIT_USER
  };
};

export const createSuccess = (resData) => {
  return {
    type: actionTypes.INIT_USER_SUCCESS,
    resData: resData
  };
};

export const createFail = (errorMsg) => {
  return {
    type: actionTypes.INIT_USER_FAIL,
    error: 'true',
    errorMsg : errorMsg
  };
};

export const newUser = (form) => {
  return async dispatch => {
    try {
      dispatch(validate());
      const userData = {
        ...form,
        isAdmin: false
      }
      const res = await axios.post('/user', userData);
      dispatch(authSuccess(res.data));
      console.log(res);
      } catch (error) {
      dispatch(authFail(error.message));
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
