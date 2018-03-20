import React from 'react';
import { Route, Link } from 'react-router-dom';
import styles from './NavItems.css';

const navItems = () => (
    <ul className={styles.NavItems}>
      <li className={styles.NavItem}>
        <Link to="/">home</Link>
      </li>
      <li className={styles.NavItem}>
        <Link to="/users">user info</Link>
      </li>
      <li className={styles.NavItem}>
        <Link to="/tickets">tickets</Link>
      </li>
      <li className={styles.NavItem}>
        <Link to="/issues">issues</Link>
      </li>
      <li className={styles.NavItem}>
        <Link to="/offers">offers</Link>
      </li>
    </ul>
);

export default navItems;
