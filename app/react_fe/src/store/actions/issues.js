import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const setIssues = (issues) => {
  return {
    redux_type: actionTypes.SET_ISSUES,
    issues: issues
  };
};

export const setIssuesFailed = () => {
  return {
    redux_type: actionTypes.SET_ISSUES_FAILED,
    issues: issues
  };
};

export const getIssues = () => {
  return dispatch => {
    try {
      const res = await axios.get('/issues');
      dispatch(setIssues(res.data));
      //this.setState({issues: res.data, error: false});

    } catch (error) {
      dispatch(setIssuesFailed());
      this.setState({error: true, errorMsg: error.message});

    };
  };
};
