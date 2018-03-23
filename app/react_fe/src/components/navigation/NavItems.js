import React from 'react';
import sty from '../../css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

const navItems = (props) => (
    <div className={sty.collapse+ " " + sty["navbar-collapse"]}>
        <ul className={sty["navbar-nav"]+ " " + sty["mr-auto"]}>
            <h2 className={sty["navbar-brand"]} >Ticket System</h2>
            {(props.token) ? <li className={sty["nav-item"]}>
                              <NavLink to='/userinfo' activeClassName="active">User Info</NavLink>
                              </li> : null }
            {(props.token) ? <li className={sty["nav-item"]}>
                              <NavLink to='/issues' activeClassName="active">Issues</NavLink>
                              </li> : null }
            {(props.token) ? <li className={sty["nav-item"]}>
                              <NavLink to='/tickets' activeClassName="active">Tickets</NavLink>
                              </li> : null }
            {(props.token) ? <li className={sty["nav-item"]}>
                              <NavLink to='/offers' activeClassName="active">Offers</NavLink>
                              </li> : null }
        </ul>
    </div>
);

export default navItems;
