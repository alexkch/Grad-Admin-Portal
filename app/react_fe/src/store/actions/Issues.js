import * as actionTypes from '../utils/actionTypes';
import axios from 'axios';

export const setIssues = (issues) => {
  return {
    type: actionTypes.SET_ISSUES,
    issues: issues
  };
};

export const setIssuesFailed = (errorMsg) => {
  return {
    type: actionTypes.SET_ISSUES_FAILED,
    errorMsg: errorMsg
  };
};

export const getIssues = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/issues');
      dispatch(setIssues(res.data));

    } catch (error) {
      dispatch(setIssuesFailed(error.message));
    };
  };
};
