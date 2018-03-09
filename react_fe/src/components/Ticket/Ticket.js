import React from 'react';

import './Ticket.css';

const post = (props) => (
    <article className="Ticket">
        <h1>{props.description}</h1>
        <div className="Info">
            <div className="Author">{props.priority}</div>
        </div>
    </article>
);

export default post;
