import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink as RouterLink } from 'react-router-dom';
import Box from '../../components/box/Box';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class User extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render () {

      let userPanel;
      userPanel = (this.props.token) ? (<Box color="secondary" header={this.props.userId}>
      <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Name: {this.props.name}
          UserType: {this.props.usertype}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar></Box>) :
      (<Box color="secondary" header="Login required!">Please Login or <RouterLink to='/newuser' activeClassName="active">Register</RouterLink> to operate</Box>)

      return ( userPanel );
    }
}

const mapStateToProps = state => {
  return {
      userId: state.user.userId,
      token: state.user.token,
      name: state.user.name,
      usertype: state.user.usertype,
      isAdmin: state.user.isAdmin,
      error: state.user.error,
      errorMsg: state.user.errorMsg
  };
};

// pass using props , this.props.onSetIssues
const mapDispatchToProps = dispatch => {
  return {
    //actionGetIssues: () => dispatch(Actions.getIssues())
  };
};


export default connect(mapStateToProps, null)(User);
