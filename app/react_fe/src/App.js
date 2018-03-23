import React, {Component} from 'react';
import Dashboard from './containers/dashboard/Dashboard';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from './store/actions/';

  // Issues
import Issues from './containers/issue/Issues';
import NewIssue from './containers/issue/NewIssue';
  //users
import NewUser from './containers/issue/NewUser';
  //tickets
import Tickets from './containers/ticket/Tickets';
import TicketCreate from './containers/ticket/TicketCreate';

class App extends Component {

  componentDidMount () {
    this.props.getSession();
  }


  render() {

    let routes;
    routes = (this.props.token) ? ( <Switch>
                          <Route path="/tickets" exact component={Tickets} />
                          <Route path="/issues" exact component={Issues} />
                          </Switch>) : <Route path="/newuser" exact component={NewUser} /><Redirect to="/" />

    return (
      <Dashboard>
        {routes}
      </Dashboard> );
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
};

// pass using props , this.props.onSetIssues
const mapDispatchToProps = dispatch => {
  return {
    getSession: () => dispatch(Actions.getSession())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
