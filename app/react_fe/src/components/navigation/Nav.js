import React from 'react';
import sty from '../../css/bootstrap.min.css';
import strcat from 'classnames';
import NavItems from './NavItems';


const Nav = (props) => (
    <nav style={{padding : "0px"}}
        className={strcat(sty.navbar, sty["navbar-expand-lg"], sty["navbar-dark"], sty["bg-dark"])}>
        {props.children}
        <NavItems token={props.token}/>
    </nav>
);


export default Nav;
