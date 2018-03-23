import React from 'react';
import sty from '../../css/bootstrap.min.css';
import User from '../../containers/user/User'
import CreateUser from "../../containers/user/CreateUser";
import LoginUser from "../../containers/user/LoginUser";
import NavItems from './NavItems';

const Nav = (props) => (
    <nav
        className={sty.navbar + " " + sty["navbar-expand-lg"] + " " + sty["navbar-dark"] + " " + sty["bg-dark"]}>
        <a className={sty["navbar-brand"]} >Ticket System</a>
        {props.children}
        <NavItems />
    </nav>
);


export default Nav;
