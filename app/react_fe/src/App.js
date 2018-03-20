import React, {Component} from 'react';

import Navigator from './containers/Navigator';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
        <div>
            <Navigator/>
            <Dashboard style={{padding: '10%'}}/>
        </div>
    )
  }
}

export default App;
