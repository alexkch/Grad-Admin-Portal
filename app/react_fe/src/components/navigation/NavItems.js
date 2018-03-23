import React from 'react';
import strcat from 'classnames';
import sty from '../../css/bootstrap.min.css'
import styles from './NavItems.css';
import { NavLink } from 'react-router-dom';

const navItems = (props) => (
    <div className={sty.collapse+ " " + sty["navbar-collapse"]}>
        <ul className={sty["navbar-nav"]+ " " + sty["mr-auto"]}>
            <h2 className={sty["navbar-brand"]} >Ticket System</h2>
            {(props.token) ? <li className={strcat(sty["nav-item"], styles.NavItem)}>
                              <NavLink to='/userinfo' activeClassName="active">User Info</NavLink>
                              </li> : null }
            {(props.token) ? <li className={strcat(sty["nav-item"], styles.NavItem)}>
                              <NavLink to='/issues' activeClassName="active">Issues</NavLink>
                              </li> : null }
            {(props.token) ? <li className={strcat(sty["nav-item"], styles.NavItem)}>
                              <NavLink to='/tickets' activeClassName="active">Tickets</NavLink>
                              </li> : null }
            {(props.token) ? <li className={strcat(sty["nav-item"], styles.NavItem)}>
                              <NavLink to='/offers' activeClassName="active">Offers</NavLink>
                              </li> : null }
        </ul>
    </div>
);

export default navItems;
