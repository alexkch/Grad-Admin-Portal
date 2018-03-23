import React from 'react';
import sty from '../../css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

const navItems = (props) => (
    <div className={sty.collapse+ " " + sty["navbar-collapse"]}>
        <ul className={sty["navbar-nav"]+ " " + sty["mr-auto"]}>
            <li className={sty["nav-item"]}>
              <NavLink to='userinfo'>User Info</NavLink>
              </li>
            <li className={sty["nav-item"]}>
              <a href='/issues'>Issues</a>
              </li>
            <li className={sty["nav-item"]}>
              <NavLink
                  to='tickets'>Tickets</NavLink>
              </li>
            <li className={sty["nav-item"]}>
              <NavLink
                  to='offers'>Offers</NavLink>
              </li>

        </ul>
    </div>
);

export default navItems;
