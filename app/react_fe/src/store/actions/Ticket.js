import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';

export const setTickets = (tickets) => {
  return {
    type: actionTypes.SET_TICKETS,
    tickets: tickets
  };
};

export const setTicketsFail = (errorMsg) => {
  return {
    type: actionTypes.SET_TICKETS_FAIL,
    errorMsg: errorMsg
  };
};

export const getTickets = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/tickets');
      dispatch(setTickets(res.data));

    } catch (error) {
      dispatch(setTicketsFail(error.message));
    };
  };
};


export const createTicket = (token, session, form) => {
  return async dispatch => {
    try {
      //dispatch(postTicket());
      const postData = {
        created_by_id: session.userId,
        created_by: session.name,
        fields : form
      }
      const res = await axios.post('/tickets', postData);
      //dispatch(postSuccess(res.data));
      } catch (error) {
      //dispatch(postFail(error.message));
    };
  };
};
