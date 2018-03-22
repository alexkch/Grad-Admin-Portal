import React, {Component} from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import Navigator from './components/navigation/Nav';
import Aux from './wrapper/Auxiliary';



class App extends Component {
  render() {
    return (
        <Aux>
          <Navigator />
          <Dashboard />
        </Aux>
    );
  }
}

export default App;
