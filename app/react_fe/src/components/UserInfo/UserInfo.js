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
                <div className={sty.card + " " + sty["text-white"] + " " + sty["bg-dark"] + " " + sty["mb-3"]}>
                    <div className={sty["card-header"]}>{this.state.username}</div>
                    <div className={sty["card-body"]}>

                    </div>
                </div>)

        } else {
            return (
                <div className={sty.card + " " + sty["text-black"] + " " + sty["bg-secondary"] + " " + sty["mb-3"]}>
                    <div className={sty["card-header"]}>Login required !</div>
                    <div className={sty["card-body"]}>
                        Please login to operate.
                    </div>
                </div>

            );
        }
    }
}

export default UserInfo;
