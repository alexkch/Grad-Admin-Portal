// Config
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
  //issues
import Issues from '../issue/Issues';
import IssueForm from '../issue/NewIssue';
  //users
import UserInfo from '../../containers/user/UserInfo';
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

    state = { tab: 0,
            open: false,
            login: false,
            username: "Userinfo"
          };

    handleClose(e) { this.setState({tab:0, open:false})}
    handleClickRegister(e) { this.setState({tab:1, open:true})}
    handleClickLogin(e) { this.setState({tab:2, open:true})}

    render() {


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
                        <Route path="/issues" exact component={IssueForm} />
                        <Route path="/" exact component={UserInfo} />
                        <Route path="/tickets" exact component={TicketCreate} />
                      </Switch>
                    </section>
                </div>
              </div>
          </Aux>
        );
    }
}

export default Dashboard;
