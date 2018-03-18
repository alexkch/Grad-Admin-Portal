import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import classNames from 'classnames';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.center}>
          <h1 className={classNames(styles.italic, styles.red)}>My APP</h1>
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
