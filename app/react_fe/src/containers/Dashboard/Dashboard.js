import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Issues from '../issue/Issues';
import IssueForm from '../issue/NewIssue';
import UserInfo from '../../containers/user/UserInfo';
import sty from '../../css/bootstrap.min.css'
import Tickets from '../../containers/ticket/Tickets';
import TicketCreate from '../../containers/ticket/TicketCreate';


class Dashboard extends Component {

    state = {
        //tickets: []
        // Hardcoded for testing
        tickets: [{
            _id: "2143135",
            professor_id: "3124714",
            professor: "John W",
            status: "good",
            created_by: "prof creater"
        }]
    };

    handleClose(e) { this.setState({tab:0, open:false})}
    handleClickRegister(e) { this.setState({tab:1, open:true})}
    handleClickLogin(e) { this.setState({tab:2, open:true})}

    render() {

        return (
          <div style={{padding: "10px"}}>
            <div className={sty["row"]}>
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
          </div>
        );
    }
}

export default Dashboard;
