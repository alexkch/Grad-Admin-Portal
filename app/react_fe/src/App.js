import React, {Component} from 'react';
import Dashboard from './containers/dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from './store/actions/';

  // Issues
import Issues from './containers/issue/Issues';
import NewIssue from './containers/issue/NewIssue';
  //users

  //tickets
import Tickets from './containers/ticket/Tickets';
import TicketCreate from './containers/ticket/TicketCreate';

class App extends Component {

  render() {
    return (
      <Dashboard>
        <Switch>
          <Route path="/tickets" exact component={Tickets} />
          <Route path="/issues" exact component={Issues} />
        </Switch>
      </Dashboard> );
  }
}


export default App;
