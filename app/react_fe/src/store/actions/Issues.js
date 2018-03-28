import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';

export const setIssues = (issues) => {
  return {
    type: actionTypes.SET_ISSUES,
    error: false,
    issues: issues
  };
};

export const setIssuesFail = (errorMsg) => {
  return {
    type: actionTypes.SET_ISSUES_FAIL,
    error: true,
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

export const postIssue = (issues) => {
  return {
    type: actionTypes.POST_ISSUE
  };
};

export const postSuccess = (errorMsg) => {
  return {
    type: actionTypes.POST_ISSUE_SUCCESS,
    error: false
  };
};

export const postFail = (errorMsg) => {
  return {
    type: actionTypes.POST_ISSUE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const createIssue = (token, session, form) => {
  return async dispatch => {
    try {
      dispatch(postIssue());
      const postData = {
        created_by_id: session.userId,
        created_by: session.name,
        description: form.description.value,
        priority: form.priority.value,
        status: 'open'
      }
      console.log(postData);
      const res = await axios.post('/issues', postData);
      dispatch(postSuccess());
      dispatch(getIssues());
      } catch (error) {
      dispatch(postFail(error.message));
    };
  };
};
