import * as actionTypes from '../../utils/actionTypes';
import { auth } from './Auth';
import axios from 'axios';

const setUsers = (users) => {
  return {
    type: actionTypes.SET_USERS,
    error: false,
    users: users
  };
};

const setUsersFail = (errorMsg) => {
  return {
    type: actionTypes.SET_USERS_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getUsers = (token) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/users/all', header);
      dispatch(setUsers(res.data));

    } catch (error) {
      dispatch(setUsersFail(error.message));
    };
  };
};


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


const subscribeSuccess = () => {
  return {
    type: actionTypes.SUBSCRIBE_USER_SUCCESS,
    error: 'false'
  };
};

const subscribeFail = (errorMsg) => {
  return {
    type: actionTypes.SUBSCRIBE_USER_FAIL,
    error: 'true',
    errorMsg : errorMsg
  };
};


export const subscribeUser = (token, issueId, userId) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.post('/users/sub', {userId : userId, issueId : issueId}, header);
      dispatch(subscribeSuccess());
      } catch (error) {
      dispatch(subscribeFail(error.message));
    };
  };
};


const setUserIssues = (issues) => {
  return {
    type: actionTypes.SET_USER_ISSUES,
    error: false,
    issues: issues
  };
};


const setUserTickets = (tickets) => {
  return {
    type: actionTypes.SET_USER_TICKETS,
    error: false,
    tickets: tickets
  };
};


const setUserOffers = (offers) => {
  return {
    type: actionTypes.SET_USER_OFFERS,
    error: false,
    offers: offers
  };
};

const setUserDataFail = (errorMsg) => {
  return {
    type: actionTypes.SET_USER_DATA_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getUserData = (token) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/users/self', header);
      console.log(res.data)
      dispatch(setUserIssues(res.data));

    } catch (error) {
      dispatch(setUserDataFail(error.message));
    };
  };
};
