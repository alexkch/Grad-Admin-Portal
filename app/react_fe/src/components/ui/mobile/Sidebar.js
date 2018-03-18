import React from 'react';

import NavItems from '../navigation/NavItems';
import styles from './Sidebar.css';
import Backdrop from '../backdrop/Backdrop';
import Aux from '../../wrapper/Auxiliary';

const sidebar = ( props ) => {
    let attachedClasses = [styles.SideBar, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideBar, styles.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sidebar;
