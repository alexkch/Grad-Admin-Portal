import React, { Component } from 'react';

import './User.css';

class User extends Component {
    render () {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className="User">
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default User;
