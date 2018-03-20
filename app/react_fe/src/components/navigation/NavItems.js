import React from 'react';
import styles from './NavItems.css';

const navItems = () => (
    <ul className={styles.NavItems}>
      <li className={styles.NavItem}>
        <a href="/">home</a>
      </li>
      <li className={styles.NavItem}>
        <a href="/users">user info</a>
      </li>
      <li className={styles.NavItem}>
        <a href="/tickets">tickets</a>
      </li>
      <li className={styles.NavItem}>
        <a href="/issues">issues</a>
      </li>
      <li className={styles.NavItem}>
        <a href="/offers">offers</a>
      </li>
    </ul>
);

export default navItems;
