import React from 'react';
import styles from './Navbar.css';
import NavItems from './NavItems';

const navbar = (props) => (

  <header className={styles.Navbar}>
    <nav>
      <NavItems />
    </nav>
  </header>

);

export default navbar;
