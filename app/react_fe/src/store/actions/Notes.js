import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';
import { getIssue } from './Issues';


export const setNote = (note) => {
  return {
    type: actionTypes.SET_NOTE,
    error: false,
    note: note
  };
};

export const setNoteFail = (errorMsg) => {
  return {
    type: actionTypes.SET_NOTE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getNote = (token, id) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/notes/' + id, header);
      dispatch(setNote(res.data));
    } catch (error) {
      dispatch(setNoteFail(error.message));
    };
  };
};


export const postNote = (notes) => {
  return {
    type: actionTypes.POST_NOTE
  };
};

export const postSuccess = (errorMsg) => {
  return {
    type: actionTypes.POST_NOTE_SUCCESS,
    error: false
  };
};

export const postFail = (errorMsg) => {
  return {
    type: actionTypes.POST_NOTE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const createNote = (token, issueId, session, form) => {
  return async dispatch => {
    try {
      dispatch(postNote());
      const postData = {
        created_by_id: session.userId,
        created_by: session.name,
        message: form.message.value,
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.post('/issues/' + issueId + '/notes', postData, header);
      dispatch(postSuccess());
      dispatch(getIssue(token, issueId));
      } catch (error) {
      dispatch(postFail(error.message));
    };
  };
};


export const removeNote = (notes) => {
  return {
    type: actionTypes.DELETE_NOTE
  };
};

export const removeSuccess = (errorMsg) => {
  return {
    type: actionTypes.DELETE_NOTE_SUCCESS,
    error: false
  };
};

export const removeFail = (errorMsg) => {
  return {
    type: actionTypes.DELETE_NOTE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const deleteNote = (token, id) => {
  return async dispatch => {
    try {
      dispatch(removeNote());
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.delete('/notes/' + id, header);
      dispatch(removeSuccess());
      //dispatch(getNotes(token));
      } catch (error) {
      dispatch(removeFail(error.message));
    };
  };
};

export const updateNote = (notes) => {
  return {
    type: actionTypes.UPDATE_NOTE
  };
};

export const updateSuccess = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_NOTE_SUCCESS,
    error: false
  };
};

export const updateFail = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_NOTE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const editNote = (token, id, session, form) => {
  return async dispatch => {
    try {
      dispatch(updateNote());
      const putData = {
        created_by_id: session.userId,
        created_by: session.name,
        description: form.description.value,
        priority: form.priority.value,
        status: form.status.value
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.put('/notes/' + id, putData, header);
      dispatch(updateSuccess());
      //dispatch(getNotes(token));
      } catch (error) {
      dispatch(updateFail(error.message));
    };
  };
};
