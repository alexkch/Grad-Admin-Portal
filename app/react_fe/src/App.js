import React, {Component} from 'react';

import Navigator from './containers/Navigator';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div >
        <Navigator/>
        <Dashboard />
      </div>
    );
  }
}

export default App;
