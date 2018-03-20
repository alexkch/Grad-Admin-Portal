import React, {Component} from 'react';

import Navigator from './containers/Navigator';
import Dashboard from './containers/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My APP</h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;
