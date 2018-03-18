import React from 'react';
import Modal from '../ui/modal/Modal';
import Aux from '../../hoc/Auxiliary';

const displayIssue = (props) => (
    <Aux>
    <Modal show={props.show}>
        <h2>Issue for {props.created_by}</h2>
        <h5>Issue ID: {props.issue_id}</h5>
        <h5>Creator ID: {props.created_by_id}</h5>
        <h5>description: {props.description}</h5>
        <h5>priority {props.priority}</h5>
        <h5>status {props.status}</h5>
        <button onClick={props.close}>Close</button>
    </Modal>
    </Aux>
);

export default displayIssue;
