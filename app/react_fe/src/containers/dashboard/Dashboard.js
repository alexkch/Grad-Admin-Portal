import React, {Component} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Ticket from '../../containers/ticket/Ticket';
import Issues from '../issue/Issues';
import UserInfo from '../../containers/user/UserInfo';
import Aux from '../../wrapper/Auxiliary';
import sty from '../../css/bootstrap.min.css'
import ListTickets from '../../containers/ticket/DisplayTicket';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside constructor');
    }

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

    render() {
        console.log('[App.js] Inside render');
        //const Tickets = this.state.tickets.map(ticket => {
        //    return <Ticket key={ticket._id} ticket_id={ticket._id} created_by={ticket.created_by}
        //                   prof={ticket.professor} status={ticket.status}/>
        //});
        return (
          <div style={{padding: "10px"}}>
            <div className={sty["row"]}>
              <div className={sty["col-md-8"]}>
                  <section className={sty["list-group"]}>
                      <Route path="/userinfo" exact component={UserInfo} />
                      <Route path="/issues" exact component={Issues} />
                      <Route path="/offers" exact component={Offers} />
                      <Route path="/tickets" exact component={Tickets} />
                  </section>
              </div>
              <div className={sty["col-md-4"]}>
                  <section>
                      <UserInfo/>
                  </section>
              </div>
            </div>
          </div>
        );
    }
}

export default Dashboard;
