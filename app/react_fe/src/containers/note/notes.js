import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
//import EditNote from './EditNote';
//import DeleteNote from './DeleteNote';
import * as Actions from '../../store/actions/';
import Modal from '../../components/modal/Modal';
import Aux from '../../utils/auxiliary';
import Pagebar from '../../components/navigation/Pagebar';
import Card from '../../components/box/Card';
import styles from './Notes.css';

class Notes extends Component {


    componentDidMount() {
      this.props.getIssue(this.props.token, this.props.match.params.id);
      console.log(this.props.match);
    }

    priorityColorHandler = (priority) => {
      switch (priority) {
        case ('urgent'): return 'danger'
        case ('high'): return 'warning'
        case ('medium'): return 'dark'
        default: return 'dark'
      }
    }

    render () {

      let issue = (this.props.issue) ? (<Card created_by={this.props.issue.created_by}
                                          created_on={new Date(this.props.issue.created_on).toDateString()}
                                          issue_id={this.props.issue._id}
                                          status={this.props.issue.status}
                                          priority={this.props.issue.priority}
                                          description={this.props.issue.description}
                                          btn_clr ={() => ((this.props.issue.status) === 'open') ? 'primary' : 'secondary'}
                                          header_clr={this.priorityColorHandler(this.props.issue.priority)}
                                          url={this.props.match.url}
                                          type='issue-notes'/>) : null;


      return (
        <Container>
            <Row>
              <Col md="4">
                {issue}
              </Col>
              <Col md="8">
                <ul className={styles.chat}>
                    <li className={styles.left}>
                        <div className={styles.chatBody}>
                            <div className="header">
                                <strong className="primary-font">Jack Sparrow</strong> <small className="pull-right text-muted">
                                    <span className="glyphicon glyphicon-time"></span>12 mins ago</small>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                dolor, quis ullamcorper ligula sodales.
                            </p>
                        </div>
                    </li>
                  </ul>
                </Col>
              </Row>
        </Container>);
    }
}

const mapStateToProps = state => {
  return {
      token: state.user.token,
      userId: state.user.userId,
      name: state.user.name,
      issue: state.issue.issue
      //notes: state.note.notes,
      //error: state.note.error,
      //errorMsg: state.note.errorMsg
  };
};

// pass using props , this.props.onSetNotes
const mapDispatchToProps = dispatch => {
  return {
    getIssue: (token, id) => dispatch(Actions.getIssue(token, id))
    //getNotes: (token) => dispatch(Actions.getNotes(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
