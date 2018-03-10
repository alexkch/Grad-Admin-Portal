import React, { Component } from 'react';
import styles from './App.css';

import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Dashboard />
      </div>
    );
  }
}

export default App;
