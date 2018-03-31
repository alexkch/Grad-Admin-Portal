import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class DeleteNote extends Component {

    state = { prev_urlId: null }

    componentDidMount () {
      this.props.deleteNote(this.props.token, this.props.match.params.id, this.props.match.params.notesId);
      this.setState({ prev_urlId : this.props.match.params.id });
    }

    render () {
        return <Redirect to={"/issues/" + this.state.prev_urlId + "/notes"} />;
    }
}

const mapStateToProps = state => {
  return {
      token: state.user.token,
      error: state.issue.error,
      errorMsg: state.issue.errorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: (token, issueId, notesId) => dispatch(Actions.deleteNote(token, issueId, notesId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteNote);
