import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';

export const setTickets = (tickets) => {
  return {
    type: actionTypes.SET_TICKETS,
    error: false,
    tickets: tickets
  };
};

export const setTicketsFail = (errorMsg) => {
  return {
    type: actionTypes.SET_TICKETS_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getTickets = (token) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/tickets', header);
      dispatch(setTickets(res.data));

    } catch (error) {
      dispatch(setTicketsFail(error.message));
    };
  };
};

export const postTicket = (tickets) => {
  return {
    type: actionTypes.POST_TICKET
  };
};

export const postSuccess = (errorMsg) => {
  return {
    type: actionTypes.POST_TICKET_SUCCESS,
    error: false
  };
};

export const postFail = (errorMsg) => {
  return {
    type: actionTypes.POST_TICKET_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const createTicket = (token, session, form) => {
  return async dispatch => {
    try {
      dispatch(postTicket());
      const postData = {
        //post data
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.post('/tickets', postData, header);
      dispatch(postSuccess());
      dispatch(getTickets(token));
      } catch (error) {
      dispatch(postFail(error.message));
    };
  };
};


export const removeTicket = (tickets) => {
  return {
    type: actionTypes.DELETE_TICKET
  };
};

export const removeSuccess = (errorMsg) => {
  return {
    type: actionTypes.DELETE_TICKET_SUCCESS,
    error: false
  };
};

export const removeFail = (errorMsg) => {
  return {
    type: actionTypes.DELETE_TICKET_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const deleteTicket = (token, id) => {
  return async dispatch => {
    try {
      dispatch(removeTicket());
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.delete('/tickets/' + id, header);
      dispatch(removeSuccess());
      dispatch(getTickets(token));
      } catch (error) {
      dispatch(removeFail(error.message));
    };
  };
};

export const updateTicket = (tickets) => {
  return {
    type: actionTypes.UPDATE_TICKET
  };
};

export const updateSuccess = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_TICKET_SUCCESS,
    error: false
  };
};

export const updateFail = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_TICKET_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const editTicket = (token, id, session, form) => {
  return async dispatch => {
    try {
      dispatch(updateTicket());
      const putData = {
        //put data
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.put('/tickets/' + id, putData, header);
      dispatch(updateSuccess());
      dispatch(getTickets(token));
      } catch (error) {
      dispatch(updateFail(error.message));
    };
  };
};
