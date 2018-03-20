import React, {Component} from 'react';

import Navigator from './containers/Navigator';
import Dashboard from './containers/Dashboard/Dashboard';

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
