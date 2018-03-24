import React from 'react';
import strcat from 'classnames';
import sty from '../../css/bootstrap.min.css'
import styles from './NavItems.css';
import { NavLink } from 'react-router-dom';

const navItems = (props) => (
    <div className={sty.collapse+ " " + sty["navbar-collapse"]}>
    <h5 style = {{padding: "0px 0px 0px 30px"}} className={sty["navbar-brand"]}>FAST Ticket System</h5>
        <ul className={sty["navbar-nav"]+ " " + sty["mr-auto"]}>
            {(props.token) ? <li className={strcat(sty["nav-item"], styles.NavItem)}>
                              <NavLink to='/issues/new' activeClassName="active">New Issue</NavLink>
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
