import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class LogoutUser extends Component {
    componentDidMount () {
        this.props.Logout();
    }

    render () {
        return <Redirect to="/issues"/>;
    }
}

const mapStateToProps = state => {
  return {
      token: state.user.token,
      userId: state.user.userId,
      name: state.user.name,
      error: state.issue.error,
      errorMsg: state.issue.errorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteIssue: (token, issue_id) => dispatch(Actions.deleteIssue(token, issue_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewIssue);
