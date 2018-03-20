import React, {Component} from 'react';

import sty from '../../css/bootstrap.min.css';
import LoginUser from "../User/LoginUser";
import CreateUser from "../User/CreateUser";

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {login: false, username: "Userinfo"};
    }

    render () {
        if (this.state.login) {
            return (
                <div className={sty.card + " " + sty["text-white"] + " " + sty["bg-info"] + " " + sty["mb-3"]}>
                    <div className={sty["card-header"]}>{this.state.username}</div>
                    <div className={sty["card-body"]}>

                    </div>
                </div>)

        } else {
            return (
                <div className={sty.card + " " + sty["text-white"] + " " + sty["bg-info"] + " " + sty["mb-3"]}>
                    <div className={sty["card-header"]}>Login required !</div>
                    <div className={sty["card-body"]}>
                        <CreateUser/>
                    </div>
                </div>

            );
        }
    }
}

export default UserInfo;
