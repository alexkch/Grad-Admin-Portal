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
import LoginUser from "../user/LoginUser";
import CreateUser from "../user/CreateUser";
import User from '../user/User';
  //tickets
import Tickets from '../ticket/Tickets';
import TicketCreate from '../ticket/TicketCreate';

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
    render() {

    const popoverTitle = (this.state.tab === 1) ? 'Register' : 'Log in';
    const popoverContent = (this.state.tab === 1) ?
        (<div style={{width: "500px"}} ><Box header={popoverTitle} color={'info'}><CreateUser/></Box></div>) :
        (<div style={{width: "500px"}} ><Box header={popoverTitle} color={'primary'}><LoginUser/></Box></div>);


    const popoverProps = {
        key : 1,
        isOpen: this.state.open,
        preferPlace: 'below',
        place: 'below',
        onOuterAction: () => this.handleClose(),
        body: [popoverContent]
    };
    let navButton;
    navButton = (this.props.token) ? (<div style={{position: 'absolute', right: '3%'}}>
                                      <Button type="default"><a href={"/logout"}>Log Out</a></Button>
                                      </div>) :
                                      (<Popover {...popoverProps}>
                                        <div className={sty["nav-item"]} style={{position: 'absolute', right: '3%'}}>
                                        <Button type="default" clicked={this.handleClickRegister.bind(this)}>Sign up</Button>
                                        <Button type="dark" clicked={this.handleClickLogin.bind(this)}>Login</Button>
                                        </div>
                                        </Popover>)

      return (
        <Aux>
          <Nav token={this.props.token}> {navButton} </Nav>
            <div style={{padding: "10px"}} className={sty["row"]}>
              <div className={sty["col-md-8"]}>
                  <section className={sty["list-group"]}>
                    <Switch>
                      <Route path="/tickets" component={Tickets} />
                      <Route path="/issues" component={Issues} />
                    </Switch>
                  </section>
              </div>
              <div className={sty["col-md-4"]}>
                  <section>
                    <User />
                  </section>
              </div>
            </div>
        </Aux>
      );
  }
}
const mapStateToProps = state => {
  return {
      token : state.user.token
  };
};

// pass using props , this.props.onSetIssues
const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, null)(Dashboard);
