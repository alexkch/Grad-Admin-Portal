import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import sty from '../../css/bootstrap.min.css';
import Box from '../../components/box/Box';

class User extends Component {

    render () {

      let userPanel;
      userPanel = (this.props.token) ? (<Box color="secondary" header={this.props.userId}><h5>Name: {this.props.name}</h5>
      UserType: {this.props.usertype}</Box>) :
      (<Box color="secondary" header="Login required!">Please Login or <NavLink to='/newuser' activeClassName="active">Register</NavLink> to operate</Box>)

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
