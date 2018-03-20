import React, {Component} from 'react';

import sty from '../../css/bootstrap.min.css';

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
                    <div className={sty["card-header"]}>User information</div>
                    <div className={sty["card-body"]}>
                        Login first
                    </div>
                </div>

            );
        }
    }
}

export default UserInfo;
