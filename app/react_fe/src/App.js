import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.css';
import Dashboard from './containers/dashboard/Dashboard';
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1 className={classNames(styles.italic, styles.red)}>My APP</h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;
