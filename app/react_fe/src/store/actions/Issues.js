import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';

const setIssues = (issues) => {
  return {
    type: actionTypes.SET_ISSUES,
    error: false,
    issues: issues
  };
};

const setIssuesFail = (errorMsg) => {
  return {
    type: actionTypes.SET_ISSUES_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getIssues = (token) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/issues', header);
      dispatch(setIssues(res.data));

    } catch (error) {
      dispatch(setIssuesFail(error.message));
    };
  };
};

const setIssue = (issue) => {
  return {
    type: actionTypes.SET_ISSUE,
    error: false,
    issue: issue
  };
};

const setIssueFail = (errorMsg) => {
  return {
    type: actionTypes.SET_ISSUE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getIssue = (token, id) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/issues/' + id, header);
      dispatch(setIssue(res.data));
    } catch (error) {
      dispatch(setIssueFail(error.message));
    };
  };
};


const postIssue = () => {
  return {
    type: actionTypes.POST_ISSUE
  };
};

const postSuccess = () => {
  return {
    type: actionTypes.POST_ISSUE_SUCCESS,
    error: false
  };
};

const postFail = (errorMsg) => {
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
        title: form.title.value,
        description: form.description.value,
        priority: form.priority.value,
        status: 'open'
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.post('/issues', postData, header);
      dispatch(postSuccess());
      dispatch(getIssues(token));
      } catch (error) {
      dispatch(postFail(error.message));
    };
  };
};

const removeIssue = () => {
  return {
    type: actionTypes.DELETE_ISSUE
  };
};

const removeSuccess = () => {
  return {
    type: actionTypes.DELETE_ISSUE_SUCCESS,
    error: false
  };
};

const removeFail = (errorMsg) => {
  return {
    type: actionTypes.DELETE_ISSUE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const deleteIssue = (token, id) => {
  return async dispatch => {
    try {
      dispatch(removeIssue());
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.delete('/issues/' + id, header);
      dispatch(removeSuccess());
      dispatch(getIssues(token));
      } catch (error) {
      dispatch(removeFail(error.message));
    };
  };
};

const updateIssue = () => {
  return {
    type: actionTypes.UPDATE_ISSUE
  };
};

const updateSuccess = () => {
  return {
    type: actionTypes.UPDATE_ISSUE_SUCCESS,
    error: false
  };
};

const updateFail = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_ISSUE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const editIssue = (token, id, session, form) => {
  return async dispatch => {
    try {
      dispatch(updateIssue());
      const putData = {
        created_by_id: session.userId,
        created_by: session.name,
        title: form.title.value,
        description: form.description.value,
        priority: form.priority.value,
        status: form.status.value
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.put('/issues/' + id, putData, header);
      dispatch(updateSuccess());
      dispatch(getIssues(token));
      dispatch(getIssue(token, id));
      } catch (error) {
      dispatch(updateFail(error.message));
    };
  };
};

const subscribeSuccess = () => {
  return {
    type: actionTypes.SUBSCRIBE_ISSUE_SUCCESS,
    error: false
  };
};

const subscribeFail = (errorMsg) => {
  return {
    type: actionTypes.SUBSCRIBE_ISSUE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const subscribeIssue = (token, id, userId) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.post('/issues/' + id + '/sub', {userId : userId}, header);
      dispatch(subscribeSuccess());
      dispatch(getIssue(id));
      } catch (error) {
      dispatch(subscribeFail(error.message));
    };
  };
};
