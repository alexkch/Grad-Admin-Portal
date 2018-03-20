import React, {Component} from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import Navigator from './components/navigation/Nav'

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
