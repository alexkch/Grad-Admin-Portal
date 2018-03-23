import React from 'react';
import sty from '../../css/bootstrap.min.css';
import User from '../../containers/user/User'
import NavItems from './NavItems';

const Nav = (props) => (
    <nav
        className={sty.navbar + " " + sty["navbar-expand-lg"] + " " + sty["navbar-dark"] + " " + sty["bg-dark"]}>
        {props.children}
        <NavItems token={props.token}/>
    </nav>
);


export default Nav;
