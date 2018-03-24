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


export const createIssue = (token, session, form) => {
  return async dispatch => {
    try {
      //dispatch(postIssue());
      const postData = {
        created_by_id: session.userId,
        created_by: session.name,
        fields : form
      }
      const res = await axios.post('/issues', postData);
      //dispatch(postSuccess(res.data));
      } catch (error) {
      //dispatch(postFail(error.message));
    };
  };
};
