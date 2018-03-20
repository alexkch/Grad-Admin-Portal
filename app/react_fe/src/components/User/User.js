import React, {Component} from 'react';

import sty from '../../css/bootstrap.min.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {login: false, username: "Userinfo"};
    }

    render () {
        if (this.state.login) {
            return (
                <div style={{position: 'absolute', right: '3%'}}>
                    <button type="button" className={sty.btn + " " + sty["btn-link"]} style={{color: '#FFFFFF'}}>
                        {this.state.username}
                    </button>

                    <button type="button" className={sty.btn + " " + sty["btn-outline-danger"]}>Log out</button>
                </div>
            );
        } else {
            return (
                <div className={sty["nav-item"]} style={{position: 'absolute', right: '3%'}}>
                    <button type="button" className={sty.btn + " " + sty["btn-outline-info"]}>Sign up</button>
                    <button type="button" className={sty.btn + " " + sty["btn-primary"]}>Login</button>
                </div>
            )
        }

    }
}

export default User;
