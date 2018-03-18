import React from 'react';
import Aux from '../../wrapper/Auxiliary';
import Navbar from '../ui/navigation/Navbar';
import styles from './Layout.css';

const layout = (props) => (
  <Aux>
    <Navbar />
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
