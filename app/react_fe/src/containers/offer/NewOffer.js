import React, { Component } from 'react';

import styles from './NewOffer.css';

class UserInfo extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    render () {
        return (
            <div className= {styles.UserInfo}>
                <h1>Add a Offer</h1>
                <label>Offer</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Description</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button>Add Offer</button>
            </div>
        );
    }
}

export default UserInfo;
