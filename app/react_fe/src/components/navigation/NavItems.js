import React from 'react';
import styles from './NavItems.css';

const navItems = () => (
    <ul className={styles.NavItems}>
      <li className={styles.NavItem}>
        <a href="/">home</a>
      </li>
      <li className={styles.NavItem}>
        <a href="/new-issue">new issue</a>
      </li>
    </ul>
);

export default navItems;
