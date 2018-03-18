import React from 'react';


const viewIssue = (props) => (
    <article className>
        <h2>Issue for {props.created_by}</h2>
        <h5>Issue ID: {props.issue_id}</h5>
        <h5>Creator ID: {props.created_by_id}</h5>
        <h5>description: {props.description}</h5>
        <h5>priority {props.priority}</h5>
        <h5>status {props.status}</h5>
    </article>
);

export default viewIssue;
