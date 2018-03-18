import React from 'react';

import styles from './ToggleSidebar.css';

const toggleSideBar = (props) => (
    <div className={styles.Toggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggleSideBar;
