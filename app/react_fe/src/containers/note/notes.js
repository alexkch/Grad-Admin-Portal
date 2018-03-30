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




    render () {



      return (
        <Container>
            <Row>
              <Col md="3">
              <Card
              created_by="guy"
              created_on="99"
              issue_id="8888"
              status="open"
              priority="high"
              btn_clr ="primary"
              header_clr="warning"
              type='issue'
              /></Col>
              <Col md="9">
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
                                <li className={styles.left}>
                                    <div className={styles.chatBody}>
                                        <div className="header">
                                            <small className="pull-right text-muted"><span className="glyphicon glyphicon-time"></span>13 mins ago</small>
                                            <strong className="pull-left primary-font">Bhaumik Patel</strong>
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
        </Container>
        );
    }
}

const mapStateToProps = state => {
  return {
      token: state.user.token,
      userId: state.user.userId,
      name: state.user.name
      //notes: state.note.notes,
      //error: state.note.error,
      //errorMsg: state.note.errorMsg
  };
};

// pass using props , this.props.onSetNotes
const mapDispatchToProps = dispatch => {
  return {
    //getNotes: (token) => dispatch(Actions.getNotes(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
