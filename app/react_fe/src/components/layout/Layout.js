import React from 'react';
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer, backdrop
    <main className={styles.Content}>
      {props.children}
    </main>
    </div>
  </Aux>
);

export default layout;
