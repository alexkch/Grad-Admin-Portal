// Config
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';

// Containers
  //issues
import Issues from '../issue/Issues';
import NewIssue from '../issue/NewIssue';
  //users
import User from '../../containers/user/User';
import LoginUser from "../user/LoginUser";
import CreateUser from "../user/CreateUser";
  //tickets
import Tickets from '../../containers/ticket/Tickets';
import TicketCreate from '../../containers/ticket/TicketCreate';

// Styles + Utils + components
import sty from '../../css/bootstrap.min.css'
import Nav from '../../components/navigation/Nav';
import Aux from '../../wrapper/Auxiliary';
import Popover from 'react-popover';
import Box from '../../components/box/Box';
import Button from '../../components/button/Button';



class Dashboard extends Component {

    state = { tab: 0, open: false };

    handleClose(e) { this.setState({tab:0, open:false})}
    handleClickRegister(e) { this.setState({tab:1, open:true})}
    handleClickLogin(e) { this.setState({tab:2, open:true})}
    logoutHandler = (event) => this.props.Logout()
    render() {

    const popoverTitle = (this.state.tab === 1) ? 'Register' : 'Log in';
    const popoverContent = (this.state.tab === 1) ?
        (<div style={{width: "500px"}} ><Box header={popoverTitle} color={'info'}><CreateUser/></Box></div>) :
        (<div style={{width: "500px"}} ><Box header={popoverTitle} color={'primary'}><LoginUser/></Box></div>);


    const popoverProps = {
        isOpen: this.state.open,
        preferPlace: 'below',
        place: 'below',
        onOuterAction: () => this.handleClose(),
        body: [popoverContent]
    };
    let navButton;
    navButton = (this.props.token) ? (<div style={{position: 'absolute', right: '3%'}}>
                                      <Button clicked={this.logoutHandler} type="default">Log Out</Button>
                                      </div>) :
                                      (<Popover {...popoverProps}>
                                        <div className={sty["nav-item"]} style={{position: 'absolute', right: '3%'}}>
                                        <Button type="default" clicked={this.handleClickRegister.bind(this)}>Sign up</Button>
                                        <Button type="dark" clicked={this.handleClickLogin.bind(this)}>Login</Button>
                                        </div>
                                        </Popover>)

      return (
        <Aux>
          <Nav> {navButton} </Nav>
            <div style={{padding: "10px"}} className={sty["row"]}>
              <div className={sty["col-md-8"]}>
                  <section className={sty["list-group"]}>
                    <Switch>
                      <Route path="/issues" exact component={Issues} />
                      <Route path="/tickets" exact component={Tickets} />
                    </Switch>
                  </section>
              </div>
              <div className={sty["col-md-4"]}>
                  <section>
                    <Switch>
                      <Route path="/issues" exact component={NewIssue} />
                      <Route path="/" exact component={User} />
                      <Route path="/tickets" exact component={TicketCreate} />
                    </Switch>
                  </section>
              </div>
            </div>
        </Aux>
      );
  }
}
const mapStateToProps = state => {
  return {
      token : state.user.token,
      userId : state.user.userId,
      name: state.user.name,
      usertype: state.user.usertype,
      isAdmin: state.user.isAdmin
  };
};

// pass using props , this.props.onSetIssues
const mapDispatchToProps = dispatch => {
  return {
    Logout: () => dispatch(Actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
