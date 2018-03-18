import React from 'react';
import Modal from '../ui/modal/Modal';
import Aux from '../../hoc/Auxiliary';
import styles from './Issue.css';

const issue = (props) => (
  <Aux>
    <article className={styles.Issue} onClick={props.click}>
        <h2>Issue for {props.created_by}</h2>
        <h5>priority {props.priority}</h5>
        <h5>status {props.status}</h5>
    </article>
    <Modal show={props.show}>
      <h2>Issue id {props.issue_id}</h2>
      <h5>created by {props.created_by}, ID: {props.created_by_id}</h5>
      <h5>status {props.status}</h5>
      <h5>priority {props.priority}</h5>
      <h5>description {props.description}</h5>
      <button onClick={props.close}>Close</button>
    </Modal>
  </Aux>
);

export default issue;
