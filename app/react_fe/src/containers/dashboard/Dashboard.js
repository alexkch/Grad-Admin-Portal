// Config
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';

  //users
import LoginUser from "../user/LoginUser";
import LogoutUser from "../user/LogoutUser";
import User from '../user/User';

// Styles + Utils + components
import sty from '../../css/bootstrap.min.css'
import Nav from '../../components/navigation/Nav';
import Aux from '../../wrapper/Auxiliary';
import Popover from 'react-popover';
import Box from '../../components/box/Box';
import Button from '../../components/button/Button';

class Dashboard extends Component {

    state = { tab: 1, open: false };

    handleClose(e) { this.setState({open:false})};
    handleClickLogout(e) { this.setState({ tab: 0, open: false})};
    handleClickLogin(e) { this.setState({ tab: 1, open: true })};
    render() {

    let popoverContent = <div style={{width: "500px"}} ><Box header={'Log in'} color={'primary'}><LoginUser/></Box></div>;

    let logoutContent = (this.state.tab === 0) ? <LogoutUser /> : null;

    const popoverProps = {
        key : 3,
        isOpen: this.state.open,
        preferPlace: 'below',
        place: 'below',
        onOuterAction: () => this.handleClose(),
        body: popoverContent
    };
    let navButton;
    navButton = (this.props.token) ? (<div style={{position: 'absolute', right: '3%'}}>
                                      <Button type="default" clicked={this.handleClickLogout.bind(this)}>Log Out</Button></div>) :
                                      (<Popover {...popoverProps}>
                                        <div className={sty["nav-item"]} style={{position: 'absolute', right: '3%'}}>
                                        <Button type="default" clicked={this.handleClickLogin.bind(this)}>Login</Button>
                                        </div>
                                        </Popover>)

      return (
        <Aux>
          {logoutContent}
          <Nav token={this.props.token}> {navButton} </Nav>
          <div style={{padding: "10px"}} className={sty["row"]}>
            <div className={sty["col-md-8"]}>
                <section className={sty["list-group"]}>
                  {this.props.children}
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

export default connect(mapStateToProps)(Dashboard);
