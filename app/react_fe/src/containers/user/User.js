import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Box from '../../components/box/Box';
import { Collapse,
         Navbar as Userbar,
         NavbarToggler as UserbarToggler,
         NavbarBrand as UserbarBrand,
         Nav as Menu,
         NavItem as MenuItem } from 'reactstrap';

import Aux from '../../utils/auxiliary';
class User extends Component {

  state = {
    collapsed: true
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render () {

      let userPanel;
      userPanel = (this.props.token) ? (<Box color="secondary" header={this.props.name}>
      <Userbar color="faded" light>
          <UserbarBrand href="/" className="mr-auto"> <h4> UserType: {this.props.usertype} </h4> </UserbarBrand>
          <UserbarToggler onClick={this.toggleNavbar.bind(this)} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Menu navbar>
              <MenuItem><h5>{this.props.userId}</h5></MenuItem>
              <MenuItem>
                <NavLink to='/issues/new'>New Issue</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to='/link199'>Link 2</NavLink>
              </MenuItem>
            </Menu>
          </Collapse>
        </Userbar></Box>) :
      (<Box color="secondary" header="Login required!">Please Login or <NavLink to='/newuser' activeClassName="active">Register</NavLink> to operate</Box>)

      return ( <Aux>{userPanel}</Aux> );
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



export default connect(mapStateToProps)(User);
