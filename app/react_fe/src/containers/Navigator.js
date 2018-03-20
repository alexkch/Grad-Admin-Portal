import React, {Component} from 'react';

import sty from '../css/bootstrap.min.css';
import User from '../components/User/User'

class Navigator extends Component {

    render() {
        return (
            <nav
                className={sty.navbar + " " + sty["navbar-expand-lg"] + " " + sty["navbar-dark"] + " " + sty["bg-dark"]}>
                <a className={sty["navbar-brand"]} href="#">Ticket System</a>
                <User/>

            </nav>


        );
    }
}

export default Navigator;