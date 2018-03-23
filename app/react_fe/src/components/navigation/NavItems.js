import React from 'react';
import sty from '../../css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

const navItems = (props) => (
    <div className={sty.collapse+ " " + sty["navbar-collapse"]}>
        <ul className={sty["navbar-nav"]+ " " + sty["mr-auto"]}>
            {(props.token) ? <li className={sty["nav-item"]}>
                              <NavLink to='userinfo'>User Info</NavLink>
                              </li> : null }
            {(props.token) ? <li className={sty["nav-item"]}>
                              <NavLink to='/issues'>Issues</a> : null
                              </li> : null }
            {(props.token) ? <li className={sty["nav-item"]}>
                              <NavLink to='tickets'>Tickets</NavLink>
                              </li> : null }
            {(props.token) ? <li className={sty["nav-item"]}>
                              <NavLink to='offers'>Offers</NavLink>
                              </li> : null }
        </ul>
    </div>
);

export default navItems;
