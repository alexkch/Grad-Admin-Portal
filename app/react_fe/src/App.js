import React, {Component} from 'react';
import Dashboard from './containers/dashboard/Dashboard';
import Navigator from './components/navigation/Nav';
import {BrowserRouter} from 'react-router-dom';
import Aux from './wrapper/Auxiliary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Aux>
          <Navigator />
          <Dashboard />
        </Aux>
      </BrowserRouter>
    );
  }
}

export default App;
