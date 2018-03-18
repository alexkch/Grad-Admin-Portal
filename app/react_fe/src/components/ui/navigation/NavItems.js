import React from 'react';
import styles from './NavItems.css';

const navItems = ( props ) => (
    <ul className={styles.NavItems}>
      <li className={styles.NavItem}>
        <a href="/">Link 1</a>
      </li>
      <li className={styles.NavItem}>
        <a href="/">Link 2</a>
      </li>
    </ul>
);

export default navItems;
