import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const setIssues = (issues) => {
  return {
    type: actionTypes.SET_ISSUES,
    issues: issues
  };
};

export const setIssuesFailed = () => {
  return {
    type: actionTypes.SET_ISSUES_FAILED
  };
};

export const getIssues = () => {
    return dispatch => {
        axios.get( '/issues' )
            .then( res => {
               dispatch(setIssues(res.data));
            } )
            .catch( error => {
                dispatch(setIssuesFailed());
            } );
    };
};
