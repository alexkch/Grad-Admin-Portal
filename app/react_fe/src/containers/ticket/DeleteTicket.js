import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class DeleteTicket extends Component {
    componentDidMount () {
      console.log(this.props.match.params.id);
      this.props.deleteTicket(this.props.token, this.props.match.params.id);
    }

    render () {
        return <Redirect to="/tickets"/>;
    }
}

const mapStateToProps = state => {
  return {
      token: state.user.token,
      error: state.ticket.error,
      errorMsg: state.ticket.errorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTicket: (token, id) => dispatch(Actions.deleteTicket(token, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTicket);
