import React, { Component } from 'react';

import styles from './User.css';

class User extends Component {
    render () {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className={styles.User}>
                <h1>Ticket</h1>
                <p>About...</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default User;
