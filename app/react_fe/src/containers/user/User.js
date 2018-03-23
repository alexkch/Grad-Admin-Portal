import React, {Component} from 'react';
import Popover from 'react-popover';
import sty from '../../css/bootstrap.min.css';
import CreateUser from "./CreateUser";
import LoginUser from "./LoginUser";
import Box from '../../components/box/Box';
import Button from '../../components/button/Button';

class User extends Component {

    state = { tab: 0,
              open: false,
              login: false,
              username: "Userinfo"
            };


    handleClickRegister(e) {
        this.setState({tab:1, open:true});
    }

    handleClickLogin(e) {
        this.setState({tab:2, open:true});

    }

    handleClose(e) {
        this.setState({tab:0, open:false});
    }

    render () {
        const popoverTitle = (this.state.tab === 1) ? 'Register' : 'Log in';
        const popoverContent = (this.state.tab === 1) ?
            (<div style={{width: "500px"}} ><Box title={popoverTitle} body={<CreateUser/>} color={'info'}/></div>) :
            (<div style={{width: "500px"}} ><Box title={popoverTitle} body={<LoginUser/>} color={'primary'}/></div>);


        const popoverProps = {
            isOpen: this.state.open,
            preferPlace: 'below',
            place: 'below',
            onOuterAction: () => this.handleClose(),
            body: [popoverContent]
        };
        let navButton;
        navButton = (this.state.login) ? (<div style={{position: 'absolute', right: '3%'}}>
                                          <Button type="default">Log Out</Button>
                                          </div>) :
                                          (<Popover {...popoverProps}>
                                            <div className={sty["nav-item"]} style={{position: 'absolute', right: '3%'}}>
                                            <Button type="default" clicked={this.handleClickRegister.bind(this)}>Sign up</Button>
                                            <Button type="dark" clicked={this.handleClickLogin.bind(this)}>Login</Button>
                                            </div>
                                            </Popover>)
        return ( navButton );
    }
}

const mapStateToProps = state => {
  return {
      issues: state.issue.issues,
      error: state.issue.error,
      errorMsg: state.issue.errorMsg
  };
};

// pass using props , this.props.onSetIssues
const mapDispatchToProps = dispatch => {
  return {
    //actionGetIssues: () => dispatch(Actions.getIssues())
  };
};



export default User;
