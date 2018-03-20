import React, {Component} from 'react';
import Popover from 'react-simple-popover';

import sty from '../../css/bootstrap.min.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {tab:0, open:false, login: false, username: "Userinfo"};
    }
    handleClickRegister(e) {
        this.setState({tab:1, open:true});
    }
    handleClickLogin(e) {
        this.setState({tab:2, open:true});
    }

    handleClose(e) {
        this.setState({tab:0, open:false});
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
                    <button type="button" className={sty.btn + " " + sty["btn-outline-info"]}
                            onClick={this.handleClickRegister.bind(this)}>Sign up</button>
                    <button type="button" className={sty.btn + " " + sty["btn-primary"]}
                            onClick={this.handleClickLogin.bind(this)}>Login</button>

                    <Popover
                        placement='left'
                        container={this}
                        target={this.refs.target}
                        show={this.state.open}
                        onHide={this.handleClose.bind(this)} >
                        <p>This is popover</p>
                    </Popover>
                </div>
            )
        }

    }
}

export default User;
