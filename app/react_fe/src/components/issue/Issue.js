import React from 'react';
import styles from './Issue.css';

const issue = (props) => (
  <article className={styles.Issue} onClick={props.select}>
      <h2>Issue for {props.created_by}</h2>
      <h5>priority {props.priority}</h5>
      <h5>status {props.status}</h5>
  </article>
);

export default issue;
