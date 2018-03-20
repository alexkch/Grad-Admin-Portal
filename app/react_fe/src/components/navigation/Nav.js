import React, {Component} from 'react';


import sty from '../../css/bootstrap.min.css';
import User from '../../containers/user/User';


class Navigator extends Component {

    render() {
        return (
            <nav
                className={sty.navbar + " " + sty["navbar-expand-lg"] + " " + sty["navbar-dark"] + " " + sty["bg-dark"]}>
                <a className={sty["navbar-brand"]} >Ticket System</a>
                <User/>

            </nav>


        );
    }
}

export default Navigator;
