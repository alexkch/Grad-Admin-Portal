import React from 'react';

import styles from './Ticket.css';

const post = (props) => (
    <article className={styles.Ticket}>
        <h2>Ticket for {props.prof}</h2>
        <h5>ID: {props.ticket_id}</h5>
        <div className="Info">
            <div className="Author">Status {props.status}</div>
            <h5>Created by {props.created_by}</h5>
        </div>
    </article>
);

export default post;
