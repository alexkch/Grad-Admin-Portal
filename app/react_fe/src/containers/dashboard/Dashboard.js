import React, {Component} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Ticket from '../../containers/ticket/Ticket';
import Issues from '../../containers/issue/Issues';
import UserInfo from '../../containers/user/UserInfo';
import Aux from '../../wrapper/Auxiliary';
import styles from './Dashboard.css';
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

    async componentWillMount() {
        console.log('[App.js] Inside component will mount');
    };

    async componentDidMount() {
        console.log('[App.js] Inside component did mount');
        const res = await axios.get('http://localhost:4000/api/tickets')
        console.log(res);
        this.setState({tickets: res.data});

    };

    render() {
        console.log('[App.js] Inside render');
        //const Tickets = this.state.tickets.map(ticket => {
        //    return <Ticket key={ticket._id} ticket_id={ticket._id} created_by={ticket.created_by}
        //                   prof={ticket.professor} status={ticket.status}/>
        //});
	const Tickets = <ListTickets tickets={this.state.tickets} />;
        return (
          <Aux>
            <div style={{margin: '3%'}}>
                <div style={{width: "70%", position: 'absolute', left: "3%"}}>
                    <section className={sty["list-group"]}>
                        <Route path='/issues' exact Component={Issues} />
                        {Tickets}
                    </section>
                </div>
                <div style={{width: "30%", position: 'absolute', right: "3%"}}>
                    <section>
                        <UserInfo/>
                    </section>
                </div>
            </div>
          </Aux>
        );
    }
}

export default Dashboard;
