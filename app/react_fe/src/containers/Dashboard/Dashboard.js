// Config
import React, {Component} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/';

  //users
import LoginUser from "../user/LoginUser";
import LogoutUser from "../user/LogoutUser";
import User from '../user/User';
import NewIssue from '../issue/NewIssue';
// Styles + Utils + components
import { Container, Row, Col } from 'reactstrap';
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
    navButton = (this.props.token) ? (<Button type="default" clicked={this.handleClickLogout.bind(this)}>Log Out</Button>)
                                    :(<Popover {...popoverProps}>
                                      <Button type="default" clicked={this.handleClickLogin.bind(this)}>Login</Button>
                                      </Popover>)

      return (
        <Aux>
        <Nav token={this.props.token}> {navButton} </Nav>
        {logoutContent}
        <Container fluid>
          <Row>
            <Col sm="7" md="7">
                  {this.props.children}
            </Col>
            <Col sm="5" md="5">
              <section>
                <User />
              </section>
                <Switch>
                  <Route path="/issues/new" exact component={NewIssue} />
                </Switch>
            </Col>
          </Row>
        </Container>
      </Aux>
      );
  }
}
const mapStateToProps = state => {
  return {
      token : state.user.token
  };
};



export default connect(mapStateToProps, null)(Dashboard);
