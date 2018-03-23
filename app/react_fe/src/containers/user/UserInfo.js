import React, {Component} from 'react';
import sty from '../../css/bootstrap.min.css';
import Box from '../../components/box/Box';

class UserInfo extends Component {

    state = {
      login: false,
      username: "Userinfo"
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
                <Box color="secondary" header="Login required!">Please login to operate</Box>
            );
        }
    }
}

export default UserInfo;
