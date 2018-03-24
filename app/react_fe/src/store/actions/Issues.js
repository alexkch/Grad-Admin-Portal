import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

export const setIssues = (issues) => {
  return {
    type: actionTypes.SET_ISSUES,
    issues: issues
  };
};

export const setIssuesFail = (errorMsg) => {
  return {
    type: actionTypes.SET_ISSUES_FAIL,
    errorMsg: errorMsg
  };
};

export const getIssues = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/issues');
      dispatch(setIssues(res.data));

    } catch (error) {
      dispatch(setIssuesFail(error.message));
    };
  };
};
