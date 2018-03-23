import React from 'react';
import sty from '../../css/bootstrap.min.css'

const navItems = () => (
    <div className={sty.collapse+ " "+ sty["navbar-collapse"]}>
        <ul className={sty["navbar-nav"]+ " " + sty["mr-auto"]}>
            <li className={sty["nav-item"]}>
                <a className={sty["nav-link"]} href={"/"} >
                    home
                </a>
            </li>
            <li className={sty["nav-item"]}>
                <a className={sty["nav-link"]} href={"/user"}>
                    user info
                </a>
            </li>
            <li className={sty["nav-item"]}>
                <a className={sty["nav-link"]} href={"/tickets"}>
                    tickets
                </a>
            </li>
            <li className={sty["nav-item"]}>
                <a className={sty["nav-link"]} href={"/issues"}>
                    issues
                </a>
            </li>
            <li className={sty["nav-item"]}>
                <a className={sty["nav-link"]} href={"offers"}>
                    offers
                </a>
            </li>
        </ul>
    </div>
);

export default navItems;
